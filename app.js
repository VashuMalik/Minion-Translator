let textRecieved = document.querySelector("#text-recieved");
let buttonTranslate = document.querySelector("#btn-translate");
let outputText = document.querySelector("#output-text");
let url = "https://api.funtranslations.com/translate/minion.json";


function clickHandler(){
     fetch(url + "?text=" + textRecieved.value).then(response => response.json()).then(json => outputText.innerText = json.contents.translated);
}

buttonTranslate.addEventListener("click",clickHandler);