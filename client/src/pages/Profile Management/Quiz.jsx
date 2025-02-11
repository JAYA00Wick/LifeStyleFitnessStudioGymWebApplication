import arrow from "../../assets/RedArrow.png";
import m0 from "../../assets/Qm.jpg";
import m1 from "../../assets/model.jpg";
import m2 from "../../assets/dumbels.jpg";
import m3 from "../../assets/ModelBack.png";
import m4 from "../../assets/Weights.png";
import m5 from "../../assets/mma.jpg";
import m6 from "../../assets/Sit.png";
import m7 from "../../assets/MB.jpg";
import m8 from "../../assets/Sit.png";
import m9 from "../../assets/Weights.png";
import maleIcon from "../../assets/selMaMod.jpg";
import femaleIcon from "../../assets/selLadMod.jpg";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";

const backgroundImg = [m0, m1, m2, m3, m4, m5, m6, m7, m8, m9];

const questions = [
  {
    id: 1,
    question: "Select Your Age",
    options: ["Age : 18 - 29", "Age : 30 - 39", "Age : 40 - 49", "Age : 50+"],
  },
  {
    id: 2,
    question: "Select Your Gender",
    options: ["Male", "Female"],
  },
  {
    id: 3,
    question: "How tall are you",
    answer: [],
  },
  {
    id: 4,
    question: "Whats your weight",
    answer: [],
  },
  {
    id: 5,
    question: "Whats your systolic blood Pressure ?",
    answer: [],
  },
  {
    id: 6,
    question: "whats your diastolic blood pressure?",
    answer: [],
  },
  {
    id: 7,
    question: "whats your Cholesterol Level?",
    answer: [],
  },
  {
    id: 8,
    question: "whats your Glucose Level?",
    answer: [],
  },
  {
    id: 9,
    question: "Do you smoke?",
    options: ["Yes", "No"],
  },
  {
    id: 10,
    question: "Do you consume alcohol?",
    options: ["Yes", "No"],
  },
];

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [backgroundImage, setBackgroundImage] = useState(backgroundImg[0]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null || currentQuestion >= 3) {
      if (currentQuestion >= 3) {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = selectedOption;
        setAnswers(newAnswers);
      }
      if (currentQuestion === questions.length - 1) {
        // Redirect when reaching the last question
        navigate("/UserExercises");
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setBackgroundImage(backgroundImg[currentQuestion + 1]);
      }
    }
  };
  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
      setBackgroundImage(backgroundImg[currentQuestion - 1]); // Change background image
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen ">
      <img
        src={backgroundImage}
        className="absolute w-full h-full object-cover align-center scale-y-[-1] rotate-180 lg:object-center "
        alt="Background"
      />
      <div className="bg-black bg-opacity-40 rounded-[20px] border border-stone-800 backdrop-blur-sm justify-center shadow-lg backdrop filter relative p-5">
        <div className=" p-8 ">
          <div className="mb-12 flex justify-center">
            <h2 className="text-xl text-balance text-center">
              {questions[currentQuestion].question}
            </h2>
          </div>
          <div>
            {currentQuestion >= 2 && currentQuestion <= 7 ? (
              <div className="flex justify-center">
                <input
                  type="text"
                  className=" text-gray-400 bg-transparent border-b-2 border-gray-400"
                  placeholder="Enter a value"
                  value={selectedOption || answers[currentQuestion]}
                  onChange={(e) => handleOptionSelect(e.target.value)}
                />
              </div>
            ) : currentQuestion === 1 ? (
              <div className="flex flex-wrap items-center ">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`button ${
                      selectedOption === option
                        ? "scale-150 drop-shadow-lg"
                        : "opacity-100"
                    }flex flex-row items-center m-4 lg:m-6`}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {/* Add images for buttons at the first index */}
                    {index === 0 && (
                      <img
                        src={maleIcon}
                        className="w-20 h-20 rounded-[10px] "
                        alt="Male Icon"
                      />
                    )}
                    {index === 1 && (
                      <img
                        src={femaleIcon}
                        className="w-20 h-20 rounded-[10px]"
                        alt="Female Icon"
                      />
                    )}
                    {option}
                  </button>
                ))}
              </div>
            ) : (
              questions[currentQuestion].options.map((option, index) => (
                <div key={index}>
                  <label className="flex justify-center">
                    <button
                      type="button"
                      className={`button ${
                        selectedOption === option
                          ? "bg-orange-700"
                          : "bg-orange-600"
                      } rounded-[15px] w-40 h-7 cursor-pointer flex justify-center mb-3`}
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option}
                    </button>
                  </label>
                </div>
              ))
            )}
          </div>
          <div className=" mt-12 flex justify-between">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
              className="button"
            >
              <img
                src={arrow}
                className="w-10 h-10 hover:opacity-70"
                alt="Left Arrow"
              />
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={selectedOption === null}
              className="button"
            >
              <img
                src={arrow}
                className="w-10 h-10 rotate-180 hover:opacity-70"
                alt="Right Arrow"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
