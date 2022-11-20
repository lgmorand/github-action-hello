const core = require('@actions/core'); 
try 
{
  const firstname = core.getInput('firstname'); 
  console.log(`Hello ${firstname}`);  
} 
catch (error) 
{
  core.setFailed(error.message);  
}
