import {inject, injectable} from "tsyringe";
import LaboratoriosRepository from "@Repositories/LaboratoriosRepository";
import ILaboratoriosRepository from "@Repositories/Contracts/ILaboratoriosRepository";

@injectable()
class ListarExamesPorLaboratorioUseCase {
  
  constructor(
    @inject(LaboratoriosRepository)
    private laboratorioRepository: ILaboratoriosRepository) {}
  
  public async listarExames(idLaboratorio: string | number) {
    return await this.laboratorioRepository.listarExamesPorLaboratorio(idLaboratorio);
  }
}

export default ListarExamesPorLaboratorioUseCase;
