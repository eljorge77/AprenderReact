import { ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";
interface CardProps {
  children: ReactNode;
}
function Card(props: CardProps) {
  const { children } = props;
  const CardStyles = {
    width: "350px",
  };
  return (
    <div className="card" style={CardStyles}>
      <div className="card-body">{children}</div>
    </div>
  );
}

interface CardBodyProps {
  title: string;
  text?: string;
}

export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <Fragment>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </Fragment>
  );
}

export default Card;
