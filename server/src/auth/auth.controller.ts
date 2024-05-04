import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { GetSessionDTO, SignInBodyDTO, SignUpBodyDTO } from './dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { CookieService } from './cookie.service';
import { AuthGuard } from './auth.guard';
import { Session } from './session-info.decoratror';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
  ) {}
  @Post('sign-in')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() body: SignInBodyDTO, @Res() res: Response) {
    const { token } = await this.authService.signIn(body.email, body.password);

    this.cookieService.setToken(res, token);
  }

  @Post('sign-up')
  @ApiCreatedResponse()
  async signUp(
    @Body() body: SignUpBodyDTO,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { token } = await this.authService.signUp(body.email, body.password);

    this.cookieService.setToken(res, token);
  }

  @Post('sign-out')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  signOut(@Res({ passthrough: true }) res: Response) {
    this.cookieService.removeToken(res)
  }

  @Get('session')
  @ApiOkResponse({
    type: GetSessionDTO,
  })
  @UseGuards(AuthGuard)
  getSession(@Session() session: GetSessionDTO) {
    return session;
  }
}
