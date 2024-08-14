import React, { useState, useContext } from "react";
import { MyContext } from "./VotingAPI";
import { useNavigate } from "react-router-dom";
import { Button, Paper } from '@mui/material';

const Candidate = (props) => {

  const updateLoading = useContext(MyContext);
  const navigate = useNavigate();

  const showDetails = () => {
    navigate("/Details", { state: { candidate: props } });
  };

  // add vote
  const incrementVote = async (id) => {
    await fetch("http://localhost:3001/poll", {
      method: "post",
      body: `id=${ id }`,
      headers: {
          "Content-Type": "application/x-www-form-urlencoded"
      }
  })
    updateLoading(true);
  };

  return (
    <Paper variant="elevation" square={false} elevation={4} sx={{margin: '0 auto', marginBottom:"50px", width:"80%", backgroundColor: "pink"}} >
          <div className="card-item">
            <div className="card-item-cursor" onClick={showDetails}>
              {props.count}
              <h3>
                {props.name}<i className="fab"></i>
              </h3>
              <img className="img" src={props.img} />
            </div>
            <Button sx={{ margin: 2, backgroundColor: "orange"}} size='large' color='primary' variant="outlined" type="submit" onClick={() => incrementVote(props.id)} >Vote Here</Button>
          </div>
      </Paper>
  );
  };

export default Candidate;