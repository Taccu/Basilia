//Read database from file
var fs = require('fs');
var SQL = requre('sql.js);
var filebuffer = fs.readFileSync('basilia.sqlite');
//Load database
var db = new SQL.Database(filebuffer);
//Get Information from the database
var getViaId = db.prepare("SELECT * FROM standorte WHERE id =:id");
var getViaPNumber = db.prepare("SELECT * FROM standorte WHERE pNumber =:pNumber");


//Example 
var result = stmt.getAsObject({':id' : 1});
console.log(result);

//Reuse stmt
stmt.bind([2]);
while(stmt.step()) console.log(stmt.get());


// Wenn fertig mit stmt 
stmt.free();