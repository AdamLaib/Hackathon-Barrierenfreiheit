// Function to read the text
function readText(text) {
    for (const char of text) {
        const speech = new SpeechSynthesisUtterance(char);
        speechSynthesis.speak(speech);
    }
}

let enterPressCount = 0;

function handleKeyPress(event) {
    const char = event.key;
    if (char === "Enter") {
        enterPressCount++;
        if (enterPressCount === 1) {
            const input = event.target;
            const text = input.value.trim();
            if (text !== "") {
                readText(text);
            }
            event.preventDefault();
        } else if (enterPressCount === 2) {
            enterPressCount = 0;
            const inputFields = document.querySelectorAll('input[type="text"]');
            const currentIndex = Array.from(inputFields).indexOf(event.target);
            let nextIndex = (currentIndex + 1) % inputFields.length;

            while (inputFields[nextIndex].value.trim() !== "") {
                nextIndex = (nextIndex + 1) % inputFields.length;
            }
            if (nextIndex === currentIndex) {
                alert("Kein leeres Feld mehr.");
                return;
            }

            const nextInput = inputFields[nextIndex];
            nextInput.focus();
        }
    }
}

const inputFields = document.querySelectorAll('input[type="text"]');
inputFields.forEach(input => {
    input.addEventListener('keypress', handleKeyPress);
});
