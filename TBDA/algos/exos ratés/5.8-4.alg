<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="stockcb PREND_LA_VALEUR 0" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2etat="inactif" F2para="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurPoint="2" totalAffichages="1000" maxBoucle="500000" epaisseurLigne="2" totalBoucles="5000000" arrondiAuto="vrai" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="b EST_DU_TYPE NOMBRE" code="1#NOMBRE#b"/>
        <item algoitem="nb EST_DU_TYPE NOMBRE" code="1#NOMBRE#nb"/>
        <item algoitem="combien EST_DU_TYPE NOMBRE" code="1#NOMBRE#combien"/>
        <item algoitem="stcknb EST_DU_TYPE NOMBRE" code="1#NOMBRE#stcknb"/>
        <item algoitem="stockcb EST_DU_TYPE NOMBRE" code="1#NOMBRE#stockcb"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="stcknb PREND_LA_VALEUR 0" code="5#stcknb#0#pasliste"/>
        <item algoitem="stockcb PREND_LA_VALEUR 0" code="5#stockcb#0#pasliste"/>
        <item algoitem="LIRE combien" code="2#combien#pasliste"/>
        <item algoitem="TANT_QUE (combien!=0) FAIRE" code="15#combien!=0">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="POUR b ALLANT_DE 1 A combien" code="12#b#1#combien">
                <item algoitem="DEBUT_POUR" code="13#debutpour"/>
                <item algoitem="LIRE nb" code="2#nb#pasliste"/>
                <item algoitem="TANT_QUE (nb!=0) FAIRE" code="15#nb!=0">
                    <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
                    <item algoitem="SI (nb>stcknb) ALORS" code="6#nb>stcknb">
                        <item algoitem="DEBUT_SI" code="7#debutsi"/>
                        <item algoitem="stcknb PREND_LA_VALEUR nb" code="5#stcknb#nb#pasliste"/>
                        <item algoitem="stockcb PREND_LA_VALEUR combien" code="5#stockcb#combien#pasliste"/>
                        <item algoitem="FIN_SI" code="8#finsi"/>
                    </item>
                    <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
                </item>
                <item algoitem="FIN_POUR" code="14#finpour"/>
            </item>
            <item algoitem="AFFICHER &quot;le plus grand était &quot;" code="4#le plus grand était #0"/>
            <item algoitem="AFFICHER stcknb" code="3#stcknb#0#pasliste"/>
            <item algoitem="AFFICHER &quot; en position &quot;" code="4# en position #0"/>
            <item algoitem="AFFICHER stockcb" code="3#stockcb#0#pasliste"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
        </item>
        <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
