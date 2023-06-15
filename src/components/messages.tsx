import { MemberType, MessagesType } from "../data/types";

type MessagesProps = {
  currentMember: MemberType;
  messages: MessagesType;
};

const Messages = ({ currentMember, messages }: MessagesProps) => {
  const messageFromMe = messages.member.username === currentMember.username;
  const className = messageFromMe
    ? "messages__message currentMember"
    : "messages__message";

  return (
    <ul className={className}>
      <li className="messages__message">
        <span
          className="messages__message__avatar"
          style={{ backgroundColor: messages.member.color }}
        />
        <div className="messages__message__content">
          <div className="messages__message__content__username">
            {messages.member.username}
          </div>
          <div className="messages__message__content__text">
            {messages.text}
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Messages;
