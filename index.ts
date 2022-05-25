let jokeElement: any;
let joke:any;
async function generateJoke () {
    const config = {
         headers: {
             'Accept': 'application/json' 
         }
     };
     const res = await fetch ('https://icanhazdadjoke.com/', config);
     const data = await res.json();
     jokeElement = <HTMLInputElement>document.getElementById("joke");
    jokeElement.innerHTML = data.joke;
    joke = data.joke;
    console.log(data.joke)
    return data.joke
}

let reportAcudits: Joke[] = [];
const d = new Date()
let date = d.toISOString().split('T')[0];

class Joke{
    joke: string;
    score: any;
    date: string;
    constructor(joke:string,score:string,date:string){
       this.joke = joke;
       this.score = score;
       this.date = date;
       return {joke,score,date};
    }
}

let score: any ="0";
let newJoke = new Joke (joke, score, date);

function loadScore(rang:number){
    if(rang===1){
        score = "1";
        newJoke = new Joke(joke, score, date);
        reportAcudits.push(newJoke);
        generateJoke();
        console.log(reportAcudits)
        
    }if(rang===2){
        score = "2";
        newJoke = new Joke(joke, score, date);
        reportAcudits.push(newJoke);
        generateJoke();
        console.log(reportAcudits)
    }
    if(rang===3){
        score = "3";
        newJoke = new Joke(joke, score, date);
        reportAcudits.push(newJoke);
        generateJoke();
        console.log(reportAcudits)
    }

    return score;
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




