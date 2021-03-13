const express = require('express')
const app = express()
const port=8080;

app.get('/abc', (req, res) => {
  res.send('Hello World!')
})

app.listen(port,()=>console.log(`Server is listening on port ${port}`));
app.get('/abc')