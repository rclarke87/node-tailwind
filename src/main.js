import { v4 as uuidv4 } from 'uuid';

const button = document.getElementById('btn');
const app = document.getElementById('app');

button.addEventListener('click', () => {
  const id = uuidv4();
  const newDiv = document.createElement('div');
  newDiv.textContent = `Generated ID: ${id}`;
  app.appendChild(newDiv);
});
