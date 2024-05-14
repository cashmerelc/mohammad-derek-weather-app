export function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target.elements;
    const formData = {
      name: form.name.value,
      isForGoodWeather: form.goodweather.checked,
    };
    onAddActivity(formData);

    form.name.value = "";
    form.goodweather.checked = false;
    form.name.focus();
  }

  return (
    <>
      <h1>Add New Activity</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Good-weather activity:</label>
        <input type="checkbox" name="goodweather" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
