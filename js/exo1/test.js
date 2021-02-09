var nom = window.prompt("saisissez votre nom");
var prenom = window.prompt("saisissez votre prénom");
var genre = window.confirm ("êtes vous un homme ?");

if (genre == true) 
{
    alert("bonjour Monsieur "+nom+" "+prenom+"\n bienvenue sur notre site web");
}

else 
{
    alert ("bonjour madame "+nom+" "+prenom+"\n bienvenue sur notre site web");
}