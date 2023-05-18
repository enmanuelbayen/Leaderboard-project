const API = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2Y0RSF7ZdpcS3CzXNNk5/scores/';

const getScores = async () => {
  const response = await fetch(API);
  const jsonData = await response.json();
  return jsonData.result;
};

const addScore = async (user, score) => {
  const newScore = {
    user,
    score,
  };
  const response = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newScore),
  });
  return response.json();
};

export { getScores, addScore };