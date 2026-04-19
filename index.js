const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h3>docker container is running</h3><br><h4>try to access the server from 8080</h4><br> <h4>another push</h4>');
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})