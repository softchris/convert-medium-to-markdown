var fs = require("fs");
var path = require('path');

function write(filename, data) {
  return new Promise((resolve, reject) => {
    
    fs.writeFile(filename, data, function (err, data) {
      if (err) reject(err);
      else resolve(`Successfully Written to File ${filename}.`);
      console.log();
    });
  });
}



module.exports = {
  write
}