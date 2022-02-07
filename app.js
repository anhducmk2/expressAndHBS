const fs = require('fs')
const express = require('express')
const app = express()

app.set('view engine','hbs')

app.get('/',(req,res)=>{
    const content = fs.readFileSync('mydata.txt', 'utf-8')
    const myarray = content.split("\n")
    const name = myarray[0]
    const lop = myarray[1]
    res.render('home', {name:name,lop:lop})
})

app.get('/s', (req,res)=>{
    let ds = []
    ds.push({name:'Linh', age : 21})
    ds.push({name:'Minh', age : 22})
    ds.push({name:'Hoang', age : 20})
    res.render('student', {danhsach:ds})
})

app.listen(5000)
console.log(" Server is running ")