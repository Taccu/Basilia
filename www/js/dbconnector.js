
$(function(){ 
    var db = {
        init: function () {
                this.initDatabase();
        },
        initDatabase: function() {
                //Load database
                var basilisken = [];
                var database = openDatabase('mydb','1.0','basilia','5*1024*1024');
                localStorage.setItem("bas1","1");
                
        },
        //insertData: function(id, name, color, colorId, latitude, longitude, description, pNumber, txtPsg, addInfo) {
        insertData: function(){
                

        },
        renderResults: function()
        {
                e = $('.list');
                e.html("");
                e.html(e.html() + 'id: ' + localStorage.getItem("bas1") + '<br />');
        }
               
    };
    //Instantiate
    db.init();
    //db.insertData('1','Gewerbemuseum, Seite Petersgraben','r','19','47.55716881','7.58401304','Relief am Gwerbemuseum auf der Petersgraben-Seite','32','Den Basilisken, den Basilia als erstes besuchte sehen nur die Aufmerksamen er ist auf einer Tafel am Kopfende der früheren Gewerbeschule auf einer Tafel. Das Interessante dabei ist, das der Basilisk eher im Hintergrund dargestellt ist, auf Anhieb sieht man nur den hühnerähnlichen Kopf erst wenn man genau hinsieht erkennt man auf die Flügel, die aber eher angetönt sind. Das interessanteste an dem Relief ist aber, dass der Basilisk scheinbar zwei Löwen umfasst, die ein Wappen mit dem Baslerstab halten. Also, das neue Wappentier das die alten Wappentiere umfasst. Dieses grosse Haus wurde aber nicht als Gewerbeschule gebaut. Vorher stand an dieser Ecke das Kloster Gnadental und das war noch bevor es die Spalenvorstadt richtig gab, dann wurde 1573 aus dem Kloster das Kornhaus, dort musste alles Korn hingebracht werden und so konnte der Getreidemarkt durch die Stadt kontrolliert werden. Der Ort für diese Gebäude war gut gewählt sowohl aus dem Elsass wie auch aus den deutschen Städten wie Frankfurt oder Mannheim kamen die schweren Wagen mit den vielen Pferden davor','Erstes Gebäude am Standort: Kloster Gnadental. Aus dem Kloster entsteht 1573, das Kornhaus der Stadt. 1890 beginnt des Baus der Gewerbeschule und des Gewerbemuseums, 1893 ziehen 930 Schüler ein. Das Museum wird vom 1878 gegründeten Handwerker- und Gewerbeverein betrieben. Der Neubau wird von der GGG, dem Handwerkerverein, Zünften und Gesellschaften und vor allem von der Christoph Merian Stiftung finanziert.');
    db.renderResults();

});	