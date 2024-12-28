let index = 3;
setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById("slide").src = "pic/slide" + index + ".png";
    index++;
    if (index > 3) {
        index = 1;
    }
}

function RegisClick() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const phone1 = document.getElementById("cboPhone").value;
    const phone2 = document.getElementById("phonenum").value;
    const dob = document.getElementById("dob").value;
    const username = document.getElementById("username").value;
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;
    let gender = "";
    if (document.getElementById("rdoMale").checked) gender = "Male";
    if (document.getElementById("rdoFemale").checked) gender = "Female";
    if (document.getElementById("rdoOther").checked) gender = "Other";
    const photo = document.getElementById("phto").value;

    alert(
        `First Name: ${fname}\nLast Name: ${lname}\nPhone: ${phone1} ${phone2}\nDate of Birth: ${dob}\nUsername: ${username}\nPassword: ${pass1}\nRe-type Password: ${pass2}\nGender: ${gender}\nFile Path: ${photo}`
    );
}
