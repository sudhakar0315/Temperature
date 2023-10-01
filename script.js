const celsiusInput = document.getElementById("celsius");
        const fahrenheitInput = document.getElementById("fahrenheit");
        const convertButton = document.getElementById("convert");
        const resetButton = document.getElementById("reset");
        const cancelButton = document.getElementById("cancel");
        const resultDiv = document.getElementById("result");

        convertButton.addEventListener("click", () => {
            const celsiusValue = parseFloat(celsiusInput.value);
            const fahrenheitValue = parseFloat(fahrenheitInput.value);

            if (!isNaN(celsiusValue)) {
                const convertedFahrenheit = (celsiusValue * 9/5) + 32;
                fahrenheitInput.value = convertedFahrenheit.toFixed(2);
                resultDiv.textContent = `${celsiusValue}°C is equal to ${convertedFahrenheit.toFixed(2)}°F`;
            } else if (!isNaN(fahrenheitValue)) {
                const convertedCelsius = (fahrenheitValue - 32) * 5/9;
                celsiusInput.value = convertedCelsius.toFixed(2);
                resultDiv.textContent = `${fahrenheitValue}°F is equal to ${convertedCelsius.toFixed(2)}°C`;
            } else {
                resultDiv.textContent = "Please enter a valid temperature.";
            }
        });

        resetButton.addEventListener("click", () => {
            celsiusInput.value = "";
            fahrenheitInput.value = "";
            resultDiv.textContent = "";
        });

        cancelButton.addEventListener("click", () => {
            alert("Operation Cancelled");
        });