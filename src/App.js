import "./App.css";
import { useEffect, useContext } from "react";
import ContactView from "./components/ContactView";
import ContactNav from "./components/ContactNav";
import { store } from "./store";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const { dispatch } = useContext(store);

  useEffect(() => {
    dispatch({
      type: "FETCH_REQUEST",
    });
    fetch(API_URL)
      .then((r) => {
        if (r.ok) return r.json();
        throw r;
      })
      .then((contacts) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: contacts,
        });
      })
      .catch((e) => {
        console.error(e);
        dispatch({
          type: "FETCH_FAILURE",
        });
      });
  }, []);

  return (
    <div className="App">
      <ContactNav />
      <ContactView />
    </div>
  );
}

export default App;
