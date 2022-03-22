import ILaboratoriosRepository from "@Repositories/Contracts/ILaboratoriosRepository";
import {getRepository, Repository, UpdateResult} from "typeorm";
import {Laboratorio} from "@Entities/Laboratorio";
import LaboratorioDto from "@Dto/LaboratorioDto";
import {PaginationAwareObject} from "typeorm-pagination/dist/helpers/pagination";

export default class LaboratoriosRepository implements ILaboratoriosRepository {
  private repository: Repository<Laboratorio>
  
  constructor() {
    this.repository = getRepository(Laboratorio);
  }
  
  public getAll(search?): Promise<PaginationAwareObject> {
    const query = this.repository.createQueryBuilder('lb');
    query.where("lb.status = 1");
    
    if (typeof search !== 'undefined') {
      if (search.nome) {
        query.orWhere('lb.nome like :nome', {nome: `%${search.nome}%`});
      }
  
      if (search.endereco) {
        query.orWhere('lb.endereco like :endereco', {endereco: `%${search.endereco}%`});
      }
    }
    
    return query.paginate();
  }
  
  public async getById(id: string | number): Promise<Laboratorio> {
    const query = this.repository.createQueryBuilder('lab');
    query.where("lab.id = :id and lab.status = 1 and lab.deleted_at is null", {id})
    return query.getOne();
  }
  
  public async create(laboratorioDto: LaboratorioDto): Promise<Laboratorio> {
    const laboratorio = await this.repository.create(laboratorioDto)
    return this.repository.save(laboratorio)
  }
  
  async destroy(id: string | number): Promise<UpdateResult> {
    return this.repository.softDelete({id});
  }
  
  public async update(laboratorioDto: LaboratorioDto): Promise<UpdateResult> {
    const { id } = laboratorioDto;
    return this.repository
      .createQueryBuilder()
      .update(Laboratorio)
      .set(laboratorioDto)
      .where("id = : id", { id })
      .execute();
  }
  
  public async vincularExame(idLaboratorio: string | number, idExame: string | number): Promise<any> {
    const sql = "insert into laboratorio_exame (laboratorio_id, exame_id) values ($1, $2)";
    return await this.repository.query(sql, [idLaboratorio, idExame]);
  }
  
  public async existeExameVinculado(idLaboratorio: string | number, idExame: string | number): Promise<any> {
    const sql = "select count(*) as qtde from laboratorio_exame where laboratorio_id = $1 and exame_id = $2 and deleted_at is null";
    const result = await this.repository.query(sql, [idLaboratorio, idExame]);
    return Array.isArray(result) ? result[0] : result;
  }
  
  public async deletarExameLaboratorio(idLaboratorio: string | number, idExame: string | number): Promise<any> {
    const sql = "delete from laboratorio_exame where laboratorio_id = $1 and exame_id = $2";
    return await this.repository.query(sql, [idLaboratorio, idExame]);
  }
  
  public async listarExamesPorLaboratorio(idLaboratorio: string | number): Promise<PaginationAwareObject> {
    return this.repository.createQueryBuilder('lab')
      .innerJoinAndSelect('lab.exames', 'ex')
      .where('lab.id = :id', {id: idLaboratorio})
      .paginate();
  }
  
}
