let jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
jokeBtn?.addEventListener("click", generateJoke);
generateJoke ()
async function generateJoke () {
    const config = {
         headers: {
             'Accept': 'application/json'
         }
     };
     const res = await fetch ('https://icanhazdadjoke.com/', config);
     const data = await res.json();
     jokeElement = data.joke;
     jokeElement = document.getElementById("joke")?.innerHTML;
     console.log (data.joke)
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




