import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMoodModal, setShowMoodModal] = useState(false);
  const [selectedFocus, setSelectedFocus] = useState("");
  const [selectedMoodFocus, setSelectedMoodFocus] = useState("");
  const navigate = useNavigate();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFocusSelect = (focus) => {
    setSelectedFocus(focus);
    closeModal();
    navigate(`/${focus.toLowerCase()}`);
  };

  const openMoodModal = () => {
    setShowMoodModal(true);
  };

  const closeMoodModal = () => {
    setShowMoodModal(false);
  };

  const handleFocusSelectMood = (focus) => {
    setSelectedMoodFocus(focus);
    closeMoodModal();
    navigate(`/resources/${focus.toLowerCase()}`);
  };

  return (
    <div className="body">
      <h1>Welcome to Calm Companion</h1>
      <h3>Your mental health guide throughout your mission</h3>
      <img src="shepherd.png" alt="shepherd"></img>
      <br></br>
      <br></br>
      <button className="button-focus" onClick={openMoodModal}>
        How are you feeling today?
      </button>
      {showMoodModal && (
        <div className="modal">
          <h2>Choose an Option:</h2>
          <button onClick={() => handleFocusSelectMood("happy")}>Happy</button>
          <button onClick={() => handleFocusSelectMood("okay")}>Okay</button>
          <button onClick={() => handleFocusSelectMood("anxious")}>
            Anxious
          </button>
          <button onClick={() => handleFocusSelectMood("sad")}>Sad</button>
          <button onClick={() => handleFocusSelectMood("depressed")}>
            Depressed
          </button>
        </div>
      )}
      <br></br>
      <br></br>
      <button className="button-focus" onClick={openModal}>
        What do you want to focus on today?
      </button>
      {showModal && (
        <div className="modal">
          <h2>Choose an Option:</h2>
          <button onClick={() => handleFocusSelect("Depression")}>
            Depression
          </button>
          <button onClick={() => handleFocusSelect("Meditation")}>
            Meditation
          </button>
          <button onClick={() => handleFocusSelect("Sleep")}>Sleep</button>
          <button onClick={() => handleFocusSelect("Stress")}>
            Stress/Anxiety
          </button>
        </div>
      )}
    </div>
  );
};
export default Home;
