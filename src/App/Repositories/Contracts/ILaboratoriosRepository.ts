import LaboratorioDto from "@Dto/LaboratorioDto";
import {Laboratorio} from "@Entities/Laboratorio";
import {PaginationAwareObject} from "typeorm-pagination/dist/helpers/pagination";
import {UpdateResult} from "typeorm";

export default interface ILaboratoriosRepository {
  getAll(search?): Promise<PaginationAwareObject>
  getById(id: string | number): Promise<Laboratorio>;
  create(laboratorioDto: LaboratorioDto): Promise<Laboratorio>;
  update(laboratorioDto: LaboratorioDto): Promise<UpdateResult>;
  destroy(id: string | number): Promise<UpdateResult>;
  vincularExame(idLaboratorio: string | number, idExame: string | number): Promise<Laboratorio>;
  existeExameVinculado(idLaboratorio: string | number, idExame: string | number): Promise<any>;
  deletarExameLaboratorio(idLaboratorio: string | number, idExame: string | number): Promise<any>;
  listarExamesPorLaboratorio(idLaboratorio: string | number): Promise<PaginationAwareObject>;
}
