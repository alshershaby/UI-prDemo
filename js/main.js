let menubtn = document.getElementById("menu-btn");
let menuItems = document.getElementById("menuItems")

menubtn.addEventListener('click',function(){
    if(menuItems.classList.contains("opened") ){
        menuItems.classList.remove("opened");
    }else{
        menuItems.classList.add("opened");
    }
});
