<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="B PREND_LA_VALEUR (10*0.1)+((A-10)*0.09)"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2defaut="" F2para="" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalBoucles="5000000" arrondiAuto="vrai" epaisseurLigne="2" totalAffichages="1000" maxBoucle="500000" nbDecimales="8" epaisseurPoint="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="A EST_DU_TYPE NOMBRE" code="1#NOMBRE#A"/>
        <item algoitem="B EST_DU_TYPE NOMBRE" code="1#NOMBRE#B"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="LIRE A" code="2#A#pasliste"/>
        <item algoitem="SI (A&lt;=10) ALORS" code="6#A&lt;=10">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="B PREND_LA_VALEUR A*0.1" code="5#B#A*0.1#pasliste"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="SI (A>10 et A&lt;=30) ALORS" code="6#A>10 et A&lt;=30">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="B PREND_LA_VALEUR (10*0.1)+((A-10)*0.09)" code="5#B#(10*0.1)+((A-10)*0.09)#pasliste"/>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                    <item algoitem="SINON" code="9#sinon">
                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                        <item algoitem="SI (A>30) ALORS" code="6#A>30">
                            <item algoitem="DEBUT_SI" code="7#debutsi"/>
                            <item algoitem="B PREND_LA_VALEUR (10*0.1)+(20*0.09)+(A-30)*0.08" code="5#B#(10*0.1)+(20*0.09)+(A-30)*0.08#pasliste"/>
                            <item algoitem="FIN_SI" code="8#finsi"/>
                        </item>
                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                    </item>
                </item>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
        <item algoitem="AFFICHER B" code="3#B#0#pasliste"/>
        <item algoitem="AFFICHER &quot;Euros&quot;" code="4#Euros#0"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
