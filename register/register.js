import { participantTemplate, successTemplate } from "./templates.js";

document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;
    const addParticipantButton = document.getElementById('addParticipantButton');
    addParticipantButton.addEventListener('click', () => {
        participantCount++;
        addParticipant(participantCount);
    });
});

function addParticipant(count) {

    const addParticipantButton = document.getElementById('addParticipanyButton');
    addParticipantButton.insertAdjacentHTML('beforebegin', participantTemplate);
}

function submitForm(event) {
    event.preventDefault();
    const totalFees = TotalFees();
    const adultName = document.querySelector('input[id^=name1]').value;
    const summaryMessage = successTemplate({
        name: adultName,
        participants: document.querySelectorAll('section[id^=participant]').length,
        totalFees: totalFees
    });

    document.getElementById('registrationForm').style.display = 'none';
    const summaryElement = document.getElementById('summary');
    summaryElement.innerHTML = summaryMessage;
    summaryElement.style.display = 'block';

}

function TotalFees() {
    let feeElements = document.querySelectorAll('[id^=fee');
    // console.log(feeElements);
    feeElements = [...feeElements];
    const grandTotal = feeElements.reduce((sum,fee) => sum + parseFloat(fee.value), 0);
    return grandTotal;
}