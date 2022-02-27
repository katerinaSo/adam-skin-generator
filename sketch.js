let cnv;

let eyesImgs=[]
let skinImgs=[]
let eyepick,skinpick;
let character = "pokamon";
let poka;
let saveBtn;
let downloadAll
let num=1
let hash,hashDisplay
function preload() {
  for (let i = 1; i < 14; i++) {
    skinImgs.push(loadImage("skin/skin" + i + ".png"));
  }
  for (let i = 1; i < 13; i++) {
    eyesImgs.push(loadImage("eyes/eyes" + i + ".png"));
  }

 
	
}

function setup() {
  cnv = createCanvas(640, 640);
  imageMode(CENTER);
  cnv.parent("#cnv");
  btn = select("#gen");
  hashDisplay=select("#hashCode")
 
  eyepick = random(eyesImgs)
  skinpick=random(skinImgs)
  poka = select("#new");
  poka.mouseClicked(generatePic);
  saveBtn = select("#saveBtn");
  saveBtn.mouseClicked(savePic);
	downloadAll=select("#downBtn")
	downloadAll.mouseClicked(allpossible)
}

function draw() {
  clear();
  imageMode(CENTER) 

  image(skinpick, width / 2, height/2); 
  image(eyepick,width/2,height/2)
  
}

function generatePic() {
 	 
  eyepick= random(eyesImgs)
  skinpick = random(skinImgs)	
  hash=str(sha256(character+Date.now()))
  hashDisplay.html(hash)	
}


function savePic() {
  saveCanvas(cnv,hash, "png");
}

function allpossible(){
	
	for(let i=0;i<skinImgs.length;i++){
		for(let j=0;j<eyesImgs.length;j++){			
				image(skinImgs[i],width/2,height/2)
				image(eyesImgs[j],width/2,height/2)
				hash=str(sha256(character+Date.now()))
				saveCanvas('skin'+num+ ".png");
				num+=1
			
		}
	}
}