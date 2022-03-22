import {Request, Response} from "express";
import {container} from "tsyringe";
import AlterarLaboratorioUseCase from "@useCases/Laboratorios/AlterarLaboratorioUseCase";

class AlterarLaboratorioAction {
  public async handle(request: Request, response: Response) {
    try {
      const useCase = container.resolve(AlterarLaboratorioUseCase);
      const laboratorio = await useCase.update(request);
      
      return response.status(200).json({
        status: 'success',
        data: {laboratorio}
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

export default new AlterarLaboratorioAction();
