function validateForm() {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;

    if (fname == "" || lname == "") {
        alert("no");
        return false;
    }
    if (fname.length < 2 || lname.length < 2) {
        alert("no");
        return false;
    }
    return true;
}