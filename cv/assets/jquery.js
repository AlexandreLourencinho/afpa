
$(document).ready(function()
{
    $('#bouton').mouseenter(function()
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