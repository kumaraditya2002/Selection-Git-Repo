let navBar = false;

let openNav = function(){
    let sideBar = document.querySelector(".sidebar");
    let sidebarUL = document.querySelector(".sidebar ul");
    let sidebarTitle = document.querySelector(".sidebar  span");
    let sidebarLink  = document.querySelectorAll(".sidebar a");

    if(navBar === false)
    {
        sidebarUL.style.visibility = "visible";
        sideBar.style.width = "272px";
        sidebarTitle.style.opacity = "0.5";

        let arrayLenght = sidebarLink.length;
        for(let i = 0; i < arrayLenght; i++)
        {
            sidebarLink[i].style.opacity = "1";
        }
        navBar = true;
    }
     else if(navBar === true)
    {
        sidebarUL.style.visibility = "hidden";
        sideBar.style.width = "50px";
        sidebarTitle.style.opacity = "0";

        let arrayLenght = sidebarLink.length;
        for(let i = 0; i < arrayLenght; i++)
        {
            sidebarLink[i].style.opacity = "0";
        }
        navBar = false;
    }

}

function change(){
    
     document.getElementById('image').src='/images/img1.png';
}