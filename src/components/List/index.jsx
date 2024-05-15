export function List({ list, filter, onDeleteActivity }) {
  console.log(list);
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
          return (
            <li key={item.id}>
              <p>{item.name}</p>
              <button onClick={() => onDeleteActivity(item.id)}>x</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
