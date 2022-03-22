import {inject, injectable} from "tsyringe";
import LaboratoriosRepository from "@Repositories/LaboratoriosRepository";
import ILaboratoriosRepository from "@Repositories/Contracts/ILaboratoriosRepository";
import {Request} from "express";
import LaboratorioDto from "@Dto/LaboratorioDto";
import {Laboratorio} from "@Entities/Laboratorio";

@injectable()
class CadastrarLaboratoriosUseCase {
  
  constructor(
    @inject(LaboratoriosRepository)
    private laboratorioRepository: ILaboratoriosRepository
  
  ) {
  }
  
  public async create(request: Request): Promise<Laboratorio> {
    
    const {nome, endereco} = request.body;
    
    const laboratorioDto = new LaboratorioDto();
    laboratorioDto.nome = nome;
    laboratorioDto.endereco = endereco;
    laboratorioDto.status = 1
    
    return await this.laboratorioRepository.create(laboratorioDto);
  }
}

export default CadastrarLaboratoriosUseCase;
