<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="SI ((A%400==0 OU A%4==0)) ALORS" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2para="" F2defaut="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalBoucles="5000000" epaisseurLigne="2" totalAffichages="1000" arrondiAuto="vrai" epaisseurPoint="2" maxBoucle="500000" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="J EST_DU_TYPE NOMBRE" code="1#NOMBRE#J"/>
        <item algoitem="M EST_DU_TYPE NOMBRE" code="1#NOMBRE#M"/>
        <item algoitem="A EST_DU_TYPE NOMBRE" code="1#NOMBRE#A"/>
        <item algoitem="BIS EST_DU_TYPE CHAINE" code="1#CHAINE#BIS"/>
        <item algoitem="VALIDE EST_DU_TYPE CHAINE" code="1#CHAINE#VALIDE"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="VALIDE PREND_LA_VALEUR &quot; La date n'est pas valide &quot;" code="5#VALIDE#&quot; La date n'est pas valide &quot;#pasliste"/>
        <item algoitem="AFFICHER &quot;Jour?&quot;" code="4#Jour?#0"/>
        <item algoitem="LIRE J" code="2#J#pasliste"/>
        <item algoitem="AFFICHER &quot;Mois?&quot;" code="4#Mois?#0"/>
        <item algoitem="LIRE M" code="2#M#pasliste"/>
        <item algoitem="AFFICHER &quot;Année?&quot;" code="4#Année?#0"/>
        <item algoitem="LIRE A" code="2#A#pasliste"/>
        <item algoitem="SI ((A%400==0 OU A%4==0)) ALORS" code="6#(A%400==0 OU A%4==0)">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="BIS PREND_LA_VALEUR &quot;bisex&quot;" code="5#BIS#&quot;bisex&quot;#pasliste"/>
            <item algoitem="AFFICHER BIS" code="3#BIS#0#pasliste"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="BIS PREND_LA_VALEUR &quot;pasbisex&quot;" code="5#BIS#&quot;pasbisex&quot;#pasliste"/>
                <item algoitem="AFFICHER BIS" code="3#BIS#0#pasliste"/>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
        <item algoitem="SI ((BIS==&quot;bisex&quot; et M==2 ET J&lt;=29 ET J>0) OU ((J&lt;=31 ET J>0) ET (M==1 OU M==3 OU M==5 OU M==7 OU M==8 OU M==10 OU M==12)) OU ((J&lt;=30 et J>0) ET (M==4 ou M==6 OU M==9 OU M==11))) ALORS" code="6#(BIS==&quot;bisex&quot; et M==2 ET J&lt;=29 ET J>0) OU ((J&lt;=31 ET J>0) ET (M==1 OU M==3 OU M==5 OU M==7 OU M==8 OU M==10 OU M==12)) OU ((J&lt;=30 et J>0) ET (M==4 ou M==6 OU M==9 OU M==11))">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="VALIDE PREND_LA_VALEUR &quot;La date est valide&quot;" code="5#VALIDE#&quot;La date est valide&quot;#pasliste"/>
            <item algoitem="AFFICHER VALIDE" code="3#VALIDE#0#pasliste"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="AFFICHER VALIDE" code="3#VALIDE#0#pasliste"/>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
