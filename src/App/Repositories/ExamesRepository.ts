import IExamesRepository from "@Repositories/Contracts/IExamesRepository";
import {getRepository, Repository, UpdateResult} from "typeorm";
import {Exame} from "@Entities/Exame";
import ExameDto from "@Dto/ExameDto";
import {PaginationAwareObject} from "typeorm-pagination/dist/helpers/pagination";

export default class ExamesRepository implements IExamesRepository {
  private repository: Repository<Exame>
  
  constructor() {
    this.repository = getRepository(Exame);
  }
  
  public getAll(search?): Promise<PaginationAwareObject> {
    const query = this.repository.createQueryBuilder('ex');
    query.where("ex.status = 1");
    
    if (typeof search !== 'undefined') {
      if(search.nome) {
        query.orWhere('ex.nome like :nome', {nome: `%${search.nome}%`});
      }
      
      if (search.tipo) {
        query.orWhere('ex.tipo = :tipo', {tipo: search.tipo});
      }
      
    }
    
    return query.paginate();
  }
  
  public async getById(id: string | number): Promise<Exame> {
    const query = this.repository.createQueryBuilder('ex');
    query.where("ex.id = :id and ex.status = 1 and ex.deleted_at is null", {id})
    return query.getOne();
  }
  
  public async create(exameDto: ExameDto): Promise<Exame> {
    const exame = await this.repository.create(exameDto)
    return this.repository.save(exame)
  }
  
  async destroy(id: string | number): Promise<UpdateResult> {
    return this.repository.softDelete({id});
  }
  
  public async update(exameDto: ExameDto): Promise<UpdateResult> {
    const { id } = exameDto;
    return this.repository
      .createQueryBuilder()
      .update(Exame)
      .set(exameDto)
      .where("id = :id", { id })
      .execute();
  }
  
  public async listarLaboratoriosPorExame(idExame: string | number): Promise<PaginationAwareObject> {
    return this.repository.createQueryBuilder('ex')
      .innerJoinAndSelect('ex.laboratorios', 'lab')
      .where('ex.id = :id', {id: idExame})
      .paginate();
  }
}
