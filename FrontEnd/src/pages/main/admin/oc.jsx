import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import s2 from './assets/images/profileimg.jpg';
import Nav from './nav';
import Foot from './foot';

function Oc() {
  const [ceo, setCeo] = useState("CEO");
  const [directors, setDirectors] = useState([
    {
      name: "Director A",
      managers: [
        {
          name: "Manager A",
          people: ["Person A", "Person B", "Person C", "Person D"]
        },
        {
          name: "Manager B",
          people: ["Person A", "Person B", "Person C", "Person D"]
        }
      ]
    },
    {
      name: "Director B",
      managers: [
        {
          name: "Manager C",
          people: ["Person A", "Person B", "Person C", "Person D"]
        },
        {
          name: "Manager D",
          people: ["Person A", "Person B", "Person C", "Person D"]
        }
      ]
    }
  ]);

  const handleTextChange = (e, type, idx1, idx2) => {
    const value = e.target.value;
    if (type === "ceo") {
      setCeo(value);
    } else if (type === "director") {
      const newDirectors = [...directors];
      newDirectors[idx1].name = value;
      setDirectors(newDirectors);
    } else if (type === "manager") {
      const newDirectors = [...directors];
      newDirectors[idx1].managers[idx2].name = value;
      setDirectors(newDirectors);
    } else if (type === "person") {
      const newDirectors = [...directors];
      newDirectors[idx1].managers[idx2].people = value.split(",").map(person => person.trim());
      setDirectors(newDirectors);
    }
  };

  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const editableTextStyle = {
    border: 'none',
    background: 'transparent',
    textAlign: 'center',
    width: '100%',
    padding: '0',
    margin: '0',
    fontSize: 'inherit',
    fontFamily: 'inherit',
    lineHeight: 'inherit'
  };

  return (
    <div className="main-content">
      <Nav />
      <div className="container-fluid content-top-gap">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb my-breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Oc Allocation</li>
          </ol>
        </nav>

        <div className="container0">
          <h1 className="level-1 rectangle" style={centerStyle}>
            <input
              type="text"
              value={ceo}
              onChange={(e) => handleTextChange(e, "ceo")}
              style={editableTextStyle}
            />
          </h1>
          <ol className="level-2-wrapper">
            {directors.map((director, directorIndex) => (
              <li key={directorIndex}>
                <h2 className="level-2 rectangle" style={centerStyle}>
                  <input
                    type="text"
                    value={director.name}
                    onChange={(e) => handleTextChange(e, "director", directorIndex)}
                    style={editableTextStyle}
                  />
                </h2>
                <ol className="level-3-wrapper">
                  {director.managers.map((manager, managerIndex) => (
                    <li key={managerIndex}>
                      <h3 className="level-3 rectangle" style={centerStyle}>
                        <input
                          type="text"
                          value={manager.name}
                          onChange={(e) => handleTextChange(e, "manager", directorIndex, managerIndex)}
                          style={editableTextStyle}
                        />
                      </h3>
                      <ol className="level-4-wrapper">
                        {manager.people.map((person, personIndex) => (
                          <li key={personIndex}>
                            <h4 className="level-4 rectangle" style={centerStyle}>
                              <input
                                type="text"
                                value={person}
                                onChange={(e) => handleTextChange(e, "person", directorIndex, managerIndex)}
                                style={editableTextStyle}
                              />
                            </h4>
                          </li>
                        ))}
                      </ol>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <Foot />
    </div>
  );
}

export default Oc;
