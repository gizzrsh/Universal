let items = document.querySelectorAll('.recommended__item');

// Перебираю массив items
items.forEach(item => {
    item.addEventListener('click', () => {
        
        items.forEach(item => item.classList.remove('recommended__item--active'));
        
        item.classList.add('recommended__item--active');
    })
})