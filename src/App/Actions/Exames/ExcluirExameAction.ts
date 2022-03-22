import {Request, Response} from "express";
import {container} from "tsyringe";
import ExcluirExameUseCase from "@useCases/Exames/ExcluirExameUseCase";

class ExcluirExameAction {
  public async handle(request: Request, response: Response) {
    
    const listarUseCase = container.resolve(ExcluirExameUseCase);
    const { id } = request.params;
    const exame = await listarUseCase.delete(id);
    
    return response.status(200).json({
      status: 'success',
      exame: exame || {}
    });
  }
}

export default new ExcluirExameAction();
