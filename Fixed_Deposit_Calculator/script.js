function calculateMaturityAmount(){

    // Get input values from the form elements

    const amount = parseFloat(document.getElementById('amount').value);
    const intersRate = parseFloat(document.getElementById('interestRate').value);
    const maturity = parseFloat(document.getElementById('maturity').value);

    // Perform the Calculation

    const maturityAmount = amount + (amount * intersRate * maturity)/100;

    // Display the Result

    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;

}

// Attach the event listener to the calculate Button
document.getElementById('calculateBtn').addEventListener('click',calculateMaturityAmount);