import React from "react";
import { MoonIcon, CalendarIcon } from "@heroicons/react/solid";
import JournalEntries from "./JournalEntries";

const Sidebar = () => {
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <MoonIcon />
        <span>Felipe</span>
        <button className="btn">Logout</button>
      </div>
      <div className="journal__new-entry">
        <CalendarIcon />
        <p className="mt-5">New Entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
