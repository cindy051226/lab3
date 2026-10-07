let photo = document.getElementById("photo");
let caption = document.getElementById("caption");
let stageLabel = document.getElementById("stage-label");
let counter = document.getElementById("counter");
let btn1 = document.getElementById("sequence-one");
let btn2 = document.getElementById("sequence-two");


const sequenceOne = [
  {
    src: "images/sprout.jpg",
    alt: "A tiny sprout in a pot",
    stage: "Beginning",
    text: "It starts small. A tiny sprout, curious about the world.",
  },
  {
    src: "images/bloom.jpg",
    alt: "A flower in full bloom",
    stage: "Middle",
    text: "Sunshine, water, and time. It blooms and brightens the whole room.",
  },
  {
    src: "images/wilted.jpg",
    alt: "A wilted flower",
    stage: "End",
    text: "Petals fall, softly. It lived a full and happy life.",
  },
];

const sequenceTwo = [
  {
    src: "images/wilted.jpg",
    alt: "A wilted flower",
    stage: "Beginning",
    text: "The flower is tired and wilting. It feels like the end.",
  },
  {
    src: "images/sprout.jpg",
    alt: "A tiny sprout in a pot",
    stage: "Middle",
    text: "But a seed was left behind, and a new sprout pushes up.",
  },
  {
    src: "images/bloom.jpg",
    alt: "A flower in full bloom",
    stage: "End",
    text: "Bloom again. Nothing was lost, it just began again.",
  },
];

let currentSequence = sequenceOne;
let currentStep = 0;
 

function showStep() {
  let step = currentSequence[currentStep];
  photo.src = step.src;
  photo.alt = step.alt;
  caption.textContent = step.text;
  stageLabel.textContent = step.stage;
  counter.textContent =
    currentStep + 1 + " of " + currentSequence.length + " · click the picture";
}

function nextStep() {
  currentStep = currentStep + 1;
  if (currentStep >= currentSequence.length) {
    currentStep = 0;
  }
  showStep();
}

function chooseSequenceOne() {
  currentSequence = sequenceOne;
  currentStep = 0;
  btn1.classList.add("active");
  btn2.classList.remove("active");
  showStep();
}

function chooseSequenceTwo() {
  currentSequence = sequenceTwo;
  currentStep = 0;
  btn2.classList.add("active");
  btn1.classList.remove("active");
  showStep();
}

photo.addEventListener("click", nextStep);
btn1.addEventListener("click", chooseSequenceOne);
btn2.addEventListener("click", chooseSequenceTwo);

showStep();
