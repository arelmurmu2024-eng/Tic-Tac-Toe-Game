const btn = document.body.querySelectorAll(".btn");

function changeTheme(className, btnElement){
    btnElement.setAttribute("class", className);
}

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