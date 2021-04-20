function produit()
{
    let a = document.getElementById('nb1').value;
    let b = document.getElementById('nb2').value;
    let c= a*b;
    document.getElementById('result1').value= 'la multiplication de '+a+' par '+b+' vaut '+c+'.';
}

function papillon()
{
    document.getElementById('pap').innerHTML='<img src="papillon.jpg">';
}
function pap2()
{
    document.getElementById('pap').innerHTML='';
}

function nbLettres(){
    let phrase = document.getElementById('str').value;
    let lettre = document.getElementById('lettre').value;
    let nblet=0;
    let i;
    for (i = 0; i < phrase.length; i++)
    {
        if (phrase.charAt(i) == lettre)
        {
            nblet += 1;
        }
    }
    document.getElementById('lette').innerHTML="il y a "+nblet+" fois "+'"'+lettre+'"'+" dans la suite de caractère "+'"'+phrase+'".';
}