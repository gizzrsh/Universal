let items = document.querySelectorAll('.recommended__item');

// Перебираю массив items
items.forEach(item => {
    // Добавляю действие при клике на item
    item.addEventListener('click', () => {
        
        // Перебираю массив items и у всех item удаляю класс с атрибутом --active
        items.forEach(item => item.classList.remove('recommended__item--active'));
        
        // Добавляю при клике класс с атрибутом --active
        item.classList.add('recommended__item--active');
    })
})