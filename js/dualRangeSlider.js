export const lowerSlider = document.querySelector('#lower');

export const upperSlider = document.querySelector('#upper');

const lowerLabel = document.querySelector('#lowerLabel');

const upperLabel = document.querySelector('#upperLabel');

let lowerVal = parseInt(lowerSlider.value);

let upperVal = parseInt(upperSlider.value);

upperSlider.addEventListener('input', () => {
  updateValue();
  if (upperVal < lowerVal + 4) {
    lowerSlider.value = upperVal - 4;
    if (lowerVal == lowerSlider.min) upperSlider.value = 4;
  }
});

lowerSlider.addEventListener('input', () => {
  updateValue();
  if (lowerVal > upperVal - 4) {
    upperSlider.value = lowerVal + 4;
    if (upperVal == upperSlider.max)
      lowerSlider.value = parseInt(upperSlider.max) - 4;
  }
});

export function updateValue() {
  lowerVal = parseInt(lowerSlider.value);
  upperVal = parseInt(upperSlider.value);
  lowerLabel.innerHTML = `от ${lowerVal}`;
  upperLabel.innerHTML = `до ${upperVal}`;
}

updateValue();
