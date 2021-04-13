import React, { useContext } from "react";
import { store } from "../store";

const ContactTimeLine = ({ heading, list }) => {
  return (
    <div className="contact-timeline">
      <h2 className="ui header">{heading}</h2>
      <div className="ui list">
        {list.map((item) => {
          return (
            <div key={`${heading}${item.startYear}`} className="item">
              <div className="timeline-item">
                <b className="year-range">{`${item.startYear}-${
                  item.endYear ? item.endYear : "till date"
                }`}</b>
                <div className="description">
                  <div className="header">{item.heading1}</div>
                  <div>{item.heading2}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const EducationTimeLine = ({ list }) => {
  const formatList = list.map(({ startYear, endYear, institution, degree }) => {
    return {
      startYear,
      endYear,
      heading1: institution,
      heading2: degree,
    };
  });
  return <ContactTimeLine heading="Education" list={formatList} />;
};
const WorkExperienceTimeLine = ({ list }) => {
  const formatList = list.map(({ startYear, endYear, institution, title }) => {
    return {
      startYear,
      endYear,
      heading1: institution,
      heading2: title,
    };
  });
  return <ContactTimeLine heading="Experience" list={formatList} />;
};

const ContactView = () => {
  const { state } = useContext(store);
  const { selectedContact: contact } = state;
  const getRole = (contact) => {
    return contact.workExperience.reduce((a, b) =>
      a.startYear > b.startYear ? a : b
    ).title;
  };
  return (
    <div className="contact-view">
      {contact ? (
        <>
          <div className="contact-info">
            <img
              className="ui small rounded image"
              alt={contact.name}
              src={contact.profileImage}
            ></img>
            <div className="contact-details">
              <h2 className="ui header name">{contact.name}</h2>
              <div className="role">{getRole(contact)}</div>
              <div className="phone">{contact.phone}</div>
              <div className="email">{contact.email}</div>
            </div>
          </div>
          <EducationTimeLine list={contact.education} />
          <WorkExperienceTimeLine list={contact.workExperience} />
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ContactView;
