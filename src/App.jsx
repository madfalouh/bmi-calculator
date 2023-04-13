import { useRef, useState } from "react";
import "./App.css";

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

  const [inputHeight, setInputHeight] = useState('');

  const [inputWeight, setInputWeight] = useState('');

  const handleInputChange = (event) => {
    const regex = /^\d*\.?\d{0,2}$/;

    if (regex.test(event.target.value) || event.target.value === '') {
      setInputHeight(event.target.value);
    }
  };


  const handleInputChangeWeight = (event) => {
    const regex = /^\d*\.?\d{0,2}$/;

    if (regex.test(event.target.value) || event.target.value === '') {
      setInputWeight(event.target.value);
    }
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
          <div class="outer">
            <div class="loader">
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
        <div  className="input-section" >
        <p>Height</p>

             <input value={inputHeight} onChange={handleInputChange}  required />


        <p>Weight</p>

             <input value={inputWeight} onChange={handleInputChangeWeight}  required />

</div>
        <button>Continue!</button>
      </div>
    </div>
  );
}

export default App;
