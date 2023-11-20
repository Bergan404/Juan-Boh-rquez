
// Get all radio buttons
const radioButtons = document.querySelectorAll('.radio-button');

radioButtons.forEach(button => {
    button.addEventListener('click', moveCheckedAttribute);
});

function moveCheckedAttribute(event) {
    // Identify the clicked radio button
    const clickedButton = this;
    console.log(clickedButton, "this what we pressed right")

    // Prevent the default behavior of the radio button
    // event.preventDefault();

    // Stop the event propagation
    event.stopPropagation();

    // Remove the 'checked' attribute from all radio buttons
    radioButtons.forEach(button => {
        button.removeAttribute('checked');
        console.log( button.removeAttribute('checked', 'checked') , "remove check")
    });

    this.setAttribute('checked', 'checked');

    console.log(this.setAttribute('checked', 'checked') , "this should now be checked")

    // const event = new Event('change');
    // this.dispatchEvent(event);
}
