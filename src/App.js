import React, { useState } from "react";
import User from "./components/User";
import Navbar from "./components/Navbar";

function App() {
  const [users] = useState({
    userA: {
      firstName: "Harper",
      avatarUrl:
        "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png",
    },
    userB: {
      firstName: "Ana",
      avatarUrl:
        "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png",
    },
  });

  const [details, setDetails] = useState({
    clickCount: 0,
    backColor: "yellow",
    bootcamp: "Ironhack",
  });

  const colorMapper = () => {
    const hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
  };

  const clickHandler = () => {
    if (details.clickCount % 5 === 0) {
      setDetails((prev) => ({
        ...prev,
        backColor: colorMapper(),
        clickCount: details.clickCount + 1,
      }));

      return;
    }
    setDetails((prev) => ({
      ...prev,
      clickCount: details.clickCount + 1,
    }));
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>React - state</h1>
      <p>Count is: {details.clickCount}</p>
      <button onClick={clickHandler}> Click me </button>

      <User
        theColor={details.backColor}
        firstName={users.userA.firstName}
        image={users.userA.avatarUrl}
        bootcampName={details.bootcamp}
      />
      <User
        firstName={users.userB.firstName}
        image={users.userB.avatarUrl}
        bootcampName={details.bootcamp}
      />
    </div>
  );
}

export default App;
