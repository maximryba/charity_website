function addEvent() {
  const date = document.getElementById("datePicker").value;
  const description = document.getElementById("eventDescription").value;
  if (date && description) {
    const eventList = document.getElementById("eventList");
    const eventItem = document.createElement("div");
    eventItem.className = "event";
    eventItem.innerHTML = `<strong>${date}</strong>: ${description} <button class="copy-button" onclick="copyToClipboard('${date}: ${description}')">Копировать</button>`;
    eventList.appendChild(eventItem);
    document.getElementById("eventDescription").value = "";
  } else {
    alert("Пожалуйста, выберите дату и введите описание события.");
  }
}
