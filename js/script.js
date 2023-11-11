canvas = document.getElementById('canvas1')
ctx = canvas.getContext('2d')

canvas_width = canvas.width = 700
canvas_height = canvas.height = 700
p1_x = 0
p1_y = 250

p2_x = 650
p2_y = 250

ball_x = 350
ball_y = 350
radius = 20
vx = -5
vy = 2

player_height = 200
player_width = 50
animar = () =>{

    ctx.clearRect(0,0,canvas_width,canvas_height)
    player1 = ctx.fillRect(p1_x,p1_y,player_width,player_height)   
    player2 = ctx.fillRect(p2_x,p2_y,player_width,player_height)   
   
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.arc(ball_x, ball_y, radius, 0, Math.PI * 2, false);
    ctx.stroke();
    if(radius + ball_y > canvas_height || radius - ball_y > 0){
        vy = vy-vy*2
    }
    if(radius + ball_x > canvas_width  || radius - ball_x > 0){
        vx = vx-vx*2
    }
    if(radius + ball_x > p2_x && ball_y+radius > p2_y && ball_y-radius<p2_y+player_height){
        vx = vx-vx*2
    }
    if(ball_x-radius < p1_x+player_width && ball_y-radius > p1_y && ball_y - radius < p1_y+player_height){
        vx = vx-vx*2
    }
    ball_x = ball_x + vx
    ball_y = ball_y + vy
    requestAnimationFrame(animar)    
}
animar()
velocidade = 15
document.addEventListener("keydown", butao = (e) =>{

    console.log(` ${e.code}`);
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
