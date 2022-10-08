// ОБ'ЄКТ

let cat = {
    "legs": 3,
    "name": "jsut cat",
    age: "3 month" // МОЖНА БЕЗ ЛАПОК, АЛЕ ТОДІ НЕМОЖНА СТАВИТИ ПРОБІЛ
};

// ДОБУВАННЯ ЗНАЧЕННЯ З ОБ'ЄКТА

cat["name"]; // ЯКЩО Є ПРОБІЛИ В КЛЮЧІ
cat.name; // ЯКЩО НЕМАЄ ПРОБІЛІВ В КЛЮЧІ
Object.keys(cat); // ВИДОБУТТЯ УСІХ КЛЮЧІВ

// ДОДАВАННЯ ЗНАЧЕННЯ ДО ОБ'ЄКТА

cat["legs"] = 3;
cat["name"] = "just cat"; // ДОДАВАННЯ ЗНАЧЕННЯ

cat.legs = 3;
cat.name = "just cat"; // ДОДАВАННЯ ЗНАЧЕННЯ ЧЕРЕЗ КРАПКУ

Object {legs: 3, name: "just cat", age: "3 month"}; // КЛЮЧІ НЕ Є ПОСЛІДОВНИМИ В ОБ'ЄКТІ ЯК В МАСИВІ

// ПОЄДНАННЯ МАСИВУ ТА ОБ'ЄКТА

var cars = [
    { name: "BMW", color: "black"},
    { name: "Lamba", color: "purple"},
    { name: "Lexus", color: "white"}
];

cars[0];
{ name: "BMW", color: "black"}; // ЗНАХОДЖЕННЯ ЗНАЧЕННЯ ПЕРШОГО ОБ'ЄКТУ
cars[0]["name"]; // ЗНАХОДЖЕННЯ ПЕРШОГО ЗНАЧЕННЯ
cars[0].name; // ЗНАХОДЖЕННЯ ЗНАЧЕННЯ ЗА ДОПОМОГОЮ КРАПКИ

// МАСИВ ДРУЗІВ

let bohdan = { name: "Bohdan", age: 23, passwords: [321, "goodMoon"] };
let christina = { name: "Christina", age: 12, passwords: [21, "iLoveYou"] };
let daryna = { name: "Daryna", age: 34, passwords: ["solovei", 843] };

let friends = [bohdan, christina, daryna]; // СТВОРЮЄМО МАСИВ З ДРУЗІВ

friends[1].passwords[1];

// ВЕДЕННЯ ПЕРСОНАЛЬНОЇ БУХГАЛТЕРІЇ

var owedMoney = {}; // СТВОРЕННЯ БУХГАЛТЕРІЇ
owedMoney["Bohdan"] = 10; // додавання учасників
owedMoney["Volodya"] = 5;
owedMoney["bohdan"] += 15; // додавання значення

// ВЕДЕННЯ ДОМАШНЬОЇ БУХГАЛТЕРІЇ

let homeAccounting = {
    "Products": {
        "vegetables": 0,
        "meet": 0
    },
    "clothes": {
        "main": 0
    },
    "Untility payments": {
    }
};

homeAccounting.income