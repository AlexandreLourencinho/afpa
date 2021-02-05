<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="TANT_QUE (prix!=0) FAIRE" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2defaut="" F2lignes="" F2etat="inactif"/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param maxBoucle="500000" totalAffichages="1000" totalBoucles="5000000" epaisseurLigne="2" arrondiAuto="vrai" nbDecimales="8" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#money" algoitem="money EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#smoney" algoitem="smoney EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#total" algoitem="total EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#prix" algoitem="prix EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#dix" algoitem="dix EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#cinq" algoitem="cinq EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#payé" algoitem="payé EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#prix#1#pasliste" algoitem="prix PREND_LA_VALEUR 1"/>
        <item code="5#dix#0#pasliste" algoitem="dix PREND_LA_VALEUR 0"/>
        <item code="5#cinq#0#pasliste" algoitem="cinq PREND_LA_VALEUR 0"/>
        <item code="15#prix!=0" algoitem="TANT_QUE (prix!=0) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="2#prix#pasliste" algoitem="LIRE prix"/>
            <item code="5#total#total+prix#pasliste" algoitem="total PREND_LA_VALEUR total+prix"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="4#vous devez : #0" algoitem="AFFICHER &quot;vous devez : &quot;"/>
        <item code="3#total#0#pasliste" algoitem="AFFICHER total"/>
        <item code="4# euros#0" algoitem="AFFICHER &quot; euros&quot;"/>
        <item code="2#payé#pasliste" algoitem="LIRE payé"/>
        <item code="5#money#payé-total#pasliste" algoitem="money PREND_LA_VALEUR payé-total"/>
        <item code="5#smoney#money#pasliste" algoitem="smoney PREND_LA_VALEUR money"/>
        <item code="5#dix#floor(smoney/10)#pasliste" algoitem="dix PREND_LA_VALEUR floor(smoney/10)"/>
        <item code="5#smoney#smoney-dix*10#pasliste" algoitem="smoney PREND_LA_VALEUR smoney-dix*10"/>
        <item code="5#cinq#floor(smoney/5)#pasliste" algoitem="cinq PREND_LA_VALEUR floor(smoney/5)"/>
        <item code="6#cinq==1" algoitem="SI (cinq==1) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="5#smoney#smoney-5#pasliste" algoitem="smoney PREND_LA_VALEUR smoney-5"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="4#la monnaie rendue sera de #0" algoitem="AFFICHER &quot;la monnaie rendue sera de &quot;"/>
        <item code="3#money#0#pasliste" algoitem="AFFICHER money"/>
        <item code="4#€#1" algoitem="AFFICHER &quot;€&quot;"/>
        <item code="4#cela fera : #1" algoitem="AFFICHER &quot;cela fera : &quot;"/>
        <item code="3#dix#0#pasliste" algoitem="AFFICHER dix"/>
        <item code="4#Billets de 10 euros#1" algoitem="AFFICHER &quot;Billets de 10 euros&quot;"/>
        <item code="3#cinq#0#pasliste" algoitem="AFFICHER cinq"/>
        <item code="4#billets de 5 euros#1" algoitem="AFFICHER &quot;billets de 5 euros&quot;"/>
        <item code="3#smoney#0#pasliste" algoitem="AFFICHER smoney"/>
        <item code="4#pièces de 1 euros#1" algoitem="AFFICHER &quot;pièces de 1 euros&quot;"/>
        <item code="103#commentaire" algoitem=""/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
