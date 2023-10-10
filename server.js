const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const bodyParser = require('body-parser')
// include controller name and path here
const affiliationController = require('./controllers/affiliations.js')
const villainController = require('./controllers/villains.js')
const heroController = require('./controllers/heros.js')


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/affiliations', affiliationController.getAllAffiliations)
app.get('/villains', villainController.getAllVillains)
app.get('/heros', heroController.getAllHeros)

app.get('/affiliations/:id', affiliationController.getOneAffiliation)
app.get('/villains/:id', villainController.getOneVillain)
app.get('/heros/:id', heroController.getOneHero)

app.post('/affiliations', affiliationController.createAffiliation)
app.post('/villains', villainController.createVillain)
app.post('/heros', heroController.createHero)

app.put('/affiliations/:id', affiliationController.updateAffiliation)
app.put('/villains/:id', villainController.updateVillain)
app.put('/heros/:id', heroController.updateHero)

app.delete('/affiliations/:id', affiliationController.deleteAffiliation)
app.delete('/villains/:id', villainController.deleteVillain)
app.delete('/heros/:id', heroController.deleteHero)

app.get('/', (req, res) => {
    res.send('This is root!!')
  })

  app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })  