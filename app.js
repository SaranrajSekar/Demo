const path = require('path')
const { add, multiply } = require('./math.js')
const fsPromise = require('fs').promises
//console.log("the path is",path);
// console.log("Addition of Two Numbers: "+ add(2,3));
// console.log("Multiplication of two number: "+multiply(10, 20));
// const os = require('os')
// console.log(os.type());
// console.log(os.version()) 
// console.log(os.homedir());

// console.log('dir name!',__dirname);
// console.log('file name',__filename);
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));

// fs.readFile(path.join(__dirname, "Demo", "sample.txt"), 'utf-8', (err, data) =>{
//     if(err) throw err;
//     console.log(data);
// })

// fs.writeFile(path.join(__dirname, "Demo", "reply.txt"), "Hi This is Replace Content", (err) =>{
//     if(err) throw err;
//     console.log("Write Complete");
// })

// console.log("Demo Message");
// process.on('uncaughtException', err =>{
//     console.log("There is Uncaught error" + err);
//     process.exit(1)
// })

// fs.appendFile(path.join(__dirname, "Demo", "test.html"),"<h1>Hello World</h1>", (err) =>{
//     if(err) throw err;
//     console.log('Append Complete');
// })

// fs.readFile(path.join(__dirname, 'Demo', "test.html"), 'utf-8', (err, data) =>{
//     if(err) throw err;
//     console.log(data);
// })

// console.log("this is sample path name",path.join(__dirname, "Demo", "newDemo.txt"));

// fs.writeFile(path.join(__dirname, "Demo", "demo.txt"), "This is Write Demo Content", (err) =>{
//     if(err) throw err;
//     console.log("Demo Write Complete");

//     fs.appendFile(path.join(__dirname, "Demo", "demo.txt"), '\n\n\nYes it is Demo Append!', function(err){
//         if(err) throw err;
//         console.log("Append Complete");

//         fs.rename(path.join(__dirname, "Demo", "newDemo.txt"), path.join(__dirname, "Demo", 'newDemos.txt'), (err)=>{
//             if(err) throw err;
//             console.log("Rename Complete!!!");
//         })
//     })
// })
 fsPromise.writeFile(path.join(__dirname, "Demo", "sample.txt"), "This is Smaple Content", function(err){
    if(err) throw err;
    console.log("Write Success!");
 })

const promiseFunction = async () => {
    try {
        const data = await fsPromise.readFile(path.join(__dirname, 'Demo', 'newDemos.txt'), 'utf-8')
        console.log(data);

        await fsPromise.unlink(path.join(__dirname, "Demo", "sample.txt"), (err) =>{
            if(err) throw err;
            console.log("Unlike is Success!");
        })
    } catch (err) {
        console.log("Something Went Wrong! ", err);
    }
}
setTimeout(promiseFunction, 5000)
console.log("After Reading File!");