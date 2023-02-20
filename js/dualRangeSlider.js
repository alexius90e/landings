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

lowerLabel.addEventListener('change', (e) => {
  const newValue = parseInt(e.target.value);
  if (newValue <= upperSlider.value) {
    lowerSlider.value = newValue;
  } else {
    lowerLabel.value = lowerSlider.value;
  }
});

upperLabel.addEventListener('change', (e) => {
  const newValue = parseInt(e.target.value);

  const maxValue = 50000;

  if (newValue >= lowerSlider.value) {
    upperLabel.value = newValue <= maxValue ? newValue : maxValue;
    upperSlider.value = newValue <= maxValue ? newValue : maxValue;
  } else {
    upperLabel.value = upperSlider.value;
  }
});

export function updateValue() {
  lowerVal = parseInt(lowerSlider.value);
  upperVal = parseInt(upperSlider.value);
  lowerLabel.value = lowerVal;
  upperLabel.value = upperVal;
}

updateValue();
