const teamMembers = [
    {
      name: "Juan Branda",
      role: "Auxiliar",
      img: "https://cdn.saopaulofc.net/2025/06/juan-branda.png"
    },
    {
      name: "Hernán Crespo",
      role: "Técnico",
      img: "https://cdn.saopaulofc.net/2025/06/crespo_01-1.png"
    },
    {
      name: "Víctor López",
      role: "Auxiliar",
      img: "https://cdn.saopaulofc.net/2025/06/victor-lopez-1.png"
    }
  ];
  
  const container = document.getElementById("team-container");
  
  teamMembers.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");
  
    card.innerHTML = `
      <img src="${member.img}" alt="${member.name}">
      <div class="card-content">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
      </div>
    `;
  
    container.appendChild(card);
  });
  