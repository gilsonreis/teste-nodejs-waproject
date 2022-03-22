import {Request, Response} from "express";
import {container} from "tsyringe";
import ListarLaboratorioUseCase from "@useCases/Laboratorios/ListarLaboratorioUseCase";

class ListarLaboratorioAction {
  public async handle(request: Request, response: Response) {
  
    const listarUseCase = container.resolve(ListarLaboratorioUseCase);
    const search = request.query;
    const all = await listarUseCase.listar(search);
  
    return response.status(200).json({
      status: 'success',
      laboratorios: all
    });
  }
}

export default new ListarLaboratorioAction();
