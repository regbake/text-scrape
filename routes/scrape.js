var express = require('express');
var router = express.Router();
var superagent = require('superagent')

router.get('/', function(req, res, next) {
  var url = 'https://aeon.co/essays/beyond-the-animal-brain-plants-have-cognitive-capacities-too'
  var query = 'beyond-the-animal-brain-plants-have-cognitive-capacities-too'

  superagent
  .get(url)
  //.query(query)
  .end(function(err, response){
    if (err){

      res.json({
        confirmation: 'fail',
        message: err
      })
      return
    }
    res.send(response.text)
  })

  // res.json({
  //   confirmation: 'success'
  // });
});

module.exports = router;
