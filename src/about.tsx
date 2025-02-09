import React from "react";
import { useNavigate } from "react-router-dom";
import "./leetstreak.css";

const About: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>
        <span className="white">Leet</span>
        <span className="yellow">Streak</span>
        <button
          className="getStartedBig"
          onClick={() => navigate("/getstarted.tsx")}
        >
          Let's Go!
        </button>
      </h1>
    </div>
  );
};

export default About;
