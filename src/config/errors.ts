import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  NotFoundException,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';

import { ServerMessages } from '.';

export function forbiddenError(message?: string) {
  throw new ForbiddenException({
    message: message || ServerMessages.FORBIDDEN,
    error: message || ServerMessages.FORBIDDEN,
    statusCode: HttpStatus.FORBIDDEN,
  });
}

export function unprocessableEntity(message?: string) {
  throw new UnprocessableEntityException({
    message: message || ServerMessages.UNPROCESSABLE_ENTITY,
    error: message || ServerMessages.UNPROCESSABLE_ENTITY,
    statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
  });
}

export function notFoundError(message?: string) {
  throw new NotFoundException({
    message: message || ServerMessages.NOT_FOUND,
    error: message || ServerMessages.NOT_FOUND,
    statusCode: HttpStatus.NOT_FOUND,
  });
}

export function unauthorizedError() {
  throw new UnauthorizedException();
}

export function expiredTokenError() {
  throw new HttpException('TOKEN_EXPIRED', HttpStatus.UNAUTHORIZED);
}

export function mailerError(e) {
  throw new HttpException(
    `Mailer error: ${JSON.stringify(e)}`,
    HttpStatus.UNPROCESSABLE_ENTITY,
  );
}
