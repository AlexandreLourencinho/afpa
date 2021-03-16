<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER &quot;c'était pas si compliqué espèce de guignol&quot;" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2para="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param maxBoucle="500000" totalBoucles="5000000" epaisseurPoint="2" nbDecimales="8" epaisseurLigne="2" arrondiAuto="vrai" totalAffichages="1000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#A" algoitem="A EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Ecrivez un nombre entre 1 et 3#0" algoitem="AFFICHER &quot;Ecrivez un nombre entre 1 et 3&quot;"/>
        <item code="2#A#pasliste" algoitem="LIRE A"/>
        <item code="15#A&lt;1 ou A>3" algoitem="TANT_QUE (A&lt;1 ou A>3) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="4#entre 1 et 3 j'ai dit ptin#0" algoitem="AFFICHER &quot;entre 1 et 3 j'ai dit ptin&quot;"/>
            <item code="2#A#pasliste" algoitem="LIRE A"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="4#c'était pas si compliqué espèce de guignol#0" algoitem="AFFICHER &quot;c'était pas si compliqué espèce de guignol&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
