document.querySelectorAll('.toggle-details').forEach(button => {
  button.addEventListener('click', () => {
    const mainRow = button.closest('tr');
    // все следующие строки, пока не следующая основная, считаются деталями
    let nextRow = mainRow.nextElementSibling;
    let isHidden = nextRow.style.display === 'none' || nextRow.style.display === '';

    while (nextRow && !nextRow.querySelector('.toggle-details')) {
      nextRow.style.display = isHidden ? 'table-row' : 'none';
      nextRow = nextRow.nextElementSibling;
    }

    button.textContent = isHidden ? '▼' : '▶';
  });
});
