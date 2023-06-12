var sayHello = "hello"

function newFunction () {
    var Hello = "hello"; // Якщо var знаходиться в функції, то її неможливо використати поза функцією
}

console.log(Hello); //Error, can't find Hello

var hello = "Hello"
hello = "Helloooooo" // В будь-який час змінну можна переоголосити та оновити і ми не отримаємо помилку
// Це не дуже добре, бо у великому коди можемо замінити ту саму змінну, що призведе до помилки

var greeter = "hey hi";
var times = 4;

if (times > 3) {
    var greeter = "Hello MF";
}

console.log(greeter) //"Hello MF"

// Якщо ми хочемо, щоб змінна greeter була перевизначена, то все ок. Але в інших випадках ми навіть не здогадуватимемося, що змінна зазнала перевизначення і це призведе до помилки в коді
