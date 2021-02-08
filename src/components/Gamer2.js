import React from "react";
import gunting from "assets/images/peace.svg";
import batu from "assets/images/fist.svg";
import kertas from "assets/images/hand.svg";
import pilih from "assets/images/question.svg";
import { Button } from "react-bootstrap";
const Gamer2Page = ({ pilihan2, gambar2 }) => {
  return (
    <div className="col mt-5">
      <Button
        variant="primary"
        className="btn btn-primary btn-lg"
        style={{
          backgroundColor: "#FF7A00",
          border: "none",
          color: "#FFFFFF",
        }}
        onClick={() => pilihan2("batu")}
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
        onClick={() => pilihan2("kertas")}
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
        onClick={() => pilihan2("gunting")}
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
            gambar2 === "batu" ? batu : gambar2 === "kertas" ? kertas : gunting
          }
          alt="gambler"
        />
      </div>
    </div>
  );
};
export default Gamer2Page;
