import {Request, Response} from "express";
import {container} from "tsyringe";
import VisualizarExameUseCase from "@useCases/Exames/VisualizarExameUseCase";

class VisualizarLaboratorioAction {
  public async handle(request: Request, response: Response) {
    
    const listarUseCase = container.resolve(VisualizarExameUseCase);
    const { id } = request.params;
    const exame = await listarUseCase.view(id);
    
    return response.status(200).json({
      status: 'success',
      exame: exame || {}
    });
  }
}

export default new VisualizarLaboratorioAction();
