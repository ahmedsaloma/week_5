/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

document.write(`<div>We Have X Admins</div>`);


for(let i = 0; i < myAdmins.length;i++)
{
  if(myAdmins[i] == "Stop")
  {
    break;
  }
  document.write(`<hr><p>the admin for team ${i+1} ${myAdmins[i]} </p><h3>team mempers : </h3>`);

  let z = 0;

  for(let j = 0; j < myEmployees.length;j++)
  {
    if(myAdmins[i][0] == myEmployees[j][0])
    {
      z++;
      document.write(`<div>  <p>- ${z} ${myEmployees[j]}</p></div>`);


    }

 
  

 }
 z = 0;

}