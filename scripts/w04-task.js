/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Andre Milford",
  photo: "images/andre.png",
  favoriteFoods: [
      "Sashimi",
      "Beef Soup",
      "Palusami",
  ],
  hobbies: [
      "drawing",
      "reading",
      "hiking",
      "play rugby",
      
  ],
  placesLived: [],
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
  {
      place: "Apia, Samoa",
      length: "19 years"
  },
  {
      place: "Suva, Fiji",
      length: "4 years"
  },
  {
      place: "Pago Pago, American Samoa",
      length: "20 years"
  }
);



/* DOM Manipulation - Output */
/* Name */
const output = document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
const photo = document.querySelector("#photo");
photo.setAttribute("src", myProfile.photo);
photo.setAttribute("alt", myProfile.name);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  let li =document.createElement("li");
  li.textContent = food;
  document.querySelector("#favorite-foods").appendChild(li);
})
/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
  let li = document.createElement("li");
  li.textContent = hobbie;
  document.querySelector("#hobbies").appendChild(li);
})
/* Places Lived DataList */
myProfile.placesLived.forEach(places => {
  let dt = document.createElement("dt");
  dt.textContent = places.place;
  document.querySelector("#places-lived").appendChild(dt);
  let dd = document.createElement("dd");
  dd.textContent = places["length"];
  document.querySelector("#places-lived").appendChild(dd);
})