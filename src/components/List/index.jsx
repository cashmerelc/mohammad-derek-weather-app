export function List({ list, filter, onDeleteActivity }) {
  console.log(list);
  return (
    <>
      {" "}
      {filter.isGoodWeather === true ? (
        <>
          <h1>{filter.condition}</h1>
          <h2>{filter.temperature}&deg; C</h2>
          <h2>The weather is awesome, go out and do:</h2>
        </>
      ) : (
        <>
          <h1>{filter.condition}</h1>
          <h2>{filter.temperature}&deg; C</h2>
          <h2>The weather is terrible, don't go out, instead do:</h2>
        </>
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
