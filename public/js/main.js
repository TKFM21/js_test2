(() => {
    window.addEventListener('load', () => {
        const mainEle = document.getElementById('main');
        const h1Ele = document.createElement('h1');
        h1Ele.textContent = 'AAAAAAAAAAAAA';
        mainEle.appendChild(h1Ele);
    });
})();