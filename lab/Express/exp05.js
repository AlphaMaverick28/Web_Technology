const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  const date = new Date();
    res.send('Hello World! current date and time'+date )

})

app.get('/hello',(req,res)=>{
    res.send('hello')

    // res.json{
    //     name : onmessage;
    // }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
