import {Request, Response} from "express";
import {container} from "tsyringe";
import ListarLaboratoriosPorExameUseCase from "@useCases/Exames/ListarLaboratoriosPorExameUseCase";

class ListarLaboratoriosPorExameAction {
  public async handle(request: Request, response: Response) {
    try {
      const {idExame} = request.params;
    
      const listarLaboratoriosPorExameUseCase = container.resolve(ListarLaboratoriosPorExameUseCase);
      const laboratorios = await listarLaboratoriosPorExameUseCase.listarLaboratorios(idExame);
    
      return response.status(200).json({
        status: 'success',
        data: laboratorios
      });
    } catch (e) {
      return response.status(409).json({
        status: 'fail',
        data: {
          message: e.message
        }
      });
    }
  }
}

export default new ListarLaboratoriosPorExameAction();
