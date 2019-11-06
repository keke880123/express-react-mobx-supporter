import Todo from '../models/todo.model';

const controller = {};

controller.addTodo = async (req, res) => {
    // localhost:5000/todo/addTodo?idx=1&content=text&isSovled=true
    const todoObject = {
        idx: req.query.idx || 1,
        content: req.query.content || '',
        isSovled: req.query.isSovled || false
    };
    try {
        const addTodo = await Todo.addTodo(todoObject);
        res.send(addTodo);
    } catch (err) {
        res.send('error in saved todo');
    }
};

controller.getList = async (req, res) => {
    try {
        const todoList = await Todo.getList();
        res.send({ msg: 'success', data: todoList });
    } catch (err) {
        res.send({ msg: 'fail', data: {} });
    }
};

// const id = '5dbff2ce3171e39f4841b80b';
controller.toggleSolve = async (req, res) => {
    const id = req.query.id;
    const bool = req.query.bool;
    try {
        const todo = await Todo.toggleSolve(id, bool);
        res.send({ msg: 'success', data: todo });
    } catch (err) {
        res.send({ msg: 'fail', data: {} });
    }
};

controller.removeTodo = async (req, res) => {
    const id = req.query.id;
    try {
        const todo = await Todo.removeTodo(id);
        res.send({ msg: 'success', data: todo });
    } catch (err) {
        res.send({ msg: 'fail', data: {} });
    }
};

export default controller;
