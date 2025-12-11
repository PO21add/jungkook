// ====================
// Основная таблица (оставляем 20 оценок)
// ====================
const grades = {
    "01.09": 70,
    "02.09": 54,
    "03.09": 88,
    "04.09": 65,
    "05.09": 70,
    "06.09": 84,
    "07.09": 71,
    "08.09": 92,
    "09.09": 90,
    "10.09": 74,
    "11.09": 85,
    "12.09": 80,
    "13.09": 76,
    "14.09": 76,
    "15.09": 75,
    "16.09": 88,
    "17.09": 0,
    "18.09": 72,
    "19.09": 82,
    "20.09": 87
};

const table = document.querySelector(".grades-table table");

const headerRow = document.createElement("tr");
const valueRow = document.createElement("tr");

Object.entries(grades).forEach(([date, score]) => {
    const th = document.createElement("th");
    th.textContent = date;
    headerRow.appendChild(th);

    const td = document.createElement("td");
    td.innerHTML = `<div class="value grade" data-score="${score}">${score}</div>`;
    valueRow.appendChild(td);
});

table.appendChild(headerRow);
table.appendChild(valueRow);

// ====================
// Практика и экзамен (добавлено по 20 оценок)
// ====================
const practiceGrades = {
    "01.10": 100, "02.10": 74, "03.10": 90, "04.10": 92,
    "05.10": 86, "06.10": 85, "07.10": 96, "08.10": 70,
    "09.10": 66, "10.10": 91, "11.10": 75, "12.10": 85,
    "13.10": 84, "14.10": 80, "15.10": 90, "16.10": 99,
    "17.10": 60, "18.10": 87, "19.10": 93, "20.10": 80
};

const examGrades = {
    "21.11": 90, "22.11": 90, "23.11": 90, "24.11": 90,
    "25.11": 90, 
};

function createMiniTable(tableId, gradesObject) {
    const table = document.getElementById(tableId);
    const headerRow = document.createElement("tr");
    const valueRow = document.createElement("tr");

    Object.entries(gradesObject).forEach(([date, score]) => {
        const th = document.createElement("th");
        th.textContent = date;
        headerRow.appendChild(th);

        const td = document.createElement("td");
        td.innerHTML = `<div class="value grade" data-score="${score}">${score}</div>`;
        valueRow.appendChild(td);
    });

    table.appendChild(headerRow);
    table.appendChild(valueRow);
}

// Генерация таблиц
createMiniTable("practice-table", practiceGrades);
createMiniTable("exam-table", examGrades);

// ====================
// Цвета для всех оценок
// ====================
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