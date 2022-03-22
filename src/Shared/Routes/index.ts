import { Router } from "express";
import v1Routes from "@shared/Routes/V1";

const router = Router();

router.use("/v1", v1Routes)

export default router;
