/* LESSON 3 - Programming Tasks */

/* Profile Object  */

/* Populate Profile Object with placesLive objects */
let myProfile = {
    name: "Andre Milford",
    photo: {path: "./images/andre.png", name: "Andre Milford's photo"},
    favoriteFoods: ['sashimi', 'beef soup', 'palusami'],
    hobbies: ['drawing', 'reading', 'hiking'],
    placesLived: [
        {place: "Apia, Samoa", length: "19 years"},
        {place: "Suva, Fiji", length: "4 years"},
        {place: "Pago Pago, A.Samoa", length: "20 years"},
    ]
}

/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').innerHTML = myProfile.name

/* Photo with attributes */
document.querySelector('img').setAttribute("src", myProfile.photo.path);
document.querySelector('img').setAttribute("alt", myProfile.photo.name);

/* Favorite Foods List*/

function addFood() {
    for (let i = 0; i < myProfile.favoriteFoods.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = myProfile.favoriteFoods[i];
    document.getElementById('favorite-foods').appendChild(li);
    }
}
  addFood();

/* Hobbies List */
function addHobby() {
    for (let i = 0; i < myProfile.hobbies.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = myProfile.hobbies[i];
    document.getElementById('hobbies').appendChild(li);
    }
}

addHobby()

/* Places Lived DataList */
function renderPlaces(placesLived) {
    const html = placesLived.map(
      (place) => `<tr>
      <td>${place.place}</td>
      <td>${place.length}</td>
      </tr>`
    );
    document.querySelector("#places-lived").innerHTML = html.join(" | ");
  }

  renderPlaces(myProfile.placesLived)