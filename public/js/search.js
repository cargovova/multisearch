// Отправляется запрос на получение списка фио из БД
$(document).ready(function() {
    ajax('search=selectAll', `#fioTable`);
});
// CallBack функция - возврат с Ajax
function resultAjax(data) {
    names = data.names;
    generateTable(names, 'fioTable');
};

// Запуск функции поиска при отжатии каждой кнопки
keyInput.onkeyup = searchName;

function searchName() {
    let findedNames = [];
    $('#fioTable').html('');
    // для упрощения поиска переводим в нижний регистр инфу из БД и из input
    keyInput.value.toLowerCase();
    names.forEach(function(item, i, arr) {
        if (item.toLowerCase().match(keyInput.value.toLowerCase())) {
            findedNames.push(item);
        }
    });
    // создать таблицу на основании массива с совпадениями
    generateTable(findedNames, 'fioTable');
}
// Кнопка очистить - стирает символы, строит таблицу на основании входных данных из БД
$('#clearInput').click(function() {
    keyInput.value = '';
    // стереть таблицу
    $('#fioTable').html('');
    generateTable(names, 'fioTable');
});
// функция генерирующая таблицу
// Вход - массив имен и имя таблицы
function generateTable(array, tableName) {
    let r;
    let table = document.getElementById(tableName);
    for (r = 0; r < array.length; r++) {
        let row = table.insertRow(r);

        let firstCell = row.insertCell();
        let secondCell = row.insertCell();

        firstCell.style.padding = "5px";
        firstCell.style.width = "25px";
        secondCell.style.padding = "5px";
        secondCell.style.width = "170px";

        firstCell.innerHTML = r + 1;
        secondCell.innerHTML = array[r];
        let button = createButton("DELETE FROM DB", "-", "red");
        secondCell.appendChild(button);
        button.addEventListener('click', function() {
            ajax('delete=' + secondCell.textContent, '#fioTable');
        });
    }
    let row = table.insertRow();
    let firstCell = row.insertCell();
    let secondCell = row.insertCell();
    firstCell.style.padding = "5px";
    firstCell.style.width = "25px";
    secondCell.style.padding = "5px";
    secondCell.style.width = "200px";
    // так как удобно не с 0 считать
    firstCell.innerHTML = r + 1;
    // таблицы с нуля начинаются
    input = createInput();
    secondCell.appendChild(input);
    let button = createButton("English ONLY !!!", "+", "green");
    secondCell.appendChild(button);
    button.addEventListener('click', function() {
        ajax('insert=' + input.value, '#fioTable');
    });
}
// создать input в ячейке
function createInput() {
    let input = document.createElement('input');
    input.style.float = 'left';
    input.style.fontSize = '12pt';
    input.style.width = "150px";
    return input;
}
// создать button в ячейке
function createButton(title, textContent, backgroundColor){
    let button = document.createElement('button');
    button.classList.toggle("active");
    button.title = title;
    button.textContent = textContent;
    button.style.cursor = "pointer";
    button.style.height = '25px';
    button.style.width = '25px';
    button.style.float = 'right';
    button.style.fontSize = '12pt';
    button.style.backgroundColor = backgroundColor;
    // сменить фон при наведении
    button.onmouseover = function() {
        this.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    }
    // сменить фон при уходе мыши с объекта
    button.onmouseout = function() {
        this.style.backgroundColor = backgroundColor;
    }
    return button;
}