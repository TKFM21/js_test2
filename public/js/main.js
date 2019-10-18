(() => {
    const todos = [];
    const KEYS = ['id', 'title', 'body', 'createdAt', 'updatedAt'];
    const tbody = document.getElementById('tbody');
    const API_URL_GET_ALL = 'http://localhost:3001/api';

    window.addEventListener('load', async (event) => {
        const res = await fetch(API_URL_GET_ALL);
        const dataArray = await res.json();
        dataArray.forEach(data => {
            todos.push(data);
        });
        
        todos.forEach(todo => {
            const trEle = document.createElement('tr');
            KEYS.forEach(key => {
                const tdEle = document.createElement('td');
                tdEle.textContent = todo[key];
                trEle.appendChild(tdEle);
            });
            const delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';
            delBtn.addEventListener('click', async (event) => {
                const trEle = event.target.parentNode;
                const id = trEle.firstElementChild.textContent;
                while (trEle.firstChild) {
                    trEle.removeChild(trEle.firstChild);
                }
                const response = await fetch(`http://localhost:3001/api/${id}`, {method: 'DELETE'});
                const deleteTodo = await response.json();
                console.log(deleteTodo);
            });
            trEle.appendChild(delBtn);
            tbody.appendChild(trEle);
        });
    });
})();