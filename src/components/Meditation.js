import React, { useState, useEffect, useCallback } from "react";

const MeditationExercise = () => {
  const [meditationTime, setMeditationTime] = useState(0);
  const [isMeditating, setIsMeditating] = useState(false);
  const [intervalCount, setIntervalCount] = useState(0);

  const [breathCount, setBreathCount] = useState(0);
  const [breathStatus, setBreathStatus] = useState("Inhale");
  const [instruction, setInstruction] = useState(
    "Focus on your breath and get ready to start."
  );

  const [selectedMethod, setSelectedMethod] = useState("sitting");

  const startMeditation = () => {
    setIsMeditating(true);
  };

  const stopMeditation = () => {
    setIsMeditating(false);
    resetBreathingExercise();
  };

  const handleBreath = useCallback(() => {
    setBreathCount((count) => count + 1);
    setBreathStatus((status) => (status === "Inhale" ? "Exhale" : "Inhale"));
  }, []);

  const resetBreathingExercise = () => {
    setBreathCount(0);
    setBreathStatus("Inhale");
    setInstruction("Focus on your breath and get ready to start.");
  };

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  const methodDescriptions = {
    sitting:
      "Sitting meditation involves finding a quiet place to sit comfortably, focusing on your breath, and allowing your mind to settle.",
    walking:
      "Walking meditation encourages mindful walking, paying attention to each step and the sensations of movement.",
    bodyScan:
      "Body scan meditation involves bringing attention to different parts of the body, promoting relaxation and awareness.",
  };

  useEffect(() => {
    let timer;

    if (isMeditating) {
      timer = setInterval(() => {
        setMeditationTime((time) => time + 1);

        // Update breathing instructions every 4 seconds
        if (intervalCount % 4 === 0) {
          handleBreath();
        }

        // Increment interval count
        setIntervalCount((count) => count + 1);
      }, 1000);
    } else {
      clearInterval(timer);
      resetBreathingExercise();
      setMeditationTime(0);
      setIntervalCount(0);
    }

    return () => clearInterval(timer);
  }, [isMeditating, intervalCount, handleBreath]);

  return (
    <div className="body">
      <h1>Meditation Exercise</h1>
      <p className="p">
        Meditation has numerous benefits, including stress reduction, improved
        focus, and enhanced well-being. Choose a meditation method below and
        start your practice:
      </p>
      <img src="meditate.png" alt="meditate"></img>
      <br></br>
      <label>
        Select Meditation Method: <br></br>
        <select
          className="select-dropdown"
          value={selectedMethod}
          onChange={handleMethodChange}
        >
          <option value="sitting">Sitting Meditation</option>
          <option value="walking">Walking Meditation</option>
          <option value="bodyScan">Body Scan Meditation</option>
        </select>
      </label>
      <p>{methodDescriptions[selectedMethod]}</p>
      <p>{instruction}</p>
      {!isMeditating && (
        <button className="button-focus" onClick={startMeditation}>
          Start Meditation
        </button>
      )}
      {isMeditating && (
        <div>
          <p className="p">Meditation Time: {meditationTime} seconds</p>
          <div className="breath-container" onClick={handleBreath}>
            <div
              className={`breath-circle ${breathStatus.toLowerCase()}`}
            ></div>
          </div>
          <p className="p">Total Breaths: {breathCount}</p>
          <button className="button-focus" onClick={stopMeditation}>
            Stop Meditation
          </button>
        </div>
      )}
    </div>
  );
};

export default MeditationExercise;
