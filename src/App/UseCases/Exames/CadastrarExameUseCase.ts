import {inject, injectable} from "tsyringe";
import ExamesRepository from "@Repositories/ExamesRepository";
import IExamesRepository from "@Repositories/Contracts/IExamesRepository";
import {Request} from "express";
import ExameDto, {ExameTipo} from "@Dto/ExameDto";
import {Exame} from "@Entities/Exame";

@injectable()
class CadastrarExamesUseCase {
  
  constructor(
    @inject(ExamesRepository)
    private exameRepository: IExamesRepository
  
  ) {
  }
  
  public async create(request: Request): Promise<Exame> {
    
    const {nome, tipo} = request.body;
    
    if (![ExameTipo.IMAGEM, ExameTipo.ANALISE_CLINICA].includes(tipo)) {
      throw new Error(`Tipo de exame precisa ser "${ExameTipo.IMAGEM}" ou "${ExameTipo.ANALISE_CLINICA}". Foi informado "${tipo}"`);
    }
    
    const exameDto = new ExameDto();
    exameDto.nome = nome;
    exameDto.tipo = tipo;
    exameDto.status = 1
    
    return await this.exameRepository.create(exameDto);
  }
}

export default CadastrarExamesUseCase;
