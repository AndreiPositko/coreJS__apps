const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const customer = document.querySelector('#customer');
const customers = document.querySelector('#customers');

button1.addEventListener('click', loadCustomer);
button2.addEventListener('click', loadCustomers);

function loadCustomer() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      //   console.log(this.responseText);
      const data = JSON.parse(this.responseText);
      const output = `
                  <ul>
                      <li>ID: ${data.id}</li>
                      <li>NAME: ${data.name}</li>
                      <li>COMPANY: ${data.company}</li>
                      <li>PHONE: ${data.phone}</li>
                  </ul>
              `;

      customer.innerHTML = output;
    }
  };
  xhr.send();
}

function loadCustomers() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      //   console.log(this.responseText);
      const data = JSON.parse(this.responseText);

      console.log(data);
      console.log(this.responseText);

      let output = '';

      data.forEach((customer) => {
        output += `
                  <ul>
                      <li>ID: ${customer.id}</li>
                      <li>NAME: ${customer.name}</li>
                      <li>COMPANY: ${customer.company}</li>
                      <li>PHONE: ${customer.phone}</li>
                  </ul>
              `;
      });

      customers.innerHTML = output;
    }
  };

  xhr.send();
}
