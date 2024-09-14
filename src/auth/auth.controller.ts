import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor() {}

  @MessagePattern('auth.register.user')
  registerUser() {
    return 'Register user.';
  }

  @MessagePattern('auth.login.user')
  loginUser() {
    return 'Login user.';
  }

  @MessagePattern('auth.verify.user')
  verifyToken() {
    return 'Verify user.';
  }
}
