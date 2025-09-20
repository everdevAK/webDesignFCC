const english = document.querySelector("#english");
const math = document.querySelector("#math");
const science = document.querySelector("#science");
const art = document.querySelector("#art");
const programming = document.querySelector("#programming");
const certificateDisplay = document.querySelector("#display-certificate-info");
const studentName = document.querySelector("#student-name");
const getCertificateBtn = document.querySelector("#getCertificateBtn");

const subjects = [english, math, science, art, programming];

//GET SUBJECT SCORES
function getScores(subjects) {
    const subjectScores = [];

    for (const subject of subjects) {
        if (Number(subject.value) === '') {
            Number(subject.value) = 0;
            subjectScores.push(0);
        } else {
            subjectScores.push(Number(subject.value));
        }
    }

    return subjectScores;
}

//AVERAGE
function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

//GRADE
function getGrade(score) {
    if (score === 100) {
        return "A+";
    } else if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B+";
    } else if (score > 70) {
        return "B"; 
    } else if (score > 60) {
        return "c+"
    } else if (score > 50) {
        return "c";
    } else {
        return "F";
    }
}

//HAS PASSING GRADE
function hasPassingGrade(score) {
    if (score === "F") {
        return "failed";
    } else {
        return "Passed"
    }
}

//CERTIFICATE
getCertificateBtn.onclick = function () {
    const scores = getScores(subjects);
    const avgScore = getAverage(scores);
    const grade = getGrade(avgScore);
    const testResult = hasPassingGrade(grade);
    const name = `${studentName.value.charAt(0).toUpperCase()}${studentName.value.slice(1)}`
    const message = `${name} has ${testResult} the test with a average score ( ${avgScore} ) and grade ( ${grade} )`;

    if (studentName.value === '') {
        alert('Please Enter Student Name.');
    } else {
        if (testResult === "Passed") {
            certificateDisplay.style.display = "flex";
            certificateDisplay.style.background = "green";
            certificateDisplay.innerText = message;
        } else {
            certificateDisplay.style.display = "flex";
            certificateDisplay.style.background = "#ad1d1d";
            certificateDisplay.innerText = message;
        }
        
    }
    
}
