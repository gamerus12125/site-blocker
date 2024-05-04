import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { PasswordService } from './password.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private passwordService: PasswordService, private jwtService: JwtService) {}

    async signIn(email: string, password: string) {
        const user = await this.usersService.findByEmail(email)
        if (!user) {
            throw new UnauthorizedException({type: "user-not-exists"})
        }

        const hash = this.passwordService.getHash(password, user.salt)

        if (user.hash !== hash) {
            throw new UnauthorizedException({type: "invalid password"})
        }

        const token = await this.jwtService.signAsync({id: user.id, email: user.email})
        return {token}
    }

    async signUp(email: string, password: string) {
        const user = await this.usersService.findByEmail(email)
        if (user) {
            throw new BadRequestException({type: "email-exists"})
        }

        const salt = this.passwordService.getSalt()
        const hash = this.passwordService.getHash(password, salt)

        const newUser = await this.usersService.create(email, hash, salt)

        const token = await this.jwtService.signAsync({id: newUser.id, email: newUser.email})
        return {token}
    }
}
