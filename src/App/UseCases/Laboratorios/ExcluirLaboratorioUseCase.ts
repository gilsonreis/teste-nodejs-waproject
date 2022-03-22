import {inject, injectable} from "tsyringe";
import LaboratoriosRepository from "@Repositories/LaboratoriosRepository";
import ILaboratoriosRepository from "@Repositories/Contracts/ILaboratoriosRepository";
import {UpdateResult} from "typeorm";

@injectable()
class ExcluirLaboratorioUseCase {
  
  constructor(
    @inject(LaboratoriosRepository)
    private laboratorioRepository: ILaboratoriosRepository
  
  ) {
  }
  
  public async delete(id): Promise<UpdateResult> {
    return await this.laboratorioRepository.destroy(id);
  }
}

export default ExcluirLaboratorioUseCase;
