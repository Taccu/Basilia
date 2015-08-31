/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var storage = localStorage;
var key = '/res/standorte.csv';

function getFile(){
$("#file").change(function(){
  var file = $(this).eq(0)[0].files[0],
    reader = new FileReader();
    reader.onload = function(e) {
      var text = reader.result;
      storage.setItem(key,text);
      parseData();
    };
    reader.readAsText(file);
});
}

function parseData(){
  $("#file").hide();
  var data = storage.getItem(key);
  var parsed = $.parse(data);
  $("#unparsed").val(data);
  $("#parsed").val(JSON.stringify(parsed));
}

if(storage.getItem(key))
  parseData();
else
  getFile();

