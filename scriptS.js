var discardImage;
var discardTitle;
var exNum = 1;
var exchange = false;
var passTo = ["East", "North", "West", "West", "North", "East", "North"];
var getImg = new Array(3);
var lastID;
var call = false;
var callTitle;
var optPass = false;
var discard = false;
var exTitle = new Array(4);
var exStart = new Array(4);
var exSub = 0;
var indMahJongg = false;

function discardTileS(){
 
    var x = document.getElementById("imgS14").src;
    var y = document.getElementById("imgS14").title
    document.getElementById("imgDiscard").src = x;
	document.getElementById("imgDiscard").title = y;
    document.getElementById("imgS14").src = "Tiles/Blank.jpg";
	document.getElementById("imgS14").title = "Blank";
	window.opener.showDiscard(x);
	discard = true;
    turnEnd();
	disableDiscard();

}

function undoTileS(){
 
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
		document.getElementById("imgS14").src = y;
		document.getElementById("imgS14").title = u;	
	} else {
		x = document.getElementById(lastID).src;
		t = document.getElementById(lastID).title;
    	document.getElementById("imgS14").src = x;
		document.getElementById("imgS14").title = t;	
		document.getElementById(lastID).src = y;
		document.getElementById(lastID).title = u;		
	}
	document.getElementById("imgDiscard").src = "Tiles/Blank.jpg";
	document.getElementById("imgDiscard").title = "Blank";
	window.opener.discardCount -= 1;
	
}

function callTileS(){
     
    call = true;
	document.getElementById("Expose").removeAttribute("hidden");
	var x = document.getElementById("imgDiscard").src;
	var y = document.getElementById("imgDiscard").title;
	callTitle = y;
	exTitle[exSub] = y;
	exStart[exSub] = exNum;
	exSub += 1;
    document.getElementById("imgS14").src = x;
	document.getElementById("imgS14").title = y;
    document.getElementById("imgDiscard").src = "Tiles/Blank.jpg";
	document.getElementById("imgDiscard").title = "Blank";
    window.opener.callBy("South");
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
	
	if (document.getElementById("imgS14").title == "Blank") {
		undoA();
	}
	
	x = document.getElementById("imgS14").src;
	t = document.getElementById("imgS14").title;
	document.getElementById("imgDiscard").src = x;
	document.getElementById("imgDiscard").title = t;
	document.getElementById("imgS14").src = "Tiles/Blank.jpg";
	document.getElementById("imgS14").title = "Blank";
	window.opener.undoCall();
			
}

function exposeTileS(){ 
	
	suspendDblClick = false;
    document.getElementById("southExpose").removeAttribute("hidden");
    window.opener.expose("s");
   // document.getElementById("Continue").removeAttribute("hidden");  
}


function getNextImageS() {

    var image;
    var id;
    //var hand;

    var tname;
    var imgnam;
    var hand = window.opener.handS;
    

    for (i = 0; i < 13; i++) {
     
            image = 'Tiles/' + hand[i] + '.jpg';
    
         //           console.log(image);
        //            alert(i + ": " + image);
        id = "imgS" + (i + 1);
        document.getElementById(id).src = image;
		tname = getTitle(hand[i]);
        document.getElementById(id).title = tname;
        }
    disableDraw();
    enableCall();
    setPlayer("Charleston1:  Right - passing to " + passTo[0]);
	document.getElementById("UnDo").disabled= true;
    document.getElementById("ChPass").disabled= true;
    document.getElementById("Get").disabled= true;
	document.getElementById("Blind").disabled= true;

    }

function getNewTileS() {

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
    document.getElementById("imgS14").src = image;
    t = getTitle(tname);
    document.getElementById("imgS14").title = t;
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
    dragImage = document.getElementById("imgS14").src;


}
function dropTile(id) {
	
     console.log(id + " tile dropped");
    lastID = id;
    
    var d = document.getElementById(id).src;
	window.opener.showDiscard(d);
	document.getElementById("imgDiscard").src = d;
    d = d.split("Tiles/");
    var n = d[1];
    var t = n.split(".");

    document.getElementById("imgDiscard").title = t[0];
    document.getElementById(id).src = document.getElementById("imgS14").src;
    var x = document.getElementById("imgS14").title;
    document.getElementById(id).title = x;
    document.getElementById("imgS14").src = "Tiles/Blank.jpg";
    document.getElementById("imgS14").title = "Blank";
    // drawCount++;
    if (!call) {
    	turnEnd();
	}

    }

function disableDraw(){
    
    document.getElementById("NewTileButton").disabled= true;
}

function enableDraw(){
    
    document.getElementById("NewTileButton").disabled= false;
}

function disableDiscard() {
    
    document.getElementById("Discard").disabled= true;
}

function enableDiscard() {
    
    document.getElementById("Discard").disabled= false;
}

function disableCall(){
    
    document.getElementById("Call").disabled= true;
}

function enableCall(){
    
    document.getElementById("Call").disabled= false;
}

function disableExpose(){
    
    document.getElementById("Expose").disabled= true;
}

function enableExpose(){
    
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
	exposeTileS();
	window.opener.expose("s");
	window.opener.mahJonggBy("South")
	window.opener.stopPlay();
}

function callMahJongg(p) {
    
    alert("Mah Jongg by " + p);
}

function callAlert(p){
    
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
	var p = window.opener.getWindowId("South");
	var t = passTo[chSub];
	passTiles(p, t, n);
	
}

function alertCallOpt(t, n){
	
	var wid = window.opener.getWindowId(t);
	wid.alertOpt("South", n);
	
}

function alertOpt(f, n){
	
	alert(f + " selected " + n + " optional pass.  Your oprion must match.");
}

function get() {
	
	getTiles();
		
}

function turnEnd(){
    
    discardImage = document.getElementById("imgDiscard").src
    discardTitle = document.getElementById("imgDiscard").title;
    disableDraw();
    window.opener.turnEnd("s");
	suspendDblClick = true;
	disableDiscard();
	
	}

function setDiscard(d, t){
    
    document.getElementById("imgDiscard").src = d;
	document.getElementById("imgDiscard").title = t;
    
}

function setPlayer(p){
    
    document.getElementById("player").value = p;
}

function moveExTile(id){
    
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

    else if(exchange){      // After click onexchange button - 
                            // double-click on tile to be exchanged
        if(exMatch(id)){
            
            document.getElementById(id).src = "Tiles/Joker.jpg";
            document.getElementById(id).title = "Joker";
                        
            }
            exchange = false;
        
        } 
    else {
        
        var exid = "imgRS" + exNum;  
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

function exTile(){  // Clicked on "exchange" button; show choice of exposed hands
    
 	suspendDblClick = false;
	exchange = true;
    document.getElementById("exSelect").removeAttribute("hidden");
   
}

function exMatch(id){   // Get title of tile being exchanged
                        // and search for match in exposed hand
    var match = false;
    var xid;
    var t = document.getElementById(id).title;
    var h = document.getElementById("hand").value;
 //   window.opener.document.exTile("east", h, id);
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

function notes(){
    
    document.getElementById("notes").removeAttribute("hidden");
    
}

function swap(t, s){  // This window has exposed hand: 
    
    var i, k = s;
    var img;
    var j = 'Tiles/' + t + '.jpg';
    
    for(i = 0; i < 5; i++){
        img = "imgRS" + k;
        titleEx = document.getElementById(img).title;
        if ("Joker" == titleEx){
            document.getElementById(img).src= j;
			window.opener.document.getElementById(img).src= j;
            document.getElementById(img).title = t;
			window.opener.document.getElementById(img).title = t;           
            break;
        }
        k += 1;
        
    }
    
}