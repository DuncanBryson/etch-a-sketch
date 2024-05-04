const container = document.querySelector(".container");
const input = document.querySelector('input');
const dimensionButton = document.querySelector('.dimension');
const resetButton = document.querySelector('.reset');
const randomColor = document.querySelector('.recolor')
let currentDim = 16;
let colorToggle = false;

makeBoxes(currentDim);


// Clears anything drawn
resetButton.addEventListener('click', () => {
  container.textContent = '';
  makeBoxes(currentDim);
})

// resizes box to specified dimensions from input, clears boxes
dimensionButton.addEventListener('click', () =>{
  container.textContent = '';
  if (input.value != 0 && input.value <100) currentDim = input.value; 
  if(input.value >= 100) alert('enter a value between 1 and 100');
  makeBoxes(currentDim);
  input.textContent = '';
});


//builds grid of boxes based on input, default 16x16
function makeBoxes(dim) {
  for (i=0; i < dim**2; i++){
    const etchBox = document.createElement('div');
    etchBox.style.width = 800 / dim + 'px';
    etchBox.style.height = 800/dim + 'px';
    container.appendChild(etchBox);
    etchBox.classList.add('box')
    fillBoxes(etchBox);
  }
}

// fill boxes on hover
function fillBoxes(etchBox) {
  etchBox.addEventListener('mouseover', () =>{
    etchBox.style.backgroundColor = fillColor()
  });
};

// get random color if random box toggled
function fillColor() {
  if (colorToggle) return `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
  else return 'black';
}

// random color toggle
randomColor.addEventListener('click', () => {
  colorToggle = !colorToggle;
})


function randomRGB () {
  return Math.floor(Math.random() * 255);
}
