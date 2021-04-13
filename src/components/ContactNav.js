import React, { useState, useEffect, useContext } from "react";
import ContactList from "./ContactList";
import SearchBar from "./SearchBar";
import { store } from "../store";

const SortButton = () => {
  const [isAsc, setIsAsc] = useState(true);
  const { dispatch } = useContext(store);
  useEffect(() => {
    dispatch({ type: "TOGGLE_SORT" });
  }, [isAsc]);
  return (
    <div>
      <button className="ui icon button" onClick={() => setIsAsc(!isAsc)}>
        <i className={`sort alphabet ${isAsc ? "down" : "up"} icon`}></i>
      </button>
    </div>
  );
};

const ContactNav = () => {
  return (
    <div>
      <header>
        <div className="ui big tag label logo">Kontakt</div>
      </header>
      <div className="toolbar">
        <SearchBar />
        <SortButton />
      </div>
      <ContactList />
    </div>
  );
};

export default ContactNav;
