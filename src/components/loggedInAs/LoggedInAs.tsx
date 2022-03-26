type LoggedInAsProps = {
  email: string;
  name: string;
};

const LoggedInAs = ({ email, name }: LoggedInAsProps) => {
  return (
    <div>
      <h3>Hello {name}! You are logged in as:</h3>
      <h4>{email}</h4>
    </div>
  );
};

export default LoggedInAs;
