import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFocus, setSelectedFocus] = useState("");
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

  return (
    <div className="body">
      <h1>Welcome to Calm Companion</h1>
      <h3>Your mental health guide throughout your mission</h3>
      <img src="shepherd.png" alt="shepherd"></img>
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
