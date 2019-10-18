const express = require('express');
const controller = require('../../controllers/todos')
const router = express.Router();

router.use((req, res, next) => {
    console.log(req.method, req.url, req.httpVersion);
    console.log('  Time--:', Date.now());
    next();
});

router
    .get('/', (req, res) => {
        console.log('   index');
        res.render('index');
    })
    .get('/quiz', (req, res) => {
        console.log('   quiz');
        res.render('quiz');
    });

router
    .route('/api')
    .get(controller.getTodos)
    .post(controller.postTodo);

router
    .route('/api/:id')
    .get(controller.getTodo)
    .put(controller.updateTodo)
    .delete(controller.deleteTodo);

module.exports = router;