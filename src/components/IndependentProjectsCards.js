import React from 'react';

const IndependentProjects = ({ data }) => {

  return (
    <>
      {data.map((info, i) => (
        <div class="Card" key={i}>
          <img src={info.image} class="Card-Image" alt="Website" />
          <div class="Card-Body">
            <h3 className="Card-Title">{info.title}</h3>
            <p className="Card-Description">{info.description}</p>
            <div className="Buttons-Container">
              <a className="Btn Btn-Grey" href={info.website} target="_blank" rel="noreferrer">WEBSITE</a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default IndependentProjects;