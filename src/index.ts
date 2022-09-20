import express from 'express'
import routeScraping from './routes/scraping'
const app = express()
app.use(express.json())
const PORT = 3007

app.use('/api/scrap', routeScraping)

app.get('/test', (_req, res) => {
  res.status(200).send({
    msg: 'hello'
  })
})

app.listen(
  PORT,
  () => console.log(`It's alive on http://localhost:${PORT}`)
)
