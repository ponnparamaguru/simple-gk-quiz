import React, { useState } from 'react';
import {Data} from '../data/Data'

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false); 


  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    
    if (selectedOption === Data[currentQuestion].answer) {
      setScore(score + 1);
    }
    
    setSelectedOption(null);
    setCurrentQuestion(currentQuestion + 1);

    if (currentQuestion === Data.length - 1) {
      setQuizCompleted(true);
    }
  };

  return (
    <div className='w-full h-screen bg-yellow-300 relative flex justify-center items-center'>
    
      {currentQuestion < Data.length ? (
        <div className='bg-yellow-50 md:w-7/12 md:h-5/6 h-5/6 w-11/12 rounded-3xl border-4 border-black relative'>
            <div className='p-10'>
            <h1 className='md:text-6xl text-4xl font-bold'>Q{currentQuestion+1}:<span className='md:text-4xl text-3xl font-normal'>{" "+Data[currentQuestion].question}</span></h1>
          <div className='flex justify-center'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:bottom-24 bottom-24 absolute">
            {Data[currentQuestion].options.map((option, i) => (
              <button
                key={i}
                className={`text-xl capitalize rounded-xl border-4 border-black px-20 py-5 flex justify-center items-center ${selectedOption === i+1 ? 'bg-green-200  element-click':'bg-violet-200 element'}`}
                onClick={() => handleOptionSelect(i+1)}
              >
                {option}
              </button>
            ))}
          </div>
          </div>
          <button
            className='w-24 h-10 bg-green-300 text-xl rounded-lg border-4 border-black element flex justify-center items-center absolute right-5 bottom-5'
            onClick={handleNextQuestion}
          >
            Next
          </button>
          </div>
        </div>
      ) : (
        <div className='bg-yellow-50 md:w-7/12 md:h-5/6 h-5/6 w-11/12 rounded-3xl border-4 border-black flex justify-center items-center'>
            <div className='text-center'>
                <h1 className="text-3xl font-bold mb-4">Quiz Completed! ⏳</h1>
                <h1 className="text-6xl font-bold mb-4">{score}/{Data.length}</h1>
                <h1 className="text-2xl font-bold mb-4">Your General Knowledge is {score/Data.length*100 > 50 ? "Awsome 🤩" : "Need to be Improved 🥲"} </h1>
            </div>
        </div>
      )}

      {currentQuestion < Data.length && !quizCompleted && (
        <div className='absolute top-10 md:right-60 right-10'>
          <div className='md:w-20 md:h-20 w-16 h-16 bg-pink-300 relative'>
            <div className='md:w-20 md:h-20 w-16 h-16 bg-pink-300 absolute' style={{ transform: "rotate(30deg)"}}>
              <div className='md:w-20 md:h-20 w-16 h-16 bg-pink-300 absolute flex justify-center items-center' style={{ transform: "rotate(30deg)"}}>
                <h1 className='text-5xl' style={{ transform: "rotate(-60deg)"}}>{score}</h1>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default QuizApp;
