const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles']; // Масив
const addLastElement = shopping.push("cat"); // Додавання елементу в кінці масиву
const addFirstElement = shopping.unshift("cat"); // Додавання елементу в початок масиву

// ВИДАЛЕННЯ ЕЛЕМЕНТІВ З МАСИВУ 

const deleteLastElement = shopping.pop(); // Видалення елементу в кінці масиву
const deleteFirstElement = shopping.shift(); // Видалення елементу на початку масиву

// ОБ'ЄДНАННЯ МАСИВІВ

const whatBying = shopping.concat(shoppingList);
const whatByingToo = shopping.concat(shoppingList, foods); // Об'єднання кількох масивів

// Знаходження індексу елементу в масиві

const index = shopping.indexOf("milk");

// ПЕРЕТВОРЕННЯ МАСИВА У РЯДОК

const flowers = ["rose", "lily", "daisies"];
const arrayToString = flowers.join();
"rose,lily,daisies"; // Результат
const arrayToStringSecond = flowers.join( - );
"rose - lily - daisies"; // Результат

// ГЕНЕРАТОР ВИПАДКОВИХ ЧИСЕЛ ТА СЛІВ

const randomBodyPart = ["Head", "sholders", "knees"];
const randomWord = ["Nasty", "big", "Huge"];
const randomParts = randomBodyPart[Math.floor(Math.random() * 2)];
const randomWords = randomWord[Math.floor(Math.random() * 3)];
const generator = "Your" + randomParts + "Like a" + randomWords;


