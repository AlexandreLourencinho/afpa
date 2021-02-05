<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="FIN_SI"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2lignes="" F2defaut="" F2para="" F2etat="inactif"/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param nbDecimales="8" totalAffichages="1000" maxBoucle="500000" epaisseurPoint="2" arrondiAuto="vrai" totalBoucles="5000000" epaisseurLigne="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#combien" algoitem="combien EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#chiffre" algoitem="chiffre EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#grand" algoitem="grand EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#position" algoitem="position EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#combien#pasliste" algoitem="LIRE combien"/>
        <item code="6#combien>0" algoitem="SI (combien>0) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="12#i#1#combien" algoitem="POUR i ALLANT_DE 1 A combien">
                <item code="13#debutpour" algoitem="DEBUT_POUR"/>
                <item code="2#chiffre#pasliste" algoitem="LIRE chiffre"/>
                <item code="6#chiffre!=0" algoitem="SI (chiffre!=0) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="5#grand#0#pasliste" algoitem="grand PREND_LA_VALEUR 0"/>
                    <item code="6#chiffre>grand" algoitem="SI (chiffre>grand) ALORS">
                        <item code="7#debutsi" algoitem="DEBUT_SI"/>
                        <item code="5#grand#chiffre#pasliste" algoitem="grand PREND_LA_VALEUR chiffre"/>
                        <item code="5#position#i#pasliste" algoitem="position PREND_LA_VALEUR i"/>
                        <item code="8#finsi" algoitem="FIN_SI"/>
                    </item>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                    <item code="9#sinon" algoitem="SINON">
                        <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                        <item code="5#combien#0#pasliste" algoitem="combien PREND_LA_VALEUR 0"/>
                        <item code="4#pas de 0#0" algoitem="AFFICHER &quot;pas de 0&quot;"/>
                        <item code="11#finsinon" algoitem="FIN_SINON"/>
                    </item>
                </item>
                <item code="14#finpour" algoitem="FIN_POUR"/>
            </item>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="4#pas de 0#0" algoitem="AFFICHER &quot;pas de 0&quot;"/>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
