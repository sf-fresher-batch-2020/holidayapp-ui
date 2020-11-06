class PackageListService{
    save=function(obj){
        var temp=JSON.parse(localStorage.getItem("ADDPACKAGE"));
        var list=temp ? temp:[];
        list.push(obj);
        localStorage.setItem("ADDPACKAGE",JSON.stringify(list));
    }
    list=function(){
        var temp=JSON.parse(localStorage.getItem("ADDPACKAGE"));
        var list=temp ? temp:[];
        return list;
    }
}