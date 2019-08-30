//script per conferma email -->
    function checkEmail(theForm) {
    if (theForm.email.value != theForm.remail.value)
    {
        alert('Le email non corrispondono/The emails don\'t match!');
        return false;
    } else {
        return true;
    }
    }