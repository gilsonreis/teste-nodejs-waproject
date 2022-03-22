import { Router } from "express";
import LoginAction from "@actions/Auth/LoginAction";

const AuthRoutes = Router();

AuthRoutes.post('/login', LoginAction.handle);

export default AuthRoutes;
