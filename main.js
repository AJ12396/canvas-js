var canvas = ""
canvas =
document.getElementById("meuPaint")
ctx= canvas.getContext("2d");

ctx.beginPath()
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40,0, 2 * Math.PI); 
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(480, 210, 40,0, 2 * Math.PI); 
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(305, 250, 40,0, 2 * Math.PI); 
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(360, 210, 40,0, 2 * Math.PI); 
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(425, 250, 40,0, 2 * Math.PI); 
ctx.stroke();