/* # Author: Francois Oratile Kgatlhanye
 * # Date: 2026-04-16
 * # Description: This script calculates the age based on the provided date of birth.
 */

document.addEventListener("DOMContentLoaded", function () {
    const today = new Date().toISOString().split("T")[0];

    // Prevent users from selecting a future date
    document.getElementById("calBirthDate").setAttribute("max", today);
});

function onDateChange() {
    // Hide error message and results when input changes
    document.getElementById("error").style.display = "none";
    document.getElementById("resultWrap").style.display = "none";
}

// Main function to calculate age
function calculateAge() {
    const birthDate = document.getElementById("calBirthDate").value;
    const err = document.getElementById("error");
    const wrap = document.getElementById("resultWrap");

    err.style.display = "none";
    wrap.style.display = "none";

    // Date Validation
    if (!birthDate) {
        err.textContent = "Please select a date of birth.";
        err.style.display = "block";
        return;
    }

    const [y, m, d] = birthDate.split("-").map(Number);
    const birth = new Date(y, m - 1, d);
    const today = new Date();

    if (birth > today) {
        err.textContent = "Date of birth must be in the past.";
        err.style.display = "block";
        return;
    }

    // Initial age calculation
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    // Adjust years and months if negative
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) { 
        years--;
        months += 12; 
    }

    // Assign calculated values
    document.getElementById("lblYears").textContent = years;
    document.getElementById("lblMonths").textContent = months;
    document.getElementById("lblDays").textContent = days;
    wrap.style.display = "block";
}
