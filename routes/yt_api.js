var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  req.app.locals.youtube.search.list({    
    part: 'snippet',
    type: 'video',
    q: req.query.search_query,
    maxResults: 10
    }).then(yt_res => {
      res.send(yt_res.data);
    })
    .catch(error => {
        console.error(error);
    });
  
});

module.exports = router;
