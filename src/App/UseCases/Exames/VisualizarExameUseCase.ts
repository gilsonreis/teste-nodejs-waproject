import {inject, injectable} from "tsyringe";
import ExamesRepository from "@Repositories/ExamesRepository";
import IExamesRepository from "@Repositories/Contracts/IExamesRepository";
import {Exame} from "@Entities/Exame";

@injectable()
class VisualizarExameUseCase {
  
  constructor(
    @inject(ExamesRepository)
    private exameRepository: IExamesRepository
  
  ) {
  }
  
  public async view(id): Promise<Exame> {
    return await this.exameRepository.getById(id);
  }
}

export default VisualizarExameUseCase;
