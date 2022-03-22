import { container } from "tsyringe"
import ILaboratoriosRepository from "@Repositories/Contracts/ILaboratoriosRepository";
import LaboratoriosRepository from "@Repositories/LaboratoriosRepository";
import IExamesRepository from "@Repositories/Contracts/IExamesRepository";
import ExamesRepository from "@Repositories/ExamesRepository";

container.registerSingleton<ILaboratoriosRepository>(
  "LaboratoriosRepository",
  LaboratoriosRepository
);

container.registerSingleton<IExamesRepository>(
  "ExamesRepository",
  ExamesRepository
);
