export type StateType = {
  messages: MessagesType;
  member: MemberType;
};

export type MessagesType = {
  text: string;
  member: MessagesMemberType;
};

type MessagesMemberType = {
  color: string;
  username: string;
};

export type MemberType = {
  username: string;
  color: string;
};
