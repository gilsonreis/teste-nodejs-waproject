import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { getCustomRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import {container} from "tsyringe";
import LoginUseCase from "@useCases/Auth/LoginUseCase";


class LoginAction {
  public async handle(request: Request, response: Response) {
    const loginUseCase = container.resolve(LoginUseCase)
  
    const {
      email,
      password
    } = request.body;
    
    const authResult = await loginUseCase.doAuthenticate(email, password);
    return response.status(200).json(authResult);
  }
  
}

export default new LoginAction();
