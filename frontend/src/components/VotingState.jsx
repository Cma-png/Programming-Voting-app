import React, { useState } from "react";
import Candidate from "./Candidate";
const JavaScriptImg = require('../Assets/Images/JS.png');
const PythonImg = require('../Assets/Images/Python.png');
const JavaImg = require('../Assets/Images/Java.png');
const GolangImg = require('../Assets/Images/Golang.png')

const Voting = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const increment1 = () => setCount1(count1 + 1);
  const increment2 = () => setCount2(count2 + 1);
  const increment3 = () => setCount3(count3 + 1);
  const increment4 = () => setCount4(count4 + 1);

  return (
    <>
      <h2>Vote Your Favourite Programming Language!</h2>
      <div className="vote-card">
        <Candidate name='JavaScript' img={JavaScriptImg} count={count1} action={increment1} />
        <Candidate name='Python' img={PythonImg} count={count2} action={increment2} />
        <Candidate name='Java' img={JavaImg} count={count3} action={increment3} />
        <Candidate name='Golang' img={GolangImg} count={count4} action={increment4} />
      </div>
    </>
  );
};

export default Voting;
