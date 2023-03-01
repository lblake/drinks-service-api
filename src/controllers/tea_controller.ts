import { Request, Response } from "express";
import * as teaService from "../services/tea_service";

export const getTea = async (req: Request<object, object, object, { teaName: string | undefined }>, res: Response) => {
  const { teaName } = req.query;
  const tea = teaService.getTea(teaName);
  res.json(tea).status(200);
};

export const getTeaLover = async (req: Request, res: Response) => {
  const teaLover = teaService.getTeaLover(); 
  res.send(teaLover);
}