import React, { useContext } from "react";
import Loader from "./Loader";
import { store } from "../store";

const ContactItem = ({ contact, viewContact }) => {
  return (
    <div className="item">
      <div className="content">
        <a className="header" onClick={viewContact}>
          {contact.name}
        </a>
      </div>
    </div>
  );
};

const ContactList = () => {
  const { state, dispatch } = useContext(store);
  const { fetching, hasErrors, contacts } = state;
  return (
    <div className="ui link relaxed divided list contact-list">
      {fetching ? (
        <Loader />
      ) : hasErrors ? (
        <div className="ui negative message">
          <div className="header">No Contacts Found</div>
        </div>
      ) : (
        contacts &&
        contacts.map((contact) => {
          return (
            <ContactItem
              key={contact.name}
              contact={contact}
              viewContact={() =>
                dispatch({
                  type: "VIEW_CONTACT",
                  payload: contact,
                })
              }
            />
          );
        })
      )}
    </div>
  );
};

export default ContactList;
