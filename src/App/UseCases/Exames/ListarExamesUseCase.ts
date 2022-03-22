import {inject, injectable} from "tsyringe";
import ExamesRepository from "@Repositories/ExamesRepository";
import IExamesRepository from "@Repositories/Contracts/IExamesRepository";

@injectable()
class ListarExamesUseCase {
  
  constructor(
    @inject(ExamesRepository)
    private exameRepository: IExamesRepository
    
  ) {
  }
  
  public async listar(search?) {
    return await this.exameRepository.getAll(search);
  }
}

export default ListarExamesUseCase;
