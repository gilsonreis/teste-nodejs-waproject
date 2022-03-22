import {Request, Response} from "express";
import {container} from "tsyringe";
import ExcluirLaboratorioUseCase from "@useCases/Laboratorios/ExcluirLaboratorioUseCase";

class ExcluirLaboratorioAction {
  public async handle(request: Request, response: Response) {
    
    const listarUseCase = container.resolve(ExcluirLaboratorioUseCase);
    const { id } = request.params;
    const laboratorio = await listarUseCase.delete(id);
    
    return response.status(200).json({
      status: 'success',
      laboratorio: laboratorio || {}
    });
  }
}

export default new ExcluirLaboratorioAction();
