const neon1=document.getElementById('nionppro');
neon1.onclick= function(){
    let projpro = document.getElementById('nionppro').className;
    let cartouche = document.getElementById('carouche').className;
    if(projpro=='btn btn-link neonpr' && cartouche=='d-flex testanimation justify-content-center')
    {
        document.getElementById('nionppro').className="btn btn-link collapsed";
        document.getElementById('carouche').className="d-flex testanimationn justify-content-center";
    }
    else {
        document.getElementById('nionppro').className = "btn btn-link neonpr";
        document.getElementById('nionmc').className="btn btn-link collapsed";
        document.getElementById('nionxp').className="btn btn-link collapsed";
        document.getElementById('nionpb').className="btn btn-link collapsed";
        document.getElementById('carouche').className="d-flex testanimation justify-content-center";
    }
}
const neon2 = document.getElementById('nionmc');
neon2.onclick= function (){
    let mesComp = document.getElementById('nionmc').className;
    let cartouche = document.getElementById('carouche').className;
    if(mesComp=='btn btn-link neongy' && cartouche=='d-flex testanimation justify-content-center')
    {
        document.getElementById('nionmc').className="btn btn-link collapsed";
        document.getElementById('carouche').className="d-flex testanimationn justify-content-center";
    }
    else
    {
        document.getElementById('nionppro').className="btn btn-link collapsed";
        document.getElementById('nionxp').className="btn btn-link collapsed";
        document.getElementById('nionpb').className="btn btn-link collapsed";
        document.getElementById('nionmc').className="btn btn-link neongy";
        document.getElementById('carouche').className="d-flex testanimation justify-content-center";
    }
}
const neon3 = document.getElementById('nionxp');
neon3.onclick = function ()
{
    let monXp = document.getElementById('nionxp').className;
    let cartouche = document.getElementById('carouche').className;
    if(monXp=='btn btn-link neonbr' && cartouche=='d-flex testanimation justify-content-center')
    {
        document.getElementById('nionxp').className="btn btn-link collapsed";
        document.getElementById('carouche').className="d-flex testanimationn justify-content-center";
    }
    else
    {
        document.getElementById('nionppro').className="btn btn-link collapsed";
        document.getElementById('nionxp').className="btn btn-link neonbr";
        document.getElementById('nionpb').className="btn btn-link collapsed";
        document.getElementById('nionmc').className="btn btn-link collapsed";
        document.getElementById('carouche').className="d-flex testanimation justify-content-center";
    }
}
const neon4 = document.getElementById('nionpb');
neon4.onclick= function ()
{
    let mesFor = document.getElementById('nionpb').className;
    let cartouche = document.getElementById('carouche').className;
    if(mesFor=='btn btn-link neonpb' && cartouche=='d-flex testanimation justify-content-center')
    {
        document.getElementById('nionpb').className="btn btn-link collapsed";
        document.getElementById('carouche').className="d-flex testanimationn justify-content-center";
    }
    else
    {
        document.getElementById('nionppro').className="btn btn-link collapsed";
        document.getElementById('nionxp').className="btn btn-link collapsed";
        document.getElementById('nionpb').className="btn btn-link neonpb";
        document.getElementById('nionmc').className="btn btn-link collapsed";
        document.getElementById('carouche').className="d-flex testanimation justify-content-center";
    }
}
const lienForm = document.getElementById('contact');
lienForm.onclick = function (){
    let vuForm = document.getElementById('formulaire').className;
    let cartouche = document.getElementById('carouche').className;
    let accord = document.getElementById('accordion').className;
    console.log(vuForm);
    console.log(cartouche);
    console.log(accord);
    if(vuForm=="d-none" && cartouche=="d-flex justify-content-center carouche transform mx-auto" && accord=="vide"
    ||cartouche=="d-flex testanimationn justify-content-center" && vuForm=="d-none" && accord=="vide"){
        document.getElementById('carouche').className="d-flex testanimation justify-content-center";
        document.getElementById('accordion').className='testanimation';
        document.getElementById('formulaire').className="d-flex align-items-center flex-column form-group testanimationn"
    }
}
