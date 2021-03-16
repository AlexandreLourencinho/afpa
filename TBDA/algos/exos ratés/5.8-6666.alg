<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot; à avoir été rentré.&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2para="" F2lignes="" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param maxBoucle="500000" totalBoucles="5000000" totalAffichages="1000" epaisseurPoint="2" epaisseurLigne="2" arrondiAuto="vrai" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="combien EST_DU_TYPE NOMBRE" code="1#NOMBRE#combien"/>
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
        <item algoitem="cbiffre EST_DU_TYPE NOMBRE" code="1#NOMBRE#cbiffre"/>
        <item algoitem="grand EST_DU_TYPE NOMBRE" code="1#NOMBRE#grand"/>
        <item algoitem="position EST_DU_TYPE NOMBRE" code="1#NOMBRE#position"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="LIRE combien" code="2#combien#pasliste"/>
        <item algoitem="SI (combien>0) ALORS" code="6#combien>0">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="POUR i ALLANT_DE 1 A combien" code="12#i#1#combien">
                <item algoitem="DEBUT_POUR" code="13#debutpour"/>
                <item algoitem="LIRE cbiffre" code="2#cbiffre#pasliste"/>
                <item algoitem="SI (cbiffre>grand) ALORS" code="6#cbiffre>grand">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="grand PREND_LA_VALEUR cbiffre" code="5#grand#cbiffre#pasliste"/>
                    <item algoitem="position PREND_LA_VALEUR i" code="5#position#i#pasliste"/>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                </item>
                <item algoitem="FIN_POUR" code="14#finpour"/>
            </item>
            <item algoitem="FIN_SI" code="8#finsi"/>
        </item>
        <item algoitem="AFFICHER &quot;le plus grand est &quot;" code="4#le plus grand est #0"/>
        <item algoitem="AFFICHER grand" code="3#grand#0#pasliste"/>
        <item algoitem="AFFICHER &quot;et était le &quot;" code="4#et était le #0"/>
        <item algoitem="AFFICHER position" code="3#position#0#pasliste"/>
        <item algoitem="AFFICHER &quot; à avoir été rentré.&quot;" code="4# à avoir été rentré.#0"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
