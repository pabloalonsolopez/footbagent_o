import { Router, Request, Response, NextFunction } from 'express'
import { model } from 'mongoose'

const ResourcesRouter: Router = Router()

const Resource = model('Resource')

ResourcesRouter.get('/', function(req: Request, res: Response, next: NextFunction) {
  Resource.find(function(err, resources) {
    if (err) return next(err)
    res.json({ data: resources })
  })
})

ResourcesRouter.post('/', function(req: Request, res: Response, next: NextFunction) {
  Resource.create(req.body, function(err, resource) {
    if (err) return next(err)
    res.json({ data: resource })
  })
})

ResourcesRouter.get('/:id', function(req: Request, res: Response, next: NextFunction) {
  Resource.findById(req.params.id, function(err, resource) {
    if (err) return next(err)
    res.json({ data: resource })
  })
})

ResourcesRouter.put('/:id', function(req: Request, res: Response, next: NextFunction) {
  Resource.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, resource) {
    if (err) return next(err)
    res.json({ data: resource })
  })
})

ResourcesRouter.delete('/:id', function(req: Request, res: Response, next: NextFunction) {
  Resource.findByIdAndRemove(req.params.id, function(err, resource) {
    if (err) return next(err)
    res.json({ data: null })
  })
})

export { ResourcesRouter }