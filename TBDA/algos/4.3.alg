<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="LIRE C" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2para="" F2etat="inactif" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" maxBoucle="500000" arrondiAuto="vrai" epaisseurLigne="2" epaisseurPoint="2" totalBoucles="5000000" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="A EST_DU_TYPE NOMBRE" code="1#NOMBRE#A"/>
        <item algoitem="B EST_DU_TYPE NOMBRE" code="1#NOMBRE#B"/>
        <item algoitem="C EST_DU_TYPE NOMBRE" code="1#NOMBRE#C"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;heure?&quot;" code="4#heure?#0"/>
        <item algoitem="LIRE A" code="2#A#pasliste"/>
        <item algoitem="AFFICHER &quot;minutes?&quot;" code="4#minutes?#0"/>
        <item algoitem="LIRE B" code="2#B#pasliste"/>
        <item algoitem="AFFICHER &quot;secondes?&quot;" code="4#secondes?#0"/>
        <item algoitem="LIRE C" code="2#C#pasliste"/>
        <item algoitem="SI (C&lt;59) ALORS" code="6#C&lt;59">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="C PREND_LA_VALEUR C+1" code="5#C#C+1#pasliste"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="C PREND_LA_VALEUR 0" code="5#C#0#pasliste"/>
                <item algoitem="SI (B&lt;59) ALORS" code="6#B&lt;59">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="B PREND_LA_VALEUR B+1" code="5#B#B+1#pasliste"/>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                    <item algoitem="SINON" code="9#sinon">
                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                        <item algoitem="B PREND_LA_VALEUR 0" code="5#B#0#pasliste"/>
                        <item algoitem="SI (A&lt;23) ALORS" code="6#A&lt;23">
                            <item algoitem="DEBUT_SI" code="7#debutsi"/>
                            <item algoitem="A PREND_LA_VALEUR A+1" code="5#A#A+1#pasliste"/>
                            <item algoitem="FIN_SI" code="8#finsi"/>
                            <item algoitem="SINON" code="9#sinon">
                                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                <item algoitem="A PREND_LA_VALEUR 0" code="5#A#0#pasliste"/>
                                <item algoitem="FIN_SINON" code="11#finsinon"/>
                            </item>
                        </item>
                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                    </item>
                </item>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
        <item algoitem="AFFICHER &quot;Dans une seconde il sera &quot;" code="4#Dans une seconde il sera #0"/>
        <item algoitem="AFFICHER A" code="3#A#0#pasliste"/>
        <item algoitem="AFFICHER &quot;heure(s) &quot;" code="4#heure(s) #0"/>
        <item algoitem="AFFICHER B" code="3#B#0#pasliste"/>
        <item algoitem="AFFICHER &quot;minutes(s) &quot;" code="4#minutes(s) #0"/>
        <item algoitem="AFFICHER C" code="3#C#0#pasliste"/>
        <item algoitem="AFFICHER &quot;secondes(s).&quot;" code="4#secondes(s).#0"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
