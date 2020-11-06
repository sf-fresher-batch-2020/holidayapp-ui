class BookingService{
    confirm = function(userObj){
       var usersTemp = JSON.parse(localStorage.getItem("CONFIRM DETAILS"));
       var bookdetails= usersTemp ? usersTemp:[];
       bookdetails.push(userObj);
       localStorage.setItem("CONFIRM DETAILS",JSON.stringify(bookdetails));
       localStorage.getItem("CONFIRM DETAILS");
       let result="success";
       return result;
        }
}
