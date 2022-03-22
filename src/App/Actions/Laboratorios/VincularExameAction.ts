import {Request, Response} from "express";
import {container} from "tsyringe";
import VincularExameUseCase from "@useCases/Laboratorios/VincularExameUseCase";

class VincularExameAction {
  public async handle(request: Request, response: Response) {
    try {
      const {
        idLaboratorio,
        idExame
      } = request.params;
      
      const vincularExameUseCase = container.resolve(VincularExameUseCase);
      
      await vincularExameUseCase.vincularExame(idLaboratorio, idExame);
      
      return response.status(200).json({
        status: 'success',
        data: {
          message: "Exame foi vinculado ao laborátorio com sucesso!"
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

export default new VincularExameAction();
