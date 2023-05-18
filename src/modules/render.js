const scoresTable = document.querySelector('.recentScores');

const renderScores = (scoreList) => {
  let renderText = '';
  scoreList.forEach((score) => {
    renderText += `
          <li class="score-list">${score.user}: ${score.score}</li>
        `;
  });
  scoresTable.innerHTML = renderText;
};

export default renderScores;