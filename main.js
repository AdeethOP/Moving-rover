canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var rover_width = 100;
var rover_height = 90;
var nasa_mars_images_array = ["nasa_image_1.jpg", "nasa_image_2.jpg", "nasa_image_3.jpg", "nasa_image_4.jpg","nasa_image_5.jpg"];
var random_number = Math.floor(Math.random()*5);
var background_img = nasa_mars_images_array[random_number];
var rover_img = "rover.png";
var rover_x = 10;
var rover_y = 10;
function add() {
  background_imgTag = new Image();
  background_imgTag.onload = uploadbackground;
  background_imgTag.src = background_img;

  rover_imgTag = new Image();
  rover_imgTag.onload = uploadrover;
  rover_imgTag.src = rover_img;
}
function uploadbackground() {
  ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover() {
  ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
  keypressed = e.keyCode;
  console.log(keypressed);
  if (keypressed == "37") {
    left();
    console.log("left");
  }
  if (keypressed == "38") {
    up();
    console.log("up");
  }
  if (keypressed == "39") {
    right();
    console.log("right");
  }
  if (keypressed == "40") {
    down();
    console.log("down");
  }
}
function up(){
    if(rover_y >= 0){
        rover_y = rover_y - 10;
         console.log("When up arrow clicked x = "+rover_x+" y = "+rover_y);
         uploadbackground()
         uploadrover()
    }
}
function left(){
    if(rover_x >= 0){
        rover_x = rover_x - 10;
         console.log("When left arrow clicked x = "+rover_x+" y = "+rover_y);
         uploadbackground()
         uploadrover()
    }
}
function down(){
    if(rover_y <= 500){
        rover_y = rover_y + 10;
         console.log("When down arrow clicked x = "+rover_x+" y = "+rover_y);
         uploadbackground()
         uploadrover()
    }
}
function right(){
    if(rover_x <= 700){
        rover_x = rover_x + 10;
         console.log("When right arrow clicked x = "+rover_x+" y = "+rover_y);
         uploadbackground()
         uploadrover()
    }
}


