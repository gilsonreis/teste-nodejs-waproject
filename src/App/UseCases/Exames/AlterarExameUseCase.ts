import {inject, injectable} from "tsyringe";
import ExamesRepository from "@Repositories/ExamesRepository";
import IExamesRepository from "@Repositories/Contracts/IExamesRepository";
import {Request} from "express";
import ExameDto, {ExameTipo} from "@Dto/ExameDto";
import {UpdateResult} from "typeorm";

@injectable()
class AlterarExamesUseCase {
  
  constructor(
    @inject(ExamesRepository)
    private exameRepository: IExamesRepository
  
  ) {
  }
  
  public async update(request: Request): Promise<UpdateResult> {
    
    const {nome, tipo, status} = request.body;
    const {id} = request.params;
    
    
    if (![ExameTipo.IMAGEM, ExameTipo.ANALISE_CLINICA].includes(tipo)) {
      throw new Error(`Tipo de exame precisa ser "${ExameTipo.IMAGEM}" ou "${ExameTipo.ANALISE_CLINICA}". Foi informado "${tipo}"`);
    }
    
    const exameDto = new ExameDto();
    exameDto.id = id;
    exameDto.nome = nome;
    exameDto.tipo = tipo;
    exameDto.status = status;
    
    return await this.exameRepository.update(exameDto);
  }
}

export default AlterarExamesUseCase;
