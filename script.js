
var handS = new Array(13);
var handE = new Array(14);
var handN = new Array(13);
var handW = new Array(13);
var imageName = new Array(152);
var dragImage;
var newID = 14;
var next = 0;
var dropID;
var reset;
var activeHand = "East";
var drawCount = 0;
var keyInput = new Array(3);

    var tiles = new Array(152);
function shuffle() {



    for (i = 0; i < 152; i++) {
        tiles[i] = i + 1;
    }
    for (k = 151; k > 0; k--) {
        j = Math.floor(Math.random() * k);
        temp = tiles[k];
        tiles[k] = tiles[j];
        tiles[j] = temp;
    }
    //   Math.floor()(Math.random() * 152 + 1)



    //              console.log(tiles.length);
    //              tiles.sort();

    j = 0;
    //                console.log("handE start:" + j );
    for (i = 0; i < 14; i++) {
        handE[i] = getImage(tiles[j]);
                           console.log(tiles[j]);
        j++;
    }
    //               console.log("handN start:" + j );
    for (i = 0; i < 13; i++) {
        handN[i] = getImage(tiles[j]);
        //                   console.log(tiles[j]);
        j++;
    }
    //               console.log("handW start:" + j );
    for (i = 0; i < 13; i++) {
        handW[i] = getImage(tiles[j]);
        //                   console.log(tiles[j]);
        j++;
    }
  
    for (i = 0; i < 13; i++) {
        handS[i] = getImage(tiles[j]);
        j++
    }
    
    next = j;
    reset = j;



    //               console.log("After sort");    
   // myHand.sort(function (a, b) { return a - b });
    for (i = 0; i < 152; i++) {
        imageName[i] = getImage(tiles[i]);
    //                    console.log(getImage(hand[i]));
   }
   
  

   // getNextImageE;
    


}

function getImage(t) {
    var name;
    if (t < 109) {
        name = suits(t);
    } else {
        if (t < 117) {
            //               		console.log("Joker");
            name = "Joker";
        } else {
            if (t < 133) {
                name = wind(t);
            } else {
                if (t < 145) {
                    name = dragon(t);
                } else {
                    if (t < 149) {
                        name = season(t);
                    } else {
                        name = flower(t);
                    }

                }
            }
        }
    }
    return name;
}

function suits(s) {
    var suit;

    if (s < 37) {
        suit = "Bam";
    } else if (s < 73) {
        suit = "Crack";
    } else {
        suit = "Dot";
    }
    r = s % 9;
    if (r == 0) {
        r = 9;
    }
    //               	console.log(suit + r);
    return suit + r;
}

function wind(w) {
    if (w < 121) {
        //                		console.log("East");
        return "East";
    } else if (w < 125) {
        //                		console.log("North");
        return "North";
    } else if (w < 129) {
        //              		console.log("South");
        return "South";
    } else {
        //                		console.log("West");
        return "West";
    }

}

function dragon(d) {
    if (d < 137) {
        //                		console.log("Green");
        return "Green";
    } else if (d < 141) {
        //                		console.log("Red");
        return "Red";

    } else {
        //               		console.log("Soap");
        return "Soap";
    }
}

function season(s) {
    switch (s) {
        case 145:
            //                		console.log("Spring");
            return "Spring";
            break;
        case 146:
            //                		console.log("Summer");
            return "Summer";
            break;
        case 147:
            //                		console.log("Autumn");
            return "Autumn";
            break;
        case 148:
            //                		console.log("Winter");
            return "Winter";
            break;
        default:
        //               		console.log("Season Not Found");
    }
}

function flower(f) {
    switch (f) {
        case 149:
            //               		console.log("Flower1");
            return "Flower1";
            break;
        case 150:
            //                		console.log("Flower2");
            return "Flower2";
            break;
        case 151:
            //                		console.log("Flower3");
            return "Flower3";
            break;
        case 152:
            //                		console.log("Flower4");
            return "Flower4";
            break;
        default:
        //                		console.log("Flower Not Found");
    }


}

function newTab(id){
    alert("Old: " + activeHand + "  New: " + id);

    saveImage(activeHand);
    getNextImage(id);
    activeHand = id;    
}

function getNextImageE() {

    var image;
    var id;
    var hand;
    var tname;
    var imgnam;
    var images = window.opener.handE;
    

    for (i = 0; i < 13; i++) {
     
            image = 'Tiles/' + images[i] + '.jpg';
    
   //                 console.log(image);
   //                 alert(i + ": " + image);
        id = "imgE" + (i + 1);
        document.getElementById(id).src = image;
        document.getElementById(id).title = handE[i];
        }
    

    }

function getNextImageN() {

    var image;
    var id;
    var hand;
    var tname;
    var imgnam;
    var images = window.opener.handN;
    

    for (i = 0; i < 13; i++) {
     
            image = 'Tiles/' + images[i] + '.jpg';
    
   //                 console.log(image);
   //                 alert(i + ": " + image);
        id = "imgN" + (i + 1);
        document.getElementById(id).src = image;
        document.getElementById(id).title = handN[i];
        }
    

    }

function getNextImageW() {

    var image;
    var id;
    var hand;
    var tname;
    var imgnam;
    var images = window.opener.handW;
    

    for (i = 0; i < 13; i++) {
     
            image = 'Tiles/' + images[i] + '.jpg';
    
   //                 console.log(image);
   //                 alert(i + ": " + image);
        id = "imgW" + (i + 1);
        document.getElementById(id).src = image;
        document.getElementById(id).title = handW[i];
        }
    

    }
function getNextImageS() {

    var image;
    var id;
    var hand;
    var tname;
    var imgnam;
    var images = window.opener.handS;
    

    for (i = 0; i < 13; i++) {
     
            image = 'Tiles/' + images[i] + '.jpg';
    
   //                 console.log(image);
   //                 alert(i + ": " + image);
        id = "imgS" + (i + 1);
        document.getElementById(id).src = image;
        document.getElementById(id).title = handS[i];
        }
    

    }

function getNextImage(hand) {

    var image;
    var id;
    var tname;
    var imgnam;
    var images;
    switch(hand) {
    	
    	case "East":
    		images = window.opener.handE;
            id = "imgE";
    		break;

    	case "North":
    		imgnam = handN;
    		break;

		case "West":
    		imgnam = handW;
    		break;

    	case "South":
    		imgnam = handS;
    		break;

    	default:
    		imgnam = "null";
    }
 //   console.log("in getNextImage - " + imgnam);
    for (i = 0; i < 13; i++) {
     
        image = 'Tiles/' + images[i] + '.jpg';
    
        //            console.log(image);
        //            alert(next + ": " + image)
        id = id + (i + 1);
        document.getElementById(id).src = image;
        document.getElementById(id).title = images[i];
    }

}

function saveImage(hand){
    var image;
    var id;
    var tname;
    var imgnam;
    // console.log("in saveImage - hand: " + hand);
    tname = document.getElementById("img13").title;
    alert("img13  " + tname);
    switch(hand) {
    	
    	case "East":
    		imgnam = handE;
    		break;

    	case "North":
    		imgnam = handN;
    		break;

		case "West":
    		imgnam = handW;
    		break;

    	case "South":
    		imgnam = handS;
    		break;

    	default:
    		imgnam = "null";
    }
            
        for (i = 0; i < 13; i++) {
                
               id = "img" + (i + 1);
               imgnam[i] = document.getElementById(id).title;
                console.log("saving: " + hand + "  id: " + id + " imgnam: " + imgnam + " Image: " + document.getElementById(id).title );
                
        }
    }



/******
function getNextImage() {

    var image;
    var id;
    var tname;
    console.log("in getNextImage - next: " + next);
    for (i = 0; i < 13; i++) {
        tname = imageName[next];
        image = 'Tiles/' + imageName[next] + '.jpg';
        next++;
        //            console.log(image);
        //            alert(next + ": " + image)
        id = "img" + (i + 1);
        document.getElementById(id).src = image;
        document.getElementById(id).title = tname;
    }

}
******/

function getName(s) {
    alert(s);

}

function getNewHand() {
    shuffle();
    document.getElementById("img14").src = "Tiles/Blank.jpg";
    document.getElementById("imgDiscard").src = "Tiles/Blank.jpg";
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

}


function getNewTileW() {

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
    document.getElementById("imgW14").src = image;
    document.getElementById("imgW14").title = tname;
    //            document.getElementById("img14").title = tname;
    //           
    document.getElementById("imgDiscard").src = "Tiles/Blank.jpg";

}


function getNewTileE() {

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
    document.getElementById("imgE14").src = image;
    document.getElementById("imgE14").title = tname;
    //            document.getElementById("img14").title = tname;
    //           
    document.getElementById("imgDiscard").src = "Tiles/Blank.jpg";

}


function getNewTileN() {

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
    document.getElementById("imgN14").src = image;
    document.getElementById("imgN14").title = tname;
    //            document.getElementById("img14").title = tname;
    //           
    document.getElementById("imgDiscard").src = "Tiles/Blank.jpg";

}


function dragTile(dragEvent, ui) {
    //            dragEvent.preventDefault();
    //            $(".row").sortable("disable");
    //            var setID = "img" + newID;
    //            console.log(241 + " " + setID);
    console.log("ev " + dragEvent.target.id);
    dragImage = document.getElementById("img14").src;
    console.log("dragTile: " + dragImage);
    //            newID++;
    //            document.getElementById(setID).className = "column";          
    //            dragEvent.dataTransfer.setData("text/html", dragImage);
    //            newtile.removeChild(newtile.childNodes[0]);
    //            var div = document.createElement("div");
    //            div.id = "newtile";
    //            div.setAttribute("class", "drawtile");
    //            var img = document.createElement('img');
    //            img.src = "Tiles/Blank.jpg";
    //            document.getElementById('newtile').appendChild(img); 

    //           console.log("drag id: " + dragEvent.target.id);

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
    document.getElementById(id).src = document.getElementById("img14").src;
    var x = document.getElementById("img14").title;
    document.getElementById(id).title = x;
    document.getElementById("img14").src = "Tiles/Blank.jpg";
    document.getElementById("img14").title = "Blank";
    drawCount++;

    console.log("tile dropped: " + drawCount);
    //           var prevElem = document.getElementById(dropItems[0]);  //draw tile
    //           var dropID = $(dropEvent.target).attr("id");
    //           console.log("Drop ID: " + dropID);
    //           var oldImage = document.getElementById(dropID).src;

    //            console.log("Old image: " + oldImage);
    //            changeImage("imgDiscard", oldImage);
    //            el = document.getElementById(dropID);
    //            el.parentnode.removechild(el);
    //            el = document.getElementById("Images");
    //            el.appendChild(newElement);
    //            $(".column").droppable(false);
    //            $(".row").sortable("enable");
}

function unDo(){
	document.getElementById("img14").src = document.getElementById(dropID).src;
	document.getElementById(dropID).src = document.getElementById("imgDiscard").src;
	document.getElementById("imgDiscard").src = "Tiles/Blank.jpg";

}

function showChildren() {
    var c = document.getElementById("Images").children.length;
    for (i = 0; i < c; i++) {
        console.log(document.getElementById("Images").children[i]);
    }
    alert("children: " + c);
}

function changeImage(id, newImage) {
    if (id == null) {
        id = "img2";
    }
    if (newImage == null) {
        newImage = "Tiles/Joker.jpg";
    }

    document.getElementById(id).src = newImage;

}

function dropOnColumn(ev, ui) {

    var im = $(this).find("img");
    console.log("dropped " + im);
    //               document.getElementById("img14").src = "Tiles/Blank.jpg";


}

function dragEnd(ev) {
    console.log("drag end");
}

function replay() {
    next = reset;
    getNextImage();
    document.getElementById("img14").src = "Tiles/Blank.jpg";
    document.getElementById("imgDiscard").src = "Tiles/Blank.jpg";

}

function hide() {
    var x = document.getElementById("cards");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}

function keyEvent(e) {
    keyInput.push(e.keyCode);
    console.log(keyInput);
    if (keyInput.toString().indexOf(keySequence) >= 0) {
        // Do yo thing, gurl


        // empty the array containing the key sequence entered by the user
        keyInput = [];
    } else {
        console.log('no match');
    }


}

function tileCount() {
    	alert("Tiles used:  " + next);    
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
