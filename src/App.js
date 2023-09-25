// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Quizaction from './quizaction'

// import Quiz from './quiz'
// function App() {
//   return (

//     <div className="App">

// <Quiz/>
// <Quizaction/>

//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './index.css'
const App = () => {
  const questions = [
    {
      questionText: 'What is the capital of France? ',
      answerOptions: [
        {  answerText: 'London', isCorrect: false },
        { answerText: 'Berlin', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Madrid', isCorrect: false },
      ],
    },
    {
      questionText: 'Which planet is known as the Red Planet?',
      answerOptions: [
        { answerText: 'Earth', isCorrect: false },
        { answerText: 'Mars', isCorrect: true },
        { answerText: 'Venus', isCorrect: false },
        { answerText: 'Jupiter', isCorrect: false },
      ],
    },
    // Add more questions here
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
                                               
  const restartQuiz = () => { 
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <button  className="btn" onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              Question {currentQuestion + 1} / {questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  ); 
};

export default App;

