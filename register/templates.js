export function participantTemplate(count) {
    return`
        <section class="participant1">
            <label for="name${count}">Name:</label>
            <input id="name${count}" type="text" name="name${count}" required />
            <label for="age${count}">Age:</label>
            <input id="age${count}" type="number" name="age${count}" required />
            <label for="fee${count}">Fee:</label>
            <input id="fee${count}" type="number" name="fee${count}" required />
        </section>`;
}

export function successTemplate(info) {
    return `Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.totalFees} in fees.`;
}