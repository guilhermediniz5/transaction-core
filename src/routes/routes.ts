import { Router } from 'express';
import { UsersController } from '../controllers/usersController';
import { TransactionsController } from '../controllers/transactionController';

const router = Router();
const usersController = new UsersController();
const transactionsController = new TransactionsController();

router.post("/create-user", (req, res) => {
    return usersController.createUser(req, res);
});

router.get("/user/:id", (req, res) => {
    return usersController.getUserById(req, res);
});

router.post("/transaction", (req, res) => {
    return transactionsController.createTransaction(req, res);
});

export default router;