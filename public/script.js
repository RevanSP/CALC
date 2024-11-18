function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (weight && height) {
        const bmi = weight / (height * height);
        let category = '';

        if (bmi < 18.5) category = 'Underweight';
        else if (bmi < 25) category = 'Normal weight';
        else if (bmi < 30) category = 'Overweight';
        else category = 'Obese';

        document.getElementById('bmiResult').innerHTML = `
            <div class="alert shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-2 border-black rounded-none mt-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-2 border-black rounded-none mt-3">
                Your BMI is ${bmi.toFixed(1)}<br>
                Category: ${category}
            </div>
        `;
    }
}
function calculateAge() {
    const birthDate = new Date(document.getElementById('birthDate').value);
    const today = new Date();

    if (birthDate) {
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        document.getElementById('ageResult').innerHTML = `
            <div class="alert shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-2 border-black rounded-none mt-3 alert shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-2 border-black rounded-none mt-3-info">
                Your age is ${age} years
            </div>
        `;
    }
}
function convertTemperature() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    if (!isNaN(temp)) {
        let result;
        let celsius;
        switch (fromUnit) {
            case 'celsius':
                celsius = temp;
                break;
            case 'fahrenheit':
                celsius = (temp - 32) * 5 / 9;
                break;
            case 'kelvin':
                celsius = temp - 273.15;
                break;
        }
        switch (toUnit) {
            case 'celsius':
                result = celsius;
                break;
            case 'fahrenheit':
                result = celsius * 9 / 5 + 32;
                break;
            case 'kelvin':
                result = celsius + 273.15;
                break;
        }
        document.getElementById('tempResult').innerHTML = `
            <div class="alert shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-2 border-black rounded-none mt-3 alert shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-2 border-black rounded-none mt-3-info">
                ${temp} ${fromUnit} = ${result.toFixed(2)} ${toUnit}
            </div>
        `;
    }
}
let display = document.getElementById('display');
function appendToDisplay(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = '';
}
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
