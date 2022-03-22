import {Request, Response} from "express";
import {container} from "tsyringe";
import AlterarExamesUseCase from "@useCases/Exames/AlterarExameUseCase";

class AlterarExameAction {
  public async handle(request: Request, response: Response) {
    try {
      const useCase = container.resolve(AlterarExamesUseCase);
      const exame = await useCase.update(request);
      
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

export default new AlterarExameAction();
