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