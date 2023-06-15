type HeaderProps = {
  text: string;
};

const Header = ({ text }: HeaderProps) => {
  return (
    <div className="header">
      <h1>{text}</h1>
    </div>
  );
};

export default Header;
