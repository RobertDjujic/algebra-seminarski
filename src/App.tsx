//@ts-nocheck

import "./styles/styles.scss";
import { randomColor } from "./utils/random-color";
import { randomName } from "./utils/random-name";
import { StateType } from "./data/types";
import { useEffect, useState } from "react";
import Header from "./components/header";
import Input from "./components/input";
import Messages from "./components/messages";
import Container from "./components/container";

const initialState = {
  messages: [],
  member: {
    username: randomName(),
    color: randomColor(),
  },
};

const App = () => {
  const [state, setState] = useState(initialState);
  const [inputValue, setInputValue] = useState("");
  const [drone, setDrone] = useState(null);
  const [room, setRoom] = useState(null);

  const handleSend = (message) => {
    if (inputValue === "") {
      return;
    }
    if (drone && room) {
      drone.publish({
        room: "observable-room",
        message,
      });
    }
    setInputValue("");
  };

  useEffect(() => {
    const handleDrone = () => {
      const newDrone = new window.Scaledrone("hC3Wr4An4Rt5Fcro", {
        data: state.member,
      });
      setDrone(newDrone);

      newDrone.on("open", (error) => {
        if (error) {
          console.error(error);
          return;
        }

        state.member.id = newDrone.clientId;
        setState((prevState) => ({ ...prevState, ...state.member }));
      });

      const newRoom = newDrone.subscribe("observable-room");
      setRoom(newRoom);

      newRoom.on("data", (data, member) => {
        setState((prevState) => ({
          ...prevState,
          messages: [...prevState.messages, { member, text: data }],
        }));
      });
    };

    handleDrone();

    return () => {
      if (drone) {
        drone.close();
      }
      if (room) {
        room.unsubscribe();
      }
    };
  }, []);

  return (
    <Container>
      <Header text="My Chat App" />
      {room ? (
        <Messages currentMember={state.member} messages={state.messages} />
      ) : (
        <div>Loading...</div>
      )}
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
    </Container>
  );
};

export default App;
