import React, { useState, useEffect } from "react";
import gunting from "assets/images/peace.svg";
import batu from "assets/images/fist.svg";
import kertas from "assets/images/hand.svg";
import pilih from "assets/images/question.svg";
import Gunting from "./Gunting";
import { Button } from "react-bootstrap";
const Gamer1Page = ({score, pilihan, gambar }) => {
  return (
    <div className="col">
      <div className="row mt-3 mb-3">
        <h3>Point : {score}</h3>
      </div>
      <Button
        variant="primary"
        className="btn btn-primary btn-lg"
        style={{
          backgroundColor: "#FF7A00",
          border: "none",
          color: "#FFFFFF",
        }}
        onClick={() => pilihan("batu")}
      >
        Rock
      </Button>{" "}
      <Button
        variant="primary"
        className="btn btn-primary btn-lg"
        style={{
          backgroundColor: "#FF7A00",
          border: "none",
          color: "#FFFFFF",
        }}
        onClick={() => pilihan("kertas")}
      >
        Paper
      </Button>{" "}
      <Button
        variant="primary"
        className="btn btn-primary btn-lg"
        style={{
          backgroundColor: "#FF7A00",
          border: "none",
          color: "#FFFFFF",
        }}
        onClick={() => pilihan("gunting")}
      >
        Scissors
      </Button>
      <div
        className="row mb-5"
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
       
        <img
          className="gameimg"
          src={
            gambar === "batu"
              ? batu
              : gambar === "kertas"
              ? kertas
              : gunting
          }
          alt="gambler"
        />
      </div>
    </div>
  );
};
export default Gamer1Page;
