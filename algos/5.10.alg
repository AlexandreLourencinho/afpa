<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER &quot; de gagner&quot;" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2para="" F2etat="inactif"/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurPoint="2" totalAffichages="1000" maxBoucle="500000" nbDecimales="8" epaisseurLigne="2" arrondiAuto="vrai" totalBoucles="5000000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#chevp" algoitem="chevp EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#chevj" algoitem="chevj EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#X" algoitem="X EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Y" algoitem="Y EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#tempox" algoitem="tempox EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#tempoy" algoitem="tempoy EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#chevT" algoitem="chevT EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#tempoz" algoitem="tempoz EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#tempoz#1#pasliste" algoitem="tempoz PREND_LA_VALEUR 1"/>
        <item code="5#tempoy#1#pasliste" algoitem="tempoy PREND_LA_VALEUR 1"/>
        <item code="5#tempox#1#pasliste" algoitem="tempox PREND_LA_VALEUR 1"/>
        <item code="2#chevp#pasliste" algoitem="LIRE chevp"/>
        <item code="2#chevj#pasliste" algoitem="LIRE chevj"/>
        <item code="5#chevT#chevp-chevj#pasliste" algoitem="chevT PREND_LA_VALEUR chevp-chevj"/>
        <item code="12#i#1#chevp" algoitem="POUR i ALLANT_DE 1 A chevp">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="5#tempox#tempox*i#pasliste" algoitem="tempox PREND_LA_VALEUR tempox*i"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="12#i#1#chevT" algoitem="POUR i ALLANT_DE 1 A chevT">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="5#tempoy#tempoy*i#pasliste" algoitem="tempoy PREND_LA_VALEUR tempoy*i"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="5#X#tempox/tempoy#pasliste" algoitem="X PREND_LA_VALEUR tempox/tempoy"/>
        <item code="4#dans l'ordre, il y a une chance sur #0" algoitem="AFFICHER &quot;dans l'ordre, il y a une chance sur &quot;"/>
        <item code="3#X#0#pasliste" algoitem="AFFICHER X"/>
        <item code="4# de gagner#1" algoitem="AFFICHER &quot; de gagner&quot;"/>
        <item code="12#i#1#chevj" algoitem="POUR i ALLANT_DE 1 A chevj">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="5#tempoz#tempoz*i#pasliste" algoitem="tempoz PREND_LA_VALEUR tempoz*i"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="5#Y#tempox/(tempoz*tempoy)#pasliste" algoitem="Y PREND_LA_VALEUR tempox/(tempoz*tempoy)"/>
        <item code="4#dans le désordre, il y a une chance sur #0" algoitem="AFFICHER &quot;dans le désordre, il y a une chance sur &quot;"/>
        <item code="3#Y#0#pasliste" algoitem="AFFICHER Y"/>
        <item code="4# de gagner#0" algoitem="AFFICHER &quot; de gagner&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
