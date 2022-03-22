type HeadlineProps = {
  message: string;
};

const Headline = ({ message }: HeadlineProps) => {
  return <h3 className="auth__header">{message}</h3>;
};

export default Headline;
