"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
jokeBtn === null || jokeBtn === void 0 ? void 0 : jokeBtn.addEventListener("click", generateJoke);
generateJoke();
function generateJoke() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const config = {
            headers: {
                'Accept': 'application/json'
            }
        };
        const res = yield fetch('https://icanhazdadjoke.com/', config);
        const data = yield res.json();
        jokeElement = data.joke;
        jokeElement = (_a = document.getElementById("joke")) === null || _a === void 0 ? void 0 : _a.innerHTML;
        console.log(data.joke);
    });
}
/*let url = 'https://icanhazdadjoke.com/slack';
fetch(url)
 .then(response => response.json())
 .then(data => mostrarData(data))
 .catch(error => console.log(error))

const mostrarData = (data: string) => {
    console.log(data)
    console.log (data.attachments[0].text)

    let myContainer = document.getElementById('joke') as HTMLInputElement;
    myContainer.value = data.attachments[0].text;
    
 }
 const printJokes = document.getElementById("jokePrint");

 async function callAPI(){
     const jokeData =  await fetch ('https://icanhazdadjoke.com/', {
         headers: {
             'Accept': 'application/json'
         }
     });
     const jokeObj = await jokeData.json();
 
     
     console.log(jokeObj); // Exercise 1.
 }
 callAPI();*/
