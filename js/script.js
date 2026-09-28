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
        sum = sum + i;
    }
    console.log(sum);
}