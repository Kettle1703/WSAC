function postForm(url, data, targetLabel) {
  fetch(url, data)
    .then(response => response.text())
    .then(result => {
      document.getElementById(targetLabel).textContent = result;
    })
    .catch(error => {
      document.getElementById(targetLabel).textContent = "Ошибка: " + error;
    });
}

// Обработчик для первой колонки
document.getElementById("submit-btn").addEventListener("click", function () {
  const input = document.getElementById("user-input").value;

  postForm("handle.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "user_input=" + encodeURIComponent(input)
  }, "output-label");
});

// Обработчик для третьей колонки
document.getElementById("request-btn").addEventListener("click", function () {
  const id = document.getElementById("id-input").value;
  const field1 = document.getElementById("field1");
  const field2 = document.getElementById("field2");
  const field3 = document.getElementById("field3");

  field1.value = '';
  field2.value = '';
  field3.value = '';

  fetch(`get_data.php?id=${encodeURIComponent(id)}`)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        console.error('Ошибка:', data.error);
        return;
      }

      field1.value = data.field1 || '';
      field2.value = data.field2 || '';
      field3.value = data.field3 || '';
    })
    .catch(error => {
      console.error('Ошибка запроса:', error);
    });
});


// === ВТОРАЯ КОЛОНКА ===

// Заполняем поле ввода именем выбранного файла
document.getElementById("browse-btn").addEventListener("click", function () {
  document.getElementById("file-input").click();
});

document.getElementById("file-input").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    document.getElementById("file-name-input").value = file.name;
  }
});

// Обработка отправки формы
document.getElementById("upload-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const fileInput = document.getElementById("file-input");
  if (!fileInput.files.length) {
    alert("Выберите файл для загрузки.");
    return;
  }

  const formData = new FormData();
  formData.append("file", fileInput.files[0]);
  formData.append("mode", "upload");
  formData.append("filename", fileInput.files[0].name);

  fetch("download.php", {
    method: "POST",
    body: formData,
  })
    .then(res => res.text())
    .then(text => alert(text))
    .catch(err => alert("Ошибка загрузки: " + err));
});
