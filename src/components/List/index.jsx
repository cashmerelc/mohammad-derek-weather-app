export function List({ list, filter, onDeleteActivity }) {
  console.log(list);
  return (
    <>
      {filter.isGoodWeather === true ? (
        <>
          <div className="weather__header">
            <h1 className="weather__icon">{filter.condition}</h1>
            <h2 className="weather__temp">{filter.temperature}&deg; C</h2>
            <h2 className="weather__title">
              The weather is awesome, go out and do:
            </h2>
          </div>
        </>
      ) : (
        <>
          <h1 className="weather__icon">{filter.condition}</h1>
          <h2 className="weather__temp">{filter.temperature}&deg; C</h2>
          <h2 className="weather__title">
            The weather is terrible, don't go out, instead do:
          </h2>
        </>
      )}
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              <p className="list__activityName">{item.name}</p>
              <button
                className="list__delete"
                onClick={() => onDeleteActivity(item.id)}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
