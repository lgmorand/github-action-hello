const core = require('@actions/core'); // chargement du module core du toolkit

try 
{
  core.warning("Cette action est obsolète, pensez à migrer sur l'action officielle editeur/nouvelle-action@v1")
  const prenom = core.getInput('prenom'); // récupération de la valeur du paramètre
  const prenom2 = core.getInput('prenom2'); // récupération de la valeur du paramètre
  console.log(`Hello ${prenom} & ${prenom2}!`);        // écrit un message dans la console
} 
catch (error) 
{
  core.setFailed(error.message);       // indique à l'agent que le traitement a échoué et lui transmet les détails du problème
}
