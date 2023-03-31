import { HttpStatus } from '@nestjs/common';

export enum UserRoles {
  admin = 'admin',
  worker = 'worker',
  departmentLeader = 'department_leader',
}

export enum Envs {
  development = 'development',
  production = 'production',
  staging = 'staging',
}

export enum ElementType {
  wall = 'wall',
  door = 'door',
  block = 'block',
}

export enum ServerMessages {
  OK = 'OK',
  CREATED = 'CREATED',
  USER_ALREADY_EXIST = 'USER_ALREADY_EXIST',
  ORGANIZATION_ALREADY_EXIST = 'ORGANIZATION_ALREADY_EXIST',
  INVALID_DATA = 'INVALID_DATA',
  UNAUTHORIZED = 'UNAUTHORIZED',
  CONFLICT = 'CONFLICT',
  FORBIDDEN = 'FORBIDDEN',
  BAD_REQUEST = 'BAD_REQUEST',
  EMAIL_ALREADY_EXIST = 'EMAIL_ALREADY_EXIST',
  INVALID_CODE = 'INVALID_CODE',
  EMAIL_ALREADY_SENT = 'EMAIL_ALREADY_SENT',
  RECORD_NOT_FOUND = 'RECORD_NOT_FOUND',
  NOT_FOUND = 'NOT_FOUND',
  UNPROCESSABLE_ENTITY = 'UNPROCESSABLE_ENTITY',
  ELEMENT_ALREADY_EXIST = 'ELEMENT_ALREADY_EXIST',
}

export const serverResponseOK = {
  success: true,
  message: ServerMessages.OK,
  statusCode: HttpStatus.OK,
};

export const serverResponseLoginError = {
  success: false,
  message: ServerMessages.OK,
  statusCode: HttpStatus.OK,
  error: {
    status: true,
    message: ServerMessages.UNAUTHORIZED,
  },
};
