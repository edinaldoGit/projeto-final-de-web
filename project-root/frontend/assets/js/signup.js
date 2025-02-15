const selectElement = document.getElementById('register-type-user-select');




  // Adiciona um evento para capturar a mudança no select
selectElement.addEventListener('change', function () {
  const selectedValue = selectElement.value; // Obtém o valor da opção selecionada

  if (selectedValue === "locador") {
      document.getElementById('locatario-info').style.display = 'none';
      document.getElementById('locador-info').style.display = 'flex';
  } else {
      document.getElementById('locador-info').style.display = 'none';
      document.getElementById('locatario-info').style.display = 'flex';
  }
});