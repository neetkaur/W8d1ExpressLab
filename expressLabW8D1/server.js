//brining in the modules
const express = require('express')
const app = express()
const fs = require('fs')
const routes = ['Route1','Route2','Route3','Route4','Route5','Route6','Route7','Route8','Route9','Route10']

//create app engine

app.engine('neet', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      return callback(err)
    }
    const rendered = content.toString()
     .replace('#title#', `<title>${options.title}</title>`)
     .replace('#message1#', `<h1>  ${options.message1}  </h1>`)
     .replace('#message2#', `<h2>  ${options.message2}  </h2>`)
     .replace('#content#', `<p> ${options.content}  </p>`)
     .replace('#ahref#', `<a href="${options.ahref}">${options.ahref}</a>`)
    return callback(null, rendered)
  })
})

//set views root folder and set which engine will you use
//place 2 types of templates inside views folder
app.set('views','./views')
app.set('view engine','neet')

//define multiple routes with the 2 templates
//#1
app.get('/route1',(req,res)=>{
  res.render('template1', { title: 'Route 1',
  message1: 'This is Route1',
  content: 'Route 1 is using Template 1 for rendering',
  ahref: routes[1]
})
})

//#2
app.get('/route2',(req,res)=>{
  res.render('template1', { title: 'Route 2',
message1: 'This is Route2',
content: 'Route 2 is using Template 1 for rendering',
ahref: routes[2]
})
})

//#3
app.get('/route3',(req,res)=>{
  res.render('template1', { title: 'Route 3',
message1: 'This is Route3',
content: 'Route 3 is using Template 1 for rendering',
ahref: routes[3]})
})

//#4
app.get('/route4',(req,res)=>{
  res.render('template1', { title: 'Route 4',
message1: 'This is Route4',
content: 'Route 4 is using Template 1 for rendering',
ahref: routes[4]})
})

//#5
app.get('/route5',(req,res)=>{
  res.render('template1', { title: 'Route 5',
message1: 'This is Route5',
content: 'Route 5 is using Template 1 for rendering',
ahref: routes[5]})
})

//#6
app.get('/route6',(req,res)=>{
  res.render('template2', { title: 'Route 6',
message1: 'This is Route6',
message2: 'This is an additional message to test change in template',
content: 'Route 6 is using Template 2 for rendering',
ahref: routes[6]})
})

//#7
app.get('/route7',(req,res)=>{
  res.render('template2', { title: 'Route 7',
message1: 'This is Route7',
message2: 'This is an additional message to test change in template',
content: 'Route 7 is using Template 2 for rendering',
ahref: routes[7]})
})
//#8
app.get('/route8',(req,res)=>{
  res.render('template2', { title: 'Route 8',
message1: 'This is Route8',
message2: 'This is an additional message to test change in template',
content: 'Route 8 is using Template 2 for rendering',
ahref: routes[8]})
})

//#9
app.get('/route9',(req,res)=>{
  res.render('template2', { title: 'Route 9',
message1: 'This is Route9',
message2: 'This is an additional message to test change in template',
content: 'Route 9 is using Template 2 for rendering',
ahref: routes[9]})
})

//#10
app.get('/route10',(req,res)=>{
  res.render('template2', { title: 'Route 10',
message1: 'This is Route10',
message2: 'This is an additional message to test change in template',
content: 'Route 10 is using Template 2 for rendering',
ahref: routes[0]})
})

//define the listening port
app.listen(3000, () => console.log('hello i am listening on port 3000'))
