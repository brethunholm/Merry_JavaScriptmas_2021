const niceList = document.getElementById('nice-list');
const naughtyList = document.getElementById('naughty-list');
const btn = document.getElementById('btn');

const sorteesArr = [
  {
    name: 'David',
    hasBeenGood: false,
  },
  {
    name: 'Del',
    hasBeenGood: true,
  },
  {
    name: 'Valerie',
    hasBeenGood: false,
  },
  {
    name: 'Astrid',
    hasBeenGood: true,
  },
];

const sortLists = () => {
  // I like this method but the result is a string not a list so the names are all on one line which looks weird
  //   let nice = [];
  //   let naughty = [];
  //   for (let i = 0; i < sorteesArr.length; i++) {
  //     if (!sorteesArr[i].hasBeenGood) {
  //       naughty.unshift(sorteesArr[i]);
  //     } else if (sorteesArr[i].hasBeenGood) {
  //       nice.unshift(sorteesArr[i]);
  //     }
  //     let niceKidsList = nice.map((kid) => {
  //       return kid.name;
  //     });

  //     let badKidsList = naughty.map((kid) => {
  //       return kid.name;
  //     });
  //     niceList.innerHTML = niceKidsList.join(' ');
  //     naughtyList.innerHTML = badKidsList.join(' ');
  //   }

  for (let i = 0; i < sorteesArr.length; i++) {
    if (sorteesArr[i].hasBeenGood === false) {
      naughtyList.innerHTML +=
        '<ul>' + '<li>' + sorteesArr[i].name + '</li>' + '</ul>';
    }
    if (sorteesArr[i].hasBeenGood === true) {
      niceList.innerHTML +=
        '<ul>' + '<li>' + sorteesArr[i].name + '</li>' + '</ul>';
    }
  }
};

btn.addEventListener('click', sortLists);
// Task:
// - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.

// Stretch goals:
// - Add the option to add new names to the sorteesArr.
// - Make it possible to switch people to the other list.
