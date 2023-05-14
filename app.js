var form = document.getElementById("form");
var result = document.getElementById("result");
const jsonData = {};

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const formData = new FormData(form);

  formData.forEach(function(value, name) {
    formData.delete(name);
  });
  
  const checkboxes = form.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    const value = checkbox.checked ? 1 : 0;
    formData.append(checkbox.name, value);
  });

  for (const [name, value] of formData.entries()) {
    jsonData[name] = parseFloat(value);
  }

  iniciar();
});

function iniciar () {
    const redNeuronal = new brain.NeuralNetwork();

    const datos = [
        {
          "input": { "JS": 0, "PY": 0, "TS": 0, "PANDAS": 0, "Mobile": 0, "Android": 0, "React": 0, "Angular": 0, "Node.js": 0, "SQL": 0 },
          "output": { "Don't Developer": 1 }
        },
        {
          "input": { "JS": 1, "PY": 0, "TS": 1, "PANDAS": 0, "Mobile": 0, "Android": 0, "React": 0, "Angular": 0, "Node.js": 0, "SQL": 0 },
          "output": { "Javascript Developer": 1 }
        },
        {
          "input": { "JS": 1, "PY": 0, "TS": 1, "PANDAS": 0, "Mobile": 0, "Android": 0, "React": 1, "Angular": 0, "Node.js": 1, "SQL": 1 },
          "output": { "Frontend Developer": 1 }
        },
        {
          "input": { "JS": 0, "PY": 1, "TS": 0, "PANDAS": 1, "Mobile": 0, "Android": 0, "React": 0, "Angular": 1, "Node.js": 1, "SQL": 1 },
          "output": { "Backend Developer": 1 }
        },
        {
          "input": { "JS": 0, "PY": 0, "TS": 0, "PANDAS": 0, "Mobile": 1, "Android": 1, "React": 0, "Angular": 0, "Node.js": 0, "SQL": 0 },
          "output": { "Mobile Developer": 1 }
        },
        {
          "input": { "JS": 1, "PY": 1, "TS": 1, "PANDAS": 1, "Mobile": 1, "Android": 1, "React": 1, "Angular": 1, "Node.js": 1, "SQL": 1 },
          "output": { "Full Stack Developer": 1 }
        },
        {
          "input": { "JS": 1, "PY": 0, "TS": 0, "PANDAS": 1, "Mobile": 0, "Android": 0, "React": 0, "Angular": 0, "Node.js": 0, "SQL": 1 },
          "output": { "Data Analyst": 1 }
        },
        {
          "input": { "JS": 1, "PY": 0, "TS": 0, "PANDAS": 1, "Mobile": 0, "Android": 0, "React": 0, "Angular": 0, "Node.js": 0, "SQL": 1 },
          "output": { "Data Scientist": 1 }
        },
        {
          "input": { "JS": 0, "PY": 1, "TS": 1, "PANDAS": 1, "Mobile": 0, "Android": 0, "React": 0, "Angular": 0, "Node.js": 0, "SQL": 1 },
          "output": { "Machine Learning Engineer": 1 }
        },
        {
          "input": { "JS": 0, "PY": 1, "TS": 1, "PANDAS": 0, "Mobile": 0, "Android": 0, "React": 0, "Angular": 0, "Node.js": 0, "SQL": 0 },
          "output": { "Python Developer": 1 }
        },
        {
          "input": { "JS": 0.5, "PY": 0, "TS": 1, "PANDAS": 0, "Mobile": 1, "Android": 1, "React": 0.5, "Angular": 0, "Node.js": 0, "SQL": 0 },
          "output": { "Android Developer": 1 }
        },
        {
          "input": { "JS": 1, "PY": 0, "TS": 1, "PANDAS": 0, "Mobile": 0.5, "Android": 0.2, "React": 1, "Angular": 0, "Node.js": 1, "SQL": 1 },
          "output": { "React Developer": 1 }
        },
        {
          "input": { "JS": 1, "PY": 0, "TS": 1, "PANDAS": 0, "Mobile": 0, "Android": 0, "React": 0, "Angular": 1, "Node.js": 1, "SQL": 1 },
          "output": { "Angular Developer": 1 }
        },
        {
          "input": { "JS": 1, "PY": 0, "TS": 1, "PANDAS": 0, "Mobile": 0, "Android": 0, "React": 0.8, "Angular": 0.8, "Node.js": 1, "SQL": 1 },
          "output": { "Node.js Developer": 1 }
        },
        {
          "input": { "JS": 0.5, "PY": 0, "TS": 0.5, "PANDAS": 0, "Mobile": 0, "Android": 0, "React": 0, "Angular": 0, "Node.js": 0.8, "SQL": 1 },
          "output": { "SQL Developer": 1 }
        }
    ];

    redNeuronal.train(datos);
    let resultado;
  
    const json = jsonData;
  
    resultado = brain.likely(json, redNeuronal);
    result.textContent = resultado;
}