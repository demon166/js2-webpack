import { createUser } from './helpers/users';
import { sum, diff } from './test'

console.log(sum(2,5));
const user = createUser("Иван", 20, "male");

console.log(user);

const root = document.querySelector('#root');
root.innerHTML = `<h1>Имя: ${user.name}, Возраст: ${user.age}</h1>`;
