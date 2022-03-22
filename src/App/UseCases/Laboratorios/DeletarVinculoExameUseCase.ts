import {inject, injectable} from "tsyringe";
import LaboratoriosRepository from "@Repositories/LaboratoriosRepository";
import ILaboratoriosRepository from "@Repositories/Contracts/ILaboratoriosRepository";
import ExamesRepository from "@Repositories/ExamesRepository";
import IExamesRepository from "@Repositories/Contracts/IExamesRepository";

@injectable()
class DeletarVinculoExameUseCase {
  
  constructor(
    @inject(LaboratoriosRepository)
    private laboratorioRepository: ILaboratoriosRepository,
    @inject(ExamesRepository)
    private exameRepository: IExamesRepository
  ) {
  }
  
  public async deletarExame(idLaboratorio: string | number, idExame: string | number) {
  
    const existeLaboratorio = await this.laboratorioRepository.getById(idLaboratorio);
    if (!existeLaboratorio) {
      throw new Error("Laboratório informado não está cadastrado no sistema")
    }
  
    const existeExame = await this.exameRepository.getById(idExame);
    if (!existeExame) {
      throw new Error("Exame informado não está cadastrado no sistema")
    }
    
    return this.laboratorioRepository.deletarExameLaboratorio(idLaboratorio, idExame);
  }
}

export default DeletarVinculoExameUseCase;
