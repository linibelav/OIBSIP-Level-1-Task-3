function convertTemp() {
    const value = parseFloat(document.getElementById("inputValue").value);
    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;
    const output = document.getElementById("output");

    if (isNaN(value)) {
        output.textContent = "Please enter a valid number";
        return;
    }

    let result;

    let celsius;
    if (from === "celsius") celsius = value;
    if (from === "fahrenheit") celsius = (value - 32) * 5 / 9;
    if (from === "kelvin") celsius = value - 273.15;

    if (to === "celsius") result = celsius;
    if (to === "fahrenheit") result = (celsius * 9 / 5) + 32;
    if (to === "kelvin") result = celsius + 273.15;

    output.textContent = `Result: ${result.toFixed(2)} ${getUnitSymbol(to)}`;
}

function getUnitSymbol(unit) {
    if (unit === "celsius") return "°C";
    if (unit === "fahrenheit") return "°F";
    if (unit === "kelvin") return "K";
}
