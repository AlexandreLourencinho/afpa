<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="FIN_SI" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2para="" F2lignes="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" totalBoucles="5000000" epaisseurPoint="2" maxBoucle="500000" nbDecimales="8" totalAffichages="1000" epaisseurLigne="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#a" algoitem="a EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#b" algoitem="b EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#c" algoitem="c EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#d" algoitem="d EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#e" algoitem="e EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#f" algoitem="f EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#e#pasliste" algoitem="LIRE e"/>
        <item code="5#d#0#pasliste" algoitem="d PREND_LA_VALEUR 0"/>
        <item code="6#e==0" algoitem="SI (e==0) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#pas de zéro!#0" algoitem="AFFICHER &quot;pas de zéro!&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="6#e!=0" algoitem="SI (e!=0) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="12#b#1#e" algoitem="POUR b ALLANT_DE 1 A e">
                <item code="13#debutpour" algoitem="DEBUT_POUR"/>
                <item code="2#a#pasliste" algoitem="LIRE a"/>
                <item code="6#a==0" algoitem="SI (a==0) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="4#pas de zéro!#0" algoitem="AFFICHER &quot;pas de zéro!&quot;"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                </item>
                <item code="6#a!=0 et a>d" algoitem="SI (a!=0 et a>d) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="5#d#a#pasliste" algoitem="d PREND_LA_VALEUR a"/>
                    <item code="5#f#e#pasliste" algoitem="f PREND_LA_VALEUR e"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                </item>
                <item code="14#finpour" algoitem="FIN_POUR"/>
            </item>
            <item code="4#le plus grand était #0" algoitem="AFFICHER &quot;le plus grand était &quot;"/>
            <item code="3#d#0#pasliste" algoitem="AFFICHER d"/>
            <item code="4# en position #0" algoitem="AFFICHER &quot; en position &quot;"/>
            <item code="3#f#0#pasliste" algoitem="AFFICHER f"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
