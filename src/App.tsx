import "./styles/styles.scss";
import { randomColor } from "./utils/random-color";
import { randomName } from "./utils/random-name";
import { StateType } from "./data/types";
import { useState } from "react";
import Input from "./components/input";
import Messages from "./components/messages";

const state: StateType = {
  messages: {
    text: "This is a test message!",
    member: {
      color: "blue",
      username: "bluemoon",
    },
  },
  member: {
    username: randomName(),
    color: randomColor(),
  },
};

const App = () => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="App">
      <Messages currentMember={state.member} messages={state.messages} />
      <Input
        autoFocus={true}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your message and press ENTER"
        type="text"
        value={inputValue}
      />
    </div>
  );
};

export default App;
