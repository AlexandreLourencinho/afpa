function nombrePair()
{
    let m;
    let n = document.getElementById('nombre').value;
    if(n%2==0)
    {
        m = 'pair!';
    }
    else
    {
        m = 'impair !';
    }
    document.getElementById('resultNombre').innerHTML = 'le nombre est '+m+'';
}
let test = new Date();
console.log(test);
let test2 = test.getFullYear();
console.log(test2);
function anneBorn()
{
    let annee=document.getElementById('an').value;
    let age = test2-annee;
    let pron;
    if(age>18)
    {
        pron="vous êtes majeur!";
    }
    else
    {
        pron="vous êtes mineur! pas d'alcool!";
    }
    document.getElementById('resultAn').innerHTML='vous avez '+age+' ans.'+pron;
}

function calculatrice() {
    let c1 = parseFloat(document.getElementById('nb1').value);
    let c2 = parseFloat(document.getElementById('nb2').value);
    let ope = document.getElementById('mult').value;
    let n;
    switch (ope) {
        case "*" :
            n=c1*c2;
            console.log(n);
            break;
        case "/" :
            n=c1/c2;
            console.log(n);
            break;
        case "+" :
            n=c1+c2;
            console.log(typeof n);
            console.log(n);
            break;
        case "-" :
            n=c1-c2;
            console.log(n);
            break;
        default :
            document.getElementById("errOp").innerHTML = 'roh mais un signe d\'opération bon dieu de bon sang!';
    }
}

function participation(){
    let nbEnfants = document.getElementById('nbenf').value
    let maria=document.querySelector('input[name="marie"]:checked').value;
    let salairem=document.getElementById('salm').value;
    let aide;
    console.log(maria);
    if(maria==1){
        aide = 25
    }
    else
    {
        aide=20;
    }
    aide+=nbEnfants*10;
    if(salairem<1200)
    {
        aide+=10;
    }
    if(aide>50)
    {
        aide=50;
    }
document.getElementById('remise').innerHTML = 'La participation du patron ce gros connard de privilégié de mâle blanc cis hétéro dominateur not queer friendly est de '+aide+'%.';
}
let magic = parseInt(Math.random()*100);
console.log(magic);
function nbMagique(){
    let nb=document.getElementById('nbma').value;
        if(nb<magic)
        {
            document.getElementById('resultma').innerHTML = "c'est plus grand!";
        }
        else if(nb>magic)
            document.getElementById('resultma').innerHTML = "c'est plus petit!";
    else
            document.getElementById('resultma').innerHTML = "BRAVO!";
}