import {Request, Response} from "express";
import {container} from "tsyringe";
import DeletarVinculoExameUseCase from "@useCases/Laboratorios/DeletarVinculoExameUseCase";

class DeletarVinculoExameAction {
  public async handle(request: Request, response: Response) {
    try {
      const {
        idLaboratorio,
        idExame
      } = request.params;
    
      const deletarExameUseCase = container.resolve(DeletarVinculoExameUseCase);
      await deletarExameUseCase.deletarExame(idLaboratorio, idExame);
    
      return response.status(200).json({
        status: 'success',
        data: {
          message: "Exame foi desvinculado ao laborátorio com sucesso!"
        }
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

export default new DeletarVinculoExameAction();
