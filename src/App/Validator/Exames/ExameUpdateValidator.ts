import { NextFunction, Request, Response } from 'express';
import * as Yup from "yup"
import { pt } from "yup-locale-pt"

Yup.setLocale(pt);

export default async (request: Request, response: Response, next: NextFunction) => {
  try {
    
    const schema = Yup.object().shape({
      nome: Yup.string().required().trim(),
      tipo: Yup.mixed().oneOf(['analise', 'imagem']),
      status: Yup.mixed().oneOf([0, 1])
    });
    
    await schema.validate(request.body, { abortEarly: false })
    return next();
  } catch (error) {
    return response.status(400).json({
      status: "fail",
      message: error.inner
    })
  }
}
