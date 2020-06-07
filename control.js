var eastID;
var northID;
var westID;
var southID;
var discardID;
var discard;
var dtitle;
var discardCount = 0;
var player = "Charleston1:  Right";
var exArray = new Array(4);
var exSub = 0;
var tend;
var chArray = ["1: Right", "2: Across", "3: 1st Left", "4: 2nd Left", "5: Across", "6: last Right", "7: Across"];


function openEast(){

eastID = window.open("TabE.html", "_blank");
//document.getElementById("East").setAttribute("hidden", true);

}

function openNorth(){

northID = window.open("TabN.html", "_blank");
//document.getElementById("North").setAttribute("hidden", true);
    
}

function openWest(){

westID = window.open("TabW.html", "_blank");
//document.getElementById("West").setAttribute("hidden", true);
    
}

function openSouth(){

southID = window.open("TabS.html", "_blank");
document.getElementById("South").setAttribute("hidden", true);
    
}

function openDiscards() {
	
	discardID = window.open("Discards.html", "_blank");
	//document.getElementById("Discards").setAttribute("hidden", true);

}

function openAbout() {
	
// discardID.document.getElementById("imgCC11").className="discarded";	

}

function undoCall() {
	turnEnd(tend);
}

function turnEnd(w){
	
	tend = w;
    switch (w) {
        case "e":
            player = "North";
            eastID.resetCallButtons();
            northID.enableDraw();
            discard = eastID.discardImage;
			dtitle = eastID.discardTitle;
            northID.setDiscard(discard, dtitle);
            westID.setDiscard(discard, dtitle);
            southID.setDiscard(discard, dtitle);
            break;
            
        case "n":
            player = "West";
            northID.resetCallButtons();
            westID.enableDraw();
            discard = northID.discardImage;
			dtitle = northID.discardTitle;
            eastID.setDiscard(discard, dtitle);
            westID.setDiscard(discard, dtitle);
            southID.setDiscard(discard, dtitle);
            break;
            
        case "w":
            player = "South";
            westID.resetCallButtons();
            southID.enableDraw();
            discard = westID.discardImage;
			dtitle = westID.discardTitle;
            northID.setDiscard(discard, dtitle);
            eastID.setDiscard(discard, dtitle);
            southID.setDiscard(discard, dtitle);
            break;
            
        case "s":
            player = "East";
            southID.resetCallButtons();
            eastID.enableDraw();
            discard = southID.discardImage;
			dtitle = southID.discardTitle;
            northID.setDiscard(discard, dtitle);
            westID.setDiscard(discard, dtitle);
            eastID.setDiscard(discard, dtitle);
            break;
            
        default:
            
            
    }
    
    eastID.setPlayer(player);
    northID.setPlayer(player);
    westID.setPlayer(player);
    southID.setPlayer(player);
    
}



function callWindow(){
        
    eastID.callWindow();
    northID.callWindow();              
    westID.callWindow();   
    southID.callWindow();
          
            
    }

function mahJonggBy(p) {
	
	eastID.callMahJongg(p);
	eastID.callMahJongg(p);
	eastID.callMahJongg(p);
	eastID.callMahJongg(p);
	
}
    
function callBy(p){
    
    eastID.callAlert(p);    
    eastID.document.getElementById("Exchange").removeAttribute("hidden");
    northID.callAlert(p);
    northID.document.getElementById("Exchange").removeAttribute("hidden");
    westID.callAlert(p);
    westID.document.getElementById("Exchange").removeAttribute("hidden");
    southID.callAlert(p);
    southID.document.getElementById("Exchange").removeAttribute("hidden");
    
}

function stopPlay(){
    
    eastID.disableDraw();
    northID.disableDraw();              
    westID.disableDraw();   
    southID.disableDraw();
}

function expose(h){   
        
    switch (h) {
        case "e":
            document.getElementById("eastExpose").removeAttribute("hidden");
            exArray[exSub] = "East";
            exSub += 1;
            break;
            
        case "n":
            document.getElementById("northExpose").removeAttribute("hidden");
            exArray[exSub] = "North";
            exSub += 1;
            break;
            
        case "w":
            document.getElementById("westExpose").removeAttribute("hidden");
            exArray[exSub] = "West";
            exSub += 1;
            break;
            
        case "s":
            document.getElementById("southExpose").removeAttribute("hidden");
            exArray[exSub] = "South";
            exSub += 1;
            break;
            
        default:
    }
    
    
}

function exchangeTile(id) {
    
    alert(id);
    
}

function passTiles(f, h, n) {	// f - from; h - to
    
    var x;
	var j;
	var inID;
	var outID;
    var xid = getWindowId(h);	// get window id from name
	var hide = "Tiles/Hidden.jpg"
    
	for (i = 0; i < n; i++) {
		j = i + 1;
		inID = "imgchIn" + j;
		outID = "imgchOut" + j;
    	x = f.document.getElementById(outID).src;
		xid.getImg[i] = x;
    	xid.document.getElementById(inID).src = hide;            	
		}
	xid.passIn = true;
	xid.checkPass();
}

function getWindowId(h){
    
    var xid;
    
    switch(h) {
            
        case "North":
            xid = northID;
            break;
            
        case "West":
            xid = westID;
            break;
            
        case "South":
            xid = southID;
            break;
            
        case "East":
            xid = eastID;
            break;
                   
        default:
            xid = null;
            break;
            
    }
    
    return xid;
        
}

function test(){
    
    pl = "Charleston" + chArray[5];
    eastID.chSub = 5;
    eastID.setPlayer(pl);
    westID.chSub = 5;
    westID.setPlayer(pl);
    northID.chSub = 5;
    northID.setPlayer(pl);
    southID.chSub = 5;
    southID.setPlayer(pl);
}

function stopCharleston() {
    
    eastID.endCharleston();
    westID.endCharleston();
    northID.endCharleston();
    southID.endCharleston();
    
}

function setOptional() {
	
    pl = "Charleston" + chArray[6];
    eastID.setOptional(pl);
    westID.setOptional(pl);
    northID.setOptional(pl);
    southID.setOptional(pl);
}

function exTile(f, t, id){
    
    alert("Exchange: " + f + " " + t + " " + id);
    tid = findJoker(t);
    alert(tid);
    
}

function findJoker(ex){
    
    
}

function close() {
	
	if(confirm("Are you sure you want to close this window")){
    	return true;
	}else{
    	return false;
		}
}

function showDiscard(img) {
	
	discardCount += 1;
	var i = "imgDC" + discardCount;
	discardID.document.getElementById(i).src = img;	
	discardID.document.getElementById(i).className="discarded";
	
}

function start() {
	eastID = window.open("TabE.html", "_blank");
	northID = window.open("TabN.html", "_blank");
	westID = window.open("TabW.html", "_blank");
	southID = window.open("TabS.html", "_blank");
	discardID = window.open("Discards.html", "_blank");
}

function openAll() {
	
	openEast();
	openNorth();
	openWest();
	openSouth();
	openDiscards();
}