let pos = 0
let enemyHP = 1000
let TurnCount = 0
let UsedInLastTurn = false
let fightTriggerVar = false

//base stats
let Cname = "Barni a hős"
let Atk = 130
let Hp = 1000
let Def = 10
let Sgth = 1 //atk % szoró
let Cd = 1.5 //% szoró
let Cr = 1 
let Speed = 2
let Dodge = 0.1 //%szorzó
let UltCost = 100 //max cost
let Energy = 0


const graph = [[1,3,4],
[0,4,5,6,2],
[1,4,5,6],
[0,1,4,7,8],
[0,1,2,3,5,8,9],
[1,2,4,6,8,9],
[2,5,9,10],
[3,8,11],
[3,4,5,7,9,11,12],
[4,5,6,8,10,12],
[6,9,13,15],
[3,7,8,12,16],
[8,9,11,16,23],
[10,14,15,19],
[13],
[10,14,19],
[11,12,23],
[19,27,29],
[20,22],
[13,17,25],
[18,22],
[22],
[18,20,21,26,34],
[16,27,28],
[25],
[19,24,32],
[22,28,34],
[17,23,29],
[23,26,36],
[27,30,37,43],
[29,31,37],
[30,32,37],
[25,31,33,39],
[32,40],
[22,26],
[34],
[28,41,42,43],
[29,30,31,38,43,44],
[37],
[31,32,40,41,45],
[32,33,39,45],
[36,42,43,48],
[36,41,43,48],
[36,37,41,42,46],
[37,39,45,47,49,57],
[39,40,44,47],
[43,51,57],
[44,45,49,53],
[41,42,50,54],
[44,47,51,52,57],
[46,48,52],
[46,49,50,52,55,56,57],
[47,49,51,56],
[41],
[48],
[51,56],
[51,52,55],
[44,46,49,51]]

//if id in graph[current pos]{id.style.DISPLAY = "block"} :heart_eyes:
function FightTrigger(tf)
{
    document.getElementById("dialougeBox2").style.animation = "dialBox 2s forwards"
    document.getElementById("dialougeBox2").style.display = "none"
    if(tf){
        LoadSceneE(pos)}
    else{
        document.getElementById("yes").style.display = "none"
        document.getElementById("no").style.display = "none"
    }
    
}

function MainE (holVagyok)
{
    document.getElementById("dialougeBox2").style.display = "block"
    //document.getElementById("story2").innerHTML = "Go into the Magic Forest?"

    document.getElementById("yes").style.display = "block"
    document.getElementById("no").style.display = "block"
    document.getElementById("yes").style.opacity = "0"
    document.getElementById("no").style.opacity = "0"


    //document.querySelectorAll(".choice").forEach(div => {div.style.animation = "dialBox 2s reverse forwards"})
    document.getElementById("dialougeBox2").style.animation = "dialBox 2s reverse forwards"
    //letterByLetter("#story2", "Go into the Magic Forest?", 0, 20);
    setTimeout(() => {letterByLetter("#story2", "Go into the Magic Forest?", 0, 20);}, 1000)

    document.getElementById("yes").style.animation = "dialBox 1s 2s reverse forwards"
    document.getElementById("no").style.animation = "dialBox 1s 3s reverse forwards"

    
    pos = holVagyok
    
}

function LoadSceneE(holVagyok)
{
    
    document.getElementById("dialougeBox").style.display = "block"
    //document.getElementById("dialogueBox").style.animation = "dialBox 1s forwards"
    document.getElementById("story").innerHTML = "AN enemy appears lets fight it!!"

    setTimeout(() => {document.getElementById("fightButton").style.display = "block"}, 3000)
    pos = holVagyok
    document.getElementById("container").style.display = "none"
    //map bejon 
    document.getElementById("battlefield").style.display = "block"
    document.getElementById("fight").style.display = "none"
    document.getElementById("battlefield").style.animation= "transB 2s forwards;"
    document.getElementById("protog").style.animation= "Run 2s forwards"

    document.getElementById("bg").src = "backgrounds/"+holVagyok+".png"

    //random enemy
    var randomEnemy =  Math.floor(Math.random() * 10) + 1;
    document.getElementById("enemy").src = ("enemy/enemy"+randomEnemy+".png")

}
function BattleStart()
{
    document.getElementById("fightButton").style.display = "none"
    document.getElementById("fight").style.display = "block"
    document.getElementById("fight").style.animation= "fightAnim 2s forwards"
    //document.getElementById("fight").style.display = "none"

    document.getElementById("dialougeBox").style.display = "none"

    document.getElementById("skill1").style.display = "block"
    document.getElementById("skill2").style.display = "block"
    document.getElementById("skill3").style.display = "block"

    document.getElementById("skill3CD").style.display = "block"
    document.getElementById("skill3CD").style.height = (11*(UltCost-Energy)/100+"vh")
    
    document.getElementById("enemyHP").innerHTML = enemyHP
    document.getElementById("Cname").innerHTML = Cname
    document.getElementById("CHP").innerHTML = Hp
    document.getElementById("energy").innerHTML = Energy
    turn()

}

function turn()
{
    document.getElementById("skill3CD").style.height = (11*(UltCost-Energy)/100+"vh")
    
    //SKILL 1
    CoolDown(1,false)
    console.log("skill1 van")
    //SKILL2
    if(UsedInLastTurn)
    {
        CoolDown(2,true)
        console.log("nincs skill2")
    }
    else
    {
        CoolDown(2,false)
        console.log("van skill2")
    }
    //SKILL3 ULT
    if (Energy >= UltCost)
    {
        CoolDown(3,false)
    }
    else {CoolDown(3,true)}

    document.getElementById("skill3CD").style.height = (11*(UltCost-Energy)/100+"vh")
    TurnCount += 1
}



function CoolDown(num, tf)
{
    document.getElementById("skill"+num).disabled = tf
    console.log("disabled")

    if(tf == true){document.getElementById("skill"+num).style.filter = "brightness(50%)";}
    else{document.getElementById("skill"+num).style.filter = "brightness(100%)";}
    //document.getElementById("skill"+num).style.filter = "contrast(70%)";
}

function skill2(){
    UsedInLastTurn = true
    
    console.log("used in last turn = true")
    
    document.getElementById("protog").style.animation= "Attack2 2s forwards"
    console.log("anim1")

    var crit =  Math.floor(Math.random() * 10) + 1;
    if (Cr >= crit)
    {
        enemyHP -= (Atk*Sgth)*(1000/enemyHP)*Cd
        console.log((1000/enemyHP))
        Energy += 30
        console.log("crit")
    }
    else
    {
        enemyHP -= Atk*Sgth*(1000/enemyHP)
        console.log((5000/enemyHP))
        Energy += 20
    }

    enemyHP = Math.round((enemyHP)*100)/100
    document.getElementById("enemyHP").innerHTML = enemyHP
    document.getElementById("energy").innerHTML = Energy
    if (enemyHP<0)
    {
        ShowMap()
    }
    setTimeout(() => {enemyTurn()}, 3000)
    console.log("enemy turn")
}
function skill1()
{
    UsedInLastTurn = false
    document.getElementById("protog").style.animation= "Attack 2s forwards"
    var crit =  Math.floor(Math.random() * 10) + 1;
    if (Cr >= crit)
    {
        enemyHP -= Atk*Sgth*Cd
        Energy += 30
        console.log("crit")

    }
    else
    {
        enemyHP -= Atk*Sgth
        Energy += 20
    }
    document.getElementById("enemyHP").innerHTML = enemyHP
    document.getElementById("energy").innerHTML = Energy
    if (enemyHP<0)
    {
        ShowMap()
    }
    setTimeout(() => {enemyTurn()}, 3000)
    console.log("enemy turn")
}

function enemyTurn()
{
    Hp -= 10
    document.getElementById("enemy").style.animation= "EnemyAttack 2s forwards"
    document.getElementById("protog").style.animation= "Defend 2s forwards"
    document.getElementById("CHP").innerHTML = Hp
    turn()
}

function ShowMap(){

    document.getElementById("container").style.display = "block"

    document.getElementById("skill1").style.display = "none"
    document.getElementById("skill2").style.display = "none"
    document.getElementById("skill3").style.display = "none"
    document.getElementById("skill3CD").style.display = "none"

    document.getElementById("battlefield").style.display = "none"

    document.getElementById("dialougeBox2").style.display = "none"
    document.getElementById("yes").style.display = "none"
    document.getElementById("no").style.display = "none"

    elerheto()
}

function elerheto() {
    document.querySelectorAll(".point").forEach(image => {image.style.display = "none"})
    for (let i = 0; i < graph[pos].length; i++)
    {
        document.getElementById("a"+graph[pos][i]).style.display="block"
        document.getElementById("a"+graph[pos][i]).style.cursor="pointer"
        document.getElementById("a"+graph[pos][i]).innerHTML="<b>X</b>"
    }
    
    document.getElementById("a"+pos).style.cursor="default"
    document.getElementById("a"+pos).style.display="block"
    document.getElementById("a"+pos).innerHTML="<img class=MapSprite src=knight/Knight_1/Normal.png>"

    document.getElementById("tileText").style.display = "none"
}

function skill3()
{
    UsedInLastTurn = false
    console.log("skill3")
    enemyTurn()
}

function tileText(holVagyok){
    document.getElementById("splash").src = ("backgrounds/" + holVagyok + ".png")
    document.getElementById("tileText").style.display = "block"
    mousePos()

    document.getElementById("tileText").style.animation= "fadeIn 1s forwards"
}
function NotileText(){document.getElementById("tileText").style.display = "none"}


//SEGÉD FUNCTIONS
//!!
function mousePos()
{
    var e = window.event;

    var posX = e.clientX;
    var posY = e.clientY;

    console.log(posX,posY)
    document.getElementById("tileText").style.left = (posX - (window.innerWidth - 1000)/2 + "px")
    console.log(posX - (window.innerWidth - 1000)/2 + "px")
    document.getElementById("tileText").style.top = (posY + "px")
}
let letterByLetter = function(target, message, index, interval) {
    if (index < message.length) {
      document.querySelector(target).textContent = message.slice(0, index);
  
      setTimeout(function() {
        letterByLetter(target, message, index + 1, interval);
      }, interval);
    }
  }

//MAIN
ShowMap()