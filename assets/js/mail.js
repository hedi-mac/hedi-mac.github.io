function sendEmail() {
    oForm = document.forms[0];
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "hedimaac@gmail.com",
        Password : "E9538B66C2E50EDD9B532076954E33B9B9DEEB80AF38735B8C479F4BB8607F9E7934A4EB5DEBD4A6EE401BBEB0EC580C",
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


