import {Request, Response} from "express";
import {container} from "tsyringe";
import ListarExamesPorLaboratorioUseCase from "@useCases/Laboratorios/ListarExamesPorLaboratorioUseCase";

class ListarExamesPorLaboratorioAction {
  public async handle(request: Request, response: Response) {
    try {
      const {idLaboratorio} = request.params;
      
      const listarExamePorLaboratorioUseCase = container.resolve(ListarExamesPorLaboratorioUseCase);
      const exames = await listarExamePorLaboratorioUseCase.listarExames(idLaboratorio);
      
      return response.status(200).json({
        status: 'success',
        data: exames
      })
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

export default new ListarExamesPorLaboratorioAction();
