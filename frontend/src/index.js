import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Voting from "./components/VotingAPI";
import './styles.css';
import CandidateDetails from "./components/CandidateDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Voting />} />
      <Route path="/Details" element={<CandidateDetails />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();