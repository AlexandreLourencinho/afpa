<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="POUR b ALLANT_DE 1 A 5" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2defaut="" F2para="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" epaisseurPoint="2" nbDecimales="8" arrondiAuto="vrai" epaisseurLigne="2" totalBoucles="5000000" maxBoucle="500000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#a" algoitem="a EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#b" algoitem="b EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#c" algoitem="c EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#d" algoitem="d EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#c#0#pasliste" algoitem="c PREND_LA_VALEUR 0"/>
        <item code="12#b#1#5" algoitem="POUR b ALLANT_DE 1 A 5">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="2#a#pasliste" algoitem="LIRE a"/>
            <item code="6#a>=c" algoitem="SI (a>=c) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="5#c#a#pasliste" algoitem="c PREND_LA_VALEUR a"/>
                <item code="5#d#b#pasliste" algoitem="d PREND_LA_VALEUR b"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="4#le plus grand est #0" algoitem="AFFICHER &quot;le plus grand est &quot;"/>
        <item code="3#c#0#pasliste" algoitem="AFFICHER c"/>
        <item code="4# et c'était le numéro #0" algoitem="AFFICHER &quot; et c'était le numéro &quot;"/>
        <item code="3#d#0#pasliste" algoitem="AFFICHER d"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
