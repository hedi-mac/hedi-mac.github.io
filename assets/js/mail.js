function sendEmail() {
    oForm = document.forms[0];
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "hedi.machat@etudiant-isi.utm.tn",
        Password : "FE2831FE8D0B4D236915D4FDC44CB3A7C470",
        To : 'hedi.machat@etudiant-isi.utm.tn',
        From : 'hedi.machat@etudiant-isi.utm.tn',
        Subject : oForm.elements["subject"].value,
        Body : "<html>From : <strong>"+oForm.elements["name"].value+"</strong><br/>"+oForm.elements["message"].value+"</html>"
    }).then(
    message => alert("Email sent sucessfully . . .")
    );
    oForm.elements["name"].value = ""
    oForm.elements["subject"].value = ""
    oForm.elements["message"].value = ""
}


