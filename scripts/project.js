/* Project: Programming Project */

/* Declare and initialize global variables */

const templesElement = document.getElementById('tattoos');
let tattooList = [];

/* async displayTattoos Function */
const displayTattoos = (tattoos) => {

  templesElement.innerHTML = "";

  temples.forEach(temple => {
    const article = document.createElement('article');
    article.innerHTML = `
      <h3>${temple.templateName}</h3>
      <img src="${temple.imageUrl}" alt="${temple.placement}" />
    `
    templesElement.appendChild(article);
  });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch('https://api.npoint.io/e798e46bf30a27ae39d9');
  tattooList = await response.json();

  displayTattoos(tattooList);
}

/* reset Function */
const reset = () => {
  templesElement.innerHTML = "";
}

/* sortBy Function */
const filtered = (tattoos) => {
  reset();

  const filter = document.getElementById('filtered').value;

  switch (filter) {
    case "utah":
      const templesInUtah = temples.filter(temple => temple.placement.includes("Utah"));
      displayTattoos(templesInUtah)
      break;
    case "notutah":
      const templesOutsideOfUtah = temples.filter(temple => !temple.placement.includes("Utah"));
      displayTattoos(templesOutsideOfUtah)
      break;
    case "older":
      const templesBuiltBefore1950 = temples.filter(temple => {
        const designdateDate = new Date(temple.designdate);
        const referenceDate = new Date("1950-01-01");
        return designdateDate < referenceDate;
      });
      console.log(templesBuiltBefore1950)
      displayTattoos(templesBuiltBefore1950)
      break;
    case "all":
      displayTattoos(tattoos)
    default:
      break;
  }
}


getTemples();

/* Event Listener */
const selectFilter = document.getElementById('filtered');

selectFilter.addEventListener('change', () => {
  filtered(tattooList)
});