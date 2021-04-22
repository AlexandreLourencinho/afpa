function neonPrPpro(){
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


function neonGyMc()
{
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
function neonBrXp()
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
function neonPbMf()
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
