
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
let i = 0;
const cVoy = new RegExp(/[aeiouyAEIOUYéàïèøÀÉüÜëËÙù]/);

function nbVoyelles(){
    let phrase=document.getElementById("mot");
    let n = phrase.length;
    let nbVoy;
while(i<n){
    if(cVoy.test(n.substring(0,i)))
    {
        nbVoy++;
        i++;
    }
    else
    {
        i++;
    }
}
console.log(nbVoy);



}