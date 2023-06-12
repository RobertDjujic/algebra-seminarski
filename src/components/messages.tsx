import { MessagesProps, MessagesType } from "../data/types";

const Messages = ({ messages, currentMember }: MessagesProps) => {
  return (
    <ul className="messages__list">
      {messages.map((message: MessagesType, index) => {
        return (
          <li className="messages__list__message" key={index}>
            <span
              className="messages__list__message__avatar"
              style={{ backgroundColor: message.member[0].color }}
            />
            <div className="messages__list__message__content">
              <div className="messages__list__message__content__username">
                {message.member[0].username}
              </div>
              <div className="messages__list__message__content__text">
                {message.text}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Messages;
