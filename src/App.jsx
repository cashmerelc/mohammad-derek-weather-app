import { Form } from "./components/Form/index.jsx";
import useLocalStorageState from "use-local-storate-state";
import "./App.css";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities");

  function handleAddActivity() {}

  return <Form onAddActivity={handleAddActivity} />; // need to add prop onAddActivity and send the function that handles adding an activity. Also need to add the List component to the return
}

export default App;
