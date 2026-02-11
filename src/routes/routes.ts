import { Router } from 'express';
import { UsersController } from '../controllers/usersController';

const router = Router();
const usersController = new UsersController();

router.post("/create-user", (req, res) => {
    return usersController.createUser(req, res);
});

router.get("/user/:id", (req, res) => {
    return usersController.getUserById(req, res);
});

export default router;