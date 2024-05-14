export function Form() {
  return (
    <>
      <h1>Add New Activity</h1>
      <form>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Good-weather activity:</label>
        <input type="checkbox" name="good-weather" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
