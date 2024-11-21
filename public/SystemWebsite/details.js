/**
 * Author: Caleb Brooke
 * Date: 2024-07-11
 * Description:Checks system compatibility with various example applications created by ABC Technologies
 */ /*I know i went a little overboard I apologise, I just had a few ideas that I thought would look good. I used a mix of Replit and Vscode for this. */

function EvaluateSysInfo() {
    const ram = parseInt(document.getElementById("ram").value, 10);
    const cpu = parseInt(document.getElementById("cpu").value, 10);

    // Resets results section and display
    document.getElementById('results').style.display = 'block';
    resetResults();

    // Simulates loading and display results
    simulateLoading("software1", ram >= 4 && cpu >= 2);
    simulateLoading("software2", ram >= 8 && cpu >= 4);
    simulateLoading("software3", ram >= 16 && cpu >= 8);
}

function resetResults() {
    const results = document.querySelectorAll('.result');
    results.forEach(result => {
        result.style.display = 'none';
        result.innerHTML = result.id === "software1" ? "Basic Office Suite: Checking..." : result.id === "software2" ? "Advanced Design Software: Checking..." : "Data Analysis Software: Checking...";
    });
}

function simulateLoading(id, isCompatible) {
    setTimeout(() => {
        const result = document.getElementById(id);
        result.style.display = 'block';
        // Corrected typo here that was causing Sufficient resources to not be green.
        result.innerHTML = `${result.id === "software1" ? "Basic Office Suite" : result.id === "software2" ? "Advanced Design Software" : "Data Analysis Software"}: <span class="${isCompatible ? 'compatible' : 'not-compatible'}">${isCompatible ? 'Sufficient Resources' : 'Insufficient Resources'}</span>`;
    }, Math.random() * 2000 + 1000);
}