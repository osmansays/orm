const express=require("express")
const session=require("express-session")
const parser=require("body-parser")
const route=require("route")
const path=require("path")
const sqlite3=require("sqlite3").verbose()
const util = require('util')
var os = require('os')
const hbs = require('hbs')
const app= express()
const port=80
app.use(parser.json());
app.set('views', __dirname + '/view')
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs')
var servername=os.hostname()
var msg




var db = new sqlite3.Database("Animals.sqlite3", err => {
  if (err) return console.error(err.message);
  else 
    {
      console.log("Connected to database Animals.sqlite3");
      db.run("create table if not exists Animals (Name nvarchar(50) unique ,FavColor nvarchar(10) ,AnimalType nvarchar(25)) ")

    }
});

app.use(parser.urlencoded({
    extended: true
}));


app.get("/",(req,res)=>{
   res.render('Index.html', { servername: servername })

})


app.post("/",(req,res)=>{
    
    var name=req.body.Name
    var favcolor=req.body.FavColor
    var animaltype=req.body.AnimalType
    
    var sql = util.format("insert into Animals(Name,FavColor,AnimalType) values ('%s','%s','%s') ",name,favcolor,animaltype)
    db.run(sql, (err)=>{
        if (err){
            msg=err.message
             
        }
        else
        {
            msg="Record has been saved!!"
        }
    })
   
    res.send(msg)

    
})
app.listen(port,()=>{
    console.log("Running!")
})
