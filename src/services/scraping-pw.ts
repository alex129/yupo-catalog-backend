import { webkit } from 'playwright'

export const scrapImgsFromUrl = async (url: string): Promise<Array<string | null>> => {
  try {
    console.log('playwright')
    const browser = await webkit.launch()
    const page = await browser.newPage()
    console.log('go to page')

    await page.goto(url)

    console.log('before goto page')
    const issueSrcs = await page.evaluate(() => {
      const srcs = Array.from(
        document.querySelectorAll('img')
      ).map((image) => image.getAttribute('src'))
      return srcs
    })

    return await Promise.resolve(issueSrcs)
  } catch (error) {
    console.log(error)
    return await Promise.reject(error)
  }
}
