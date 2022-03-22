import {Request, Response} from "express";
import {container} from "tsyringe";
import CadastrarExameUseCase from "@useCases/Exames/CadastrarExameUseCase";

class CadastrarExameAction {
  public async handle(request: Request, response: Response) {
    try {
      const useCase = container.resolve(CadastrarExameUseCase);
      const exame = await useCase.create(request);
  
      return response.status(200).json({
        status: 'success',
        data: {exame}
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

export default new CadastrarExameAction();
