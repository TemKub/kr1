//Задание 1: Типы данных и переменные
// 1.1 Инициализация переменных
// Создай переменные и выведи их в консоль:• name (твое имя)• age (твой возраст)• isStudent (true/false)• hobbies (массив с 3 хобби)

const person = {
    name: "Kuba",
    age: 28,
    isStudent: true,
    hobbies: ["frontend", "listening Music", "watchin Movie"]
}
console.log(person);

//1.2 Работа с числами
// Созданы две переменные. Выведи в консоль сумму, разность, произведение и частное этих чисел:const num1 = 50;const num2 = 10;

const num1 = 50;
const num2 = 10;

console.log(num1+num2, num1-num2, num1*num2, num1/num2);

//1.3 Конкатенация строк
// Созданы переменные. Выведи сообщение: "[name] is [age] years old":const name = "John";const age = 20;

console.log(person.name + " is " + 28 + " years old");

//Задание 2: Условные конструкции
// 2.1 Определение статуса по возрасту
// Напиши программу, которая выводит статус по возрасту:• Менее 13 → "Ребенок"• 13-17 → "Подросток"• 18-65 → "Взрослый"• Более 65 → "Пенсионер"

const age = +prompt("Введи возраст");
if (age < 13) {
    console.log("Ребёнок");
}
else if (age >= 13 && age <= 17) {
console.log("Подросток");
}
else if (age >= 18 && age <= 65) {
    console.log("Взрослый");
}
else {
    console.log("Пенсионер");
}

//2.2 Проверка четности числа
// Напиши функцию checkEvenOdd(number), которая выводит "Четное" или "Нечетное". Протестируй с разными числами.

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log("четное")
    } else {
        console.log("нечетное")
    }
}
checkEvenOdd(10);
checkEvenOdd(17);

//2.3 Проверка допуска на аттракцион
// Создай программу для проверки допуска:• Возраст < 5 → "Слишком мал"• Возраст 5-12 → "Добро пожаловать"• Возраст 13-18 И рост > 160см → "Добро пожаловать"• Иначе → "Не разрешено"

const ageCheck = +prompt("Введи возраст");
const height = +prompt("Введи рост в сантиметрах")
if (ageCheck < 5) {
    console.log("Слишком мал");
}
else if (ageCheck >= 5 && ageCheck <= 12) {
    console.log("Добро пожаловать");
}
else if (ageCheck >= 13 && ageCheck <=18 && height > 160) {
    console.log("Добро пожаловать");
}
else {
    console.log("Не разрешено");
}

//Задание 3: Циклы
// 3.1 Таблица умножения
// Выведи таблицу умножения на число 7 (от 7×1 до 7×10). Результаты выводи в консоль

for (let i = 1; i <= 10; i++) {
    console.log(10 + "*" + i + "=" + 10 * i);
}

//3.2 Сумма чисел
// Напиши функцию sumNumbers(n), которая вычисляет сумму всех чисел от 1 до n (включительно). Например, для n=5 результат должен быть 15.

function sumNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sumNumbers = sumNumbers + i;
    }
    console.log(sum);
}

//3.3 Обратный отсчет
// Выведи числа от 20 до 1 в обратном порядке, используя цикл while. Выводи результаты в консоль.

let i = 20;
while (i >= 1) {
    console.log(i);
    i--;
}

//Задание 4: Работа с массивами
// 4.1 Обработка оценок
// Дан массив оценок:
// const grades = [5, 4, 3, 5, 2, 4, 5];
// Напиши код, который:
// Выводит все оценки по одной
// Вычисляет сумму всех оценок
// Вычисляет среднюю оценку
// Находит и выводит максимальную оценку

const grades = [5, 4, 3, 5, 2, 4, 5];
for (let i = 0; i < grades.length; i++) {
    console.log(grades[i]);
}

let sum = 0;
for (let i = 0; i < grades.length; i++) {
sum = sum + grades[i];
console.log(sum);
}

let max = grades[0];
for (let i = 1; i < grades.length; i++) {
    if (grades[i] > max) {
        max = grades[i];
    }
}
console.log(max);

//4.2 Фильтрация четных чисел
// Дан массив чисел:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Напиши код, который выводит только четные числа из массива. Используй цикл for.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i])
    }
}

//Задание 5: Объекты в JavaScript
// 5.1 Объект студента
// Создай объект student со свойствами:
// name (строка)
// age (число)
// courses (массив с названиями курсов)
// isActive (boolean)
// Затем выполни:

const student = {
    name: "Kuba",
    age: 28,
    course: ["frontend", "Sales manager", "graphic design"],
    isActive: true
};
console.log(student);

student.age += 1;
for (let i = 0; i < student.course.length; i++) {
    console.log(student.course[i]);
}

//5.2 Объект товара
// Создай объект product со свойствами: name, price, quantity
// Напиши функцию getTotalCost(product), которая:
// Принимает объект товара
// Вычисляет стоимость (price × quantity)
// Выводит результат

const product = {
    name: "Pocari sweet",
    price: 50,
    quantity: 5
}

function getTotalCost(product) {
    console.log(product.price * product.quantity);
}
getTotalCost(product);

//5.3 Массив объектов
// Создай массив books с тремя объектами. Каждый объект имеет: title, author, year
// Напиши код, который:
// Выводит информацию о каждой книге
// Находит и выводит самую старую книгу (по году)

const books = [{
    title: "Бумажная девушка",
    author: "Гийом Мюссо",
    year: 2012
    },
    {
      title: "Охота на овец",
      author: "Харуки Мураками",
      year: 1982
    },
    {
        title: "Кладбище домашних животных",
        author: "Стивен Кинг",
        year: 1983
    }
];
console.log(books);


//7.1 Список дел
// Создай HTML страницу для списка дел:
// Поле ввода (input) с id="taskInput"
// Кнопка (button) с id="addBtn" и текстом "Добавить"
// Элемент ul с id="taskList" для списка
// Напиши JavaScript код:
// При клике на кнопку берет текст из input
// Добавляет новый элемент li в список
// Очищает поле ввода после добавления

const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", function () {
    const taskText = taskInput.value;
    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    taskInput.value = "";
})

//7.2 Переключатель темы
// Создай HTML страницу с:
// Кнопка (button) с id="themeBtn" и текстом "Темная тема"
// Элемент body или div с id="mainContent"
// Напиши JavaScript код:
// При клике на кнопку изменяется фон (светлый/темный)
// Текст кнопки меняется ("Светлая тема" или "Темная тема")
// Можно менять цвет текста для контраста

const mainContent = document.querySelector("#mainContent");
const themeBtn = document.querySelector("#themeBtn");

let isDark = false;
themeBtn.addEventListener("click", function () {
    if (isDark === false);
    mainContent.style.backgroundColor = "#7c6b6b";
    isDark = true;
    addBtn.style.backgroundColor = "#ccc8b8";
    themeBtn.style.backgroundColor = "#ccc8b8";
    taskInput.style.color = "#000000FF";
    taskInput.style.backgroundColor = "#e1b70e";
})