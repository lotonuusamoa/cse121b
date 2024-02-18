/* W0: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {

  templesElement.innerHTML = "";

  temples.forEach(temple => {
    const article = document.createElement('article');
    article.innerHTML = `
      <h3>${temple.templateName}</h3>
      <img src="${temple.imageUrl}" alt="${temple.location}" />
    `
    templesElement.appendChild(article);
  });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch('https://aspa-kasb.glitch.me/samoantattoos.json');
  templeList = await response.json();

  displayTemples(templeList);
}

/* reset Function */
const reset = () => {
  templesElement.innerHTML = "";
}

/* sortBy Function */
const filtered = (temples) => {
  reset();

  const filter = document.getElementById('filtered').value;

  switch (filter) {
    case "chest":
      const templesInUtah = temples.filter(temple => temple.placement.includes("chest"));
      displayTemples(templesInUtah)
      break;
    case "nochest":
      const templesOutsideOfUtah = temples.filter(temple => temple.placement.includes("sleeve"));
      displayTemples(templesOutsideOfUtah)
      break;

    case "legs":
      const legsOthers = temples.filter(temple => temple.placement.includes("leg"));
      displayTemples(legsOthers)
      break;

    case "all":
      displayTemples(temples)
    default:
      break;
  }
}


getTemples();

/* Event Listener */
const selectFilter = document.getElementById('filtered');

selectFilter.addEventListener('change', () => {
  filtered(templeList)
});