import express from 'express'
import { scrapImgsFromUrl } from '../services/scraping-pw'

const app = express()
app.use(express.json())

const router = express.Router()

router.post('/', (req, res) => {
  const { url } = req.body
  void scrapImgsFromUrl(url).then(response => {
    res.send(response)
  }).catch(error => {
    console.log('response error', error)
    res.send(error)
  })
})

export default router
