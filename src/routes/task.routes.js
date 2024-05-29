import {Router} from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { getTasks, getTask, createTask, deleteTask, updateTask } from '../controllers/task.controller.js'

const router = Router();

router.get("/tasks", authRequired, getTasks)

router.post("/tasks", authRequired, createTask)

router.delete("/tasks/:id", authRequired, deleteTask)

router.get("/tasks/:id", authRequired, getTask)

router.put("/tasks/:id", authRequired, updateTask)

export default router;