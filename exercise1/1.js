function calculateAverage() {
    const scores = [
        parseFloat(document.getElementById('score1').value),
        parseFloat(document.getElementById('score2').value),
        parseFloat(document.getElementById('score3').value),
        parseFloat(document.getElementById('score4').value)
    ];

    const subjects = [
        document.getElementById('subject1').value,
        document.getElementById('subject2').value,
        document.getElementById('subject3').value,
        document.getElementById('subject4').value
    ];

    if (scores.some(isNaN)) {
        alert("Please enter valid scores for all subjects.");
        return;
    }

    const average = scores.reduce((a, b) => a + b, 0) / scores.length;
    let grade;

    if (average >= 90) grade = 'A';
    else if (average >= 80) grade = 'B';
    else if (average >= 70) grade = 'C';
    else if (average >= 60) grade = 'D';
    else grade = 'F';

    let resultHTML = `<h2>Results:</h2>`;
    resultHTML += `<p>Average Score: ${average.toFixed(2)}</p>`;
    resultHTML += `<p>Grade: ${grade}</p>`;
    resultHTML += `<h3>Individual Scores:</h3>`;
    resultHTML += `<ul>`;
    for (let i = 0; i < subjects.length; i++) {
        resultHTML += `<li>${subjects[i]}: ${scores[i]}</li>`;
    }
    resultHTML += `</ul>`;

    document.getElementById('result').innerHTML = resultHTML;
}