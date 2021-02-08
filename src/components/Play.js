import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const PlayPage = ({counter, newpil}) => {
    return (
      <div className="row mt-5">
        <div>
          <h5
            style={{
              color: "red",
            }}
          >
            Countdown: {counter}
          </h5>
        </div>
        <Button
          variant="primary"
          className="btn btn-primary btn-lg"
          style={{
            backgroundColor: "#FF7A00",
            border: "none",
            color: "#FFFFFF",
          }}
          block
          onClick={() => newpil()}
        >
          Play
        </Button>
      </div>
    );
};
export default PlayPage;
