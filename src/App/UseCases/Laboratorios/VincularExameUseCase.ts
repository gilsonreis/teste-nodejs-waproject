import {inject, injectable} from "tsyringe";
import LaboratoriosRepository from "@Repositories/LaboratoriosRepository";
import ILaboratoriosRepository from "@Repositories/Contracts/ILaboratoriosRepository";
import ExamesRepository from "@Repositories/ExamesRepository";
import IExamesRepository from "@Repositories/Contracts/IExamesRepository";

@injectable()
class VincularExameUseCase {
  
  constructor(
    @inject(LaboratoriosRepository)
    private laboratorioRepository: ILaboratoriosRepository,
    @inject(ExamesRepository)
    private exameRepository: IExamesRepository
  
  ) {
  }
  
  public async vincularExame(idLaboratorio: string | number, idExame: string | number): Promise<any> {
    
    const existeLaboratorio = await this.laboratorioRepository.getById(idLaboratorio);
    if (!existeLaboratorio) {
      throw new Error("Laboratório informado não está cadastrado no sistema")
    }
  
    const existeExame = await this.exameRepository.getById(idExame);
    if (!existeExame) {
      throw new Error("Exame informado não está cadastrado no sistema")
    }
    
    const jaExisteVinculo = await this.laboratorioRepository.existeExameVinculado(idLaboratorio, idExame);
    
    if (jaExisteVinculo.qtde > 0) {
      throw new Error("Esse exame já está vinculado a esse laboratório");
    }
    
    return await this.laboratorioRepository.vincularExame(idLaboratorio, idExame);
  }
}

export default VincularExameUseCase;
