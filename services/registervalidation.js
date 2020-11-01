class RegisterValidator
{
    validate(name,email,password)
    {
        if(name == ""){
            throw "This field cannot be empty";
        }
        if(email == ""){
            throw "Email cannot be empty";
        }
        if(password.length <= 8){
            throw "Password cannot be less than 8 characters";
        }
      
    }
}
