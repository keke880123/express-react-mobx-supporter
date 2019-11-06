import express from 'express';
import todoController from '../controllers/todo.controller';

const router = express.Router();

router.get('/addTodo', (req, res) => {
    // http://localhost:5000/todo/addTodo
    console.log('req', req.query);
    todoController.addTodo(req, res);
});

router.get('/list', (req, res) => {
    todoController.getList(req, res);
});

router.get('/update', (req, res) => {
    todoController.toggleSolve(req, res);
});

export default router;
