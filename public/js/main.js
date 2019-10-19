(() => {
    const todos = [];
    const KEYS = ['id', 'title', 'body', 'createdAt', 'updatedAt'];
    const tbody = document.getElementById('tbody');
    const addTitle = document.getElementById('add-title');
    const addBody = document.getElementById('add-body');
    const addBtn = document.getElementById('add-btn');
    const API_URL_GET_ALL = 'http://localhost:3001/api';

    window.addEventListener('load', (event) => {
        listTodos();
    });

    const allTodosDel = () => {
        while(tbody.firstChild) tbody.removeChild(tbody.firstChild);
    };

    const listTodos = async () => {
        allTodosDel();
        const dataArray = await getTodosApi();
        dataArray.forEach(todo => {
            todos.push(todo);

            const trEle = document.createElement('tr');
            KEYS.forEach(key => {
                const tdEle = document.createElement('td');
                tdEle.textContent = todo[key];
                trEle.appendChild(tdEle);
            });
            const delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';
            delBtn.addEventListener('click', (event) => {
                const tdEle = event.target.parentNode;
                const trEle = tdEle.parentNode;
                const id = trEle.firstElementChild.textContent;
                todoDelApi(id);
                listTodos();
            });
            const tdEle = document.createElement('td');
            tdEle.appendChild(delBtn);
            trEle.appendChild(tdEle);
            tbody.appendChild(trEle);
        });
    };

    const getTodosApi = async () => {
        const todos =  await fetch(API_URL_GET_ALL)
                                .then(res => res.json())
                                .catch(error => {
                                    alert(error.message);
                                });
        return todos;
    };

    const todoDelApi = async (id) => {
        await fetch(`http://localhost:3001/api/${id}`, {method: 'DELETE'})
                .then(res => res.json())
                .catch(error => {
                    alert(error.message);
                });
    };

    addBtn.addEventListener('click', async (event) => {
        const addTitleText = addTitle.value;
        addTitle.value = '';
        const addBodyText = addBody.value;
        addBody.value = '';

        if (addTitleText && addBodyText) {
            console.log(addTitleText, addBodyText, 'no empty');
            const addData = {title: addTitleText, body: addBodyText};
            const addTodo = await fetch(API_URL_GET_ALL, {
                                            method: 'POST',
                                            headers: {"Content-Type": "application/json; charset=utf-8"},
                                            body: JSON.stringify(addData)
                                        })
                                    .then(res => res.json())
                                    .catch(error => {
                                        alert(error.message);
                                    });
            listTodos();
        } else {
            alert('入力値が不正です');
        }
    });
})();