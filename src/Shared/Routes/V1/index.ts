import { Router } from "express";
import AuthRoutes from "@shared/Routes/V1/AuthRoutes";
import ExameRoutes from "@shared/Routes/V1/ExamesRoutes";
import LaboratorioRoutes from "@shared/Routes/V1/LaboratoriosRoutes";
import AuthMiddleware from "../../../Middlewares/AuthMiddleware";


const v1Routes = Router();

v1Routes.use('/auth', AuthRoutes)

v1Routes.use(AuthMiddleware);

v1Routes.use('/exames', ExameRoutes)
v1Routes.use('/laboratorios', LaboratorioRoutes);

export default v1Routes;
