
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

// document.addEventListener('DOMContentLoaded', () => {
//     const refresh = document.getElementById('refreshBttn');
//     const addForm = document.getElementById('addBttn');
//     const inputName = document.getElementById('userName');
//     const inputScore = document.getElementById('userScore');
  
//     const scoresTable = document.querySelector('.recentScores');
  
//     let newList; // Declare newList variable here
  
//     const renderScores = (scoreList) => {
//       let renderText = '';
//       scoreList.forEach((score) => {
//         renderText += `
//           <span>${score.user}: ${score.score}</span>
//         `;
//       });
//       scoresTable.innerHTML = renderText;
//     };
  
//     const API = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lkFVlzzFESZJeKvO1IuQ/scores/';
    
  
//     const getScores = async () => {
//       const response = await fetch(API);
//       const jsonData = await response.json();
//       return jsonData.result;
//     };
  
//     const addScore = async (user, score) => {
//       const newScore = {
//         user,
//         score,
//       };
//       const response = await fetch(API, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newScore),
//       });
//       const jsonData = await response.json();
//       return jsonData.result;
//     };
  
//     const renderListOnload = async () => {
//       newList = await getScores(); // Assign value to newList
//       renderScores(newList);
//     };
  
//     window.onload = renderListOnload();
  
//     refresh.addEventListener('click', async () => {
//       newList = await getScores(); // Update newList with the latest scores
//       renderScores(newList);
//     });
  
//     addForm.addEventListener('click', async (e) => {
//       e.preventDefault();
//       await addScore(inputName.value, inputScore.valueAsNumber);
//       inputName.value = '';
//       inputScore.value = '';
//       newList = await getScores();
//       renderScores(newList);
//     });
//   });
  