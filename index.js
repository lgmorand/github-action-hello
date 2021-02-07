const core = require('@actions/core'); // chargement du module core du toolkit

try 
{
  const prenom = core.getInput('prenom'); // récupération de la valeur du paramètre
  console.log(`Hello ${prenom}!`);        // écrit un message dans la console
} 
catch (error) 
{
  core.setFailed(error.message);       // indique à l'agent que le traitement a échoué et lui transmet les détails du problème
}