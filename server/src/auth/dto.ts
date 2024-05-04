import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class SignUpBodyDTO {
  @ApiProperty({
    example: 'test@mail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'password',
  })
  @IsNotEmpty()
  password: string;
}

export class SignInBodyDTO {
  @ApiProperty({
    example: 'test@mail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'password',
  })
  @IsNotEmpty()
  password: string;
}

export class GetSessionDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: number;

  @ApiProperty()
  iat: number;

  @ApiProperty()
  exp: number;
}

