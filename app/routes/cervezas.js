var router = require('express').Router()
var cervezasController = require ('../controllers/cervezasController')

router.get('/search', function(req, res) {
  cervezasController.search(req, res)
})
router.get('/', function(req, res) {
  cervezasController.list(req, res)
})
router.get('/:id', function(req, res) {
  cervezasController.show(req, res)
})
router.post('/', function(req, res) {
  cervezasController.create(req, res)
})
router.put('/:id', function(req, res) {
  cervezasController.update(req, res)
})
router.delete('/:id', function(req, res) {
  cervezasController.remove(req, res)
})
module.exports = router
