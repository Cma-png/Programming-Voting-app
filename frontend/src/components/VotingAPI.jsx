import React, { useState, useEffect, createContext } from "react";
import Candidate from "./Candidate";
const JavaScriptImg = require('../Assets/Images/JS.png');
const PythonImg = require('../Assets/Images/Python.png');
const JavaImg = require('../Assets/Images/Java.png');
const GolangImg = require('../Assets/Images/Golang.png')

export const MyContext = createContext();

const Voting = () => {
  const [votes, setVotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateLoading = (status) => {
    setLoading(status);
  }

  // get votes
  const getVotes = async () => {

    const res = await fetch("http://localhost:3001/poll")
    const json = await res.json();
    console.log(json);
    setVotes(json);
    setLoading(false);

  };

  // get votes on page load and loading change
  useEffect(() => {
    
    console.log("useEffect called")
    getVotes();

  }, [loading]);

  return (
    <MyContext.Provider value = {updateLoading}>
      <h2>Vote Your Favourite Programming Language!</h2>
      <div className="vote-card">
        <Candidate name={ loading? "" : votes[0].option }  img={JavaScriptImg} count={loading? "" : votes[0].count} id={loading? "": votes[0].id }/>
        <Candidate name={ loading? "" : votes[1].option }  img={PythonImg} count={loading? "" : votes[1].count}  id={loading? "": votes[1].id } />
        <Candidate name={ loading? "" : votes[2].option }  img={JavaImg} count={loading? "" : votes[2].count}  id={loading? "": votes[2].id } />
        <Candidate name={ loading? "" : votes[3].option }  img={GolangImg} count={loading? "" : votes[3].count} id={loading? "": votes[3].id } />
      </div>
    </MyContext.Provider>
  );
};

export default Voting;
