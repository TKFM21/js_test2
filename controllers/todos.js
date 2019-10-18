const Todo = require('../models/Todo');

module.exports = {
    getTodos: (req, res) => {
        const storedTodos = Todo.findAll();
        res.status(200).json(storedTodos);
    },
    postTodo: (req, res) => {
        try {
            const {title, body} = req.body;
            const createTodo = Todo.createTodo({title, body});
            res.status(200).json(createTodo);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },
    getTodo: (req, res) => {
        try {
            const params = req.params.id;
            const id = parseInt(params, 10);
            const createTodo = Todo.findTodo(id);
            res.status(200).json(createTodo);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },
    updateTodo: (req, res) => {
        try {
            const reqId = req.params.id;
            const parseId = parseInt(reqId, 10);
            const {title, body} = req.body;
            const updateTodo = Todo.updateTodo({
                id: parseId,
                title,
                body
            });
            res.status(200).json(updateTodo);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },
    deleteTodo: (req, res) => {
        try {
            const reqId = req.params.id;
            const parseId = parseInt(reqId, 10);
            const deleteTodo = Todo.deleteTodo(parseId);
            res.status(200).json(deleteTodo);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
};