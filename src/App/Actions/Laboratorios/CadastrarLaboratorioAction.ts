import {Request, Response} from "express";
import {container} from "tsyringe";
import CadastrarLaboratorioUseCase from "@useCases/Laboratorios/CadastrarLaboratorioUseCase";

class CadastrarLaboratorioAction {
  public async handle(request: Request, response: Response) {
    try {
      const useCase = container.resolve(CadastrarLaboratorioUseCase);
      const laboratorio = await useCase.create(request);
  
      return response.status(200).json({
        status: 'success',
        data: {laboratorio}
      });
    } catch (e) {
      return response.status(e.status).json({
        status: 'fail',
        data: {
          message: e.message
        }
      });
    }
  }
  
}

export default new CadastrarLaboratorioAction();
