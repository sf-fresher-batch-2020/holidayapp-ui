class AddpackageService{
    addpackage=function(packobj){
        var usersTemp=JSON.parse(localStorage.getItem("ADDPACKAGE"));
        var users=usersTemp ? usersTemp:[];
        users.push(packobj);
        localStorage.setItem("ADDPACKAGE",JSON.stringify(users));
        let result="success";
        return result;
    }
}