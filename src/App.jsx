import { useRef, useState } from "react";
import React from 'react';
import './App.css'


function App() {
  const eye = useRef(null);

  const [anglee, setAngle] = useState(0);
  const [x, setX] = useState();

  const [y, setY] = useState();
  const container = useRef();

  const hudleMouseMove = (event) => {
    const posX = event.clientX - window.innerWidth / 2;
    const posY = event.clientY - window.innerHeight / 2;

    setX(posX);

    setY(posY);
  };

  const [inputHeight, setInputHeight] = useState("");

  const [inputWeight, setInputWeight] = useState("");

  const [inputInches, setInputInches] = useState("");

  const handleInputChange = (event) => {
    const regex = /^-?\d*\.?\d+$/;

    if (regex.test(event.target.value) || event.target.value === "") {
      setInputHeight(event.target.value);
    }
  };

  const handleInputChangeInches = (event) => {
    const regex = /^-?\d*\.?\d+$/;

    if (regex.test(event.target.value) || event.target.value === "") {
      setInputInches(event.target.value);
    }
  };

  const handleInputChangeWeight = (event) => {
    const regex = /^\d*\.?\d{0,2}$/;

    if (regex.test(event.target.value) || event.target.value === "") {
      setInputWeight(event.target.value);
    }
  };

  const calculateBmi = (heightFeet, heightInches, weight) => {
    if (heightFeet < 0 || heightInches < 0 || weight < 0) {
      
    }
    if ((heightFeet === 0 && heightInches === 0) || weight === 0) {
      alert("Height and weight must be valid")
      
    }

    const totalHeightInches = heightFeet * 12 + heightInches;
    const weightKg = weight * 0.45;
    const heightCm = totalHeightInches * 0.025;

    let bmi = weightKg / heightCm ** 2;
    bmi = parseFloat(bmi.toFixed(1));

    let category;

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal weight";
    } else if (bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }



if(!isNaN(bmi)){
alert(" \n Your BMI is :" + bmi + "  you are " + category);
 return { bmi, category };
}else{
alert("Enter a valid value");
}

    



   
  };

  const hundleSubmit = () => {
    calculateBmi(
      Number(inputHeight),
      Number(inputInches),
      parseFloat(inputWeight)
    );
  };

  return (
    <div
      className="container"
      onMouseMove={(e) => {
        hudleMouseMove(e);
      }}
    >
      <div className="form-container">
        <div ref={container}>
          <div className="outer">
            <div className="loader">
              <span>
                {" "}
                <div
                  className="eye"
                  style={{
                    transform:
                      "translate(" + x * 0.05 + "%, " + y * 0.05 + "%)",
                  }}
                  ref={eye}
                ></div>{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="input-section">
          <p>Height in foot</p>

          <input value={inputHeight} onChange={handleInputChange} required  placeholder="Height in foot" />

          <p>Height in iches</p>

          <input
            placeholder="Height in inches"
            value={inputInches}
            onChange={handleInputChangeInches}
            required
          />

          <p>Weight</p>

          <input
            placeholder='Weight'
            value={inputWeight}
            onChange={handleInputChangeWeight}
            required
          />
        </div>
        <button data-testid="continue-button" onClick={hundleSubmit}>
          Continue!
        </button>
      </div>
    </div>
  );
}

export default App;
