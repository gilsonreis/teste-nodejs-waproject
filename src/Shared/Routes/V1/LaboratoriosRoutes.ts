import { Router } from "express";
import ListarLaboratoriosAction from "@actions/Laboratorios/ListarLaboratorioAction";
import CadastrarLaboratorioAction from "@actions/Laboratorios/CadastrarLaboratorioAction";
import AlterarLaboratorioAction from "@actions/Laboratorios/AlterarLaboratorioAction";
import VisualizarLaboratorioAction from "@actions/Laboratorios/VisualizarLaboratorioAction";
import ExcluirLaboratorioAction from "@actions/Laboratorios/ExcluirLaboratorioAction";
import LaboratorioCreateValidator from "../../../App/Validator/Laboratorios/LaboratoriosCreateValidator";
import LaboratorioUpdateValidator from "../../../App/Validator/Laboratorios/LaboratoriosUpdateValidator";
import VincularExameAction from "@actions/Laboratorios/VincularExameAction";
import DeletarVinculoExameAction from "@actions/Laboratorios/DeletarVinculoExameAction";
import ListarExamesPorLaboratorioAction from "@actions/Laboratorios/ListarExamesPorLaboratorioAction";

const LaboratorioRoutes = Router();

LaboratorioRoutes.get('/', ListarLaboratoriosAction.handle);
LaboratorioRoutes.post('/', LaboratorioCreateValidator, CadastrarLaboratorioAction.handle);
LaboratorioRoutes.put('/:id', LaboratorioUpdateValidator, AlterarLaboratorioAction.handle);
LaboratorioRoutes.get('/:id', VisualizarLaboratorioAction.handle);
LaboratorioRoutes.delete('/:id', ExcluirLaboratorioAction.handle);

LaboratorioRoutes.post('/:idLaboratorio/exame/:idExame', VincularExameAction.handle);
LaboratorioRoutes.delete('/:idLaboratorio/exame/:idExame', DeletarVinculoExameAction.handle);

LaboratorioRoutes.get('/:idLaboratorio/exames', ListarExamesPorLaboratorioAction.handle);

export default LaboratorioRoutes;

