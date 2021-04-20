import React from "react";

const NotesAppBar = () => {
  return (
    <div className="notes__appbar">
      <span>28 agosto 2021</span>
      <div>
        <button className="btn primary">Picture</button>
        <button className="btn primary">Save</button>
      </div>
    </div>
  );
};

export default NotesAppBar;
