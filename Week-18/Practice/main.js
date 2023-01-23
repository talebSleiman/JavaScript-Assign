/*
    Regular Expression
    - Input Form Validation Practice
*/

document.getElementById("register").onsubmit = () => {
    let phone = document.getElementById("phone").value;
    let re = /\(\d{4}\)\s\d{3}-\d{4}/ig; // (1234) 567-8910
    let result = re.test(phone);
    if (result === false) {
        return false
    }
    return true;
};