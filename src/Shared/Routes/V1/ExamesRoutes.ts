import { Router } from "express";
import ListarExamesAction from "@actions/Exames/ListarExamesAction";
import CadastrarExameAction from "@actions/Exames/CadastrarExameAction";
import AlterarExameAction from "@actions/Exames/AlterarExameAction";
import VisualizarExameAction from "@actions/Exames/VisualizarExameAction";
import ExcluirExameAction from "@actions/Exames/ExcluirExameAction";
import ExameCreateValidator from "../../../App/Validator/Exames/ExameCreateValidator";
import ExameUpdateValidator from "../../../App/Validator/Exames/ExameUpdateValidator";
import ListarLaboratoriosPorExameAction from "@actions/Exames/ListarLaboratoriosPorExameAction";

const ExameRoutes = Router();

ExameRoutes.get('/', ListarExamesAction.handle);
ExameRoutes.post('/', ExameCreateValidator, CadastrarExameAction.handle);
ExameRoutes.put('/:id', ExameUpdateValidator, AlterarExameAction.handle);
ExameRoutes.get('/:id', VisualizarExameAction.handle);
ExameRoutes.delete('/:id', ExcluirExameAction.handle);

ExameRoutes.get('/:idExame/laboratorios', ListarLaboratoriosPorExameAction.handle);

export default ExameRoutes;

