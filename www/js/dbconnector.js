$(function(){ 
	var db = {
		init: function () {
			this.initDatabase();
		},
		initDatabase: function() {
			//Read database from file
		var fs = require('fs');
		var SQL = requre('sql.js');
		var filebuffer = fs.readFileSync('basilia.sqlite');
		//Load database
		db = new SQL.Database(filebuffer);
		//Get Information from the database
		var getViaId = db.prepare("SELECT * FROM standorte WHERE id =:id");
		var getViaPNumber = db.prepare("SELECT * FROM standorte WHERE pNumber =:pNumber");
		selectAll();
		},
		/***
		**** SELECT DATA **
		***/	    
	    selectAll: function() {
	    	var that = this;
			basilia.transaction(
			    function (transaction) {
			        transaction.executeSql("SELECT * FROM standorte;", [], that.dataSelectHandler, that.errorHandler);
			    }
			);			    
	    },
	    
		dataSelectHandler: function(transaction, results){
		 
			// Handle the results
			for (var i=0; i<results.rows.length; i++) {
		 
				var row = results.rows.item(i);
				var newFeature = new Object();
		 
				newFeature.fid   = row['id'];
				newFeature.fname = row['name'];
				newFeature.fcolor = row['color'];
				newFeature.fdesc  = row['description'];
		 
				$('body').css('background-color',newFeature.bgcolor);
				$('body').css('font-family',newFeature.font);
				$('.list').html('<h4 id="bas">'+ newFeature.fname +'</h4>');
			}
		}
	};
 	//Instantiate
 	db.init();
	
});	