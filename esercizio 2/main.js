const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

fetch(url).then(res => res.json().then(data => {
    console.log(data);

    const card = document.querySelector(".card");

    const drink = data.drinks[0];
    console.log(drink);

    card.querySelector("img").src = drink.strDrinkThumb;
    card.querySelector(".card-title").textContent = drink.strDrink;
    card.querySelector(".card-text").textContent = drink.strInstructionsIT

}))