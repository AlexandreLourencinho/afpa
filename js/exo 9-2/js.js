var str1;
var str2 = prompt("entrez le séparateur voulu");
var n;
var tablo = [];
function strtok()
{
        while ((str1 = prompt("entre un mot")))
        {
            var cha = cha + str2 + str1;
        }
    console.log(cha);
        if (cha!="" && str2!="")
        {
            tablo = cha.split(str2);
        }
    console.log(tablo);
        if (tablo.length > 0) {
            n = prompt("quel mot souhaitez vous retrouver?");
            n = parseInt(n);
            alert(tablo[n]);
        } 
        else 
        {
            alert("vous n'avez rien indiqué!");
        }
}
strtok(str1,str2,n)