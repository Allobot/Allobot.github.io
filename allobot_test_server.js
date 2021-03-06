/*
 * TO TEST THE WEBPAGE
 *  author: Sam Herbert & Holland Herbert
 */

var sys = require("sys");
var my_http = require("http");
var path = require("path");
var url = require("url");
var filesys = require("fs");


my_http.createServer(
  function(request, response) {
    var my_path = url.parse(request.url).pathname;
    var full_path = process.cwd() + my_path.toLowerCase();
   
    path.exists(full_path,
      function(exists){
        if(!exists){
          response.writeHeader(404, {"Content-Type": "text/plain"});
          response.write("404 Not Found\n");
          response.end();
          console.log('File not found: ' + full_path);
        }
        else{
          filesys.readFile(full_path, "binary",
            function(err, file){
              if(err){
                response.writeHeader(500, {"Content-Type": "text/plain"});
                response.write(err + "\n");
                response.end();
              }
              else{
                response.writeHeader(200);
                response.write(file, "binary");
                response.end();
              }
            }
          );
        }
      }
    );
  }
).listen(8080);
sys.puts("Server Running on 8080");

