import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: false,
    mode: "",
    favCar: "",
  });

  function changeHandler(e) {
    const { name, value, checked, type } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log("finally printing the entire form...");
    console.log(formData);
  }

  return (
    <div className="App">
      <header className="header">FORM</header>
      <form onSubmit={submitHandler}>
        <input
          className="text"
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={changeHandler}
          value={formData.firstName}
        />
        <br />
        <input
          className="text"
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={changeHandler}
          value={formData.lastName}
        />
        <br />
        <input
          className="text"
          type="email"
          placeholder="Enter your email here"
          name="email"
          onChange={changeHandler}
          value={formData.email}
        />
        <br />

        <textarea
          className="textarea"
          placeholder="enter your comments"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />
        <br />

        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          checked={formData.isVisible}
          id="isVisible"
        />
        <label htmlFor="isVisible">Am i visible?</label>

        <br />

        <fieldset>
          <legend>Mode:</legend>
          <input
            type="radio"
            name="mode"
            value="Online-mode"
            id="Online-mode"
            onChange={changeHandler}
            checked={formData.mode === "Online-mode"}
          />
          <label htmlFor="Online-mode">Online mode</label>

          <input
            type="radio"
            name="mode"
            value="Offline-mode"
            id="Offline-mode"
            onChange={changeHandler}
            checked={formData.mode === "Offline-mode"}
          />
          <label htmlFor="Offline-mode">Offline mode</label>
        </fieldset>

        <label htmlFor="favCar">Tell me your favourite car</label>
        <select
          onChange={changeHandler}
          name="favCar"
          id="favCar"
          value={formData.favCar}
        >
          <option value="scorpio">Scorpio</option>
          <option value="fortuner">Fortuner</option>
          <option value="thar">Thar</option>
          <option value="land-rover">Land Rover</option>
          <option value="moserati">Moserati</option>
          <option value="defender">Defender</option>
        </select>

        {/* <input type="submit" value="submit" /> */}
        <br />
        <button>Submit </button>
      </form>
    </div>
  );
}

export default App;
