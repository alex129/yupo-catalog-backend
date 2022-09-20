import puppeteer from 'puppeteer'
export const scrapImgsFromUrl = async (): Promise<Array<string | null>> => {
  try {
    console.log('initializing puppeteer')
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    console.log('go to page')

    await page.goto(
      'https://repcourier.x.yupoo.com/albums/109643032?uid=1&isSubCate=false&referrercate=4001367'
    )

    console.log('before goto page')
    const issueSrcs = await page.evaluate(() => {
      const srcs = Array.from(
        document.querySelectorAll('.comicpic')
      ).map((image) => image.getAttribute('src'))
      return srcs
    })

    console.log('images', issueSrcs)
    return await new Promise(resolve => resolve(issueSrcs))
  } catch (error) {
    console.log(error)
    return await new Promise((_resolve, reject) => reject(error))
  }
}
