const express = require("express");      
const nunjucks = require("nunjucks");           
const PORT = process.env.PORT ||  5000;          
       
const app = express();     
const data = require("./data");   
  
app.use(express.static("../views/public")); 
   
app.set("view engine", "njk");    
    
nunjucks.configure("../views",{      
  express: app,
  autoescape:false   
}); 
 
app.get("/", (req,res) =>{
  return res.render("inicio",{data:data})
})

app.get('/sobre', (req,res) =>{
  return res.render('sobre')  
})

app.get('/donuts', (req,res) =>{
  return res.render('donuts',{data:data})
})

app.get('/donut', (req,res) =>{
  return res.render('donut')
})

app.listen(PORT, () =>{
  console.log("server running")
})