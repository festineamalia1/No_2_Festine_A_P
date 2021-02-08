import React, { useState, useEffect } from "react";
import GamerPg1 from "components/Gamer1";
import GamerPg2 from "components/Gamer2";
import PlayPg from "components/Play";
import { Button } from "react-bootstrap";
const GamerPage = () => {
  
  const [isChoice, setChoice] = useState();
  const [score, setScore] = useState(0);
  const [isChoice2, setChoice2] = useState();
  const Result = () => {
    if (isChoice === "batu" && isChoice2 === "gunting") {
      setScore(score + 1);
    } else if (isChoice === "gunting" && isChoice2 === "kertas") {
      setScore(score + 1);
    } else if (isChoice === "kertas" && isChoice2 === "batu") {
      setScore(score + 1);
    } 
  };
   useEffect(() => {
    Result();
   }, []);
   const [counter, setCounter] = useState(3);
   
   const newChoice = () => {
     const isChoice = ["batu", "kertas", "gunting"];
     setChoice(isChoice[Math.floor(Math.random() * isChoice.length)]);
   };
   useEffect(() => {
      const timer =
        counter > 0
          ? setInterval(() => {
              setCounter(counter - 1);
            }, 1000)
          : newChoice();

      return () => {
        clearInterval(timer);
      };
     
   }, []);
  return (
    <div className="container">
      <div className="col">
        <div className="row mt-5">
          <h1> Rock Paper Scissors</h1>
        </div>

        <div className="row mt-3">
          <GamerPg1 score={score} pilihan={setChoice} gambar={isChoice} />
          <div className="col mt-2">
            <GamerPg2 pilihan2={setChoice2} gambar2={isChoice2} />
          </div>
          <Button
            variant="primary"
            className="btn btn-primary btn-lg"
            style={{
              backgroundColor: "#FF7A00",
              border: "none",
              color: "#FFFFFF",
            }}
            onClick={() => Result()}
          >
            result
          </Button>
        </div>
        <PlayPg counter={counter} newpil={newChoice} />
      </div>
    </div>
  );
};
export default GamerPage;