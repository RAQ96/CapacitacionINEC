var express = require('express');
var router = express.Router();

router.use(express.urlencoded({extended:false}));
router.use(express.json());

router.get('/', (req, res) => {
    const a = 'Test';
    res.json(
        {
            "Title": "Hola mundo!"
        }
    );
    return;

    const password = 'Hola123';
});

router.post('/', (req, res) => {
  res.json(
      {
          "Total": req.body.num1 + req.body.num2
      }
  );
});

module.exports = router;
