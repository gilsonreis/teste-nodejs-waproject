import ExameDto from "@Dto/ExameDto";
import {Exame} from "@Entities/Exame";
import {PaginationAwareObject} from "typeorm-pagination/dist/helpers/pagination";
import {UpdateResult} from "typeorm";

export default interface IExamesRepository {
  getAll(search?): Promise<PaginationAwareObject>
  getById(id: string | number): Promise<Exame>;
  create(exameDto: ExameDto): Promise<Exame>;
  update(exameDto: ExameDto): Promise<UpdateResult>;
  destroy(id: string | number): Promise<UpdateResult>;
  
  listarLaboratoriosPorExame(idExame: string | number): Promise<PaginationAwareObject>
}
