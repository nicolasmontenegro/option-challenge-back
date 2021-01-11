var express = require('express');
var router = express.Router();

var Validator = require('jsonschema').Validator;
var validator = new Validator();
var schema = {
  "id": "/VideoSearch",
  "type": "object",
  "properties": {
    "searchQuery": {
      "description": "Text of terms for search",
      "type": "String"
    },
    "pageToken": {
      "description": "Token to navigate to a specific page",
      "type": "String"
    },
  },
  "required": ["searchQuery"]
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  const validation =vvalidator.validate(req.query, schema)
  if (validation.errors.length) {
    next(validation.errors[0]) // Pass errors to Express.
  } else {
    req.app.locals.youtube.search.list({    
      part: 'snippet',
      type: 'video',
      q: req.query.searchQuery,
      pageToken: req.query.pageToken || null,
      maxResults: 10
      }).then(yt_res => {
        res.json(yt_res.data);
      })
      .catch(error => {
        next(error);
      });  
  }


});

module.exports = router;
