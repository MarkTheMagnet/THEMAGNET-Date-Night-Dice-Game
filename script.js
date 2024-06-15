const food_results = ["PIZZA", "SUSHI", "KEBAB", "CHINESE", "INDIAN","McDONALDS"]
const do_results = ["WATCH A MOVIE", "TRY A NEW LOCATION"]
const after_results = ["GO FOR A WALK", "SNUGGLE"]
const sexy_results = ["BJ", "DOGGY", "COWGIRL", "CL", "MISSIONARY","69"]

function GetResults(params,id)
{
  document.getElementById(id).innerHTML=params[Math.floor(Math.random() * params.length)];
}
