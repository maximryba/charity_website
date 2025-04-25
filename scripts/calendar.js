function addEvent() {
  const date = document.getElementById("datePicker").value;
  const description = document.getElementById("eventDescription").value;

  if (!description) {
    alert("Пожалуйста, введите описание события.");
    return;
  }

  if (description.trim().length > 2000 || description.trim().length <= 0) {
    alert("Описание события не должно превышать 2000 символов, и не может состоять из пробельных символов.");
    return;
  }

  if (!date) {
    alert("Пожалуйста, введите корректную дату.");
    return;
  }

  const selectedDate = new Date(date);
  const year = selectedDate.getFullYear();

  if (year < 2000 || year > 2100) {
    alert("Год должен быть в диапазоне от 2000 до 2100.");
    return;
  }

  const dateString = selectedDate.toISOString().split('T')[0];
  if (dateString !== date) {
    alert("Пожалуйста, введите корректную дату.");
    return; 
  }

  const eventList = document.getElementById("eventList");
  const eventItem = document.createElement("div");
  eventItem.className = "event";
  eventItem.innerHTML = `<strong>${date}</strong>: ${description}`;
  eventList.appendChild(eventItem);

  document.getElementById("eventDescription").value = "";
  document.getElementById("datePicker").value = "";
}