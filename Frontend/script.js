document.getElementById("submit-btn").addEventListener("click", function () {
  const input = document.getElementById("user-input").value;

  fetch("handle.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "user_input=" + encodeURIComponent(input)
  })
  .then(response => response.text())
  .then(data => {
    console.log("Ответ от сервера: ", data);
    document.getElementById("output-label").textContent = data;
  })
  .catch(error => {
    document.getElementById("output-label").textContent = "Ошибка: " + error;
  });
});
