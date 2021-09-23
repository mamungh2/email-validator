const checkEmail = () => {
    const emailField = document.getElementById('email-field');
    const emailFieldText = emailField.value;
    const isEmailTrue = isEmailAddress(emailFieldText);
    if (emailFieldText === '') {
        toggleWriteSomething('block');
        toggleValidMessage('none');
        toggleInvalidMessage('none');
    }
    else {
        if (isEmailTrue) {
            toggleValidMessage('block');
            toggleInvalidMessage('none');
            toggleWriteSomething('none');
        }
        else {
            toggleInvalidMessage('block');
            toggleValidMessage('none');
            toggleWriteSomething('none');
        }
    }
}

const isEmailAddress = str => {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(str);  // returns a boolean 
}

const toggleValidMessage = displayStatus => {
    document.getElementById('valid-message').style.display = displayStatus;
}
const toggleInvalidMessage = displayStatus => {
    document.getElementById('invalid-message').style.display = displayStatus;
}
const toggleWriteSomething = displayStatus => {
    document.getElementById('write-something').style.display = displayStatus;
}