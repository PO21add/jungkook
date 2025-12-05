// ====================
// Основная таблица (оставляем 20 оценок)
// ====================
const grades = {
    "01.09": 100,
    "02.09": 95,
    "03.09": 88,
    "04.09": 70,
    "05.09": 65,
    "06.09": 90,
    "07.09": 82,
    "08.09": 77,
    "09.09": 100,
    "10.09": 60,
    "11.09": 73,
    "12.09": 85,
    "13.09": 92,
    "14.09": 68,
    "15.09": 74,
    "16.09": 80,
    "17.09": 55,
    "18.09": 98,
    "19.09": 87,
    "20.09": 79
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
    "01.10": 86, "02.10": 70, "03.10": 90, "04.10": 55,
    "05.10": 78, "06.10": 82, "07.10": 95, "08.10": 60,
    "09.10": 88, "10.10": 91, "11.10": 76, "12.10": 85,
    "13.10": 66, "14.10": 80, "15.10": 72, "16.10": 99,
    "17.10": 64, "18.10": 87, "19.10": 93, "20.10": 77
};

const examGrades = {
    "21.11": 92, "22.11": 88, "23.11": 73, "24.11": 85,
    "25.11": 90, "26.11": 78, "27.11": 82, "28.11": 69,
    "29.11": 95, "30.11": 74, "01.12": 88, "02.12": 91,
    "03.12": 67, "04.12": 80, "05.12": 77, "06.12": 99,
    "07.12": 84, "08.12": 72, "09.12": 90, "10.12": 79
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
