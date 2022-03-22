import {inject, injectable} from "tsyringe";
import ExamesRepository from "@Repositories/ExamesRepository";
import IExamesRepository from "@Repositories/Contracts/IExamesRepository";
import {UpdateResult} from "typeorm";

@injectable()
class ExcluirExameUseCase {
  
  constructor(
    @inject(ExamesRepository)
    private exameRepository: IExamesRepository
  
  ) {
  }
  
  public async delete(id): Promise<UpdateResult> {
    return await this.exameRepository.destroy(id);
  }
}

export default ExcluirExameUseCase;
