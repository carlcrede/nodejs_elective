
let pizzas = 0;
$(document).click(() => {
    pizzas++;
    let oven = $("#pizza-oven");
    $(oven).append(`<strong id=pizza-${pizzas}>O</strong>`);

    if (pizzas > 5) {
        
    }
    
});

$("body").css("background-color", "yellow");