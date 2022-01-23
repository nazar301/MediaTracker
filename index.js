
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const expressEjsLayout = require('express-ejs-layouts')
// const puppeteer = require('puppeteer')


const moviesController = require('./controllers/movie')
const showsController = require('./controllers/shows')
const musicController = require('./controllers/music')
const { response } = require('express')
const { status } = require('express/lib/response')
// const PORT = 3000
app.set('port', process.env.PORT || 3000)

app.use(express.static('public'))
app.use(methodOverride('_method'));

const routeHit = (req,res,next) =>{
    console.log("new route");
    next()
}
app.use(routeHit)

app.use(express.urlencoded({extended:false}));

app.use(expressEjsLayout)
app.set('view engine', 'ejs')

app.use('/movies', moviesController)
app.use('/shows', showsController)
app.use('/music', musicController)


// pupeteer function to search and retrieve image 

// function start() {
//     autoSearch();
// }


// async function autoSearch() {

 
//     // change to true so it does not open browser, to run in background
//     const browser = await puppeteer.launch({headless: false});
//     const page = await browser.newPage();
//     await page.setViewport({ width: 900, height: 800})
//     const response = await page.goto('https://www.google.com/imghp?hl=en');
// // a way to call input from new post  
// // console.log(page)

//     await page.type('.gLFyf.gsfi', `movie/new`);
//     await page.click('button.Tg7LZd');
//     const it = await page.waitForSelector('div.islrc');
    
//     const newDiv = await page.evaluateHandle(()=>document.querySelector('div.islrc').firstElementChild);
    
//     newDiv.click()
//     await page.waitForSelector('.ag0Tdd');
//     // await page.click('.ag0Tdd');
    

//     const chain = await response.request().redirectChain()
//     // console.log(newDiv.firstChild())
    
// //     testing await thumbnail to see if it retreives img src

//         const newSrc = await page.$eval("div.islrc.firstElementChild .item.active img", Image => Image.src);
// console.log(newSrc)    
//  await page.catch()
// await browser.close
// }

// start()

// need a return of first image on the page





app.listen(app.get('port'), ()=> console.log(`listening on ${app.get('port')}`))