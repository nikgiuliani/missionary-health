import React, { useState, useEffect } from "react";

const SleepPage = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState("Google US English");
  const [selectedTime, setSelectedTime] = useState(5); // Default to 5 minutes
  const [synth, setSynth] = useState(window.speechSynthesis);

  const generateSleepScript = (time) => {
    // Adjust the script content based on the selected time interval
    if (time === 3) {
      return `
        Welcome to the 3-minute sleep session. Close your eyes and find a comfortable position.
        Take a deep breath in, and slowly exhale. Inhale tranquility, exhale tension.
        Focus on your breath and let go of any stress. Enjoy the peaceful moment.
      `;
    } else if (time === 5) {
      return `
        Welcome to the 5-minute sleep session. Close your eyes and find a comfortable position.
        Take a deep breath in, and slowly exhale. Inhale tranquility, exhale tension.
        As you listen to the soothing sounds, allow your mind to let go of the day's thoughts.
        Imagine a peaceful place, perhaps a calm beach or a quiet forest.
        Feel the gentle rhythm of your breath and let it guide you into a restful sleep.
        Sweet dreams.
      `;
    } else if (time === 10) {
      return `
        Welcome to the 10-minute sleep session. Close your eyes and find a comfortable position.
        Take a deep breath in, and slowly exhale. Inhale tranquility, exhale tension.
        As you listen to the soothing sounds, imagine a beautiful journey through nature.
        Picture a serene forest, with sunlight gently filtering through the leaves.
        Follow a peaceful stream, and let the sounds of nature guide you into a tranquil sleep.
        Sweet dreams.
      `;
    }
  };

  const sleepScript = generateSleepScript(selectedTime);

  const voices = window.speechSynthesis.getVoices();

  const speakScript = () => {
    const utterance = new SpeechSynthesisUtterance(sleepScript);

    const selectedVoiceObj = voices.find(
      (voice) => voice.name === selectedVoice
    );

    if (selectedVoiceObj) {
      utterance.voice = selectedVoiceObj;
    }

    utterance.rate = 0.7; // Adjust the rate for a calmer voice
    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    synth.speak(utterance);
  };

  const handleVoiceChange = (event) => {
    setSelectedVoice(event.target.value);
  };

  const handleTimeChange = (event) => {
    const newTime = parseInt(event.target.value, 10);
    setSelectedTime(newTime);

    // Regenerate the script when the time is changed
    const newScript = generateSleepScript(newTime);
    synth.cancel();
    speakScript();
  };

  const pauseScript = () => {
    if (synth.speaking) {
      synth.pause();
      setIsSpeaking(false);
    }
  };

  useEffect(() => {
    // Cleanup speech synthesis when the component unmounts
    return () => {
      synth.cancel();
    };
  }, [synth]);

  return (
    <div className="body">
      <h1>Guided Sleeping</h1>
      <p className="p">Trouble falling asleep? Take a listen.</p>
      <img src="sleep.png" alt="sleep"></img>
      <br></br>
      <label>
        Select Voice:{" "}
        <select
          className="select-dropdown"
          value={selectedVoice}
          onChange={handleVoiceChange}
        >
          {voices.map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name}
            </option>
          ))}
        </select>
      </label>
      <br></br>
      <label>
        Select Time (minutes):{" "}
        <select
          className="select-dropdown"
          value={selectedTime}
          onChange={handleTimeChange}
        >
          <option value={3}>3 minutes</option>
          <option value={5}>5 minutes</option>
          <option value={10}>10 minutes</option>
        </select>
      </label>
      <br></br>
      <button
        className="button-focus"
        onClick={speakScript}
        disabled={isSpeaking}
      >
        {isSpeaking ? "Speaking..." : "Play Sleep Script"}
      </button>
      {isSpeaking && (
        <button className="button-focus" onClick={pauseScript}>
          Pause
        </button>
      )}
    </div>
  );
};

export default SleepPage;
