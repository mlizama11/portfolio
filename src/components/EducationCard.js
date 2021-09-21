import React from 'react';

const EducationCard = ({ data }) => {
  return (
    <>
      {data.map((info, i) => (
        <div className="Diploma-Card" key={i}>
          <h4 className="Diploma-Title">{info.title}</h4>
          <h6 className="Diploma-Subtitle">{info.university}</h6>
          <p className="Diploma-Year">{info.year}</p>
        </div>
      ))}
    </>
  );
}

export default EducationCard;
