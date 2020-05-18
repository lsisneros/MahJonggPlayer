var discardImage;
var discardTitle;
var exSub = 0;
var exchange = false;
var passTo = ["East", "North", "West", "West", "North", "East", "North"];
var getImg = new Array(3);
var lastID;
var call = false;

function discardTileS(){
 
    var x = document.getElementById("imgS14").src;
    var y = document.getElementById("imgS14").title
    document.getElementById("imgDiscard").src = x;
	document.getElementById("imgDiscard").title = y;
    document.getElementById("imgS14").src = "Tiles/Blank.jpg";
	document.getElementById("imgS14").title = "Blank";
    turnEnd();

}

function undoTileS(){
  
    if(charleston) {
		undoCharleston();
	}
	else if(call) {
		undoCall();
	}
	else {

    var x = document.getElementById(lastID).src;
    var y = document.getElementById("imgDiscard").src;
	var t = document.getElementById(lastID).title
	var u = document.getElementById("imgDiscard").title;
    document.getElementById("imgS14").src = x;
	document.getElementById("imgS14").title = t;	
	document.getElementById(lastID).src = y;
	document.getElementById(lastID).title = u;
	document.getElementById("imgDiscard").src = "Tiles/Blank.jpg";
	document.getElementById("imgDiscard").title = "Blank";
	}
}

function callTileS(){
     
    call = true;
	var x = document.getElementById("imgDiscard").src;
	var y = document.getElementById("imgDiscard").title;
    document.getElementById("imgS14").src = x;
	document.getElementById("imgS14").title = y;
    document.getElementById("imgDiscard").src = "Tiles/Blank.jpg";
	document.getElementById("imgDiscard").title = "Blank";
    window.opener.callBy("South");
    enableExpose();
	setCallButtons();
    window.opener.stopPlay();
    
}

function setCallButtons() {
	
	disableDraw();
	disableCall();
	disableDiscard();
	disableExchange();
	
}

function resetCallButtons() {
	
	enableDraw();
	enableCall();
	enableDiscard();
	enableExchange()
}

function undoCall() {
	
	
}

function exposeTileS(){   
    document.getElementById("southExpose").removeAttribute("hidden");
    window.opener.expose("s");
    document.getElementById("Continue").removeAttribute("hidden");  
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
        document.getElementById(id).title = hand[i];
        }
    disableDraw();
    enableCall();
    setPlayer("Charleston1:  Right");
    document.getElementById("ChPass").disabled= true;
    document.getElementById("Get").disabled= true;
	document.getElementById("Blind").disabled= true;

    }

function getNewTileS() {

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
    document.getElementById("imgS14").title = tname;
    //            document.getElementById("img14").title = tname;
    //           
    document.getElementById("imgDiscard").src = "Tiles/Blank.jpg";
    disableDraw();
	disableCall();

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
    dropID = id;
    
    document.getElementById("imgDiscard").src = document.getElementById(id).src;
    var d = document.getElementById(id).src;
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
    turnEnd();

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
    
    document.getElementById("Expose").removeAttribute("hidden");
}

function enableExchange() {
    
    document.getElementById("Exchange").removeAttribute("hidden");
}

function disableExchange() {
    
    document.getElementById("Exchange").disabled= true;
}

function mahJongg() {
	
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
	
	var p = window.opener.getWindowId("South");
	var t = passTo[chSub];
	passTiles(p, t);
	
}

function get() {
	
	getTiles();
		
}

function turnEnd(){
    
    discardImage = document.getElementById("imgDiscard").src
    discardTitle = document.getElementById("imgDiscard").title;
    disableDraw();
    window.opener.turnEnd("s");
    
}

function setDiscard(d, t){
    
    document.getElementById("imgDiscard").src = d;
	document.getElementById("imgDiscard").title = t;
    
}

function setPlayer(p){
    
    document.getElementById("player").value = p;
}

function moveExTile(id){
    
    if (charleston) {
        setCharleston(id);
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
        exSub += 1;
        var exid = "imgRS" + exSub;  
        var x = document.getElementById(id).src;
        var t = document.getElementById(id).title;
        document.getElementById(exid).src = x;
        document.getElementById(exid).title = t;
        window.opener.document.getElementById(exid).src = x;
        window.opener.document.getElementById(exid).title = t;
        document.getElementById(id).src = "Tiles/Blank.jpg";
    }
}

function continuePlay(){
    turnEnd();
    document.getElementById("Continue").setAttribute("hidden", true);
    
}

function exTile(){  // Clicked on "exchange" button; show choice of exposed hands
    
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
    
    if(xid.findTitle(t)) {   // in window with exposed hand match title
        
        xid.swap(t);        // in window with exposed hand
        match = true;
    }
    else {
        
        alert("No match for:  " + t);
    }
    
    return match;
}

function notes(){
    
    document.getElementById("notes").removeAttribute("hidden");
    
}

function findTitle(t){  // This window has exposed hand
                        // search of match of titles
    var f = false;
    var i, s;
    var img;
    var exTitle;

    
    for(i = 0; i < exSub; i++){
        s = i + 1;
        img = "imgRS" + s;
        exTitle = document.getElementById(img).title;
        if (t == exTitle){
            f = true;
            break;
        }
        
        
    }
    
    return f;
}

function swap(t){  // This window has exposed hand: 
    
    var i, s;
    var img;
    var j = 'Tiles/' + t + '.jpg';
    
    for(i = 0; i < exSub; i++){
        s = i + 1;
        img = "imgRS" + s;
        exTitle = document.getElementById(img).title;
        if ("Joker" == exTitle){
            document.getElementById(img).src= j;
			window.opener.document.getElementById(img).src= j;
            document.getElementById(img).title = t;
			window.opener.document.getElementById(img).title = t;
            
            break;
        }
        
        
    }
    
}