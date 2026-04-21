/* # Author: Francois Oratile Kgatlhanye
 * # Date: 2026-04-16
 * # Description: This script calculates the age based on the provided date of birth.
 */

function calculateAge() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value) - 1;
    const year = parseInt(document.getElementById("year").value);
    const error = document.getElementById("error");
    const result = document.getElementById("result");

    error.textContent = "";
    result.textContent = "";

    // Check empty fields
    if (!day || !month && month !== 0 || !year) {
        error.textContent = "Please fill all fields correctly.";
        return;
    }

    const birthDate = new Date(year, month, day);

    // Date validation
    if (
        birthDate.getFullYear() !== year ||
        birthDate.getMonth() !== month ||
        birthDate.getDate() !== day
    ) {
        error.textContent = "Please enter a valid date of birth.";
        return;
    }

    const today = new Date();

    if (birthDate > today) {
        error.textContent = "Date of birth must be in the past..";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust days and months
    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.textContent = `The age is ${years} years, ${months} months, and ${days} days.`;
}
