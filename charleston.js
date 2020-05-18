var charleston = true;
var getSub = 0;
var chSub = 0;
var pTile = new Array(3);
var blind = false;
var dblClick = 0;
var toSub = 0;


function setCharleston(id) {  // pTile is array of passed tiles; dbl click on row

    var j;
	pTile[dblClick] = id;	//save id of passed tile
	var b = "Tiles/Blank.jpg";
	dblClick += 1;			// number of tiles passed from own hand
	var x = document.getElementById(id).src;
	
	for (i = 0; i < 3; i++) {  // find empty position
		j = i +1;
		var chId = "imgchOut" + j;
		var y = document.getElementById(chId).src;
		if (y.includes(b)) {
			document.getElementById(chId).src = x;
    		document.getElementById(id).src = b;
			toSub += 1;			// number of tiles being passed
			break;
		}
	}

    if (toSub == 3){
 //     chSub += 1;
		toSub = 0;
        document.getElementById("ChPass").disabled= false;
//        pl = pl + window.opener.chArray[chSub];
//        setPlayer(pl);
		} 
	
    
}

function passTiles(pID, t) {
    
    window.opener.passTiles(pID, t);
 //   chSub += 1;
    document.getElementById("Get").disabled= false;
    document.getElementById("ChPass").disabled= true;
 //   alert("Get enabled");
    
 //   if (chSub > 6){
//        endCharleston();
//    }

 //       document.getElementById("ChPass").disabled= false;
        document.getElementById("imgchOut1").src = "Tiles/Blank.jpg";
        document.getElementById("imgchOut2").src = "Tiles/Blank.jpg";
        document.getElementById("imgchOut3").src = "Tiles/Blank.jpg";
		
    
}

function getTiles() {
    
    var pl = "Charleston";
    var i;
    var x;
    var id;
    var j;
	var t;
	var endCh = false;
    
    for(i = 0; i < dblClick; i++) {  // replace moved tiles
        j = i + 1;
        id = "imgchIn" + j;
        x = getImg[i];
		t = pTile[i];
        document.getElementById(t).src = x;
        document.getElementById(id).src = "Tiles/Blank.jpg";
    }
	dblClick = 0;
    document.getElementById("Get").disabled= true;

    chSub += 1;
	if ((chSub == 2) || (chSub == 5)){	// chSub - where are we in Charleston
		document.getElementById("Blind").disabled= false;
		
	} else{
		document.getElementById("Blind").disabled= true;
//		$(".chOutTile").droppable("option", "disabled");
//		$(".chInTile").draggable("option", "disabled");
	}
    if (chSub > 6){
        endCharleston();
		endCh = true;
    } else {
        pl = pl + window.opener.chArray[chSub];
        setPlayer(pl);
    }
	
	return endCh;
//    document.getElementById("ChPass").disabled= false;
}

function blindPass(){
	
	$(".chInTile").draggable({
                snap: "#column",
                revert: true

            });
			
			
	$(".chOutTile").droppable({
                accept: ".chInTile",
                drop: function (event, ui) {
                    dropCh($(this).attr("id"),ui.draggable.attr("id"));
                }

            });
}

function dropCh(id, dr){  // id = pos dropped on;  dr = dragged item
	
//	alert("drop on:  " + id + "  dropped:  " + dr);
	

	
	var x = dr.substring(7);
	x -= 1;
	var t = window.toSub;
	
	document.getElementById(id).src = getImg[x];
	document.getElementById(dr).src = "Tiles/Blank.jpg";
	getImg[x] = "Tiles/Blank.jpg";
	rearrangeCh();
	document.getElementById("ChPass").disabled= false;
	t += 1;
	if (t > 2){
		t = 0;
	}

}

function rearrangeCh(){ 
	
	var x, y, z;
	var b = "Tiles/Blank.jpg";
	
	x = document.getElementById("imgchIn1").src;
	y = document.getElementById("imgchIn2").src;
	z = document.getElementById("imgchIn3").src;

	if (x.includes(b)) {
		document.getElementById("imgchIn1").src = y;
		getImg[0] = getImg[1];
		document.getElementById("imgchIn2").src = z;
		getImg[1] = getImg[2];
		document.getElementById("imgchIn3").src = b;
		getImg[2] = b;
		}
		else {
		
			x = document.getElementById("imgchIn1").src;
			y = document.getElementById("imgchIn2").src;

			if (x.includes(b)) {		
				document.getElementById("imgchIn1").src = y;
				getImg[0] = getImg[1];
				document.getElementById("imgchIn2").src = b;
				getImg[1] = b;
				}			
			else if (y.includes(b)) {
				document.getElementById("imgchIn2").src = z;
				getImg[1] = getImg[2];
				document.getElementById("imgchIn3").src = b;
				getImg[2] = b;
				}
		}

}



function endCharleston() {
    
    charleston = false;
    document.getElementById("chOut").setAttribute("hidden", true);
    document.getElementById("chIn").setAttribute("hidden", true);
    document.getElementById("Get").setAttribute("hidden", true);
	document.getElementById("Blind").setAttribute("hidden", true);
    document.getElementById("ChPass").setAttribute("hidden", true);
    document.getElementById("Stop").setAttribute("hidden", true);

    document.getElementById("NewTileButton").removeAttribute("hidden");
    document.getElementById("Discard").removeAttribute("hidden");
    document.getElementById("UnDo").removeAttribute("hidden");
    document.getElementById("Call").removeAttribute("hidden");
    document.getElementById("Exchange").removeAttribute("hidden");
    document.getElementById("newtilebox").removeAttribute("hidden");
    document.getElementById("discardtilebox").removeAttribute("hidden");
    document.getElementById("Notes Button").removeAttribute("hidden");
    setPlayer("East");
	
	document.getElementById("NewTileButton").disabled= true;
    document.getElementById("Discard").disabled= true;
    document.getElementById("UnDo").disabled= true;
    document.getElementById("Call").disabled= true;
    document.getElementById("Exchange").disabled= true;
	discard = true;
    
    
    
}

function stopCharleston() {
    
    window.opener.stopCharleston();
}

