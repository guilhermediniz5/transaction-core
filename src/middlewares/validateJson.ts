import { Request, Response, NextFunction } from "express";

export function validateJson(req: Request, res: Response, next: NextFunction) {
  if (!req.is("application/json")) {
    return res
      .status(415)
      .json({ erro: "Content-Type deve ser application/json" });
  }

  next();
}
