var discardImage;
var discardTitle;
var exNum = 1;
var exchange = false;
var passTo = ["North", "West", "South", "South", "West", "North", "West"];
var discard = false;
var getImg = new Array(3);
var lastID;
var discardFirst = true;
var call = false;
var callTitle;
var optPass = false;
var discard = false;
var exTitle = new Array(4);
var exStart = new Array(4);
var exSub = 0;
var indMahJongg = false;

function discardTileE() {
	
//  	discard = true;
    var x = document.getElementById("imgE15").src;
	var y = document.getElementById("imgE15").title
    document.getElementById("imgDiscard").src = x;
	document.getElementById("imgDiscard").title = y;
    document.getElementById("imgE15").src = "Tiles/Blank.jpg";
	document.getElementById("imgE15").title = "Blank";
	window.opener.showDiscard(x);
	discard = true;
    turnEnd();
	disableDiscard();

}

function undoTileE() {
	
	if(charleston) {
		undoCharleston();
	}
	else if(call) {
		undoCall();
	}
	else {

		undoA();
	}
}

function undoA() {
	
	var x,y,y,u;
		
    y = document.getElementById("imgDiscard").src;	
	u = document.getElementById("imgDiscard").title;
	if (discard) {
		document.getElementById("imgE15").src = y;
		document.getElementById("imgE15").title = u;	
	} else {
		x = document.getElementById(lastID).src;
		t = document.getElementById(lastID).title;
    	document.getElementById("imgE15").src = x;
		document.getElementById("imgE15").title = t;	
		document.getElementById(lastID).src = y;
		document.getElementById(lastID).title = u;		
	}
	document.getElementById("imgDiscard").src = "Tiles/Blank.jpg";
	document.getElementById("imgDiscard").title = "Blank";
	window.opener.discardCount -= 1;
	
}

function callTileE() {
    
	call = true;
	document.getElementById("Expose").removeAttribute("hidden");
    var x = document.getElementById("imgDiscard").src;
	var y = document.getElementById("imgDiscard").title;
	callTitle = y;
	exTitle[exSub] = y;
	exStart[exSub] = exNum;
	exSub += 1;
    document.getElementById("imgE15").src = x;
	document.getElementById("imgE15").title = y;
    document.getElementById("imgDiscard").src = "Tiles/Blank.jpg";
	document.getElementById("imgDiscard").title = "Blank";
    window.opener.callBy("East"); 
    enableExpose();
	setCallButtons();
	window.opener.discardCount -= 1;
    window.opener.stopPlay();
    
}

function setCallButtons() {
	
	disableDraw();
	disableCall();
	disableDiscard();
	disableExchange();
	document.getElementById("Call").setAttribute("hidden", true);
	document.getElementById("Continue").removeAttribute("hidden");
	
}

function resetCallButtons() {
	
	enableCall();
//	enableDiscard();
	enableExchange();
	document.getElementById("Call").removeAttribute("hidden");
	call = false;
}

function undoCall() {
	
	var x,y,y,u;
	
	if (document.getElementById("imgE15").title == "Blank") {
		undoA();
	}
	
	x = document.getElementById("imgE15").src;
	t = document.getElementById("imgE15").title;
	document.getElementById("imgDiscard").src = x;
	document.getElementById("imgDiscard").title = t;
	document.getElementById("imgE15").src = "Tiles/Blank.jpg";
	document.getElementById("imgE15").title = "Blank";
	window.opener.undoCall();
	
}

function exposeTileE() {
	
	suspendDblClick = false;
   	document.getElementById("eastExpose").removeAttribute("hidden");
   	window.opener.expose("e");
//   	document.getElementById("Continue").removeAttribute("hidden");
}


function getNextImageE() {

    var image;
    var id;
    //var hand;

    var tname;
    var imgnam;
    var hand = window.opener.handE;
    

    for (i = 0; i < 14; i++) {
     
            image = 'Tiles/' + hand[i] + '.jpg';
    
         //           console.log(image);
        //            alert(i + ": " + image);
        id = "imgE" + (i + 1);
        document.getElementById(id).src = image;
		tname = getTitle(hand[i]);
        document.getElementById(id).title = tname;
        }
    enableDraw();
   // disableCall();
    setPlayer("Charleston1:  Right - passing to " + passTo[0]);
    document.getElementById("ChPass").disabled= true;
    document.getElementById("Get").disabled= true;
	document.getElementById("Blind").disabled= true;
	
    }

function getNewTileE() {

	var t;   	
	discard = false;
	nxt =  window.opener.next;
    imArray = window.opener.imageName;
//    console.log("In getNewTile: " + imArray);
    tname = imArray[nxt];
    console.log("In getNewTile: " + tname);
    image = 'Tiles/' + imArray[nxt] + '.jpg';
    window.opener.next = nxt + 1;
 //   console.log(next);
    //            console.log(image);
    //            alert(next + ": " + image)
    //            var setID = "img" + newID; 
    //            console.log(227 + " " + setID);
    document.getElementById("imgE15").src = image;
	t = getTitle(tname);
    document.getElementById("imgE15").title = t;
    //            document.getElementById("img14").title = tname;
    //           
    document.getElementById("imgDiscard").src = "Tiles/Blank.jpg";
    disableDraw();
	enableDiscard();

}

function getTitle(t) {
	
	var title;
		
//	console.log("t:  " + t);
	if (t.includes("Flower")) {
		title = "Flower";
		}else {	
			if ((t == "Spring") || (t == "Summer") || (t == "Autumn") || (t == "Winter")) {
				title  = "Flower";
			}
			 else {
			title = t;
			}
		}
	return title;
}

function dragTile(dragEvent, ui) {
    //            dragEvent.preventDefault();
    //            $(".row").sortable("disable");
    //            var setID = "img" + newID;
    //            console.log(241 + " " + setID);
    console.log("ev " + dragEvent.target.id);
    dragImage = document.getElementById("imgE15").src;


}
function dropTile(id) {
	
    // console.log(id + " tile dropped");
    lastID = id;
    
    
    var d = document.getElementById(id).src;
	window.opener.showDiscard(d);
	document.getElementById("imgDiscard").src = d;
    d = d.split("Tiles/");
    var n = d[1];
    var t = n.split(".");
	

    document.getElementById("imgDiscard").title = t[0];
    document.getElementById(id).src = document.getElementById("imgE15").src;
    var x = document.getElementById("imgE15").title;
    document.getElementById(id).title = x;
    document.getElementById("imgE15").src = "Tiles/Blank.jpg";
    document.getElementById("imgE15").title = "Blank";
    // drawCount++;
    if (!call) {
    	turnEnd();
	}

    }

function disableDraw() {
    
    document.getElementById("NewTileButton").disabled= true;
}

function enableDraw() {
    
    document.getElementById("NewTileButton").disabled= false;
}

function disableDiscard() {
    
    document.getElementById("Discard").disabled= true;
}

function enableDiscard() {
    
    document.getElementById("Discard").disabled= false;
}


function disableCall() {
    
    document.getElementById("Call").disabled= true;
}

function enableCall() {
    
    document.getElementById("Call").disabled= false;
}

function disableExpose() {
    
    document.getElementById("Expose").disabled= true;
}

function enableExpose() {
    
    document.getElementById("Expose").disabled= false;
}

function enableExchange() {
        document.getElementById("Exchange").disabled= false;
}

function disableExchange() {
    
    document.getElementById("Exchange").disabled= true;
}

function mahJongg() {
	
	indMahJongg = true;
	exposeTileE();
	window.opener.expose("e");
	window.opener.mahJonggBy("East")
	window.opener.stopPlay();
}

function callMahJongg(p) {
    
    alert("Mah Jongg by " + p);
}

function callAlert(p) {
    
    document.getElementById("imgDiscard").src = "Tiles/Blank.jpg";
    alert("call by " + p);
}

function pass() {
	
	var n;
	var t = passTo[chSub];
	if (optPass) {
		n = document.getElementById("pass").value;
//		alertCallOpt(t, n);
		document.getElementById("passSelect").setAttribute("hidden", true);
	}
	else {
		n = 3;
	}
	var p = window.opener.getWindowId("East");
	
	passTiles(p, t, n);
	
}

function alertCallOpt(t, n){
	
	var wid = window.opener.getWindowId(t);
	wid.alertOpt("East", n);
	
}

function alertOpt(f, n){
	
	alert(f + " selected " + n + " optional pass.  Your oprion must match.");
}

function get() {
	
	getTiles();
		
}

function turnEnd(){
    
    discardImage = document.getElementById("imgDiscard").src;
	discardTitle = document.getElementById("imgDiscard").title;
    disableDraw();
    window.opener.turnEnd("e");
	suspendDblClick = true;
    
}

function setDiscard(d, t) {
    
    document.getElementById("imgDiscard").src = d;
	document.getElementById("imgDiscard").title = t;
    
}

function setPlayer(p){
    
    document.getElementById("player").value = p;
}

function moveExTile(id) {
    
	if (suspendDblClick) {
		return; 
		}
    
    if (charleston) {
		var t = document.getElementById(id).title;
		if (t == "Joker"){
			alert("Invalid pass!");
		}
		else {			
				setCharleston(id);
			}			
		
    }


    else if(discardFirst){       
        firstDiscard(id);
    }
	
    else if(exchange) {      // After click on exchange button - 
                            // double-click on tile to be exchanged
        if(exMatch(id)) {           
            document.getElementById(id).src = "Tiles/Joker.jpg";
            document.getElementById(id).title = "Joker";
                        
            }
            exchange = false;
        }
        
        else {			// Expose
        	
        	var exid = "imgRE" + exNum;  
        	var x = document.getElementById(id).src;
        	var t = document.getElementById(id).title;			
        	if (((t == callTitle) || (t == "Joker")) || (indMahJongg)){
        		document.getElementById(exid).src = x;
        		document.getElementById(exid).title = t;
        		window.opener.document.getElementById(exid).src = x;
        		window.opener.document.getElementById(exid).title = t;
        		document.getElementById(id).src = "Tiles/Blank.jpg";
				exNum += 1;		
				}
			else {
				alert("Exposed tile must match call.");				
				}
		}
}

function continuePlay(){
    turnEnd();
    document.getElementById("Continue").setAttribute("hidden", true);
    
}

function exTile() {  // Clicked on "exchange" button; show choice of exposed hands
    
    exchange = true;
    document.getElementById("exSelect").removeAttribute("hidden");
	suspendDblClick = false;
   
}

function exMatch(id) {   // Get title of tile being exchanged
                        // and search for match in exposed hand
    var match = false;
    var i, xid;
    var t = document.getElementById(id).title;
    var h = document.getElementById("hand").value;
 //   window.opener.exTile("east", h, id);
    document.getElementById("exSelect").setAttribute("hidden", true);  // hide dropdown
    xid = window.opener.getWindowId(h); // window with exposed hand
    if (!xid.matchTitle(t)) {
    	alert("No match for:  " + t);
		}
	else {
		match = true
	}
	return match;
}

function matchTitle(t) {
	
	var r = false;
	for(i = 0; i < exSub; i++){
        if (t == exTitle[i]){
			swap(t, exStart[i]);   // in window with exposed hand 
        	r = true;
           	break;
        }
	}
	return r;
		
}

function notes() {
    
    document.getElementById("notes").removeAttribute("hidden");
    
}

function firstDiscard(id) {
    
    var x = document.getElementById(id).src;
	var y = document.getElementById(id).title;
    document.getElementById("imgDiscard").src = x;
	document.getElementById("imgDiscard").title = y;
    document.getElementById(id).src = "Tiles/Blank.jpg";
    document.getElementById(id).setAttribute("hidden", true);
    discardFirst = false;
  //  document.getElementById("Discard").disabled= false;
    document.getElementById("UnDo").disabled= false;
    document.getElementById("Call").disabled= false
    document.getElementById("Exchange").disabled= false;
    window.opener.showDiscard(x);
    turnEnd();    
}

function swap(t, s) {  // This window has exposed hand: 
    
    var i, k = s;
    var img;
    var j = 'Tiles/' + t + '.jpg';
    
    for(i = 0; i < 5; i++){
        img = "imgRE" + k;
        exTitle = document.getElementById(img).title;
        if ("Joker" == exTitle){
            document.getElementById(img).src= j;
			window.opener.document.getElementById(img).src= j;
            document.getElementById(img).title = t;
			window.opener.document.getElementById(img).title = t;
            break;
        }
        k += 1;
        
    }
    
}

function touch2Mouse(e)
{
  var theTouch = e.changedTouches[0];
  var mouseEv;

  switch(e.type)
  {
    case "touchstart": mouseEv="mousedown"; break;  
    case "touchend":   mouseEv="mouseup"; break;
    case "touchmove":  mouseEv="mousemove"; break;
    default: return;
  }

  var mouseEvent = document.createEvent("MouseEvent");
  mouseEvent.initMouseEvent(mouseEv, true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);
  theTouch.target.dispatchEvent(mouseEvent);

  e.preventDefault();
}