let prenom = prompt("écrivez votre prénom :");
let nom = prompt("écrivez votre nom :");
let sex = confirm("êtes vous un homme?");
let genre;
if(sex==true)
{
    genre = 'monsieur';
}
else
{
    genre = 'madame';
}
window.alert('bonjour '+genre+' '+prenom+' '+nom+"\n"+"Bienvenue sur mon site web tout pourri parce qu'en fait c'est qu'une page de merde");