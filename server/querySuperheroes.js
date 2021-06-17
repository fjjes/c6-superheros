const sqlite3 = require('sqlite3')

console.log('Connected to my SQL databse')
let db= new sqlite3.Database('superheroes.sqlite')

db.all('select * from superhero', (err, rows)=>{
    if(err){
        console.error(err)
    }else{
        console.log('rows:', rows)
    }
})