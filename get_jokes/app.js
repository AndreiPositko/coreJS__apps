const getJokesBtn = document.querySelector('.get-jokes');
const numberOfJokes = document.querySelector('#number');
const listOfJokes = document.querySelector('.jokes');

getJokesBtn.addEventListener('click', getJokes);

function getJokes(e) {
   const number = numberOfJokes.value;

   const xhr = new XMLHttpRequest();

   xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

   xhr.onload = function () {
      if (this.status === 200) {
         const response = JSON.parse(this.responseText);

         let output = '';

         if (response.type === 'success') {
            response.value.forEach((joke) => {
               output += `<li>${joke.joke}{</li>`;
            });
         } else {
            output += '<li>Something went wrong</li>';
         }

         listOfJokes.innerHTML = output;
      }
   };

   xhr.send();

   e.preventDefault();
}
