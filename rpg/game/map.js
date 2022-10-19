let pos = 0
let enemyHP = 1000

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


function foAlgoritmus(holVagyok)
{
    pos = holVagyok
    console.log(pos)
    document.getElementById("container").style.display = "none"

    document.getElementById("protog").style.display = "block"
    document.getElementById("bg").style.display = "block"
    document.getElementById("enemy").style.display = "block"
    document.getElementById("skill").style.display = "block"

    document.getElementById("bg").src = "backgrounds/"+holVagyok+".png"
    document.getElementById("enemy").src = "enemy/crab.png"

}
function skill(){
    enemyHP -= 900
    console.log(enemyHP)
    if (enemyHP<0)
    {
        ShowMap()
    }
}
function ShowMap(){

    document.getElementById("container").style.display = "block"

    document.getElementById("skill").style.display = "none"
    document.getElementById("bg").style.display = "none"
    document.getElementById("protog").style.display = "none"
    document.getElementById("enemy").style.display = "none"
    elerheto()
}

function elerheto() {
    document.querySelectorAll(".point").forEach(image => {image.style.display = "none"})
    for (let i = 0; i < graph[pos].length; i++)
    {
        document.getElementById("a"+graph[pos][i]).style.display="block";
        document.getElementById("a"+graph[pos][i]).style.cursor="pointer";
        document.getElementById("a"+graph[pos][i]).innerHTML="<b>X</b>"
    }
}

ShowMap()





