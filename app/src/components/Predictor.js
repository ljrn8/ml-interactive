import { useState, useEffect } from "react";
import { Slider } from "@mui/material";

const XYPredictor = ({ classifier, labels, Xrange, Yrange }) => {
  const [scores, setScores] = useState([]);

  // TODO combine labels and scores into single obj
  const [x, setX] = useState(2);
  const [y, setY] = useState(3.2);


  useEffect(() => {
    fetch(`/predict?classifier=${classifier}&y=${y}&x=${x}`)
      .then((res) => res.json())
      .then((scores) => {
        setScores(scores);
      });
  }, [x, y, classifier]);

  const handleSlider = (e, isX = false) => {
    const num = parseFloat(e.target.outerText);
    if (!isNaN(num)) {
      isX ? setX(num) : setY(num);
    }
  };

  const labelColors =['#A3B3E8 ', '#E8C4A3 ', '#A3E8B0'];

  const mapScores = () => {
    return scores.map((score, index) => {
      let style = score === scores.max ? "italic" : "None";
      return (
        <p
          className="score"
          style={{ fontStyle: { style }, color: labelColors[index] }}
          key={labels[index]}
        >
          {score} {labels[index]}
        </p>
      );
    });
  };


  return (
    <div className="predictor">
      <div className="predictor">
        X
        <Slider
          style={sliderStyle}
          defaultValue={2}
          valueLabelDisplay="auto"
          step={0.02}
          min={Xrange[0]}
          max={Xrange[1]}
          color="secondary"
          onChangeCommitted={handleSlider}
        />
        Y
        <Slider
          style={sliderStyle}
          defaultValue={3.5}
          valueLabelDisplay="auto"
          step={0.05}
          min={Yrange[0]}
          max={Yrange[1]}
          color="secondary"
          onChangeCommitted={(e) => handleSlider(e, false)}
          getAriaValueText={() => "y"}
        />
      </div>

      <div className="score"> {scores && mapScores()} </div>
    </div>
  );
};

const sliderStyle = {
  color: "var(--foreground-color-primary)",
};

export default XYPredictor;
