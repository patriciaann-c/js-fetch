const urlUser = "https://randomuser.me/api/";
const card = document.querySelector(".card");


fetch(urlUser).then(res => res.json()).then(data => {
    console.log(data);

    const respData = data.results[0]
    const person = {
        fullname: respData.name.first + " " + respData.name.last,
        city: respData.location.city,
        country: respData.location.country,
        email: respData.email,
        useername: respData.login.username,
        password: respData.login.password,
        cell: respData.cell,
        picture: respData.picture.medium
    };

    console.log(person);

    printCard(person, card);
})


function printCard(data, card) {
    card.querySelector("img").src = data.picture;
    card.querySelector(".card-title").textContent = data.fullname;
    card.querySelector(".card-text").textContent = data.cell
}