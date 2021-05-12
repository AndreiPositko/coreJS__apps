const btn = document.querySelector('#button');
const output = document.querySelector('#output');

console.log(output);

btn.addEventListener('click', loadData);

function loadData() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'data.txt', true);

  console.log('READY STATE', xhr.readyState);

  xhr.onprogress = function () {
    console.log('READY STATE', xhr.readyState);
  };

  xhr.onload = function () {
    console.log('READY STATE', xhr.readyState);
    if (this.status === 200) {
      //   console.log(this.responseText);
      output.innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  //   xhr.onreadystatechange = function () {
  //     console.log('READY STATE', xhr.readyState);
  //     if (this.status === 200 && this.readyState === 4) {
  //       console.log(this.responseText);
  //     }
  //   };

  xhr.onerror = function () {
    console.log('Reequest error...');
  };

  xhr.send();
}
