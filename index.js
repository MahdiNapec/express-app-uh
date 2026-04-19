const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h3>docker container is running</h3>');
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})