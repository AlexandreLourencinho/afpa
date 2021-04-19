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