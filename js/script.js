/* Data to Show*/
const data = [
  {
    car: `Brian's 1995 Mitsubishi Eclipse`,
    carImage: `assets/eclipse.jpg`,
    bgImage: `url(assets/eclipseBG.jpg)`,
    audio: `audio/eclipse.mp3`
  },
  {
    car: `Brian's 1994 Toyota Supra`,
    carImage: `assets/supra.jpg`,
    bgImage: `url(assets/supraBG.jpg)`,
    audio: `audio/supra.mp3`
  },
  {
    car: `Dom's 1970 Dodge Charger R/T`,
    carImage: `assets/charger.jpg`,
    bgImage: `url(assets/chargerBG.jpg)`,
    audio: `audio/charger.mp3`
  },
  {
    car: `Brian's 1999 Nissan Skyline GT-R R34`,
    carImage: `assets/skyline.jpg`,
    bgImage: `url(assets/skylineBG.jpg)`,
    audio: `audio/skyline.mp3`
  },
  {
    car: `Han's 1997 Mazda RX-7 VeilSide Fortune`,
    carImage: `assets/rx7.jpg`,
    bgImage: `url(assets/rx7BG.jpg)`,
    audio: `audio/rx7.mp3`
  }
];

/*
Car Name and Image
*/
// name
const car = document.querySelector('blockquote');
// image
const carImage = document.querySelector('img.carImage');
// background
const bgImage = document.querySelector('body');
// audio
const carAudio = document.querySelector('audio');

// Check-Check: change text
car.innerHTML = "Cars of Fast and Furious";
// Check-Check: change image
carImage.src = `assets/main.svg`;
// Check-Check: background image
bgImage.style.backgroundImage = 'url(assets/mainBG.jpg)';
// Check-Check: audio
carAudio.src = `audio/main.mp3`;

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
  carImage.src = data[itemNumber].carImage;
  bgImage.style.backgroundImage = data[itemNumber].bgImage;
  carAudio.src = data[itemNumber].audio;
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
  carImage.src = data[itemNumber].carImage;
  bgImage.style.backgroundImage = data[itemNumber].bgImage;
  carAudio.src = data[itemNumber].audio;
});

// listen for clicks on random button
randButton.addEventListener('click', () => {

  // generate random number, for total number, of items (data)
  randomNumber = Math.floor(Math.random() * data.length);

  // display data based random number
  car.innerHTML = data[randomNumber].car;
  carImage.src = data[randomNumber].carImage;
  bgImage.style.backgroundImage = data[randomNumber].bgImage;
  carAudio.src = data[randomNumber].audio;

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
    carImage.src = data[itemNumber].carImage;
    bgImage.style.backgroundImage = data[itemNumber].bgImage;
    carAudio.src = data[itemNumber].audio;

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
    carImage.src = data[itemNumber].carImage;
    bgImage.style.backgroundImage = data[itemNumber].bgImage;
    carAudio.src = data[itemNumber].audio;
  }

  // Random Spacebar
  if (event.key === " ") {

    // generate random number, for total number, of items (data)
    randomNumber = Math.floor(Math.random() * data.length);

    // display data based random number
    car.innerHTML = data[randomNumber].car;
    carImage.src = data[randomNumber].carImage;
    bgImage.style.backgroundImage = data[randomNumber].bgImage;
    carAudio.src = data[randomNumber].audio;

  }

});


carImage.addEventListener("click", () => {
  carAudio.play();
});