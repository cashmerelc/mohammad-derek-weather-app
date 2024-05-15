import { Form } from "./components/Form/index.jsx";
import { List } from "./components/List/index.jsx";
import useLocalStorageState from "use-local-storage-state";
import "./App.css";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity }]);
    console.log(activities);
  }

  return (
    <>
      <List list={activities} />

      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
