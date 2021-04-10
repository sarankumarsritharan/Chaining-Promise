let randomuri = "https://random-word-api.herokuapp.com/word?number=1";
let developergi = "https://api.giphy.com/v1/gifs/search?api_key=qaZLaujYjO1NwvfVKqkvpHNWAzw8FlhO";

fetch(randomuri)
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        let word = result[0];
        return fetch(developergi + "&q=" + word);
    })
    .then((data) => {
        return data.json();
    })
    .then((dataresult) => {
        // var gif = (dataresult.data[0].images.original.url)
        // var pic = document.createElement("h1")
        // // pic.innerHTML = gif
        // // document.querySelector("body").append(pic)
        image(dataresult.data[0].images.original.url)

    })
    .catch((err) => {
        console.log(err);
    })


function image(e) {
    let object = document.getElementById("obj")
    object.setAttribute('data', e)
    document.body.append(object)


}