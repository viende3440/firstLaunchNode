var express = require('express');
var appli = express();


appli.get(
	'/',
	function(request,response){
	response.send('salut a toi larmerien');
}
);
appli.get(
	'/user',
	function(request,response){
	var retour = {
		nom : "wep",
		prenom : "la clé"
};
response.json(retour);
});

appli.listen(6969,function(){

console.log("jecoute rien du tt");

});