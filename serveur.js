var express = require('express');
var appli = express();


appli.get(
	'/',
	function(request,response){
	response.sendFile(__dirname + '/index.html');
        
}
);
appli.get(
	'/user',
	function(response){
	var retour = {
		nom : "wep",
		prenom : "la clé"
};
response.json(retour);
});

appli.listen(6969,function(){

console.log("jecoute rien du tt");

});