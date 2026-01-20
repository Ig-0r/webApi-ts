import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get("/teste", (req, res) => {
  res.send("Olá, DEV!");
});

router.post('/teste', (req, res) => {

    return res.status(StatusCodes.ACCEPTED).send(req.body);
});

export { router };