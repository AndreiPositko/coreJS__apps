const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const output = document.querySelector('#output');

button1.addEventListener('click', getText);
button2.addEventListener('click', getJSON);
button3.addEventListener('click', getExternalAPI);

//Get local txt file
function getText() {
   fetch('test.txt')
      .then((res) => res.text())
      .then((data) => (output.innerHTML = data))
      .catch((err) => console.log(err));
}

//Get local json file
function getJSON() {
   fetch('posts.json')
      .then((res) => res.json())
      .then((data) => {
         console.log(data);
         let outputInner = '';
         data.forEach((item) => {
            outputInner += `<li>${item.title}</li>`;
         });
         output.innerHTML = outputInner;
      });
}

//Get from external API
function getExternalAPI() {
   fetch('https://api.github.com/users')
      .then((res) => res.json())
      .then((data) => {
         console.log(data);
         let innerOutput = '';
         data.forEach((user) => {
            innerOutput += `<li>${user.login}</li>`;
         });
         output.innerHTML = innerOutput;
      });
}
