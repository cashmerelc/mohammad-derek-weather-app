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
      <div className="newActivityForm">
        <div className="padding-container">
          <h1 className="form__title">Add New Activity</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Good-weather activity:
              <input type="checkbox" name="goodweather" />
            </label>
            <button className="submitButton" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
