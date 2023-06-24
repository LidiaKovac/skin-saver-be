import { NextFunction, Request, Response, Router } from "express";
import { readJSON } from "../../utils/files";

export const questionsRoute = Router();

questionsRoute.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    const questions = await readJSON("src/services/questions/db.json")
    res.send(questions)
  }
);
