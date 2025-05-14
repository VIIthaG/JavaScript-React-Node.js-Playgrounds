/*let username;

document.getElementById("button").onclick = function() {
  username = document.getElementById("box").value;
  document.getElementById("header").textContent = `Hello ${username}`;
}
*/

/*
let rad;
const pi= 3.14;

document.getElementById("button").onclick = function(){
 rad = document.getElementById("box").value;
 rad=Number(rad);
 const area = pi * rad * rad ;
 document.getElementById("area").textContent = `${area}`;
  }*/
/*

 const min = 83;
 const max= 394;
 const disp = document.getElementById("area");
 let rng = Math.floor(Math.random() *max)-min;
 disp.textContent = `${rng}`;


*/

/*

let age = 21;
let message= age >= 18 ? "you a real one" : "You are a minor";

console.log(message);
document.getElementById("msg").textContent=`${message}`;*/

/*
let day =1;

switch(day){
   
    case 1 :
      console.log("Monday");
        break;
    case 2: 
    console.log("Tuesday");   
        break;
    default : 
    console.log("ball");
    break;

*/

/*
let username = 'VIIthaG';
startswith endswith replaceall('what u want ','xyz') padstart('req length', 'xyz') slice (start ,end) indexof(a thing)
console.log(username.length);
*/

/*

  let username =  window.prompt('wsg G');
  username= username.trim();
  let letter = username.charAt(0);
  letter = letter.toUpperCase();


  let extra= username.slice(1);
  extra=extra.toLowerCase();  

  username =letter+ username;
  show= document.getElementById("msg").textContent=`${username}`;*/

/*

const box= document.getElementById("box");
const c2f = document.getElementById('c2f');
const f2c = document.getElementById("f2c");
const result = document.getElementById("result");
let temp;

function convert(){

  if(c2f.checked){
      temp = Number(textBox.value);
      temp = 9/5 * temp + 32;
      result.textContent = temp ;
        }
  else if(f2c.checked){

    temp = Number(textBox.value);
    temp = (temp -32) * 5/9;
    result.textContent = temp ;




  }
  else{
    result.textContent="";
  }


}*/

/*

let numbers = [1,2,3,4,5];
let max = Math.max(...numbers);
let min = Math.min(...numbers);


let uname = "VG";
let letters = [...uname].join("-");


let fruits = ["apple", "orange", "banana"];
let newFruits = [...fruits];

console.log(newFruits);*/

/*

function fridge(...foods){
console.log(foods);


}


function retrieve(...foods){

return foods;

}
 
const f1= "Pizza";
  const f2= "Choco";
    const f3= "Fries";
      const f4= "Burg";

fridge(f1,f2,f3,f4);
const a = retrieve(f1,f3,f2,f4);

console.log(a);


let numbers = [1,2,3,4,5];

function sum(...numbers){

 let sum= 0;
 for(let number of numbers){
    result+= number ;

 }
 return result;

}

const total = sum(...numbers);
console.log(total);
*/

/*
function roll(){

   const numdice= document.getElementById().ariaValueMax;
   const result= document.getElementById().ariaValueMax;
   const diceimages= document.getElementById().ariaValueMax;
   const values =[] ;
   const images= [];



   for(let i=0;  i< numdice; i++){
    const val = Math.floor(math.random() * 6 )+1;
    values.push(val);
    images.push(`<img src="dice_images/${val}.png">`)

    
   }
   result.textContent= `dice: ${values.join(",")}`;
   diceimages.innerHTML = images.join("");
}
*/

/*
function generatePassword(length , includeLC,includeUC,  includeNB, includeSB){
  NB="1234567890";
  LC="abcdefghijklmnopqrstuvwxyz";
  UC='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  SB="!@#$%^&*()";


  let allowedChars="";
  let pwd = "";

  allowedChars += includeLC ? LC: "";  
  allowedChars += includeNB? NB : "";
  allowedChars += includeUC? UC : "";
  allowedChars += includeSB? SB : "";


  if(pwd.length<= 0){
    return `(pwd length must be 1 chr at least)`;
  }

  if(allowedChars.length===0){
    return `(at least one set of characters needs to be selected)`;
  }

  for (let i=0; i <length; i++){
     
     const randex= Math.floor(Math.random()*allowedChars.length);
     pwd = pwd +allowedChars[randex];


  }
  return pwd;
}




const pLength =12;
const includeUC = true;
const includeLC = false;
const includeSB = true;
const includeNB = false;


const password = generatePassword(pLength , includeLC,includeUC,  includeNB, includeSB)


console.log(`generated password ${password}`);

*/

/*

function sum(callback,x,y){

    let sum= x+y;
     callback(sum);

}

function disp(){
  console.log(`ur stuff ${sum}`);
}

function display_page(result){

    document.getElementById("").textContent = result;
}

sum(disp,19,10);*/

/*
let numbers = [1,2,3,4,5];

numbers.forEach(display);
numbers.forEach(double);
numbers.forEach(triple);

function square(element, index  , array){

  array[index]= math.pow(element,2);

}

function double(element, index , array){

array[index]= element*2;

}

function triple(element, index , array){

  array[index]= element*3;
  
  }


function display(element){
  console.log(element);
  
}


let friuts= ["orange","banana","kiwi","apple"];

fruits.forEach(display);
fruits.forEach(UC);


function display(element){
  console.log(element);
  
}


function UC(element, index, array){
    array[index] = element.toUpperCase();

}
*/

/*
const dates = ["20-10-2004","20-3-5850","09-5-4566"];
let splitted = dates.map(format);
console.log(splitted);


function format(element){

  const bit = element.split("-");
  return `${bit[0]}  ${bit[1]} ${bit[2]}`;

}*/

/*
let numbers =[1,2,3,4,5,6,7,8,9];
even_num= numbers.filter(iseven);
console.log(even_num);


function iseven(element){
 return element%2==0;

}*/
/*

const grades =[10,20,40,73,34,97,87];
const highest = grades.reduce(max);
console.log(highest);

function max(prev,element){
 
  return Math.max(prev,element);


}
*/

/*

const sup = function(){console.log(sup);}

setTimeout(function (){

  console.log(hello);

}, 3000);

setTimeout(sup, 1000);*/

/*
const numbers = [1,2,3,4,5,6,7,8,9];

const min = numbers.map((element,next)=> Math.min(element,next));
const max = numbers.map((element,next)=> Math.max(element,next));
const  total = numbers.reduce((element,next)=> element+next);*/

/*

const p1 ={
  age:12,
  name:"VIIthaG",
  location:"Ardi",income:0,
   bruh: () => {console.log(VIIthaG);}

}

const p2={age:12,
  name:"iuou",
  location:"Ardoihoi",income:0}


  console.log(p2.name);
  console.log(p2.age);
  console.log(p2.location);*/

/*

function Car(make,model,year,color){
this.year =year,
this.model = model,
this.color= color,
this.make=make
this.fun = ()=> {console.log(`life is fun isnt it ${this.model}`)};
 
}


const Batcaf = new Car("R1","yzf",2004,"liquid silver");
*/

/*

class VIIthaG{


    constructor(name, age, income){
      this.name=name;
      this.age=age;
      this.income=income;

    }
    
     display()
    {
      console.log(this.name);
      console.log(this.age);

    }
     amount(rate){
        return this.income + (income * rate);

     }



}

const perc =0.06;

const r1 = new VIIthaG("iudg2eid",10,1000);
r1.display();
r1.amount(perc);
*/

/*

class M{
    static PI = 3.14159;

    static getDiameter(rad){

          return  rad*2;

    }

    static getCirc(rad){


      return 2*this.PI*rad;
    }

}

console.log(M.PI);
console.log(M.getDiameter(10));
console.log(M.getCirc(10));




class Use{

    static Usercount = 0;

    constructor(username){
        this.username= username;
        Use.Usercount++;


    }


}

const a = new Use("nin");
const b = new Use("tin");
const c = new Use("pin");


console.log(a.username);*/

/*
const stuff = [1,2,3,4,5];

stuff[0]= stuff[-1];

 const [f,s,t,...rest] = stuff;
 console.log(f);
 console.log(s);
 console.log(rest);

 */

/*

const cards = ['A',1,2,66,76,"J",90,32,1,2,3,5,7];

//cards.sort(() =>Math.random()-0.5);
shuffle(cards);

console.log(shuffle);


function shuffle(array){

for(let i = array.length-1; i>0 ; i-- ){
 const random= Math.floor(Math.random()*i +1);
 [array[i],array[random]] =  [array[random],array[i]];
}
}*/

/*
function outer(){

   let count = 0;

    function inner(){
      count++;
      console.log(count);
      }
   
    function in2(){

      count --;
      console.log(count);


    }



    return{inner : inner, in2: in2};
    //inner();

}

const counter = outer();
setTimeout(counter.increment(),3000);
counter.in2();

*/
/*


function UpdateClock(){

 const time = new Date();
 const hrs =time.getHours();
 const min = time.getMinutes();
 const sec = time.getSeconds();
 const disp =`${hrs}:${min}:${sec}`;
document.getElementById("time").textContent()= disp;
}

setInterval(UpdateClock,1000);*/

/*

const display = document.getElementById('Display');
let timer = null;
let startime = 0;
let elapsedtime= 0;
let isrunning= 0;


function start(){
if(!isrunning){
startime = Date.now()-elapsedtime;
timer= setInterval(update,10);
isrunning= true;}
}

function stop(){
if(isrunning){
  clearInterval(timer);
  elapsedtime=Date.now()-startime;
  isrunning=false;

}


}


function reset(){


  clearInterval(timer);
  let startime = 0;
  let elapsedtime= 0;
  let isrunning= false;
  display.textContent="0:00:00:00";
  

}

function update(){

  const currenttime =Date.now();
  elapsedtime = currenttime - startime;

  let hours= Math.floor(elapsedtime/ (1000*60*60));
  let minutes = Math.floor(elapsedtime/(1000*60)%60);
  let seconds =Math.floor(elapsedtime,1000%60);
  let milli =  Math.floor(elapsedtime%1000/10);

  display.textContent=`${hours}:${minutes}:${seconds}:${milli}`;
 
  
}*/

/*
try{
const dividend =window.prompt("Enter a dividend");
const divisor =window.prompt("Enter a divisor");


if(divisor===0){

  throw new Error("YOU cant enter zero");
}

if(isNaN(dividend)|| isNaN(divisor))
{ throw new Error("values must be a number")}

const result = dividend/divisor;
console.log(result);}


catch(error){

  console.error(error);
}


finally(){


}*/
/*

const myBox = document.getElementById("MyBox");

function ChgCol(event){

event.target.style.color = "red"; 
event.target.textcontent="Owee";
}

myBox.addEventListener=("click",ChgCol);

*/

/*

const myBox = document.getElementById("MyBox");
const moveAmount = 10;
let x= 0;
let y = 0;

document.addEventListener("keydown",event=>{



  if(event.key.startsWith("Arrow")){

    event.preventDefault();
      switch(event.key){

          case "ArrowUp":
            y-=moveAmount;
            break;

          case "ArrowDown":
            y+=moveAmount;
            break;

          case "ArrowLeft":
            x-=moveAmount;

          case "ArrowRight":
            x+=moveAmount;
            break;

      }

      myBox.style.top =`${y}px`;
      myBox.style.left =`${x}px`;


  }



});
*/
/*

const MyButton = document.getElementById("MyBox");
const MyImg =document.getElementById("img");

MyButton.addEventListener("click", event=>{

  if(MyButton.style.textContent ==="Hide"){
  MyImg.style.display ="none";
  MyButton.textContent="Show";

}

else(MyButton.style.textContent ==="Show")
{
  MyImg.style.display ="block";
  MyButton.textContent="Hide";

}


});*/

/*

const imgs = document.querySelectorAll(".slides img");
let slidex = 0;

let intervalID =null;

//initializeSlider();
document.addEventListener("DOMContentLoaded",initializeSlider);

function initializeSlider(){

     if(imgs.length > 0){


      imgs[slidex].classList.add("displaySlide");
      intervalID = setInterval(nextSlide,3000);

     
     }


}

function showSlide(index){
  if(index>= imgs.length){

    slidex =0;

  }
  else if(index<0)
  {

   slidex= imgs.length-1;

  }

  imgs.forEach(img =>{
      img.classList.remove("displaySlide");


  });
  imgs[slidex].classList.add("displaySlide");

}

function prevSlide(){
  
slidex--;
showSlide(slidex);

}

function nextSlide(){
slidex++;
showSlide(slidex);
}
*/

/*

function n1(callback){

  setTimeout(()=> {
    console.log("Task1 completed");
    callback();
  },1000);

}

function n2(callback){

  setTimeout(()=> {
    console.log("Task2 completed");
    callback();
  },900);

}function n3(callback){

  setTimeout(()=> {
    console.log("Task3 completed");
    callback();
  },700);

}function n4(callback){

  setTimeout(()=> {
    console.log("Task4 completed");
    callback();
  },500);

}

n1(()=>{
  n2(()=>{
    n3(()=>{
      n4(()=> console.log("tasks complete"));
    })
  });
})
  */

/*function walk(callback){

    setTimeout(()=>{console.log("you have walked the mutt");callback();}, 10000);

}

function clean(callback){

  setTimeout(()=>{console.log("You Have Cleaned The Kitchen");callback();},4000)

}

function dispose(callback){

  setTimeout(()=>{console.log("You've Taken Out The Trash");callback();},1000)


}*/

//walk(()=>{clean(()=>{dispose(()=>{console.log("finished");})})})
/*


function walk(){

  return new Promise((resolve, reject)=>{  setTimeout(()=>{const dogwak= true;

    if(dogwak)
      {resolve("you have walked the mutt");}
    else{reject("Liar u aint did ish");}
    
    }, 10000);
});


}

function clean(){

  return new Promise((resolve, reject)=>{  setTimeout(()=>{resolve("you have cleaned up nice and tidy");}, 10000);

});

}


function take(){

  return new Promise((resolve,reject)=>{setTimeout(()=>{resolve("You have taken out the trash");},10)});
}

walk().then(value=> {console.log(value); return clean()}).then(value=> {console.log(value); return take()}).then(value=>{console.log(value); console.log("All stages finished");}).catch(error=> {console.error(error)});*/

//fetch("file.json").then(response => response.json()).then(values=> values.forEach(value=>console.log(value))).catch(error=>console.error(error));

//fetch().then(response =>{if(!response.ok){throw new Error("Pokemon not found")}else{return response.json();}}).then(values=> values.forEach(value=> console.log(value))).catch(error=> console.error(error));
/*
async function Poke(){
 

  try {

    const pokename = document.getElementById("pokename").value.toLowerCase();
  const link = await fetch();
  const d = await response.json();
  const pokemonsprt = data.sprites.front;
  const imgelement = document.getElementById("pokesprite");

  if(!link.ok){    throw new Error("Pokemon not found");
  }
  }
  catch(error){
    console.error(error);  }



}

*/
// const myBox = document.getElementById("myBox");
// let x =0
// let y =0

// const m=100

// document.addEventListener("keydown", event => {
//   if (event.key.startsWith("Arrow")) {
//     event.preventDefault();  // Prevent the page from scrolling

//     switch (event.key) {
//       case "ArrowUp":
//         y -= m;  // Move 100 pixels up
//         break;
//       case "ArrowDown":
//         y += m;  // Move 100 pixels down
//         break;
//       case "ArrowLeft":
//         x -= m;  // Move 100 pixels left
//         break;
//       case "ArrowRight":
//         x += m;  // Move 100 pixels right
//         break;
//     }

//     myBox.style.top = `${y}px`;
//     myBox.style.left = `${x}px`;
//   }
// });

// function revstring (str){

//   if(str==="")return "";
//   else return revstring(str.substr(1)+ str.charAt(0))
// }
