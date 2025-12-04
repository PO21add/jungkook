const grades = {
    "12.09": 100,
    "20.09": 70,
    "22.09": 100,
    "23.09": 80,
    "25.09": 90,
    "26.09": 85,
    "27.09": 67
};

// ИЩЕМ ТАБЛИЦУ
const table = document.querySelector(".grades-table table");

// Создаём строки
const headerRow = document.createElement("tr");
const valueRow = document.createElement("tr");

// Генерация таблицы
Object.entries(grades).forEach(([date, score]) => {

    // заголовок (дата)
    const th = document.createElement("th");
    th.textContent = date;
    headerRow.appendChild(th);

    // значение (оценка)
    const td = document.createElement("td");
    td.innerHTML = `<div class="value grade" data-score="${score}">${score}</div>`;
    valueRow.appendChild(td);
});

// Добавляем строки в таблицу
table.appendChild(headerRow);
table.appendChild(valueRow);

// Цветовая подсветка
document.querySelectorAll(".grade").forEach(g => {
    let score = parseInt(g.getAttribute("data-score"));

    if (score >= 90) {
        g.classList.add("white-grade");
    } else if (score >= 70) {
        g.classList.add("gray-grade");
    } else {
        g.classList.add("black-grade");
    }
});

// ======================================
// ПРАКТИКА И ЭКЗАМЕН (как таблица сверху)
// ======================================

const practiceGrades = {
    "01.10": 86,
    "05.10": 70,
    "12.10": 90,
    "20.10": 55
};

const examGrades = {
    "25.11": 92,
    "27.11": 88,
    "30.11": 73
};

// Создаём мини-таблицу
function createMiniTable(tableId, gradesObject) {
    const table = document.getElementById(tableId);

    const headerRow = document.createElement("tr");
    const valueRow = document.createElement("tr");

    Object.entries(gradesObject).forEach(([date, score]) => {
        // ДАТА
        const th = document.createElement("th");
        th.textContent = date;
        headerRow.appendChild(th);

        // ОЦЕНКА
        const td = document.createElement("td");
        td.innerHTML = `<div class="value grade" data-score="${score}">${score}</div>`;
        valueRow.appendChild(td);
    });

    table.appendChild(headerRow);
    table.appendChild(valueRow);
}

// Генерация
createMiniTable("practice-table", practiceGrades);
createMiniTable("exam-table", examGrades);

// Цвета
document.querySelectorAll(".grade").forEach(g => {
    let score = parseInt(g.getAttribute("data-score"));

    if (score >= 90) {
        g.classList.add("white-grade");
    } else if (score >= 70) {
        g.classList.add("gray-grade");
    } else {
        g.classList.add("black-grade");
    }
});
