import "./styles/styles.scss";
import { randomColor } from "./utils/random-color";
import { randomName } from "./utils/random-name";
import { StateType } from "./data/types";
import Messages from "./components/messages";

const state: StateType = {
  messages: [
    {
      text: "This is a test message!",
      member: [
        {
          color: "blue",
          username: "bluemoon",
        },
      ],
    },
  ],
  member: [
    {
      username: randomName(),
      color: randomColor(),
    },
  ],
};

const App = () => {
  return (
    <div className="messages">
      <Messages messages={state.messages} currentMember={state.member} />
    </div>
  );
};

export default App;
