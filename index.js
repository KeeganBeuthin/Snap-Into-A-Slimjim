const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
console.log('I am listening')
res.send('Gamer Time')
}
)

app.listen(3000, () => {
    console.log(`Big Boy has entered the zone`)
}
)