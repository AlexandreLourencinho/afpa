<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER d" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2defaut="" F2para="" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalBoucles="5000000" epaisseurPoint="2" nbDecimales="8" maxBoucle="500000" arrondiAuto="vrai" epaisseurLigne="2" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="a EST_DU_TYPE NOMBRE" code="1#NOMBRE#a"/>
        <item algoitem="b EST_DU_TYPE NOMBRE" code="1#NOMBRE#b"/>
        <item algoitem="c EST_DU_TYPE NOMBRE" code="1#NOMBRE#c"/>
        <item algoitem="d EST_DU_TYPE NOMBRE" code="1#NOMBRE#d"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="b PREND_LA_VALEUR 0" code="5#b#0#pasliste"/>
        <item algoitem="a PREND_LA_VALEUR 1" code="5#a#1#pasliste"/>
        <item algoitem="c PREND_LA_VALEUR 0" code="5#c#0#pasliste"/>
        <item algoitem="TANT_QUE (a!=0) FAIRE" code="15#a!=0">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="LIRE a" code="2#a#pasliste"/>
            <item algoitem="b PREND_LA_VALEUR b+1" code="5#b#b+1#pasliste"/>
            <item algoitem="SI (a>c) ALORS" code="6#a>c">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="d PREND_LA_VALEUR b" code="5#d#b#pasliste"/>
                <item algoitem="c PREND_LA_VALEUR a" code="5#c#a#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
            </item>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="AFFICHER &quot;le plus grand était:&quot;" code="4#le plus grand était:#1"/>
        <item algoitem="AFFICHER c" code="3#c#1#pasliste"/>
        <item algoitem="AFFICHER &quot; a la position :&quot;" code="4# a la position :#1"/>
        <item algoitem="AFFICHER d" code="3#d#1#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
