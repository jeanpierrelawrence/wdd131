if (localStorage.getItem("showSuccess")) {
    document.getElementById("success").classList.add("visible");
    localStorage.removeItem("showSuccess")
    setTimeout(() => {
        document.getElementById("success").classList.remove("visible");
    }, 1500);
}

const fieldsets = document.querySelectorAll('fieldset');
const buttons = document.querySelectorAll('.buttons button');
let currentStep = 0;

function updateStep() {
    fieldsets.forEach((fieldset, index) => {
        fieldset.classList.toggle('active', index === currentStep);
    });

    const activeInput = fieldsets[currentStep].querySelector('input');
    
    if (activeInput) {
        activeInput.focus();
    }
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const type = button.textContent.toLowerCase();

        if (type === 'next') {

            const inputs = fieldsets[currentStep].querySelectorAll('input');
            const allValid = Array.from(inputs).every(input => input.reportValidity());
            
            if (allValid) {
                currentStep++;
                updateStep();
            }
        } else if (type === 'go back') {
            currentStep--;
            updateStep();
        }
    });
});

updateStep();

/* FORM LOGIC */

let memoForm = document.querySelector("#form");

memoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let memoName = document.getElementById("name").value
    let memoSummary = document.getElementById("summary").value
    let memoCode = document.getElementById("code").value

    const memoData = {
        name: memoName,
        summary: memoSummary,
        code: memoCode,
        id: Date.now(),
        dateCreated: new Date().toISOString()
    }

    saveToLocalStorage(memoData);
    localStorage.setItem("showSuccess", "true");

    window.location.href = "create.html"
    
})

function saveToLocalStorage(newEntry) {
    let library = JSON.parse(localStorage.getItem("memo_library")) || [];
    library.push(newEntry);

    localStorage.setItem("memo_library", JSON.stringify(library));
}