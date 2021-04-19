// let myvar = 5;
// let consta;
// let i=0;
// do
// {
//     consta=myvar*i;
//     console.log(consta);
//     i++;
//     myvar++
// }while(i<=10);


$(document).ready(function()
{
    $("#bouton").mouseenter(function()
    {
        alert("Vous avez cliqué sur le bouton");
    });
});


$("#div1").mouseover(function()
{
    $(this).css({
        "border" : "1px solid red",
        "font-weight" : "bold",
        "cursor" : "help"
    });
});
$("#div1").mouseout(function()
{
    $(this).css({
        "border" : "0px",
        "font-weight" : "normal",
        // "cursor" : "help"
    });
});
let i = 0;
const cVoy = new RegExp(/[aeiouyAEIOUYéàïèøÀÉüÜëËÙù]/gi);

function nbVoyelles() {
    let phrase = document.getElementById("mot").value;
    console.log(phrase);
    let n = phrase.length;
    console.log(n);
    let nbVoy = 0;
    let m =phrase.match(cVoy);
    console.log(typeof m);
    console.log(m);
    nbVoy=m.length;
    console.log(nbVoy);
}
