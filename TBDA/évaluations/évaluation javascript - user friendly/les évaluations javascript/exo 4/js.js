// Exercice 4 : total d'une commande
// A partir de la saisie du prix unitaire noté PU d'un produit et de la quantité commandée QTECOM, afficher le prix à payer PAP, en détaillant la remise REM et le port PORT, sachant que :

// TOT = ( PU * QTECOM )
// la remise est de 5% si TOT est compris entre 100 et 200 € et de 10% au-delà
// le port est gratuit si le prix des produits ( le total remisé ) est supérieur à 500 €. Dans le cas contraire, le port est de 2%
// la valeur minimale du port à payer est de 6 €
// Testez tous les cas possibles afin de vous assurez que Votre script fonctionne.

// Ci-dessous, un jeu de tests :

// Saisir 600 € et quantité = 1 : remise 10% (-60 €) soit 540,00 et frais port = 0; à payer : 540 €
// Saisir 501 € et quantité = 1 : remise 10% (-50,1 €) soit 450,90 et frais port 2% (de 450,90 €) soit +9,01 € ; à payer : 450,90+9.01 = 459,91 €.
// Saisir 100 € et quantité = 2 : 200 € donc remise 5% soit 190 € et frais de port 2% soit 3,8 € mini 6 €; à payer : 190+6 = 196 €
// Saisir 3 € et quantité = 1 : remise 0, frais de port 2% soit 0.06 € donc le minimum de 6 € s'applique; à payer : 3+6 = 9 €


// LA FONCTION ET LES VARIABLES UTILISEES PAR LA SUITE
function qteCom(){
var PU
var QTECOM
var PAP 
var REM
var PORT
var TOT
var rem
//
    // SAISIE DES QUANTITES PRIX ETC
    QTECOM = document.getElementById("article").value
    PU = document.getElementById("Prix").value
    // conversion varchar en nombre
    QTECOM=parseInt(QTECOM)
    PU=parseInt(PU)
    // calcul du total
    TOT=PU*QTECOM
    // SI QTECOM OU PU NE SONT PAS DES NOMBRES CA DIT QUE C'EST PAS DES NOMBRES
    if (isNaN(QTECOM)==true || isNaN(PU)==true)
    {
        alert("vous devez entrez des nombres!")
        // continue
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
            document.getElementById("affi").innerHTML = "Vos frais de ports s'élèvent à : "+PORT +" ."+"<br>"+"Votre remise est de "+REM+" ."+"<br>"+"Vous aurez à payer : "+PAP+" € ."+"<br>"
            
        }
        // CAS SI LES FRAIS DE PORT NE SONT PAS INFERIEUR A 6 EUROS
        else{
            REM="0%"
            PORT=TOT*0.02
            PAP=TOT*1.02
            document.getElementById("affi").innerHTML = "Vos frais de ports s'élèvent à : "+PORT +"€ ."+"<br>"+"Votre remise est de "+REM+" ."+"<br>"+"Vous aurez à payer : "+PAP+" € ."+"<br>"
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
            document.getElementById("affi").innerHTML = "Vos frais de ports s'élèvent à : "+PORT +" . "+"<br>"+"Votre remise est de "+REM+" soit "+rem+"€ ."+"<br>"+"Vous aurez à payer : "+PAP+" € ."+"<br>"
            
        }
        // S'ILS NE LE SONT PAS
        else
        {
            PAP=TOT+PORT
            document.getElementById("affi").innerHTML = "Vos frais de ports s'élèvent à : "+PORT +"€ ."+"<br>"+"Votre remise est de "+rem+"€ ."+"Vous aurez à payer : "+PAP+" € ."+"<br>"

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
            // document.write("Vos frais de ports s'élèvent à :"+PORT+"€"+"<br>")
            // document.write("Votre remise est de "+REM+" soit "+rem+" €"+"<br>")
            // document.write("vous aurez à payer :"+PAP+"€"+"<br>")
            document.getElementById("affi").innerHTML = "Vos frais de ports s'élèvent à : "+PORT +"€ ."+"<br>"+"Votre remise est de "+REM+" soit "+rem+"€ ."+"<br>"+"Vous aurez à payer : "+PAP+"€ ."+"<br>"
        }
        else
        {
            PORT=PAP*0.02
            if (PORT<6)
                {
                PORT=6
	            PAP=PAP+6
                document.getElementById("affi").innerHTML = "Vos frais de ports s'élèvent à : "+PORT +"€ ."+"<br>"+"Votre remise est de "+REM+" soit "+rem+"€ ."+"<br>"+"Vous aurez à payer : "+PAP+"€ ."+"<br>"
                }
            else{
                PORT=PORT.toFixed(2)
                PAP=PAP*1.02
                PAP=PAP.toFixed(2)
                document.getElementById("affi").innerHTML = "Vos frais de ports s'élèvent à : "+PORT +"€ ."+"<br>"+"Votre remise est de "+REM+" soit "+rem+"€ ."+"<br>"+"Vous aurez à payer : "+PAP+"€ ."+"<br>"
                }
        }
    }

}