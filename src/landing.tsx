import React from "react";
import { useNavigate } from "react-router-dom";
import "./leetstreak.css";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const sen1 = [
    { text: "It's", className: "white" },
    { text: " hard ", className: "yellow" },
    { text: "to hold ourselves accountable.", className: "white" },
  ];
  const sen2 = [
    { text: "That's why you have Leet", className: "white" },
    { text: "Streak", className: "yellow" },
    { text: ".", className: "white" },
  ];
  const sen3 = [
    //{ text: "", className: "white" },
    { text: " Ignite ", className: "yellow" },
    { text: "that motivation and better your peers.", className: "white" },
  ];

  return (
    <div>
      <h1>
        <span className="white">Leet</span>
        <span className="yellow">Streak</span>
        <button className="login" onClick={() => navigate("/getstarted.tsx")}>
          Log In
        </button>

        <button className="signup" onClick={() => navigate("/getstarted.tsx")}>
          Sign Up
        </button>
      </h1>
      <img src="gray_square.png" align="right"></img>
      <h2>
        {sen1.map((word, index) => (
          <span key={index} className={word.className}>
            {word.text}
          </span>
        ))}
        <br></br>
        <br></br>
        {sen2.map((word, index) => (
          <span key={index} className={word.className}>
            {word.text}
          </span>
        ))}
        <br></br>
        <br></br>
        {sen3.map((word, index) => (
          <span key={index} className={word.className}>
            {word.text}
          </span>
        ))}
        <br></br>
      </h2>
      <button
        className="getStartedBig"
        onClick={() => navigate("/getstarted.tsx")}
      >
        Get Started!
      </button>
      <h3>
        <button className="about" onClick={() => navigate("/about.tsx")}>
          About
        </button>
      </h3>
    </div>
  );
};

export default Landing;
