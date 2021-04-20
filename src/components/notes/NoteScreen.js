import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome a title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          className="notes__textarea"
          placeholder="What happened today"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://www.viveusa.mx/sites/default/files/field/image/hawai_adobe.jpeg"
            alt="notes"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
