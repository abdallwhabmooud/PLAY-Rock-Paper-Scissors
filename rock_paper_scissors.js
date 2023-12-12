var wins = 0;
var losses = 0;
var totalPlays = 0;
var ties = 0;

var winSound = document.getElementById("winSound");
var loseSound = document.getElementById("loseSound");
var tieSound = document.getElementById("tieSound");

function playGame() {
    var choices = ["حجر", "ورقة", "مقص"];
    var userChoice = prompt("اختر: حجر، ورقة، مقص؟").toLowerCase();
    var computerChoice = choices[Math.floor(Math.random() * 3)];

    var result = determineWinner(userChoice, computerChoice);

    document.getElementById("result").innerHTML = "اختيارك: " + userChoice +
        "<br>اختيار الكمبيوتر: " + computerChoice +
        "<br>النتيجة: " + result;

    updateCounters(result);
    playSound(result);
}

function determineWinner(userChoice, computerChoice) {
    totalPlays++;

    if (userChoice === computerChoice) {
        ties++;
        return "تعادل!";
    } else if ((userChoice === "حجر" && computerChoice === "مقص") ||
               (userChoice === "ورقة" && computerChoice === "حجر") ||
               (userChoice === "مقص" && computerChoice === "ورقة")) {
        wins++;
        // winSound.play(); // حذف تشغيل صوت المكسب
        // إزالة الجزء المتعلق بتأثير تغيير لون الخلفية
        return "فزت!";
    } else {
        losses++;
        // loseSound.play(); // حذف تشغيل صوت الخسارة
        return "خسرت!";
    }
}

function updateCounters(result) {
    document.getElementById("wins").innerText = wins;
    document.getElementById("losses").innerText = losses;
    document.getElementById("totalPlays").innerText = totalPlays;
    document.getElementById("ties").innerText = ties;
}

function playSound(result) {
    if (result === "فزت!") {
        // winSound.play(); // حذف تشغيل صوت المكسب
    } else if (result === "خسرت!") {
        // loseSound.play(); // حذف تشغيل صوت الخسارة
    } else if (result === "تعادل!") {
        // tieSound.play(); // حذف تشغيل صوت التعادل
    }
}





