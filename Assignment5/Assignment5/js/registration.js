
// user name validation function
function usernameValidation() {
var inPutName = document.getElementById('uname').value.trim();
var nErrorMessage = document.getElementById('ErrorMessage');
    nErrorMessage.innerHTML = "";

    //test the regular expression with inputname, if the condition matches, it's true
    if(/^[A-Za-z]+$/.test(inPutName)&&inPutName.length>=6){
        return true;
    }

    else{
        /*error message*/
        nErrorMessage.innerHTML = "User name must start with a letter and have at least 6 characters.";
        return false;
    }
};



// zip code validation function
function zipCodeValidation() {
var inPutZipCode = document.getElementById('zipCode').value.trim();
var nErrorMessage = document.getElementById('ErrorMessage');
    nErrorMessage.innerHTML = "";

    //test the regular expression with inPutZipCode, if the condition matches, it's true
    if(/^[A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9]$/.test(inPutZipCode)){
        return true;
    }

    else{
        /*error message*/
        nErrorMessage.innerHTML = "Zip Code only Canadian format allowed (Letter Digit Letter Digit Letter Digit), for example M2N2N7";
        return false;
    }
};



// city name validation function
function cityNameValidation() {
var inPutCityName = document.getElementById('city').value.trim();
var nErrorMessage = document.getElementById('ErrorMessage');
    nErrorMessage.innerHTML = "";

    //test the regular expression with inPutCityName, if the condition matches, it's true
    if((/^[A-Za-z]+$/.test(inPutCityName)) == true ){
        return true;
    }

    else{
        /*error message*/
        nErrorMessage.innerHTML = "City Name must contain letters only.";
        return false;
    }
};




// phone number validation function
function phoneNumberValidation() {
var inPutPhoneNumber = document.getElementById('pNumber').value.trim();
var nErrorMessage = document.getElementById('ErrorMessage');
    nErrorMessage.innerHTML = "";

    //test the regular expression with inPutPhoneNumber, if the condition matches, it's true
    if((/^\d{3}-\d{3}-\d{4}$/.test(inPutPhoneNumber)) == true ){
        return true;
    }

    else{
        /*error message*/
        nErrorMessage.innerHTML = "Phone number must be 10 digits, hyphen in the 4th and 8th position, format allowed xxx-xxx-xxxx, for example 647-832-0098.";
        return false;
    }
};






// Street name validation function
function streetValidation() {
var inPutStreetName = document.getElementById('stname').value.trim();
var nErrorMessage = document.getElementById('ErrorMessage');
    nErrorMessage.innerHTML = "";

    //test the regular expression with inPutStreetName, if the condition matches, it's true
    if(/^([^0-9]*)$/.test(inPutStreetName)){
        return true;
    }

    else{
        
        nErrorMessage.innerHTML = "Street name cannot contain digits.";
        return false;
    }
};








// password validation function
function passwordValidation() {
var passwordCheck = document.getElementById('pword').value.trim();
var nErrorMessage = document.getElementById('ErrorMessage');
    nErrorMessage.innerHTML = "";


    //test the regular expression with passwordCheck, if the condition matches, it's true
    // at least 8 letter
    if(passwordCheck.length >= 8 ){
                // starting with character
                if(/[A-Za-z]/.test(passwordCheck[0])){
                    // checking at least one digit
                    if(passwordCheck.search(/[0-9]/) >=0){
                        //if checking  at lest one uppercase
                        if(passwordCheck.search(/[A-Z]/) >=0){
                            return true;
                     }
                     else{
                        /*error message => checking one uppercase*/
                        nErrorMessage.innerHTML = "Password must be 8 characters long, must start with a character, must have at least 1 digit and 1 uppercase.";
                        return false;
                     }
                   }
                    else{
                    /*error message=> at least one digit*/
                    nErrorMessage.innerHTML = "Password must be 8 characters long, must start with a character, must have at least 1 digit and 1 uppercase.";
                    return false;
                    }
                }
              else{
            /*error message => starting with chracter*/
            nErrorMessage.innerHTML = "Password must be 8 characters long, must start with a character, must have at least 1 digit and 1 uppercase.";
            return false;
            }
    }
    else{
        /*error message=> length*/
        nErrorMessage.innerHTML = "Password must be 8 characters long, must start with a character, must have at least 1 digit and 1 uppercase.";
        return false;
    }

};



// confirmed password validation function
function confirmedPasswordValidation() {
var inPutConfirmedPassword = document.getElementById('cfpword').value.trim();
var passwordProvided= document.getElementById('pword').value.trim();
var nErrorMessage = document.getElementById('ErrorMessage');
    nErrorMessage.innerHTML = "";

    //test the regular expression with confirmedPasswordValidation, if the condition matches, it's true
    if(inPutConfirmedPassword==passwordProvided){
        return true;
    }

    else{
        
        nErrorMessage.innerHTML = "Provided password and confirmed do not match. Please check it!";
        return false;
    }
};



// checking the all validation from all the fuctions
function Validation(){

    if(usernameValidation()==true && streetValidation()==true && zipCodeValidation()==true && cityNameValidation()==true && phoneNumberValidation()==true &&passwordValidation()==true && confirmedPasswordValidation()) {
        return true;
    }

    else{

    return false;
    }
};