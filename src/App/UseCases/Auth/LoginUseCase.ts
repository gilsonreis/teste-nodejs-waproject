import {inject, injectable} from "tsyringe";
import {compare} from "bcryptjs";
import {sign} from "jsonwebtoken";
import jwtConfig from "../../../Config/JwtConfig"
import UserRepository from "@Repositories/UserRepository";
import IUserRepository from "@Repositories/Contracts/IUserRepository";


@injectable()
class LoginUseCase {
  
  constructor(
    @inject(UserRepository)
    private userRepository: IUserRepository
  ) {}
  
  public async doAuthenticate(email: string, password: string) {
    
    const user = await this.userRepository.PegarPorEmail(email);
  
    if (typeof user === 'undefined') {
      return {
        statusCode: 401,
        status: "fail",
        data: {
          title: "Usuário não encontrado."
        }
      }
    }
  
    const passwordIsValid = await compare(password, user.password);
  
    if (!passwordIsValid) {
      return {
        statusCode: 401,
        status: "fail",
        data: {
          title: "Usuário não encontrado."
        }
      }
    }
  
    delete user.password;
    delete user.created_at;
    delete user.updated_at;
  
    const token = sign({user},
      jwtConfig.secret, {
        expiresIn: jwtConfig.expiresIn
      }
    );
  
  
  
    return {
      statusCode: 200,
      status: 'success',
      data: {
        user,
        token
      }
    }
  }
}

export default LoginUseCase;
