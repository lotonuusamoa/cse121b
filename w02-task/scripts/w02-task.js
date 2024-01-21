/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Andre Milford';
let currentYear = new Date().getFullYear();
let profilePicture = 'images/andre.png';


/* Step 3 - Element Variables */

const foodElement = document.querySelector('#food');
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img');



/* Step 4 - Adding Content */

yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `This is ${fullName}. Current studen at BYU-Idaho.`);




/* Step 5 - Array */
let favfoods = ["lu'au", "Pineapple smoothie", "Bone marrow soup", "Sushi", "Raw fish in coconut", "Burgers", "Steak", "Chicken", "Mussels", "Fruit"];

foodElement.innerHTML = favfoods;
let newfood = 'Sashimi';
favfoods.push(newfood);
foodElement.innerHTML += `<br>${favfoods}`;





