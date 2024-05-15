import { Form } from "./components/Form/index.jsx";
import { List } from "./components/List/index.jsx";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState({});
  // const [weather, setWeather] = useLocalStorageState("weather", {});
  console.log(weather);

  // let isGoodWeather = true;

  useEffect(() => {
    async function getWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        let weatherData = await response.json();
        console.log("weather", weatherData);
        setWeather(weatherData);
      } catch (err) {
        console.log(
          "Failed to fetch weather data, defaulting weather to bad weather: ",
          err
        );
      }
    }

    getWeather();
  }, []);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
    console.log(activities);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  function handleFilteredActivities() {
    return activities.filter((activity) => {
      return activity.isForGoodWeather === weather.isGoodWeather;
    });
  }
  const filteredActivities = handleFilteredActivities();

  return (
    <>
      <List
        list={filteredActivities}
        filter={weather}
        onDeleteActivity={handleDeleteActivity}
      />

      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
