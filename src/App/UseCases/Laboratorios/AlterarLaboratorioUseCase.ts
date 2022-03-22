import {inject, injectable} from "tsyringe";
import LaboratoriosRepository from "@Repositories/LaboratoriosRepository";
import ILaboratoriosRepository from "@Repositories/Contracts/ILaboratoriosRepository";
import {Request} from "express";
import LaboratorioDto from "@Dto/LaboratorioDto";
import {UpdateResult} from "typeorm";

@injectable()
class AlterarLaboratorioUseCase {
  
  constructor(
    @inject(LaboratoriosRepository)
    private laboratorioRepository: ILaboratoriosRepository
  ) {
  }
  
  public async update(request: Request): Promise<UpdateResult> {
    
    const {nome, endereco, status} = request.body;
    const {id} = request.params;
    
    
    const laboratorioDto = new LaboratorioDto();
    laboratorioDto.id = id;
    laboratorioDto.nome = nome;
    laboratorioDto.endereco = endereco;
    laboratorioDto.status = status;
    
    return await this.laboratorioRepository.update(laboratorioDto);
  }
}

export default AlterarLaboratorioUseCase;
