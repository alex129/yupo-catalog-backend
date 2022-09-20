import express from 'express'
import { scrapImgsFromUrl } from '../services/scraping'

const app = express()
app.use(express.json())

const router = express.Router()

router.post('/', (_req, res) => {
  // const { url } = req.body
  void scrapImgsFromUrl().then(response => {
    console.log('response', response)
    res.send(response.join('----'))
  }).catch(error => {
    console.log('response error', error)
    res.send(error)
  })
})

export default router
