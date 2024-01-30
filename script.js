var timer = 60;
var score = 0;
var hitRn = 0;


function increaseScore()
{
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}


function getNewHit(){
   hitRn = Math.floor(Math.random() * 10);
   document.querySelector('#hitval').textContent = hitRn;
}




function makeBubble()
{

    
    var clutter = "";
    
    for(var i = 1; i<=112+14; i++)
{
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer()
{
  var timerInter =   setInterval(() => {
        if(timer>0){
            timer --;
            document.querySelector('#timerval').textContent = timer;

        }

        else
         {
            clearInterval(timerInter);
            document.querySelector('#pbtm').innerHTML = `<div><h1>Game Over !</h1><br>
                                                              <h3 style="align-items: center; padding: 20px;">Your Score is : ${score} </h3>
                                                            </div>`;
         }
    }, 1000);
}



document.querySelector('#pbtm')
.addEventListener("click", function(details)
{
    // alert("chal rha hai ");
   var clickedNum = Number(details.target.textContent);
    if(clickedNum === hitRn )
    {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});




runTimer();
makeBubble();
getNewHit();
// increaseScore();

// jispe click kroge wo element par event rease hoga or event listner na milne pr event element ke parent pr listner dundega wha bi na milne pr parent ke parent pr 

 