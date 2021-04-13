import React, { createContext, useReducer, useMemo } from "react";

const store = createContext({});

const { Provider } = store;

const initState = {
  fetching: false,
  hasErrors: false,
  contacts: [],
  cache_contacts: [],
  selectedContact: undefined,
};

const sortArray = (arr) => {
  return arr.sort((a, b) => (a.name > b.name ? 1 : -1));
};

const toggleSort = (arr) => {
  return [...arr].reverse();
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST": {
      return {
        ...state,
        fetching: true,
        hasErrors: false,
      };
    }
    case "FETCH_SUCCESS": {
      const sorted = sortArray(action.payload);
      return {
        ...state,
        fetching: false,
        contacts: sorted,
        cache_contacts: sorted
      };
    }
    case "FETCH_FAILURE": {
      return {
        ...state,
        fetching: false,
        hasErrors: true,
      };
    }
    case "VIEW_CONTACT": {
      return {
        ...state,
        selectedContact: action.payload,
      };
    }
    case "TOGGLE_SORT": {
      return {
        ...state,
        contacts: toggleSort(state.contacts),
      };
    }
    case "SEARCH_CONTACT": {
      return {
        ...state,
        contacts: state.cache_contacts.filter(
          (c) => c.name.toUpperCase().indexOf(action.payload.toUpperCase()) > -1
        ),
      };
    }
    default:
      return state;
  }
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  return <Provider value={contextValue}>{children}</Provider>;
};

export { store, StateProvider };
