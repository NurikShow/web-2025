/** defining variables for html elements */

/**navigation variables */
var burger = document.getElementById("burger_nav");
var snacks = document.getElementById("snaks_nav");
var hot_dogs = document.getElementById("hot_dogs_nav");
var combo = document.getElementById("combo_nav");
var shawerma = document.getElementById("shawerma_nav");
var pizza = document.getElementById("pizza_nav");
var wok = document.getElementById("wok_nav");
var desesrts = document.getElementById("desesrts_nav");
var sauces = document.getElementById("sauces_nav");
/**end of nav variables */

var nav_list = [burger, snacks, hot_dogs, combo, shawerma, pizza, wok, desesrts, sauces]

var meal_header = document.getElementById("meal_header");

var cart_placeholder = document.getElementById("cart_placeholder");
var cart_items = document.getElementById("cart_items");

/**navigation panel functions */

function burger_nav(){
    change_all_colors();
    burger.style.backgroundColor = "#FFAB08";

    meal_header.innerText = "Бургеры";
}

function snaks_nav(){
    change_all_colors();
    snacks.style.backgroundColor = "#FFAB08";

    meal_header.innerText = "Закуски";
}

function hot_dogs_nav(){
    change_all_colors();
    hot_dogs.style.backgroundColor = "#FFAB08";

    meal_header.innerText = "Хот-доги";
}

function combo_nav(){
    change_all_colors();
    combo.style.backgroundColor = "#FFAB08";

    meal_header.innerText = "Комбо";
}

function shawerma_nav(){
    change_all_colors();
    shawerma.style.backgroundColor = "#FFAB08";

    meal_header.innerText = "Шаурма";
}

function pizza_nav(){
    change_all_colors();
    pizza.style.backgroundColor = "#FFAB08";

    meal_header.innerText = "Пицца";
}

function wok_nav(){
    change_all_colors();
    wok.style.backgroundColor = "#FFAB08";

    meal_header.innerText = "Вок";
}

function desesrts_nav(){
    change_all_colors();
    desesrts.style.backgroundColor = "#FFAB08";

    meal_header.innerText = "Десерты";
}

function sauces_nav(){
    change_all_colors();
    sauces.style.backgroundColor = "#FFAB08";

    meal_header.innerText = "Соусы";
    cart_placeholder.innerText = "";
    cart_placeholder.style.height = "0";
}

/**Change color of buttons */
function change_all_colors(){
    nav_list.forEach(element => {
        element.style.backgroundColor = "#FFFFFF";
    });
}

/**end of nav functions */

