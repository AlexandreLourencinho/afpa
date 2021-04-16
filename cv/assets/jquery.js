
$(document).ready(function()
{
    $('#bouton').mouseover(function()
    {
        alert('Vous avez cliqué sur le bouton');
    });
});


$('#div1').mouseover(function()
{
    $(this).css({
        "border" : "1px solid red",
        "font-weight" : "bold",
        "cursor" : "help"
    });
});
$('#div1').mouseout(function()
{
    $(this).css({
        "border" : "0px",
        "font-weight" : "normal",
        // "cursor" : "help"
    });
});
let myvar = 5;
let consta;
let i=0;
do
{
    consta=myvar*i;
    console.log(consta);
    i++;
    myvar++
}while(i<=10);
