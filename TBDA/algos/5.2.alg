<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;Et bah c'était pas si compliqué non ?&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2lignes="" F2etat="inactif" F2para="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" arrondiAuto="vrai" totalBoucles="5000000" epaisseurPoint="2" nbDecimales="8" maxBoucle="500000" epaisseurLigne="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#A" algoitem="A EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#écrivez un nombre entre 10 et 20#0" algoitem="AFFICHER &quot;écrivez un nombre entre 10 et 20&quot;"/>
        <item code="2#A#pasliste" algoitem="LIRE A"/>
        <item code="15#A&lt;10 OU A>20" algoitem="TANT_QUE (A&lt;10 OU A>20) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="6#A&lt;10" algoitem="SI (A&lt;10) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="4#j'ai di PLUS GRAND que 10 ptin#0" algoitem="AFFICHER &quot;j'ai di PLUS GRAND que 10 ptin&quot;"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="6#A>20" algoitem="SI (A>20) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="4#j'ai dit PLUS PETIT que 20 bordel de m#0" algoitem="AFFICHER &quot;j'ai dit PLUS PETIT que 20 bordel de m&quot;"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="2#A#pasliste" algoitem="LIRE A"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="4#Et bah c'était pas si compliqué non ?#0" algoitem="AFFICHER &quot;Et bah c'était pas si compliqué non ?&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
