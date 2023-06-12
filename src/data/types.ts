export type MessagesProps = {
  messages: MessagesType[];
  currentMember: CurrentMemberType[];
};

export type StateType = {
  messages: MessagesType[];
  member: MemberType[];
};

export type MessagesType = {
  text: string;
  member: MemberType[];
};

type MemberType = {
  color: string;
  username: string;
};

type CurrentMemberType = {
  username: string;
  color: string;
};
