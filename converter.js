const price = document.querySelector('#price');
const length = document.querySelector('#length');
const width = document.querySelector('#width');
const submit = document.querySelector('#submit');
const resultDisplay = document.querySelector('#result-display');

let volume;

function volumeCalc() {
    const priceVal = Number(price.value);
    const lengthVal = Number(length.value) * 0.001;
    console.log(lengthVal);
    const widthVal = Number(width.value) * 0.001;



    volume = priceVal / (lengthVal * widthVal * 1000);
    return Number(volume.toFixed(6));
    }

function onSubmit(e) {
    e.preventDefault();
    const result = volumeCalc();
    const resultText = document.createElement('p');
    resultText.innerText = result;
    resultDisplay.appendChild(resultText);
}


submit.addEventListener('click', onSubmit)