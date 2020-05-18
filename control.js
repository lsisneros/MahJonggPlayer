var eastID;
var northID;
var westID;
var southID;
var discard;
var dtitle;
var player = "Charleston1:  Right";
var exArray = new Array(4);
var exSub = 0;
var chArray = ["1: Right", "2: Across", "3: 1st Left", "4: 2nd Left", "5: Across", "6: last Right", "7: Across"];


function openEast(){

eastID = window.open("TabE.html");
document.getElementById("East").setAttribute("hidden", true);

}

function openNorth(){

northID = window.open("TabN.html");
document.getElementById("North").setAttribute("hidden", true);
    
}

function openWest(){

westID = window.open("TabW.html");
document.getElementById("West").setAttribute("hidden", true);
    
}

function openSouth(){

southID = window.open("TabS.html");
document.getElementById("South").setAttribute("hidden", true);
    
}

function nextPlayer(){

}

function turnEnd(w){
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

function passTiles(f, h) {	// f - from; h - to
    
    var x;
    var xid = getWindowId(h);	// get window id from name
	var hide = "Tiles/Hidden.jpg"
        
    x = f.document.getElementById("imgchOut1").src;
	xid.getImg[0] = x;
    xid.document.getElementById("imgchIn1").src = hide;        
    x = f.document.getElementById("imgchOut2").src;
	xid.getImg[1] = x;
    xid.document.getElementById("imgchIn2").src = hide;
    x = f.document.getElementById("imgchOut3").src;
	xid.getImg[2] = x;
    xid.document.getElementById("imgchIn3").src = hide;
    
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
    
    pl = "Charleston" + chArray[2];
    eastID.chSub = 2;
    eastID.setPlayer(pl);
    westID.chSub = 2;
    westID.setPlayer(pl);
    northID.chSub = 2;
    northID.setPlayer(pl);
    southID.chSub = 2;
    southID.setPlayer(pl);
}

function stopCharleston() {
    
    eastID.endCharleston();
    westID.endCharleston();
    northID.endCharleston();
    southID.endCharleston();
    
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