//Задание 8.


let map = new Map();
map.set("1", "true");
map.set(1, "bigWin");
map.set(true, "777");

map.forEach((value, key) => {
    console.log(`<< Ключ - ${key}, значение - ${value} >>.`);
});