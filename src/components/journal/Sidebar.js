import React from "react";
import { MoonIcon, CalendarIcon } from "@heroicons/react/solid";
import JournalEntries from "./JournalEntries";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import { startNewNote } from "../../actions/notes";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleAddNew = () => {
    dispatch(startNewNote());
  };

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <MoonIcon />
        <span>{name}</span>
        <button className="btn btnSidebar" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="journal__new-entry" onClick={handleAddNew}>
        <CalendarIcon />
        <p className="mt-5">New Entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
