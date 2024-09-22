const ul = document.querySelector(".people");

const people = ['Mario', 'Luigi', 'ryu', 'Shaun', 'Chun-li'];

let html = ``;

people.forEach( person => html += `<li>${person}</li>`);

console.log(html);