canvas = document.getElementById('canvas1')
ctx = canvas.getContext('2d')

canvas_width = canvas.width = 700
canvas_height = canvas.height = 700
p1_x = 0
p1_y = 250

p2_x = 650
p2_y = 250
animar = () =>{
    ctx.clearRect(0,0,canvas_width,canvas_height)
    player1 = ctx.fillRect(p1_x,p1_y,50,200)   
    player2 = ctx.fillRect(p2_x,p2_y,50,200)
    ball = ctx.FillBall(0,0,50,50)
    requestAnimationFrame(animar)
}
animar()
velocidade = 15
document.addEventListener("keydown", butao = (e) =>{

    // console.log(` ${e.code}`);
    if(e.code == "KeyW"){
        p1_y = p1_y- velocidade
    }
    if(e.code == "KeyS"){
        p1_y = p1_y+ velocidade
    }
    if(e.code == "ArrowUp"){
        p2_y = p2_y- velocidade
    }
    if(e.code == "ArrowDown"){
        p2_y = p2_y+ velocidade
    }
});
