import { MouseEvent } from "react";

type ListProps = {
  data: string[];
};

export default function List({ data }: ListProps) {
  function HandleClick(e: string) {
    console.log(e);
  }
  return (
    <ul className="list-group">
      {data.map((elemento) => (
        <li
          onClick={() => {
            HandleClick(elemento);
          }}
          key={elemento}
          className="list-group-item"
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}
