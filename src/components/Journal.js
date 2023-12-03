import React, { useState } from "react";

const MissionaryJournalPage = () => {
  const [journalEntry, setJournalEntry] = useState("");
  const [entries, setEntries] = useState([]);

  const handleInputChange = (event) => {
    setJournalEntry(event.target.value);
  };

  const handleSaveEntry = () => {
    if (journalEntry.trim() !== "") {
      setEntries((prevEntries) => [...prevEntries, journalEntry]);
      setJournalEntry("");
    }
  };

  return (
    <div className="body">
      <h1>Let It All Out</h1>
      <p className="p">Record your thoughts and experiences for the day.</p>
      <textarea
        className="text-area"
        rows="10" // Adjust the number of rows to make the text area taller
        cols="50" // Adjust the number of cols to make the text area wider
        placeholder="Write your journal entry here..."
        value={journalEntry}
        onChange={handleInputChange}
      ></textarea>{" "}
      <br></br>
      <button className="button-focus" onClick={handleSaveEntry}>
        Save Entry
      </button>
      <h3>Previous Entries:</h3>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default MissionaryJournalPage;
