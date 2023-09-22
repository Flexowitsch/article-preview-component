let modal = $('.sharing-modal'); //select modal
modal.hide(); // hide modal as a default

let shareButton = $('#share-btn'); // select share button

shareButton.on('click', function(){ // function for showing the modal on click
    modal.fadeIn(300);
});


$('.icon').on('click', function(){ // function for showing the modal on click
    modal.fadeOut(300);
})