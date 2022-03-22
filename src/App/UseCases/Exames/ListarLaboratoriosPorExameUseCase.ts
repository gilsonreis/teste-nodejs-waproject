import {inject, injectable} from "tsyringe";
import ExamesRepository from "@Repositories/ExamesRepository";
import IExamesRepository from "@Repositories/Contracts/IExamesRepository";

@injectable()
class ListarLaboratoriosPorExameUseCase {
  
  constructor(
    @inject(ExamesRepository)
    private exameRepository: IExamesRepository) {}
  
  public async listarLaboratorios(idExame: string | number) {
    return await this.exameRepository.listarLaboratoriosPorExame(idExame);
  }
}

export default ListarLaboratoriosPorExameUseCase;
