const core = require('@actions/core'); 
try 
{
  const firstname = core.getInput('firstname'); 
  const firstname2 = core.getInput('firstname2'); 
  console.log(`Hello ${firstname}`);  
} 
catch (error) 
{
  core.setFailed(error.message);  
}
