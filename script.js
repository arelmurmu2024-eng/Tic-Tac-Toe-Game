//Element initialization
const btn = document.body.querySelectorAll(".btn");

//Used in next function
function changeTheme(className, btnElement){
    btnElement.setAttribute("class", className);
}

//This changes the X and O after corresponding clicks
btn.forEach((b)=>{
    b.addEventListener("click", ()=>{
        if(b.innerText === ""){
            b.innerText = "X";
            changeTheme("btn btn-outline-warning",b);
        }else{
            if(b.innerText == "O"){
                b.innerText = "X";
                changeTheme("btn btn-outline-warning",b);
            }else{
                b.innerText = "O";
                changeTheme("btn btn-outline-danger",b);
            }
        }

    });
});