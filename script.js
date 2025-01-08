function convertTemperature() {
    const value = parseFloat(document.getElementById("tempValue").value);
    const from = document.getElementById("tempFrom").value;
    const to = document.getElementById("tempTo").value;
    let result;

    if (from === to) {
        result = value;
    }
    else if (from === "Celsius" && to === "Fahrenheit") {
        result = (value * 9/5) + 32;
    }
    else if (from === "Celsius" && to === "Kelvin") {
        result = value + 273.15;
    }
    else if (from === "Fahrenheit" && to === "Celsius") {
        result = (value - 32) * 5/9;
    }
    else if (from === "Fahrenheit" && to === "Kelvin") {
        result = (value - 32) * 5/9 + 273.15;
    }
    else if (from === "Kelvin" && to === "Celsius") {
        result = value - 273.15;
    }
    else if (from === "Kelvin" && to === "Fahrenheit") {
        result = (value - 273.15) * 9/5 + 32;
    }

    document.getElementById("tempResult").innerText = `Result: ${result} ${to}`;
}

function convertNumberSystem() {
        const inputValue = document.getElementById('numberInput').value.trim();
        const fromSystem = document.getElementById('fromSystem').value;
        const toSystem = document.getElementById('toSystem').value;
        if (!inputValue) {
            alert("Please enter a number to convert.");
            return;
        }
        let decimalValue;
        try {
            decimalValue = parseInt(inputValue, parseInt(fromSystem));
            if (isNaN(decimalValue)) throw new Error("Invalid input for the selected system.");
        } catch (error) {
            alert("Invalid input. Please check the number and the 'From' system.");
            return;
        }
        const result = decimalValue.toString(parseInt(toSystem)).toUpperCase();
        document.getElementById('numberResult').textContent = `Converted Value: ${result}`;
}

function convertPressure() {
    const from = document.getElementById('fromPressure').value;
    const to = document.getElementById('toPressure').value;
    const value = parseFloat(document.getElementById('pressureValue').value);
    let result;
    if (from === "Pascal" && to === "Pascal") {
        result = value;
        } 
    else if (from === "Pascal" && to === "Bar") {
           result = value / 100000;
        } 
    else if (from === "Pascal" && to === "PSI") {
           result = value / 100;
        }
    else if (from === "Pascal" && to === "Atmosphere") {
           result = value / 101325;
        } 
    else if (from === "Bar" && to === "Pascal") {
           result = value * 100000;
        } 
    else if (from === "Bar" && to === "Bar") {
           result = value;
        } 
    else if (from === "Bar" && to === "PSI") {
           result = value * 1000;
        } 
    else if (from === "Bar" && to === "Atmosphere") {
           result = value * 0.987;
        } 
    else if (from === "PSI" && to === "Pascal") {
           result = value * 100;
        } 
    else if (from === "PSI" && to === "Bar") {
           result = value / 1000;
        } 
    else if (from === "PSI" && to === "PSI") {
           result = value;
        } 
    else if (from === "PSI" && to === "Atmosphere") {
           result = value / 1013.25;
        } 
    else if (from === "Atmosphere" && to === "Pascal") {
           result = value * 101325;
        } 
    else if (from === "Atmosphere" && to === "Bar") {
           result = value / 0.987;
        }
    else if (from === "Atmosphere" && to === "PSI") {
           result = value * 1013.25;
        } 
    else {
           alert("Invalid input. Please check the number and the 'From' system.");
        }
    document.getElementById('pressureResult').textContent = `Converted Value: ${result}`;
    }
function convertLength() {
    var from = document.getElementById('lengthFrom').value;
    var to = document.getElementById('lengthTo').value;
    var value = parseFloat(document.getElementById('lengthValue').value);
    let result;
    if (from === "Meter" && to === "Meter") {
        result = value;
        }
    else if (from === "Meter" && to === "Kilometer") {
        result = value / 1000;
        }
    else if (from === "Meter" && to === "Centimeter") {
        result = value * 100;
        }
    else if (from === "Meter" && to === "Millimeter") {
        result = value * 1000;
        }
    else if (from === "Meter" && to === "Inch") {
        result = value * 39.3701;
        }
    else if (from === "Meter" && to === "Foot") {
        result = value * 3.28084;
        }
    else if (from === "Meter" && to === "Yard") {
        result = value * 1.09361;
        }
    else if (from === "Meter" && to === "Mile") {
        result = value / 1609.34;
        }
    else if (from === "Kilometer" && to === "Meter") {
        result = value * 1000;
        }
    else if (from === "Kilometer" && to === "Kilometer") {
        result = value;
        }
    else if (from === "Kilometer" && to === "Centimeter") {
        result = value * 100000;
        }
    else if (from === "Kilometer" && to === "Millimeter") {
        result = value * 1000000;
        }
    else if (from === "Kilometer" && to === "Inch") {
        result = value * 39370.1;
        }
    else if (from === "Kilometer" && to === "Foot") {
        result = value * 3280.84;
        }
    else if (from === "Kilometer" && to === "Yard") {
        result = value * 1093.61;
        }
    else if (from === "Kilometer" && to === "Mile") {
        result = value / 1.60934;
        }
    else if (from === "Centimeter" && to === "Meter") {
        result = value / 100;
        }
    else if (from === "Centimeter" && to === "Kilometer") {
        result = value / 100000;
        }
    else if (from === "Centimeter" && to === "Centimeter") {
        result = value;
        }
    else if (from === "Centimeter" && to === "Millimeter") {
        result = value * 10;
        }
    else if (from === "Centimeter" && to === "Inch") {
        result = value / 2.54;
        }
    else if (from === "Centimeter" && to === "Foot") {
        result = value / 30.48;
        }
    else if (from === "Centimeter" && to === "Yard"){
        result = value / 91.44;
        }
    else if (from === "Centimeter" && to === "Mile") {
        result = value / 160934;
    }
    else if (from === "Millimeter" && to === "Meter") {
        result = value / 1000;
        }
    else if (from === "Millimeter" && to === "Kilometer") {
        result = value / 1000000;
        }
    else if (from === "Millimeter" && to === "Centimeter") {
        result = value / 10;
        }
    else if (from === "Millimeter" && to === "Millimeter") {
        result = value;
        }
    else if (from === "Millimeter" && to === "Inch") {
        result = value / 25.4;
        }
    else if (from === "Millimeter" && to === "Foot") {
        result = value / 304.8;
        }
    else if (from === "Millimeter" && to === "Yard") {
        result = value / 914.4;
        }
    else if (from === "Millimeter" && to === "Mile") {
        result = value / 1609340;
    }
    else if (from === "Inch" && to === "Meter") {
        result = value / 39.3701;
        }
    else if (from === "Inch" && to === "Kilometer") {
        result = value / 39370.1;
        }
    else if (from === "Inch" && to === "Centimeter") {
        result = value * 2.54;
        }
    else if (from === "Inch" && to === "Millimeter") {
        result = value * 25.4;
        }
    else if (from === "Inch" && to === "Inch") {
        result = value;
        }
    else if (from === "Inch" && to === "Foot") {
        result = value / 12;
        }
    else if (from === "Inch" && to === "Yard"){
        result = value / 36;
        }
    else if (from === "Inch" && to === "Mile") {
        result = value / 63360;
    }
    else if (from === "Foot" && to === "Meter") {
        result = value / 3.28084;
        }
    else if (from === "Foot" && to === "Kilometer") {
        result = value / 3280.84;
        }
    else if (from === "Foot" && to === "Centimeter") {
        result = value * 30.48;
        }
    else if (from === "Foot" && to === "Millimeter") {
        result = value * 304.8;
        }
    else if (from === "Foot" && to === "Inch") {
        result = value / 12;
        }
    else if (from === "Foot" && to === "Foot") {
        result = value;
        }
    else if (from === "Foot" && to === "Yard"){
        result = value / 3;
        }
    else if (from === "Foot" && to === "Mile") {
        result = value / 5280;
    }
    else if (from === "Yard" && to === "Meter") {
        result = value / 1.09361;
        }
    else if (from === "Yard" && to === "Kilometer") {
        result = value / 1093.61;
        }
    else if (from === "Yard" && to === "Centimeter") {
        result = value * 91.44;
        }
    else if (from === "Yard" && to === "Millimeter") {
        result = value * 914.4;
        }
    else if (from === "Yard" && to === "Inch") {
        result = value * 36;
        }
    else if (from === "Yard" && to === "Foot") {
        result = value * 3;
        }
    else if (from === "Yard" && to === "Yard"){
        result = value;
        }
    else if (from === "Yard" && to === "Mile") {
        result = value / 1760;
    }
    else if (from === "Mile" && to === "Meter") {
        result = value * 1609.34;
        }
    else if (from === "Mile" && to === "Kilometer") {
        result = value * 1.60934;
        }
    else if (from === "Mile" && to === "Centimeter") {
        result = value * 160934;
        }
    else if (from === "Mile" && to === "Millimeter") {
        result = value * 1609340;
        }
    else if (from === "Mile" && to === "Inch") {
        result = value * 63360;
        }
    else if (from === "Mile" && to === "Foot") {
        result = value * 5280;
        }
    else if (from === "Mile" && to === "Yard"){
        result = value * 1760;
        }
    else if (from === "Mile" && to === "Mile") {
        result = value;
    }
    else {
        alert("Invalid input. Please check the number and the 'From' system.");
     }
 document.getElementById('lengthResult').textContent = `Converted Value: ${result}`;
 }


async function convertCurrency() {
  const amount = parseFloat(document.getElementById('currencyValue').value);
  const fromCurrency = document.getElementById('currencyFrom').value;
  const toCurrency = document.getElementById('currencyTo').value;
  const apiKey = "YOUR_API_KEY";
  const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
  const response = await fetch(url);
  const data = await response.json();
  const rate = data.rates[toCurrency];
  const result = amount * rate;
  document.getElementById('currencyResult').textContent = `Converted Value: ${result}`;
  }
  function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === "" || password === "") {
        alert("Please fill in both fields.");
        return;
    }
    if (username === "admin" && password === "password") {
        localStorage.setItem("username", username);
        window.location.href = "Home.html"; 
    } else {
        alert("Invalid email or password. Please try again.");
    }
}
    function signup(){
        var firstName = document.getElementById('firstName').value
        var lastName = document.getElementById('lastName').value
        var email = document.getElementById('email').value
        var password = document.getElementById('password').value
        var confirmPassword = document.getElementById('confirmPassword').value
    if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Please fill in all fields.");
            return;
        }
    if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }
    if (firstName.length < 3 || firstName.length > 20 && lastName.length < 3 || lastName.length > 20) {
            alert("Username must be between 3 and 20 characters long.");
            return;
        }
    if (password.length < 8 || password.length > 20) {
            alert("Password must be between 8 and 20 characters long.");
            return;
        }
        window.location.href = "Home.html"; 
    }
    function Submit(){
        var name = document.getElementById('name').value
        var email = document.getElementById('email').value
        var message = document.getElementById('message').value
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }
    if (email.indexOf('@') === -1) {
        alert("Invalid email address.");
        return;
    }
    alert("Message sent successfully.");
}