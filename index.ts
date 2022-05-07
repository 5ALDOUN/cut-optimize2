// Import stylesheets
import './style.css';
import { CutOptimizer, Shape } from "cut-optimizer";
 
//Shapes array 
let shapes: Shape [] =[
  new Shape(10, 20),
  new Shape(20, 90),
  new Shape(20, 90),
  new Shape(30, 20),
  new Shape(30, 20),
  new Shape(30, 20),
  new Shape(30, 20),
  new Shape(40, 30),
  new Shape(30, 60),
  new Shape(30, 30),
  new Shape(30, 30)
 ];
 

let cut_opt: CutOptimizer = new CutOptimizer(110,100);
let optimizedsShapes: Shape[] = cut_opt.optimize(shapes);


//Canvasand Context get
let canvas = <HTMLCanvasElement> document.getElementById('canvas');
let contex = <CanvasRenderingContext2D>canvas.getContext('2d');

// Draw function!

function drawShapes(shapes: Shape){
console.log(shapes)
contex.strokeStyle ='black';
  shapes.items.forEach((shape: Shape)=>{
  contex.fillStyle='#'+(Math.random()*0xFFFFFF<<0).toString(16);
   contex.fillRect(shape.x, shape.y, shape.width, shape.height)
  });


}

drawShapes(optimizedsShapes);
console.log(cut_opt);


const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Cut Optimizer Canvas Demo Typescript</h1>`;