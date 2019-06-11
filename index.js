const puppeteer = require('puppeteer')
const express = require('express')
const app = express()

const main = async () => {
  const browser = await puppeteer.launch({
    headless: true
  });
  const page = await browser.newPage();
  await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36")
  await page.goto('https://web.whatsapp.com')
  await page.screenshot({
    path: 'screenshot.png'
  });

  await browser.close()
}

app.listen(3000, () => {
  console.log("http://localhost:3000")
})

app.get("/", (req, res) => {
  res.send("Hola mundo")
})