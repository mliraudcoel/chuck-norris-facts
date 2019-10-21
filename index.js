const url = 'https://api.chucknorris.io/jokes/random'
document.getElementById("joke").addEventListener("click", function(){
    axios.get(url)
    .then(function(response) {
        return response.data;
    })
    .then(function(quote) {
        const quoteHtml = `
        <img src = "${quote.icon_url}" />
        <p>${quote.value}</p> `
        ;
        document.querySelector("#chuck-norris").innerHTML = quoteHtml;
    });
});

fetchquoteHtml();









