import { MemberType, MessagesType } from "../data/types";

type MessagesProps = {
  currentMember: MemberType;
  messages: MessagesType[];
};

const Messages = ({ currentMember, messages }: MessagesProps) => {
  return (
    <ul className="messages">
      {messages.map((message: MessagesType) => {
        const messageFromMe =
          message.member.username === currentMember.username;
        const className = messageFromMe && "currentMember";

        return (
          <li className={`messages__message ${className}`}>
            <span
              className="messages__message__avatar"
              style={{ backgroundColor: message.member.color }}
            />
            <div className={`messages__message__content ${className}`}>
              <div className="messages__message__content__username">
                {message.member.username}
              </div>
              <div className={`messages__message__content__text ${className}`}>
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
