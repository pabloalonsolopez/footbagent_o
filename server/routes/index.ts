import { Router, Request, Response, NextFunction } from "express"

const IndexRouter: Router = Router()

IndexRouter.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.render('index.html')
})

export { IndexRouter }