<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;PAIE TOUT SALE PINCE&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2defaut="" F2para="" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalBoucles="5000000" arrondiAuto="vrai" epaisseurLigne="2" totalAffichages="1000" maxBoucle="500000" nbDecimales="8" epaisseurPoint="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="S EST_DU_TYPE CHAINE" code="1#CHAINE#S"/>
        <item algoitem="A EST_DU_TYPE NOMBRE" code="1#NOMBRE#A"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Identité de genre?&quot;" code="4#Identité de genre?#0"/>
        <item algoitem="LIRE S" code="2#S#pasliste"/>
        <item algoitem="AFFICHER &quot;age?&quot;" code="4#age?#0"/>
        <item algoitem="LIRE A" code="2#A#pasliste"/>
        <item algoitem="SI (S==&quot;femme&quot;) ALORS" code="6#S==&quot;femme&quot;">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="SI (A>=18 ET A&lt;=35) ALORS" code="6#A>=18 ET A&lt;=35">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="AFFICHER &quot;PAYE SALOPE&quot;" code="4#PAYE SALOPE#0"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
                <item algoitem="SINON" code="9#sinon">
                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                    <item algoitem="AFFICHER &quot;pffff tu paie pas, sexisme positif ordinaire, a la KOUIZINE&quot;" code="4#pffff tu paie pas, sexisme positif ordinaire, a la KOUIZINE#0"/>
                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                </item>
            </item>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="SI (A>=20) ALORS" code="6#A>=20">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="AFFICHER &quot;PAIE TOUT SALE PINCE&quot;" code="4#PAIE TOUT SALE PINCE#0"/>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                    <item algoitem="SINON" code="9#sinon">
                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                        <item algoitem="AFFICHER &quot;nan c'est bon paye pas maggle&quot;" code="4#nan c'est bon paye pas maggle#0"/>
                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                    </item>
                </item>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
