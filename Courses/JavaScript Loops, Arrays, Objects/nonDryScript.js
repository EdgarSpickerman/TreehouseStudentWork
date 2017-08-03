// JavaScript source code
var html = '';

function randomRGB(){
  return Math.floor(Math.random() * 256 )
}

function randomColor(){
  var color = 'rgb('; 
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}
function print(message){
  document.write(message);
}

for(var i = 0; i < 10; i ++) {
  html += '<div style="background-color:' +  randomColor() + '"></div>';
}

print(html);