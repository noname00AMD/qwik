#!/usr/bin/env node
const { createServer } = require('http')
const { parse } = require('url')
var finalhandler = require('finalhandler')
const fs = require("fs")
const next = require('next')
var morgan = require('morgan')
var path = require('path')

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
// const dev = false;
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    var log = morgan('combined', { stream: accessLogStream })
    log(req, res, function (err) {
      if (err) return done(err)
      const parsedUrl = parse(req.url, true)
      return handle(req, res, parsedUrl)
    })
  }).listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})