import { uid } from "uid";

export function List({ list, filter }) {
  return (
    <>
      {" "}
      {filter === true ? (
        <h2>The weather is awesome, go out and do:</h2>
      ) : (
        <h2>The weather is terrible, stay inside and do:</h2>
      )}
      <ul>
        {list.map((item) => {
          //   if (item.isForGoodWeather === filter) {
          return <li key={uid()}>{item.name}</li>;
          //   }
          //   return;
        })}
      </ul>
    </>
  );
}
