// MLES VARIABLES UTILISEES PAR LA SUITE
var PU=0
var QTECOM=0
var PAP 
var REM
var PORT
var TOT
var rem
// BOUCLE POUR RELANCER LA FONCTION AUTANT DE FOIS QUE VOULU
while(window.confirm("Voulez-vous calculer le prix que vous aurez a payer en fonction du nombre et du prix de l'articles ou des articles que vous désirez acheter?")==true)
{
    // SAISIE DES QUANTITES PRIX ETC FIN C'EST PLUTOT CLAIR LA
    QTECOM = prompt("saisissez le nombre d'articles que vous voulez commander.")
    PU = prompt("saisissez le prix de l'article a l'unité.")

    QTECOM=parseInt(QTECOM)
    PU=parseInt(PU)
    TOT=PU*QTECOM
    // SI QTECOM OU PU NE SONT PAS DES NOMBRES CA DIT QUE C'EST PAS DES NOMBRES
    if (isNaN(QTECOM)==true || isNaN(PU)==true)
    {
        alert("vous devez entrez des nombres!")
        continue
    }
    // CAS OU LE TOT EST <100
    if (TOT<100)
    {
        PORT=TOT*0.02
        // CAS SI LES FRAIS DE PORT FONT MOINS DE 6 EUROS
        if (PORT<6)
        {
            REM="0%"
            PORT="6€"
            PAP=TOT+6
            document.write("vos frais de ports s'élèvent à :"+PORT+"<br>")
            document.write("votre remise est de "+REM+"<br>")
            document.write("vous aurez à payer :"+PAP+"€"+"<br>")
            
        }
        // CAS SI LES FRAIS DE PORT NE SONT PAS INFERIEUR A 6 EUROS
        else{
            REM="0%"
            PORT=TOT*0.02
            PAP=TOT*1.02
            document.write("vos frais de ports s'élèvent à :"+PORT+"<br>")
            document.write("votre remise est de "+REM+"<br>")
            document.write("vous aurez à payer :"+PAP+"€"+"<br>")
        }
    }
    // CAS SI LE TOTAL EST SUPERIEUR= A 100 OU INFERIEUR= A 200
    if (TOT>=100 && TOT<=200)
    {
        REM="5%"
        rem=TOT*0.05
        TOT=0.95*TOT
        PORT=TOT*0.02
        // SI LES FRAIS DE PORT SONT INFERIEUR A 6 EUROS
        if (PORT<6)
        {
            PORT="6€"
            PAP=TOT+6
            document.write("vos frais de ports s'élèvent à :"+PORT+"<br>")
            document.write("votre remise est de "+REM+" soit "+rem+" €"+"<br>")
            document.write("vous aurez à payer :"+PAP+"€"+"<br>")
            
        }
        // S'ILS NE LE SONT PAS
        else
        {
            PAP=TOT+PORT
            document.write("vos frais de ports s'élèvent à :"+PORT+"€"+"<br>")
            document.write("votre remise est de "+REM+" soit "+rem+" €"+"<br>")
            document.write("vous aurez à payer :"+PAP+"€"+"<br>")

        }
    }
    // CAS OU LE TOTAL EST >200 
    if (TOT>200)
    {
        REM="10%"
        rem=TOT*0.1
        PORT="2%"
        PAP=TOT*0.9
        // CAS OU LE TOTAL EST >500
        if (PAP>500)
        {
            PORT="0"
            document.write("vos frais de ports s'élèvent à :"+PORT+"€"+"<br>")
            document.write("votre remise est de "+REM+" soit "+rem+" €"+"<br>")
            document.write("vous aurez à payer :"+PAP+"€"+"<br>")
        }
        else
        {
            PORT=PAP*0.02
            PAP=PAP*1.02
            document.write("vos frais de ports s'élèvent à :"+PORT+"€"+"<br>")
            document.write("votre remise est de "+REM+" soit "+rem+" €"+"<br>")
            document.write("vous aurez à payer :"+PAP+"€"+"<br>")
        }
    }

}