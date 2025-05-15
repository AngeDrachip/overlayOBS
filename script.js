async function chargerCandidats() {
  const res = await fetch('/data.json');
  const data = await res.json();
  const conteneur = document.getElementById('candidats');
  conteneur.innerHTML = '';

  for (const [pseudo, info] of Object.entries(data.candidats)) {
    const div = document.createElement('div');
    div.className = 'candidat';
    div.innerHTML = `
      <h2>${pseudo}</h2>
      <p>${info.message}</p>
      <p class="votes">Votes : ${info.votes}</p>
    `;
    conteneur.appendChild(div);
  }
}

setInterval(chargerCandidats, 3000);
chargerCandidats();
