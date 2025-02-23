// function People() {
//     return (
//       <div className="people">
//       </div>
//     );
//   }

//   export default People;

import { useState, useEffect } from "react";
import "./People.css";

function People() {
  const [people, setPeople] = useState([]);
  const [inputTerm, setInputTerm] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("https://resource-ghibli-api.onrender.com/people")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPeople(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  let handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements.personName.value);
    let name = event.target.elements.personName.value;
    let inputtedPerson = people.find((person) => {
      return person.name === name;
    });
    setInputTerm(inputtedPerson);
    setIsSubmitted(true);
    setInputValue("");
  };

  let handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="people"div>
      <h1>Search for a Person</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="personName"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
        {isSubmitted && !inputTerm ? (
          <p>Not Found</p>
        ) : inputTerm ? (
          <div>
            <h2>Name: {inputTerm.name}</h2>
            <p>
              <strong>Age:</strong> {inputTerm.age}
            </p>
            <p>
              <strong>Gender:</strong> {inputTerm.gender}
            </p>
            {

            }
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default People;