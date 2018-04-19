const router = require('express').Router();
const articleController = require('../controllers/articleControllers');

router.route('/')
	.get(articleController.findAll);
router.route('/')
	.post(articleController.create);

router.route('/:id')
	.get(articleController.findById)
router.route('/:id')
	.put(articleController.update)
router.route('/:id')
	.delete(articleController.remove);

module.exports = router;