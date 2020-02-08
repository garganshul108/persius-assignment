function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return false;
}

function matchPasswords(p1, p2) {
    if (p1 == p2) return true;
    return false;
}

function emptyPassword(password) {
    if (password.length == 0) return true;
    return false;
}