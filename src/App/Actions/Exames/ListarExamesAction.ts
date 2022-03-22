import {Request, Response} from "express";
import {container} from "tsyringe";
import ListarExamesUseCase from "@useCases/Exames/ListarExamesUseCase";

class ListarExamesAction {
  public async handle(request: Request, response: Response) {
  
    const listarUseCase = container.resolve(ListarExamesUseCase);
    const search = request.query;
    const all = await listarUseCase.listar(search);
  
    return response.status(200).json({
      status: 'success',
      exames: all
    });
  }
}

export default new ListarExamesAction();
