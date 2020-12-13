module.exports.validateRegisterInput = (username,email,password,confirmPassword ) =>{
    const errors ={};
    if(username.trim() === '') {
        errors.username = 'Username must not be empty';
    }
    if(email.trim() ==='') {
        errors.email = 'Email must not be empty';
    }   else {
        const regEx = /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/;
        if(!email.match(regEx)) {
            errors.email = ' Email must be valid email address';
        }
    }
    if(password.trim() ==='') {
        errors.password = 'Password must not be empty';
    }   else if(password !== confirmPassword) {
        errors.confirmPassword = 'Passwords must match';
    }
    console.log(errors);
    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}

module.exports.validateLoginInput =(username,password) =>{
    const errors = {};
    if(username.trim() === '') {
        errors.username ='Username must not be empty';
    }
    if(password.trim() === '') {
        errors.password = 'Password must not be empty';
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}
