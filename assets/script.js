// variables 
var button = document.querySelector("#searchButton");
var inputValue = document.querySelector("#searchValue")


// event listener for user city input and button function
button.addEventListener("click", function () {
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=a4e8ef734851fe2e0e2435df3ed38313";
    
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })

})
