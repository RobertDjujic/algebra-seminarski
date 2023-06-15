//@ts-nocheck

import "./styles/styles.scss";
import { randomColor } from "./utils/random-color";
import { randomName } from "./utils/random-name";
import { MessagesType, StateType } from "./data/types";
import { useState } from "react";
import Input from "./components/input";
import Messages from "./components/messages";
import Header from "./components/header";

const state: StateType = {
  messages: [
    {
      text: "This is a test message!",
      member: {
        color: "blue",
        username: "bluemoon",
      },
    },
  ],
  member: {
    username: randomName(),
    color: randomColor(),
  },
};

const App = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<MessagesType[]>([
    ...state.messages,
  ]);

  const handleSend = (message: string) => {
    if (inputValue === "") {
      return;
    }
    const newMessage = {
      text: message,
      member: state.member,
    };
    const newChat = [...state.messages, newMessage];
    setChatMessages(newChat);
    setInputValue("");
  };

  return (
    <div className="App">
      <Header text="My Chat App" />
      <Messages currentMember={state.member} messages={chatMessages} />
      <Input
        autoFocus={true}
        handleSend={handleSend}
        inputValue={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend(inputValue);
          }
        }}
        placeholder="Enter your message and press ENTER"
        type="text"
        value={inputValue}
      />
    </div>
  );
};

export default App;
