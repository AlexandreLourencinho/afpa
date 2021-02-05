<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER d"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2para="" F2lignes="" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param maxBoucle="500000" totalBoucles="5000000" totalAffichages="1000" epaisseurPoint="2" epaisseurLigne="2" arrondiAuto="vrai" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="a EST_DU_TYPE NOMBRE" code="1#NOMBRE#a"/>
        <item algoitem="b EST_DU_TYPE NOMBRE" code="1#NOMBRE#b"/>
        <item algoitem="c EST_DU_TYPE NOMBRE" code="1#NOMBRE#c"/>
        <item algoitem="d EST_DU_TYPE NOMBRE" code="1#NOMBRE#d"/>
        <item algoitem="e EST_DU_TYPE NOMBRE" code="1#NOMBRE#e"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="c PREND_LA_VALEUR 0" code="5#c#0#pasliste"/>
        <item algoitem="d PREND_LA_VALEUR 0" code="5#d#0#pasliste"/>
        <item algoitem="TANT_QUE (e!=0) FAIRE" code="15#e!=0">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="LIRE e" code="2#e#pasliste"/>
            <item algoitem="POUR b ALLANT_DE 1 A e" code="12#b#1#e">
                <item algoitem="DEBUT_POUR" code="13#debutpour"/>
                <item algoitem="LIRE a" code="2#a#pasliste"/>
                <item algoitem="SI (a>=c) ALORS" code="6#a>=c">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="c PREND_LA_VALEUR a" code="5#c#a#pasliste"/>
                    <item algoitem="d PREND_LA_VALEUR b" code="5#d#b#pasliste"/>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                </item>
                <item algoitem="FIN_POUR" code="14#finpour"/>
            </item>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="AFFICHER c" code="3#c#1#pasliste"/>
        <item algoitem="AFFICHER d" code="3#d#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
