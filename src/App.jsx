import { Form } from "./components/Form/index.jsx";
import { List } from "./components/List/index.jsx";
import useLocalStorageState from "use-local-storage-state";
import "./App.css";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const isGoodWeather = true;

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity }]);
  }

  function handleFilteredActivities() {
    console.log(activities);
    return activities.filter((activity) => {
      return activity.isForGoodWeather != isGoodWeather;
    });
  }
  const filteredActivities = handleFilteredActivities();

  return (
    <>
      <List list={filteredActivities} filter={isGoodWeather} />

      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
