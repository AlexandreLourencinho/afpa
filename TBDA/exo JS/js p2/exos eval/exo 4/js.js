var PU
var QTECOM
var PAP 
var REM
var PORT
var TOT
var rem
while(window.confirm("voulez-vous accéder a la fonction?")==true)
{
    QTECOM = prompt("saisissez la quantité commandée")
    PU = prompt("saisissez le prix unitaire")
    QTECOM=parseInt(QTECOM)
    PU=parseInt(PU)
    TOT=PU*QTECOM
    if (TOT<100)
    {
        PORT=TOT*0.02
        if (PORT<6)
        {
            REM="0%"
            PORT="6€"
            PAP=TOT+6
            document.write("vos frais de ports s'élèvent à :"+PORT+"<br>")
            document.write("votre remise est de "+REM+"<br>")
            document.write("vous aurez à payer :"+PAP+"€"+"<br>")
            
        }
        else{
            REM="0%"
            PORT=TOT*0.02
            PAP=TOT*1.02
            document.write("vos frais de ports s'élèvent à :"+PORT+"<br>")
            document.write("votre remise est de "+REM+"<br>")
            document.write("vous aurez à payer :"+PAP+"€"+"<br>")
        }
    }
    if (TOT>=100 && TOT<=200)
    {
        REM="5%"
        rem=TOT*0.05
        TOT=0.95*TOT
        PORT=TOT*0.02
        if (PORT<6)
        {
            PORT="6€"
            PAP=TOT+6
            document.write("vos frais de ports s'élèvent à :"+PORT+"<br>")
            document.write("votre remise est de "+REM+" soit "+rem+" €"+"<br>")
            document.write("vous aurez à payer :"+PAP+"€"+"<br>")
            
        }
        else
        {
            PAP=TOT+PORT
            document.write("vos frais de ports s'élèvent à :"+PORT+"€"+"<br>")
            document.write("votre remise est de "+REM+" soit "+rem+" €"+"<br>")
            document.write("vous aurez à payer :"+PAP+"€"+"<br>")

        }
    }
    if (TOT>200)
    {
        REM="10%"
        rem=TOT*0.1
        PORT="2%"
        PAP=TOT*0.9
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