import './style.css';
import { getScores, addScore } from './modules/fetch.js';
import renderScores from './modules/render.js';

const refresh = document.getElementById('refreshBttn');
const addForm = document.getElementById('addBttn');
const inputName = document.getElementById('userName');
const inputScore = document.getElementById('userScore');

let newList;

const renderListOnload = async () => {
  newList = await getScores();
  renderScores(newList);
};

window.onload = renderListOnload();

refresh.addEventListener('click', async () => {
  newList = await getScores();
  renderScores(newList);
});

addForm.addEventListener('click', (e) => {
  e.preventDefault();
  addScore(inputName.value, inputScore.valueAsNumber);
  inputName.value = '';
  inputScore.value = '';
});
