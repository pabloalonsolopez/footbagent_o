import * as express from "express"
import * as path from "path"
import * as ejs from "ejs"
import * as favicon from "serve-favicon"
import * as bodyparser from "body-parser"
import * as mongoose from "mongoose"

import { Config } from "./config"

import "./models/resource"

import { ResourcesRouter } from "./routes/resources"
import { IndexRouter } from "./routes/index"

mongoose.connect(Config.DATABASE_URL)

const app: express.Application = express()
app.disable("x-powered-by")

app.set('views', path.join(__dirname, 'public'))
app.set('view engine', 'ejs')
app.engine('html', ejs.renderFile)

app.use(favicon(path.join(__dirname, "public", "favicon.ico")))

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.use("/api/resources", ResourcesRouter)
app.use('/*', IndexRouter)

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || 500)
    res.json({
      error: err,
      message: err.message
    })
  })
}

// production error handler
// no stacktrace leaked to user
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
  res.status(err.status || 500)
  res.json({
    error: {},
    message: err.message
  })
})

export { app }