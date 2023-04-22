const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  
  endpointMap = {
    "sumBtnradio": "api/sumar/",
    "restBtnradio": "api/restar/",
    "multBtnradio": "api/multiplicar/",
    "divBtnradio": "api/dividir/"
  }
  let resultEndpoint = null
  for (const [id, endpoint] of Object.entries(endpointMap)) {
    let Btnradio = document.getElementById(id);
    if (Btnradio.checked) {
      resultEndpoint = endpoint
    }
  }

  const num_1 = parseFloat(document.getElementById("numero_1").value);
  const num_2 = parseFloat(document.getElementById("numero_2").value);
  const response = await fetch("http://localhost:3000/" + resultEndpoint, {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
    },
    "body": JSON.stringify({ numbers_to_operate: [num_1, num_2] }), 
  });

  const result_str = String( (await response.json())["result"]);
  const resultBox = document.getElementById("resultBox");
  resultBox.innerHTML = result_str;
});
