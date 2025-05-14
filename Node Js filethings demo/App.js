/*const amount =12; 

if(amount<10)
{
  console.log("smallnumber");

}
else{
    console.log("bigger number");
}

console.log(`hey its my first node app`);*/
/*

const names = require("./names");
const sayHi = require("./utils");
const data = require("./alt");
//console.log(data)

sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);
*/
/*
const { log } = require("console");
const os =require("os");
const user = os.userInfo();
console.log(user);



console.log(`The Sysytem Update Time Is ${os.uptime()}seconds`);


const currentOS = {

        name:os.type(),
        release: os.release(),
        totalMem : os.totalmem(),
        freeMem : os.freemem(),

}

console.log(currentOS);
*/

/*
const path = require("path")

console.log(path.sep)

filepath = path.join('/Dir/','Subdir','c.txt');
console.log(filepath);


const base = path.basename(filepath)
    console.log(base)

    const absolute = path.resolve(__dirname,"c.txt")
    console.log(absolute)*/

    /*

    const path = require("path")

console.log(path.sep)

const a = path.join('a.txt', 'utf8')
const b = path.join('b.txt', "utf8")

const {readFileSync, writeFileSync} = require("fs")
const { log } = require("console")

const first = readFileSync(a)
const second = readFileSync(b)

console.log(a);
console.log(b);

writeFileSync("/Dir/c",`Check this out: ${a.txt}${b.txt}`)*/

/*
const http = require("http");

const server = http.createServer((req,res)=>{
  if(req.url ==="/"){

    res.end("homepage");
  }
  if(req.url ==="/about");
{

  res.end("about");
}
  res.write("welcome VIIthaG")
  res.end();

no
})


server.listen(5000)
*/
/*
const http = require("http");

const server = http.createServer((req,res)=>{
if(req.url === "/")
  {res.end("home page");}


if(req.url ==="/about")
  {res.end("about page");
res.end("error page")
    //blocking code
    for(let i =0; i<1000; i++){
      for(let j=0; j<1000 ; j++){
        console.log(`${i} ${j}`)
        
      }
    }
  }
})

server.listen(5000, ()=>{console.log("listening to port 5000");});*/
/*
const {readFile} = require("fs");
const{writeFile} = require("fs");
const util  = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
*/

/*  const getText = (path)=>{

    return new Promise((resolve,reject)=>{readFile(path,"utf8",(err,data)=>{if(err){

      reject(err)
    }else{

      resolve(data)

    }})})

  }
*/
/*

const start =  async() => {


  try{

    const first = await readFilePromise("./Dir/Subdir/a.txt", "utf8")
    const second = await writeFilePromise("./Dir/Subdir/b.txt","utf8")

    await writeFilePromise("./Dir/Subdir/c.txt",`${first} ${second}`)
    console.log(`${first} ${second}`)



  }
  catch(error){console.error(error);}

}

start()*/




const EventEmitter = require("events");
const http = require("http")
const readFileSync = require("fs");
const {createReadStream}= require("fs");





/*
const customEmitter = new EventEmitter()

customEmitter.on("nice",()=>{console.log("thing");})
customEmitter.emit("nice");*/

/*
const customEmitter = new EventEmitter();
customEmitter.on("send",(cust_id,title)=>{console.log(`${cust_id} ${title}`)});

customEmitter.emit("send",19,"VIIthaG");

*/


/*
const server = http.createServer()

server.on("request",(req,res)=>{res.end("welcome")})

server.listen(5000)*/

/*for(let i=0 ; i<10000 ; i++)
{
  writeFileSync("./",`hello world ${i}\n`,{flag : "a"});

}*/

/*
const{createReadStream} = require("fs");
const { getDefaultHighWaterMark } = require("stream");

const stream = createReadStream("./",{HighWaterMark : 90000},"utf8");

stream.on('data', (result) =>{console.log(result);})
stream.on('error',()=>{console.err(err)})
*/


const server = http.createServer((req,res)=>{const big = createReadStream("./","utf8")

  big.on("request",()=>{big.pipe(res)}
)
big.on("error",(err)=>{res(err)})

}).listen(5000);
