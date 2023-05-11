/* Data to Show*/
const data = [
  {
    car: `Brian's 1995 Mitsubishi Eclipse`,
    emoji: '<img class="carImage" src="assets/eclipse.jpg" alt="1995 Mitsubishi Eclipse">',
    image: `url(assets/eclipseBG.jpg)`
  },
  {
    car: `Brian's 1994 Toyota Supra`,
    emoji: '<img class="carImage" src="assets/supra.jpg" alt="1994 Toyota Supra">',
    image: `url(assets/supraBG.jpg)`
  },
  {
    car: `Dom's 1970 Dodge Charger R/T`,
    emoji: '<img class="carImage" src="assets/charger.jpg" alt="1970 Dodge Charger R/T">',
    image: `url(assets/chargerBG.jpg)`
  },
  {
    car: `Brian's 1999 Nissan Skyline GT-R R34`,
    emoji: '<img class="carImage" src="assets/skyline.jpg" alt="1999 Nissan Skyline GT-R R34">',
    image: `url(assets/skylineBG.jpg)`
  },
  {
    car: `Han's 1997 Mazda RX-7 VeilSide Fortune`,
    emoji: '<img class="carImage" src="assets/rx7.jpg" alt="1997 Mazda RX-7 VeilSide Fortune">',
    image: `url(assets/rx7BG.jpg)`
  }
];

/*
Quote and Emoji
*/
// blockquote
const car = document.querySelector('blockquote');
// emoji
const emoji = document.querySelector('p');
// background
const bgImage = document.querySelector('body');

// Check-Check: change text
car.innerHTML = "Iconic Cars of:";
// Check-Check: change emoji text
emoji.innerHTML = '<img class="carImage" src="assets/main.svg" alt="The Fast and the Furious">';
// Check-Check: background image
bgImage.style.backgroundImage = 'url(assets/mainBG.jpg)';

/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
*/
// initialize item number
let itemNumber = 0;
// get next button
const nextButton = document.querySelector("img.next");
// get previous button
const prevButton = document.querySelector("img.prev");
// get random button
const randButton = document.querySelector("img.random");

// listen for clicks on next button
nextButton.addEventListener("click", () => {
  // update, then increase item number with each click
  itemNumber = itemNumber + 1;

  // if at LAST item
  if (itemNumber > data.length - 1) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  car.innerHTML = data[itemNumber].car;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;

});

// listen for clicks on previous button
prevButton.addEventListener("click", () => {
  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;

  // if at FIRST item
  if (itemNumber < 0) {
    // reset counting to last item
    itemNumber = data.length - 1;
  }

  // display data based on array index
  car.innerHTML = data[itemNumber].car;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

// listen for clicks on random button
randButton.addEventListener('click', () => {

  // generate random number, for total number, of items (data)
  randomNumber = Math.floor(Math.random() * data.length);

  // display data based random number
  car.innerHTML = data[randomNumber].car;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;

});

// listen for keypress next
document.addEventListener('keyup', (event) => {

  // check-check: What key was pressed?
  // console.log(event);

  // Next Right Arrow  
  if (event.key === "ArrowRight") {

    // update, then increase item number with each click
    itemNumber = itemNumber + 1;

    // if at LAST item
    if (itemNumber > data.length - 1) {
      // reset counting to first item
      itemNumber = 0;
    }

    // display data based on array index
    car.innerHTML = data[itemNumber].car;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;

  }

  // Prev Left Arrow
  if (event.key === "ArrowLeft") {

    // update, then DEcrease item number with each click
    itemNumber = itemNumber - 1;

    // if at FIRST item
    if (itemNumber < 0) {
      // reset counting to last item
      itemNumber = data.length - 1;
    }

    // display data based on array index
    car.innerHTML = data[itemNumber].car;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;
  }

  // Random Spacebar
  if (event.key === " ") {

    // generate random number, for total number, of items (data)
    randomNumber = Math.floor(Math.random() * data.length);

    // display data based random number
    car.innerHTML = data[randomNumber].car;
    emoji.innerHTML = data[randomNumber].emoji;
    bgImage.style.backgroundImage = data[randomNumber].image;

  }

});