import React, { useState, useContext, useEffect } from "react";
import { store } from "../store";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const { dispatch } = useContext(store);
  useEffect(() => {
    dispatch({
      type: "SEARCH_CONTACT",
      payload: searchText,
    });
  }, [searchText]);

  return (
    <div className="ui right icon input">
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <i className="search icon"></i>
    </div>
  );
};

export default SearchBar;
