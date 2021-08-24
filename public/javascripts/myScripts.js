function myFunction(btnId) {
    /* Get the text field */
    const id = btnId.split('')[3];
    const urlId = 'url'+ id;
    var copyText = document.getElementById(urlId);

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}

$('input:file').on("change", function() {
    $('input:submit').prop('disabled', !$(this).val()); 
});