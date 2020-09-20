const IndexController = require('../../controller/index/index');
const router = require('../index')

const PREFIX = 'index'

router.get(`/${PREFIX}/getdata`, IndexController.getCard)

module.exports = router