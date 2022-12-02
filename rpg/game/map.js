
let pos = 1
let enemyHP = 1000
let TurnCount = 0
let UsedInLastTurn = false
let fightTriggerVar = false
let isPlaying = false

//base stats
let Cname = "Barni a hős"
let CAtk = 130
let Hp = 600
let MaxHp = 1000
let Def = 10
let Sgth = 1 //atk % szoró
let Cd = 1.5 //% szoró
let Cr = 1 
let Speed = 2
let Dodge = 0.1 //%szorzó
let UltCost = 100 //max cost
let Energy = 0

const skill1Desc = {
    Name: "Sweeping Swipe",
    Desc: "The hero dashes forward to srtike the enemies with one single swing of his mighty sword"
}
const skill2Desc = {
    Name: "Double Death",
    Desc: "The hero stirkes forward with his dual blades striking his enemies' head of with a powerful move"
}
const skill3Desc = {
    Name: "Godly Earth Destroyer",
    Desc: "The hero sticks his blade into the ground creating a powerful beam that destroys everything in its path"
}

let skillDescs = [skill1Desc,skill2Desc,skill3Desc]


//ENEMIES TEMPLATE
let curEnemy = ""

const enemy1 = {
    name: "Goblin",
    Hp: 1700,
    Atk: 100,
    diff: 1,
    Cr: 1,
    Speed: 0,
    Dodge: 3,
    Story: "cheeky goblin.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also "
};
const enemy2 = {
    name: "Snek",
    Hp: 1500,
    Atk: 170,
    diff: 1,
    Cr: 3,
    Speed: 1,
    Dodge: 1,
    Story: "poisönösz snake.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also "
};
const enemy3 = {
    name: "Mermaid",
    Hp: 2100,
    Atk: 60,
    diff: 1,
    Cr: 2,
    Speed: 1,
    Dodge: 7,
    Story: "hot :hotface_emoji:.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also "
};
const enemy4 = {
    name: "Crab",
    Hp: 2000,
    Atk: 100,
    diff: 1,
    Cr: 6,
    Speed: 2,
    Dodge: 1,
    Story: "a strong crab.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also "
};
const enemy5 = {
    name: "Ningyo",
    Hp: 300,
    Atk: 250,
    diff: 1,
    Cr: 2,
    Speed: 1,
    Dodge: 2,
    Story: "hot legs :eyes:.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also "
};
const enemy6 = {
    name: "Kentaur",
    Hp: 3000,
    Atk: 170,
    diff: 1,
    Cr: 4,
    Speed: 1,
    Dodge: 2,
    Story: "verz tanky sheesh.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also "
};
const enemy7 = {
    name: "Birb.",
    Hp: 2000,
    Atk: 300,
    diff: 1,
    Cr: 7,
    Speed: 4,
    Dodge: 5,
    Story: "Birb. Chirp.strong but fragileLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also "
};
const enemy8 = {
    name: "minatarusz (idk dyslekszia)",
    Hp: 2700,
    Atk: 250,
    diff: 1,
    Cr: 4,
    Speed: 1,
    Dodge: 1,
    Story: "tank strong thats it. slow tho and bigLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also "
};
const enemy9 = {
    name: "ork",
    Hp: 4000,
    Atk: 250,
    diff: 1,
    Cr: 3,
    Speed: 1,
    Dodge: 3,
    Story: "org."
};
const enemy10 = {
    name: "stone golem",
    Hp: 5000,
    Atk: 300,
    diff: 1,
    Cr: 7,
    Speed: 1,
    Dodge: 1,
    Story: "kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő.kő."
};

let enemies = [enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9,enemy10]

//pos
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

//TILE TEXT

const tileTexts = {
    
    tile0: "Beach of the [Unknow Ocean]",
    tile1: "Beach of the [Unknow Ocean]",
    tile2: "Beach of the [Unknow Ocean]",
    tile3: "Forest by the [Unknow Ocean]",
    tile4: "Bottom of [Korkeat Mountains]",
    tile5: "Forest bye [Lake Iso]",
    tile6: "[Lake Iso]",
    tile7: "Beach of the [Unknow Ocean]"
};



//GAME ----------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------

//if id in graph[current pos]{id.style.DISPLAY = "block"} :heart_eyes:
function FightTrigger(tf)
{
    document.getElementById("dialougeBox2").style.animation = "dialBox 2s forwards"
    document.getElementById("dialougeBox2").style.display = "none"
    document.getElementById("story2").style.display = "none"

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
    document.getElementById("story2").style.display = "block"
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
    //setTimeout(() => {document.getElementById("fightButton").style.display = "block"}, 3000)
    pos = holVagyok
    document.getElementById("container").style.display = "none"
    //map bejon 
    document.getElementById("battlefield").style.display = "block"
    document.getElementById("dialougeBox").style.display = "none"

    //DIAL BOX
    setTimeout(() => {document.getElementById("dialougeBox").style.display = "block"}, 2000);
    setTimeout(() => {letterByLetter("#story","AN enemy appears lets fight it!!",0,20)}, 3000)
    
    //document.getElementById("dialogueBox").style.animation = "dialBox 1s forwards"

    //fighr scene clickables
    //!!
    document.getElementById("fight").style.display = "none"
    document.getElementById("infoTab").style.display = "none"
    document.getElementById("cinematic").style.display = "none"


    document.getElementById("battlefield").style.animation= "transB 2s forwards;"
    document.getElementById("protog").style.animation= "Run 2s forwards"

    document.getElementById("bg").src = "backgrounds/"+holVagyok+".png"
    LoadEnemy() 
}

function randomNum(start,end)
    {
        return Math.floor(Math.random() * (end - start + 1) + start);
    }

function LoadEnemy() 
{
    var randomEnemy = 0

    if(0<=pos && pos<7)
    {
        randomEnemy =  randomNum(1,2)
        console.log(randomEnemy)
        console.log("1-2 között")
    }
    if(7<=pos && pos<13)
    {
        randomEnemy =  randomNum(1,4)
        console.log(randomEnemy)
        console.log("1-4 között")
    }
    if(13<=pos && pos<18)
    {
        randomEnemy =  randomNum(2,5)
        console.log(randomEnemy)
        console.log("2-5 között")
    }
    if(18<=pos && pos<27)
    {
        randomEnemy =  randomNum(4,7)
        console.log(randomEnemy)
        console.log("4-7 között")
    }
    if(27<=pos && pos<37)
    {
        randomEnemy =  randomNum(4,8)
        console.log(randomEnemy)
        console.log("4-8 között")
    }
    if(37<=pos)
    {
        randomEnemy =  randomNum(6,10)
        console.log(randomEnemy)
        console.log("6-10 között")
    }
    
    //random enemy
    document.getElementById("enemy").src = ("enemy/enemy"+randomEnemy+".png")

    console.log("random enemy" + randomEnemy)
    curEnemy = randomEnemy - 1
}

function BattleStart()
{
    document.getElementById("fightButton").style.display = "none"
    document.getElementById("fight").style.display = "block"
    document.getElementById("fight").style.animation= "fightAnim 2s forwards"
    //document.getElementById("fight").style.display = "none"

    document.getElementById("dialougeBox").style.display = "none"
    document.getElementById("story").style.display = "none"

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

function enemyInfo() {

    document.getElementById("cinematic").style.display = "block"
    //document.getElementById("cinematic").style.animation = "fadeIn 1.5s 0.7s forwards"
    document.getElementById("cinematic").src = "backgrounds/infoOveray.png"

    document.getElementById("infoText").style.animation= "fadeIn 1.5s 0.7s forwards"

    console.log("enemy index"+curEnemy)
    console.log("enemy"+curEnemy)

    document.getElementById("infoText").innerHTML = 
    "Name: "+enemies[curEnemy].name +"<br>"+"HP: "+enemies[curEnemy].Hp +"    "+"Difficulty"+enemies[curEnemy].diff+"<br><br>"+"Describtion: "+enemies[curEnemy].Story
    
}
  

function information()
{
    document.getElementById("infoTab").style.display = "block"
    document.getElementById("infoText").style.opacity = "0"

    document.getElementById("infoTab").style.animation= "infoFadeIn 0.7s forwards"
    enemyInfo()
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
        enemyHP -= (CAtk*Sgth)*(1000/enemyHP)*Cd
        console.log((1000/enemyHP))
        Energy += 30
        console.log("crit")
    }
    else
    {
        enemyHP -= C
        Atk*Sgth*(1000/enemyHP)
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
        enemyHP -= CAtk*Sgth*Cd
        Energy += 30
        console.log("crit")

    }
    else
    {
        enemyHP -= CAtk*Sgth
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
    //document.getElementById("enemy").style.animation= "EnemyAttack 2s forwards"
    //document.getElementById("protog").style.animation= "Defend 2s forwards"
    document.getElementById("CHP").innerHTML = Hp
    turn()
}

function ShowMap(){

    document.getElementById("container").style.display = "block"
    document.getElementById("volumeChanger").value = 0.8

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
var Offset = function(element) {
    var top = 0, left = 0;
    do {
        top += element.offsetTop  || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while(element);

    return {
        top: top,
        left: left
    };
};

function elerheto() {

    console.log("elereheto")
    var curTop = (Offset(document.getElementById("a"+pos)).top + "px")
    var curLeft = ((Offset(document.getElementById("a"+pos)).left -(window.innerWidth - 1000)/2 + "px"))
    console.log(curTop,curLeft)
    document.querySelectorAll(".point").forEach(image => {image.style.display = "none"})
    for (let i = 0; i < graph[pos].length; i++)
    {
        document.getElementById("a"+graph[pos][i]).style.display="block"
        document.getElementById("a"+graph[pos][i]).style.cursor="pointer"
        document.getElementById("a"+graph[pos][i]).innerHTML="<b>X</b>"
    }
    
    document.getElementById("a"+pos).style.cursor="default"
    document.getElementById("a"+pos).style.display="none"

    document.getElementById("current").style.display="block"
    document.getElementById("current").style.cursor="pointer"

    console.log("szar")

    document.getElementById("current").style.top = curTop
    document.getElementById("current").style.left = curLeft
    console.log(Offset(document.getElementById("current")).left)

    document.getElementById("tileText").style.display = "none"
    document.getElementById("charInfoText").style.display = "none"

    document.getElementById("mapCinematic").style.display = "none"
    document.getElementById("charInfo").style.display = "none"

    console.log("pos done")

    //sárkány mező
    console.log("sarkany")
    document.getElementById("a58").style.display="block"
    document.getElementById("a58").style.cursor="pointer"
    console.log("sarkany done")
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
    mousePos("tileText")

    document.getElementById("tileText").style.animation= "fadeIn 1s forwards"
    document.getElementById("tileText").innerHTML = tileTexts["tile"+holVagyok]
}

function charInfoTile(){
    document.getElementById("splash").src = ("backgrounds/" + pos + ".png")
    document.getElementById("charInfoText").style.display = "block"
    mousePos("charInfoText")

    document.getElementById("charInfoText").style.animation= "fadeIn 1s forwards"
    document.getElementById("charInfoText").innerHTML = "<span id='charInfoTextHpAtk'>"+ CAtk + "<br>" + Hp + "</span>"
}

function NotileText(){document.getElementById("tileText").style.display = "none"
document.getElementById("splash").src = ("backgrounds/emptySplash.png")}

function charInfo()
{
    document.getElementById("mapCinematic").style.display = "block"
    document.getElementById("charInfo").style.display = "block"

    document.getElementById("tableCharName").innerHTML = Cname
    document.getElementById("tableAtk").innerHTML = CAtk
    document.getElementById("tableDef").innerHTML = Def
    document.getElementById("tableCritDmg").innerHTML = Cd*100 + "%"
    document.getElementById("tableCritRate").innerHTML = Cr*10 + "%"
    document.getElementById("tableSpeed").innerHTML = Speed
    document.getElementById("tableDodge").innerHTML = Dodge*100 + "%"

    console.log(320*Hp/MaxHp)
    document.getElementById("tableHpBar").style.backgroundSize = (320*Hp/MaxHp + "px 20px")
    document.getElementById("tableHpBar").title = Hp + "/" + MaxHp
}
function noCharInfo(){document.getElementById("charInfoText").style.display = "none"
document.getElementById("splash").src = ("backgrounds/emptySplash.png")}

function SkillDesc(skillNum) {
    document.getElementById("tableSkillText").innerHTML = skillDescs[skillNum].Desc
    document.getElementById("tableSkillName").innerHTML = skillDescs[skillNum].Name
    
}

function audioContorl() {
    if (isPlaying){
        document.getElementById("music").pause()
        isPlaying = false
        document.getElementById("musicButton").style.backgroundImage= "url(isNotPlaying.png)"
        console.log("paused")
    }
    else{
        document.getElementById("music").play()
        isPlaying = true
        document.getElementById("musicButton").style.backgroundImage= "url(isPlaying.png)"
        console.log("playing")
    }
}

function setVolumeSlider() {
    console.log("volume set")
    document.getElementById("music").volume = document.getElementById("volumeChanger").value
}
//SEGÉD FUNCTIONS lopotak xddd funny face
//!!
function mousePos(id)
{
    var e = window.event;

    var posX = e.clientX;
    var posY = e.clientY;

    console.log(posX,posY)
    document.getElementById(id).style.left = (posX - (window.innerWidth - 1000)/2 + 20 + "px")
    console.log(posX - (window.innerWidth - 1000)/2 + "px")
    document.getElementById(id).style.top = (posY - 20 + "px")
}
let letterByLetter = function(target, message, index, interval) {
    if (index < message.length) {
      document.querySelector(target).innerHTML = message.slice(0, index);
  
      setTimeout(function() {
        letterByLetter(target, message, index + 1, interval);
      }, interval);
    }
  }

//MAIN
ShowMap()