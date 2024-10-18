
const express = require('express')
const path = require('path')
var hbs = require('hbs');
const { error } = require('console');
const app = express()
const port = process.env.PORT || 3000;



// public static 

const template_path = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials")



// it use for template engine
app.set('view engine','hbs');
// convert view folder into templetes and add the view content
app.set('views', template_path)
hbs.registerPartials(partials_path)



// middleware
// it use static page and it work in syncronous way that why it run first 
app.use(express.static(path.join(__dirname,"../public")))


// routing
//when you use templet engine like handlebars that time you write render 
app.get('/',(req,res)=>{
    res.render('index')   
})
app.get('/about',(req,res)=>{
    res.render('about')   
})
app.get('/weather',(req,res)=>{
    res.render('weather')   
})
app.get('*',(req,res)=>{
    res.render('404error',{
        errorMsg:'Oops! Page Not Found'
    });   
})

app.listen(port,()=>{
    console.log(`Express Weather app is listening on http://localhost:${port}`);
})