const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("<h3> the server is running on port 8080");
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})