function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}


function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    console.log(pin);
    // display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumbersField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumbersField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumbersField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split(''); // here .split('') puts all the digits in an array
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumbersField.value = remainingDigits;
        }
    }
    else {
        const newTypedNumber = previousTypedNumber + number;
        typedNumbersField.value = newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumbersField = document.getElementById('typed-numbers');
    const typedNumber = typedNumbersField.value;

    const pinMatchedMessage = document.getElementById('pin-matched');

    const pinIsNotMatchedMessage = document.getElementById('pin-not-matched');

    if (currentPin === typedNumber) {
        pinMatchedMessage.style.display = 'block';
        pinIsNotMatchedMessage.style.display = 'none';
    }
    else {
        pinIsNotMatchedMessage.style.display = 'block';
        pinMatchedMessage.style.display = 'none';
    }
})
