function copySelectedText() {
  const selectedText = window.getSelection().toString();
  if (selectedText) {
    navigator.clipboard.writeText(selectedText).then(
      () => {
        alert("Скопировано в буфер обмена!");
      },
      () => {
        alert("Не удалось скопировать текст.");
      }
    );
  }
}

document.addEventListener("mouseup", copySelectedText);
