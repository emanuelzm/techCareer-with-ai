var form = document.getElementById("form");
var result = document.getElementById("result");
const jsonData = {};

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Create a new FormData object
  const formData = new FormData(form);

  formData.forEach(function(value, name) {
    formData.delete(name);
  });
  
  const checkboxes = form.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    const value = checkbox.checked ? 1 : 0;
    formData.append(checkbox.name, value);
  });

  // Do something with the data
  for (const [name, value] of formData.entries()) {
    jsonData[name] = parseInt(value);
  }

  iniciar();
  
  // Reset the form
  //form.reset();
});

function iniciar () {
  const redNeuronal = new brain.NeuralNetwork();
  
  var datos;

  fetch('train.json')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes trabajar con los datos obtenidos
    datos = data;
  })
  .catch(error => {
    console.error('Error:', error);
  });

  
  redNeuronal.train(datos);
  let resultado;
  
  const json = jsonData || { "JS": 0, "PY": 0, "TS": 0, "PANDAS": 0, "Mobile": 0, "Android": 0, "React": 0, "Angular": 0, "Node.js": 0, "SQL": 0 };
  
  resultado = brain.likely(json, redNeuronal);
  //alert(resultado);
  result.textContent = resultado;
}