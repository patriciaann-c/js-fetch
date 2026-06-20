// const dogUrl = "https://dog.ceo/api/breeds/image/random";

// effettuiamo la richiesta
// fetch(dogUrl)
//     .then(res => res.json())  //parserizza la risposta del serve in JSON(un oggetto JS)
//     .then(data => {  //usiamo l'oggetto JS
//         console.log(data);
//         img.src = data.message;
//     })


// fetch(dogUrl)
//     .then(res => {
//         if (!res.ok) { //controlla se res.status è compreso tra 200 e 299
//             throw new Error("qualcosa non va", res.status);

//             // console.log("qualcosa non va", res.status);

//         }

//         return res.json()
//     })
//     .then(data => {
//         console.log(data);
//         img.src = data.message;
//     })
//     .catch(err => {
//         console.log(err.message);
// })
