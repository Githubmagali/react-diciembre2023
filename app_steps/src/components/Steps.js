import React from "react";
import { useState } from "react";


const messages = [
  {
    text: "Learn Javascript",
    image: require('./../img/1.JPG')
  },
  {
    text: "Apply for jobs",
    image: require('./../img/2.jpg')
  },
  {
    text: "Invest your new income",
    image: require('./../img/3.jpg')
  }
];

function Steps() {

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  return (
    <div className="App">
      <button className="steps-close" onClick={() => setIsOpen((is) => !is)}>X</button>

      {isOpen && (
        <div className="steps-container">
          <div className="steps-div">
            {[1, 2, 3].map((num) => (
              <div key={num} className={`active-number-container ${step === num ? "active-number" : ""}`}
                onClick={() => setStep(num)}>
                {num}
              </div>
            ))}
          </div>
      
          <StepMessage step={step} message={messages[step - 1]} />
          <div className="steps-button-conteiner">
            <button className="steps-button" onClick={handlePrevious}>Previous</button>
            <button className="steps-button" onClick={handleNext}>Next</button>
          </div>
        </div>

      )}
    </div>

  );

}
function StepMessage({ step, message }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      <p>{message.text}</p>
      <img src={message.image} alt={`Step ${step}`} />
    </div>
  );
}

export default Steps;  