
var str2 = prompt("entrez le séparateur voulu");
var n;
var tablo = [];
var str1;
function strtok() {

        while ((str1 = prompt("entre un mot"))) 
        {
            var cha = cha + str2 + str1;
        }
        console.log(cha);
        if (cha != "" && str2 != "") 
        {
            tablo = cha.split(str2);
        }
        console.log(tablo);
        str1="nbg";
        if (tablo.length > 0) 
        {
            n = prompt("quel mot souhaitez vous retrouver?");
            n = parseInt(n);
            if (n < tablo.length && n > 0) 
            {
            alert(tablo[n]);
            } 
            else 
            {
            alert("enfoiré de petit malin, tu m'a eu!");
            }
        } 
        else 
        {
            alert("vous n'avez rien indiqué!");
        }
}
strtok();
// var n = 2 ;
// strtok()
// console.log(str1)
// console.log(str2)
console.log(n)
 if (n>0)
 { alert("blablabla");}