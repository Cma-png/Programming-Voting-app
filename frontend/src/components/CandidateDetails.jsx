import React from 'react';
import { useLocation } from 'react-router-dom';

const CandidateDetails = () => {

    const {state} = useLocation();
    const candidate = state.candidate;

    return (
        <div className='fab'>
        <h1>Language: {candidate.name}</h1>
        <p>Number of Votes: {candidate.count}</p>
        <p>Vote ID: {candidate.id}</p>
        <p>This is the details page of Candidate {candidate.name}. You may enhance it by adding the details in the API.</p>
        <p><img src={candidate.img} /></p>
        </div>
    );
    };

export default CandidateDetails;
