//Element initialization
const btn = document.body.querySelectorAll(".btn");


//For next function : -1 means no move is given yet
let map = [[-1,-1,-1],
            [-1,-1,-1],
            [-1,-1,-1]];

//Stores the position of the 1,0 => X,O for declaring winner for finale
//sign => X - 1, O - 0
function storePosition(value, sign){
    let temp = value.split(",");

    //Double for loop
    for(let i = 0; i < map.length; i++){
        for(let j = 0; j < map.length; j++){
            if(i == temp[0] && j == temp[1]){
                map[i][j] = sign
            }
        }
    }

    console.log(map)
}

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
            changeTheme("btn btn-warning",b);

            // console.log(b.getAttribute("value"));
            storePosition(b.getAttribute("value"),1);
        }else{
            if (b.innerText == ""){
                b.innerText = "0";
                count = 1;
                changeTheme("btn btn-danger",b);  

                // console.log(b.getAttribute("value"));
                storePosition(b.getAttribute("value"),0);
            }            
        }

    });
});