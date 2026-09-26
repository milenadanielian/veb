// 1. Countdown Timer
const target = new Date("October 30, 2026 17:00:00").getTime();

const d = document.getElementById("days");
const h = document.getElementById("hours");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");

function countdown() {
    const now = new Date().getTime();
    const diff = target - now;

    if (diff < 0) {
        d.innerHTML = "00";
        h.innerHTML = "00";
        m.innerHTML = "00";
        s.innerHTML = "00";
        return;
    }

    const daysVal = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hoursVal = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesVal = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secondsVal = Math.floor((diff % (1000 * 60)) / 1000);

    d.innerHTML = daysVal < 10 ? '0' + daysVal : daysVal;
    h.innerHTML = hoursVal < 10 ? '0' + hoursVal : hoursVal;
    m.innerHTML = minutesVal < 10 ? '0' + minutesVal : minutesVal;
    s.innerHTML = secondsVal < 10 ? '0' + secondsVal : secondsVal;
}

setInterval(countdown, 1000);
countdown();

// 2. Intersection Observer for Smooth Fade-In Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".fade").forEach(el => observer.observe(el));

// 3. Audio Player Control
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = () => {
    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "❚❚";
    } else {
        music.pause();
        musicBtn.innerHTML = "♫";
    }
};

// 4. Smooth Scroll Button
document.getElementById("openBtn").onclick = () => {
    document.getElementById("content").scrollIntoView({
        behavior: "smooth"
    });
};

// 5. RSVP Submission Logic
function submitRSVP(responseType) {
    const nameInput = document.getElementById("guestName").value.trim();
    const guestCount = document.getElementById("guestCount").value;
    const messageContainer = document.getElementById("rsvpMessage");

    if (!nameInput) {
        alert("Խնդրում ենք մուտքագրել Ձեր անունը:");
        return;
    }

    // Հավաքագրված տվյալները
    const formData = {
        name: nameInput,
        guests: guestCount,
        status: responseType,
        date: new Date().toLocaleString()
    };

    console.log("RSVP Data:", formData);

    // Ցույց ենք տալիս շնորհակալական տեքստ էկրանին
    messageContainer.innerHTML = `Շնորհակալություն, <b>${nameInput}</b>: Ձեր պատասխանն ընդունված է (${responseType}):`;

    // Այստեղ կարող ենք կապել Google Form-ի կամ Webhook-ի հետ
    /* Օրինակ Google Forms-ի կամ Webhook-ի ուղարկելու համար․
    fetch('YOUR_WEBHOOK_OR_GOOGLE_SCRIPT_URL', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });
    */

    // Clean input
    document.getElementById("guestName").value = "";
}
