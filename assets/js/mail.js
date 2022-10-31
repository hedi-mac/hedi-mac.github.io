function sendEmail() {
    oForm = document.forms[0];
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "hedimaac@gmail.com",
        Password : "60A6FA5E9CEDEBB2C5A62E899487CDEFB88E",
        To : 'hedimaac@gmail.com',
        From : 'hedimaac@gmail.com',
        Subject : oForm.elements["subject"].value,
        Body : "<html>From : <strong>"+oForm.elements["name"].value+"</strong><br/>"+oForm.elements["message"].value+"</html>"
    }).then(
    message => alert("Email sent sucessfully . . .")
    );
    oForm.elements["name"].value = ""
    oForm.elements["subject"].value = ""
    oForm.elements["message"].value = ""
}


