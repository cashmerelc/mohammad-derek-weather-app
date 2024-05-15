import { uid } from "uid";

export function List({ list }) {
  return (
    <>
      <ul>
        {list.map((item) => {
          return <li key={uid()}>{item.name}</li>;
        })}
      </ul>
    </>
  );
}
