var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quora-clone-mern');

exports.connection = function(req, res) {
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', function callback () {
    console.log("Connection Successful ");
  });

};