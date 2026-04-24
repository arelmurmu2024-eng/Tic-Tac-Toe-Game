//Element initialization
const btn = document.body.querySelectorAll(".btn");
const msg = document.body.querySelector("#msg");
const r = document.body.querySelector("#relode");

//For next function : -1 means no move is given yet
let map = [[-1,-1,-1],
            [-1,-1,-1],
            [-1,-1,-1]];
const winPositions = [

    // Rows (X wins)
    [[1,1,1],[-1,-1,-1],[-1,-1,-1]],
    [[-1,-1,-1],[1,1,1],[-1,-1,-1]],
    [[-1,-1,-1],[-1,-1,-1],[1,1,1]],

    // Columns (X wins)
    [[1,-1,-1],[1,-1,-1],[1,-1,-1]],
    [[-1,1,-1],[-1,1,-1],[-1,1,-1]],
    [[-1,-1,1],[-1,-1,1],[-1,-1,1]],

    // Diagonals (X wins)
    [[1,-1,-1],[-1,1,-1],[-1,-1,1]],
    [[-1,-1,1],[-1,1,-1],[1,-1,-1]],


    // Same for O (optional but useful)
    [[0,0,0],[-1,-1,-1],[-1,-1,-1]],
    [[-1,-1,-1],[0,0,0],[-1,-1,-1]],
    [[-1,-1,-1],[-1,-1,-1],[0,0,0]],

    [[0,-1,-1],[0,-1,-1],[0,-1,-1]],
    [[-1,0,-1],[-1,0,-1],[-1,0,-1]],
    [[-1,-1,0],[-1,-1,0],[-1,-1,0]],

    [[0,-1,-1],[-1,0,-1],[-1,-1,0]],
    [[-1,-1,0],[-1,0,-1],[0,-1,-1]]
];
let isEnded = false;
let tap = 0;

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

    return map;
}

//checks winning
function isWin(positionArray){
    for (const p of winPositions){

        let match = true;

        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){

                // Ignore -1 (don't care)
                if (p[i][j] !== -1 && p[i][j] !== positionArray[i][j]){
                    match = false;
                }

            }
        }

        if (match) return true;
    }

    return false;
}

//Used in next function
function changeTheme(className, btnElement){
    btnElement.setAttribute("class", className);
}

let count = 1; //X => true => 1 and O => false => 0

//This changes the X and O after corresponding clicks
btn.forEach((b)=>{
    b.addEventListener("click", ()=>{

        if(isEnded) return;
        // tap++;  // increase first

        // if(tap === 9 && !isWin(map)){
        //     console.log("Draw");
        //     msg.innerText = "It's a Draw!(Predicted 😎)";
        //     isEnded = true;
        //     relode();
        // }

        if(b.innerText === "" && count == 1){
            b.innerText = "X";
            count = 0;
            tap++;
            changeTheme("btn btn-warning",b);

            let x = storePosition(b.getAttribute("value"),1);
            if(isWin(x)){
                    console.log("X Wins");
                    msg.innerText = "X Wins !";
                    msg.setAttribute("Style", "color: #FFC85C;");
                    isEnded = true;
                    relode(1);
            } else if(tap === 9){
                console.log("Draw");
                msg.innerText = "Draw!";
                isEnded = true;
                relode();
            }
        }else{
            if (b.innerText == ""){
                b.innerText = "O";
                count = 1;
                tap++;
                changeTheme("btn btn-danger",b);  

                let x = storePosition(b.getAttribute("value"),0);
                if(isWin(x)){
                    console.log("O Wins");
                    msg.innerText = "O Wins!";
                    msg.setAttribute("Style", "color: #FF653F");
                    isEnded = true;
                    relode(0);
                }
            }            
        }

    });
});

//Relode -> winnerSign= 1 or 0
function relode(winnerSign){
    r.innerText = "Replaying / Reloading the game , wait..." ;
    setTimeout(()=>{
        console.log("hello");
        location.reload(true);
    },3000);
    
}