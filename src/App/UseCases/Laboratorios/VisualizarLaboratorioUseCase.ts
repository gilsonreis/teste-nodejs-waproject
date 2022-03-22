import {inject, injectable} from "tsyringe";
import LaboratoriosRepository from "@Repositories/LaboratoriosRepository";
import ILaboratoriosRepository from "@Repositories/Contracts/ILaboratoriosRepository";
import {Laboratorio} from "@Entities/Laboratorio";

@injectable()
class VisualizarLaboratorioUseCase {
  
  constructor(
    @inject(LaboratoriosRepository)
    private laboratorioRepository: ILaboratoriosRepository
  
  ) {
  }
  
  public async view(id): Promise<Laboratorio> {
    return await this.laboratorioRepository.getById(id);
  }
}

export default VisualizarLaboratorioUseCase;
