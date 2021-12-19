const btn = document.getElementById('btn');
const foodHolder = document.getElementById('foodHolder');

/* Task:
Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

Specific URL to get a random dessert image: 
https://foodish-api.herokuapp.com/api/images/dessert

Stretch goals: 
- Show multiple desserts.
- Add the functionality to go back to the previous image.
*/

const findYum = async () => {
  const data = await fetch(
    'https://foodish-api.herokuapp.com/api/images/dessert'
  );
  console.log(await data);
  const { image } = await data.json();
  console.log(image);
  const img = document.createElement('img');
  img.src = image;
  foodHolder.append(img);
};

btn.addEventListener('click', findYum);
