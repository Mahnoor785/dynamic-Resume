
const editableSections = document.querySelectorAll('[contenteditable="true"]');

editableSections.forEach((section) => {
    section.addEventListener('input', (event) => {
        const target = event.target as HTMLElement;
        const field = target.dataset.field;

        if (field) {
            updateResumeField(field, target.innerText);
        }
    });
});


function updateResumeField(field: string, value: string) {
    const resumeField = document.getElementById(field);
    if (resumeField) {
        resumeField.innerText = value;
    }
}

document.addEventListener('DOMContentLoaded', () => {

    const nameField = document.getElementById('resume-name');
    const emailField = document.getElementById('resume-email');
    const skillsField = document.getElementById('skills-list');
    

    nameField?.setAttribute('contenteditable', 'true');
    emailField?.setAttribute('contenteditable', 'true');
    skillsField?.setAttribute('contenteditable', 'true');
});
