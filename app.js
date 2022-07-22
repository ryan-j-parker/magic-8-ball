// import functions and grab DOM elements

// let state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state

const questionSection = document.getElementById('question-section');
const userQuestion = document.getElementById('user-question');
const askButton = document.getElementById('ask-btn');
const answerSection = document.getElementById('answer-section');
const questionText = document.getElementById('question-text');
const answerText = document.getElementById('answer-text');

const answers = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes, definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  'Don\'t count on it',
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful'
];

askButton.addEventListener('click', () => {
  const question = userQuestion.value;
  questionText.textContent = question;

  questionSection.classList.add('hidden');
  answerSection.classList.remove('hidden');

  const randomNum = Math.floor(Math.random() * answers.length);
  const randomAnswer = answers[randomNum];
  answerText.textContent = randomAnswer;
});

