//Element initialization
const btn = document.body.querySelectorAll(".btn");

//Used in next function
function changeTheme(className, btnElement){
    btnElement.setAttribute("class", className);
}

let count = 1; //X => true => 1 and O => false => 0

//This changes the X and O after corresponding clicks
btn.forEach((b)=>{
    b.addEventListener("click", ()=>{
        if(b.innerText === "" && count == 1){
            b.innerText = "X";
            count = 0;
            changeTheme("btn btn-outline-warning",b);
        }else{
            if (b.innerText == ""){
                b.innerText = "0";
                count = 1;
                changeTheme("btn btn-outline-danger",b);  
            }            
        }

    });
});