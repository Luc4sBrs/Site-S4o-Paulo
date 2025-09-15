document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      alert("Você clicou em " + card.querySelector(".card-title").innerText);
    });
  });