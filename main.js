import { branch, rgbArray, rgbaArray, c, canvas } from "./branch.js";

let instancies = {};
let edges = []

let mouseX = 0;
let mouseY = 0;
let bufferZone = 10;
let isHovering = false;

window.addEventListener("mousemove", function(event){
    mouseX = event.x;
    mouseY = event.y;
    for(const i in instancies){
        let xDiff = Math.abs(instancies[i].currPos[0]-mouseX)
        let yDiff = Math.abs(instancies[i].currPos[1]-mouseY)
        // check if mouse is within bufferzone
        if(xDiff < bufferZone && yDiff < bufferZone){
            // check if was hovering in previous state
            // if true, then change nothing and break the loop
            if(isHovering){
                break;
            }
            isHovering = true;
            instancies[i].highlight();

            // getting the icon unicode
            var icon = instancies[i].icon;
            
            setTimeout(function() {
                var random = Math.floor(Math.random()*rgbArray.length);
                c.font = "28px FontAwesome";
                c.fillStyle = rgbArray[random];        
                
                if(instancies[i].icon != null){
                c.fillText(icon, instancies[i].currPos[0], instancies[i].currPos[1]-25);

                }
              }, 0); //0 is no timeout when hovering

            break;
        }else{
            instancies[i].resetDefaults();
            isHovering = false;
        }
    }
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawCanvas();
})

class Movable{
    static numOfInstances = 0;
    static allMovables = []
    static normalLineWidth = 1;
    static highlightedLineWidth = 3;

    constructor(x=0, y=0){
        Movable.numOfInstances++;
        this.id = this.getId();
        this.home = [x, y];
        this.currPos = [x, y];
        this.dx = 1;
        this.dy = 1;
        this.lineWidth = Movable.normalLineWidth;
    }

    highlight(){

    }

    resetDefaults(){

    }

    getId(){
        return Movable.numOfInstances;
    }

    mouseIsOver(){
        let distance = Math.sqrt(Math.pow(this.currPos[0]-mouseX,2) + Math.pow(this.currPos[1]-mouseY,2));

        if(distance < 10){
            return true;
        }
        else{
            
        }
    }
}

class Node extends Movable{
    constructor(n = {}){
        super(n["pos"]["x"], n["pos"]["y"])
        this.name = n["label"];
        this.label = n["label"];
        this.icon = n["icon"];
        this.w = c.measureText(this.name).width;
        this.h = c.measureText(this.name).height;
        this.fixed = n["fixed"];
        this.colorKey = Math.floor(Math.random()*rgbaArray.length)
        this.color = (this.fixed)?  rgbArray[this.colorKey] : rgbaArray[this.colorKey];
        this.columns = n["columns"];
        this.inboundEdges = [];
    }

    drawIcon(){
        if(this.icon != null){
        c.font = "28px FontAwesome";
        c.fillStyle = "black";
        if(this.icon != null){
            c.fillText(this.icon, this.currPos[0], this.currPos[1]-25);
        }
    }
    }

    drawCircle(){
        c.beginPath();
        c.arc(this.currPos[0], this.currPos[1], 30, 0, Math.PI * 2, false);
        c.strokeStyle = this.color;
        c.lineWidth = this.lineWidth;
        c.stroke();
    }

    drawText(){
        c.font = "12px Comic Sans MS";
        c.beginPath();
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.fillStyle = "black";
        c.fillText(this.label, this.currPos[0], this.currPos[1], this.w);
    }

    highlight(){
        // highlight self
        this.color = rgbArray[this.colorKey];
        this.lineWidth = Node.highlightedLineWidth;
        // highlight end1 node
        for(var i=0; i<this.inboundEdges.length; i++){
            for(var e=0; e<edges.length; e++){
                if(edges[e].id == this.inboundEdges[i]){
                    edges[e].highlight();
                    break;
                }
            }
        }
    }

    resetDefaults(){
        // reset self
        this.color = (this.fixed)?  rgbArray[this.colorKey] : rgbaArray[this.colorKey];
        this.lineWidth = Node.normalLineWidth;
        // reset end1 node
        for(var i=0; i<this.inboundEdges.length; i++){
            for(var e=0; e<edges.length; e++){
                if(edges[e].id == this.inboundEdges[i]){
                    edges[e].resetDefaults();
                   break;
                }
            }
        }
    }
}

class Edge extends Movable{
    constructor(end1, end2){
        super();
        this.end1X = end1.currPos[0];
        this.end1Y = end1.currPos[1];
        this.end2X = end2.currPos[0];
        this.end2Y = end2.currPos[1];
        this.colorKey = end1.colorKey;
        this.color = rgbaArray[this.colorKey];
        this.end1Label = end1.label;
    }

    drawEdge(){
        c.beginPath();
        c.lineWidth = this.lineWidth;
        c.strokeStyle = this.color;
        c.moveTo(this.end1X, this.end1Y);
        c.lineTo(this.end2X, this.end2Y);
        c.stroke();
    }

    highlight(){
        // highlight self
        this.color = rgbArray[this.colorKey];
        this.lineWidth = Edge.highlightedLineWidth;
        // highlight end1 node
        instancies[this.end1Label].highlight();
    }

    resetDefaults(){
        // reset self
        this.color = rgbaArray[this.colorKey];
        this.lineWidth = Edge.normalLineWidth;
        // reset end1 node
        instancies[this.end1Label].resetDefaults();
    }
}

// init
for(const n in branch.nodes){
    const i = new Node(branch.nodes[n]);
    instancies[i.label] = i;
}

for(const e in branch.edges){
    for(const i in branch.edges[e]){
        let end1 = instancies[e];
        let end2 = instancies[i];
        const edge = new Edge(end1, end2);
        edges.push(edge);
        instancies[i].inboundEdges.push(edge.id);
    }
    
}

// main loop
function drawCanvas(){
    for(var i=0; i<edges.length; i++){
        edges[i].drawEdge();
    }

    for(const n in instancies){
        //instancies[n].drawCircle();
        instancies[n].drawIcon();
        instancies[n].drawText();
    }
}

drawCanvas();
