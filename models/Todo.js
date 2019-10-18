const todos = [];

let nextIndex = 1;

class Todo {
    constructor({title, body}) {
        this.id = nextIndex++;
        this.title = title;
        this.body = body;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}

for (let i = 0; i < 5; i++) {
    const sufix = i + 1;
    const todo = new Todo({
        title: 'title' + sufix,
        body: 'body' + sufix
    });
    todos.push(todo);
}

module.exports = {
    findAll: () => {
        return todos.slice();
    },
    createTodo: ({title, body}) => {
        if (!title) {
            throw new Error('titleがありません');
        }
        if (!body) {
            throw new Error('bodyがありません');
        }
        const createTodo = new Todo({
            title: title,
            body: body
        });
        todos.push(createTodo);
        return createTodo;
    },
    findTodo: (id) => {
        if (typeof id !== 'number' || id < 1) {
            throw new Error('idは数値で1以上が条件です');
        }
        const findTodo = todos.find(todo => id === todo.id);
        if (!findTodo) {
            throw new Error('該当しませんでした');
        }
        return findTodo;
    },
    updateTodo: ({id, title, body}) => {
        if (typeof id !== 'number' || id < 1 || isNaN(id)) {
            throw new Error('idは数値で1以上が条件です');
        }
        if (!title) {
            throw new Error('titleがありません');
        }
        if (!body) {
            throw new Error('bodyがありません');
        }
        const targetTodo = todos.find(todo => id === todo.id);
        if (!targetTodo) {
            throw new Error('該当しませんでした');
        }
        targetTodo.title = title;
        targetTodo.body = body;
        targetTodo.updatedAt = new Date();
        return targetTodo;
    },
    deleteTodo: (id) => {
        if (typeof id !== 'number' || id < 1 || isNaN(id)) {
            throw new Error('idは数値で1以上が条件です');
        }
        const targetId = todos.findIndex(todo => todo.id === id);
        if (targetId === -1) {
            throw new Error('該当しませんでした');
        }
        const deleteTodo = todos.splice(targetId, 1)[0];
        return deleteTodo;
    }
};