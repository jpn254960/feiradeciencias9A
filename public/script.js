// document.getElementById("fetchData").addEventListener("click", async () => {
//     try {
//       const response = await fetch("/data"); // Faz uma requisição ao endpoint "/data".
//       const data = await response.json(); // Converte a resposta em JSON.
//       const output = document.getElementById("output");
  
//       // Mostra os dados no HTML.
//       output.innerHTML = data.map(item => `<p>${item.id}: ${item.name}</p>`).join("");
//     } catch (error) {
//       console.error("Erro ao buscar dados:", error);
//     }
//   });

async function entrar() {
  try {
    const response = await fetch("/data"); // Faz uma requisição ao endpoint "/data".
    const data = await response.json(); // Converte a resposta em JSON.
    const output = document.getElementById("output");

    // Mostra os dados no HTML.
    output.innerHTML = data.map(item => `<p>${item.id}: ${item.name}</p>`).join("");
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}
