function listdrobNavOpen(){
    document.querySelector(".list .listOpen").style.display = "none";
    document.querySelector(".list .listClose").style.display = "block";
    document.querySelector(".drobNav").style.display = "block";
}
function listdrobNavClose(){
    document.querySelector(".list .listOpen").style.display = "block";
    document.querySelector(".list .listClose").style.display = "none";
    document.querySelector(".drobNav").style.display = "none";
}

// asidebar
function asideBar(){
    document.querySelector(".drobNav").style.display = "none";
    document.querySelector(".home-aside").style.width = "70vw";
    document.querySelector(".home-aside").style.display = "block";
    document.querySelector(".drop-btn").style.display = "none";
    document.querySelector(".drop-btn-two").style.display = "block";

}
function asideBarTow(){
    document.querySelector(".drop-btn").style.display = "block";
    document.querySelector(".drop-btn-two").style.display = "none";
    document.querySelector(".home-aside").style.width = "0%";
    document.querySelector(".drobNav").style.zIndex = "-3"
    
}
// (order now)انيميشن السياره اللي بيظظهر عن الضغط على 
function car(){
    document.querySelector(".car").style.transform = "translate(1000%)";
}

// يظهر عند اضافة المنتج
function productComplate(){
    Swal.fire({
        title: "تمت الإضافة!",
        text: "تمت إضافة المنتج بنجاح ✅",
        icon: "success",
        confirmButtonText: "حسناً"
    });
}
// لتحديث اسنه تلقائيا في ال footer
document.getElementById("year").textContent = new Date().getFullYear();