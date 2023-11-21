
// Get all radio buttons
const radioButtonsAlbum = document.querySelectorAll('.radio-button-album');
const radioButtonsApparel = document.querySelectorAll('.radio-button-apparel');

radioButtonsAlbum.forEach(button => {
    button.addEventListener('click', moveCheckedAttributeAlbum);
});
radioButtonsApparel.forEach(button => {
    button.addEventListener('click', moveCheckedAttributeApparel);
});

function moveCheckedAttributeAlbum(event) {
    // Identify the clicked radio button
    const clickedButton = this;
    console.log(clickedButton, "this what we pressed right")

    // Prevent the default behavior of the radio button
    // event.preventDefault();

    // Stop the event propagation
    event.stopPropagation();

    // Remove the 'checked' attribute from all radio buttons
    radioButtonsAlbum.forEach(button => {
        button.removeAttribute('checked');
        console.log( button.removeAttribute('checked', 'checked') , "remove check")
    });

    this.setAttribute('checked', 'checked');

    console.log(this.setAttribute('checked', 'checked') , "this should now be checked")

    // const event = new Event('change');
    // this.dispatchEvent(event);
}

function moveCheckedAttributeApparel(event) {
    // Identify the clicked radio button
    const clickedButton = this;
    console.log(clickedButton, "this what we pressed right")

    // Prevent the default behavior of the radio button
    // event.preventDefault();

    // Stop the event propagation
    event.stopPropagation();

    // Remove the 'checked' attribute from all radio buttons
    radioButtonsApparel.forEach(button => {
        button.removeAttribute('checked');
        console.log( button.removeAttribute('checked', 'checked') , "remove check")
    });

    this.setAttribute('checked', 'checked');

    console.log(this.setAttribute('checked', 'checked') , "this should now be checked")

    // const event = new Event('change');
    // this.dispatchEvent(event);
}
