function calculateMargin() {
    const revenue = parseFloat(document.getElementById('revenue').value);
    const cost = parseFloat(document.getElementById('cost').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(revenue) || isNaN(cost)) {
        resultDiv.innerHTML = 'Please enter valid numbers for revenue and cost.';
        return;
    }

    if (revenue <= 0) {
        resultDiv.innerHTML = 'Revenue must be greater than 0.';
        return;
    }

    const profit = revenue - cost;
    const margin = (profit / revenue) * 100;

    resultDiv.innerHTML = `Profit Margin: ${margin.toFixed(2)}%`;
}
