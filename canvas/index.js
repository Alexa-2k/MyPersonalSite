/*$(document).ready(function(){
    if(!$("#myCanvas").tagcanvas({
    textColour: "#08fdd8" , 
    outlineColour: "transparent",
    reverse: true,
    depth: 0.8,
    maxSpeed: 0.05,
    weight: true,       
    }, "tags")){
        //stg went wrong, hide the canvas
       // $("#myCanvasContainer");
    }

})
*/
//TagCanvas.SetSpeed(canvasId, [0.5, -0.25]);

   window.onload = function() {
    try {
      TagCanvas.Start('myCanvas');
    } catch(e) {
      // something went wrong, hide the canvas container
      document.getElementById('myCanvasContainer').style.display = 'none';
    }
  }; 

 /* 
   window.onload = function() {
    try {
      TagCanvas.Start('myLanguajes');
    } catch(e) {
      // something went wrong, hide the canvas container
      document.getElementById('myCanvasLanguages').style.display = 'none';
    }
  }; */