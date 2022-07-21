// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

askButton.addEventListener('click', () => {
  const userQuestion = userQuestion.value;


  questionDisplay.textContent = userQuestion;  


  questionSection.classList.add('hidden');
  answerSection.classList.remove('hidden');

});
  
let userName = "";

userName ? console.log(`Hello, ${userName}`) : console.log('Hello');

let userQuestion = "";

console.log(`${userName} asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 21);

let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Without a doubt';
    
    break;
  case 3:
    eightBall = 'Yes, definitely';
    
    break;
  case 4:
    eightBall = 'You may rely on it';
    
    break;
  case 5:
    eightBall = 'As I see it, yes';
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Most likely';
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Outlook good';
    eightBall = 'Signs point to yes';
    break;
  case 8:
    eightBall = 'Yes';
    eightBall = 'Very doubtful';
    break;
  case 9:
    eightBall = 'Signs point to yes';
    eightBall = 'Cannot predict now';
    break;
  case 10:
    eightBall = '';
    break;
  case 11:
    eightBall = 'Reply hazy try again';
    eightBall = 'You may rely on it';
    break;
  case 12:
    eightBall = 'Ask again later';
    break;
  case 13:
    eightBall = ''
    break;
  case 14:
    eightBall = 'My sources say no';
    break;
  case 15:
    eightBall = '';
    break;
  case 16:
    eightBall = '';
    break;
  case 17:
    eightBall = '';
    break;
  case 18:
    eightBall = '';
    break;
  case 19:
    eightBall = '';
    break;
  case 20:
    eightBall = '';
    break;
}

console.log(`The Magic 8 Ball answered: ${eightBall}`);