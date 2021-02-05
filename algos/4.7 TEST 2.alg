<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="SINON" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2para="" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param nbDecimales="8" maxBoucle="500000" totalBoucles="5000000" epaisseurPoint="2" totalAffichages="1000" arrondiAuto="vrai" epaisseurLigne="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="A EST_DU_TYPE NOMBRE" code="1#NOMBRE#A"/>
        <item algoitem="D EST_DU_TYPE NOMBRE" code="1#NOMBRE#D"/>
        <item algoitem="N EST_DU_TYPE NOMBRE" code="1#NOMBRE#N"/>
        <item algoitem="T EST_DU_TYPE NOMBRE" code="1#NOMBRE#T"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;AGE?&quot;" code="4#AGE?#0"/>
        <item algoitem="LIRE A" code="2#A#pasliste"/>
        <item algoitem="AFFICHER &quot;DUREE PERMIS&quot;" code="4#DUREE PERMIS#0"/>
        <item algoitem="LIRE D" code="2#D#pasliste"/>
        <item algoitem="AFFICHER &quot;NB ACCIDENTS&quot;" code="4#NB ACCIDENTS#0"/>
        <item algoitem="LIRE N" code="2#N#pasliste"/>
        <item algoitem="AFFICHER &quot;TEMPS CONTRAT&quot;" code="4#TEMPS CONTRAT#0"/>
        <item algoitem="LIRE T" code="2#T#pasliste"/>
        <item algoitem="SI (A&lt;25 ET D&lt;2 ET N==0) ALORS" code="6#A&lt;25 ET D&lt;2 ET N==0">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="SI (T>=1) ALORS" code="6#T>=1">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="AFFICHER &quot;orange&quot;" code="4#orange#0"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
                <item algoitem="SINON" code="9#sinon">
                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                    <item algoitem="SI (T&lt;1) ALORS" code="6#T&lt;1">
                        <item algoitem="DEBUT_SI" code="7#debutsi"/>
                        <item algoitem="AFFICHER &quot;rouge&quot;" code="4#rouge#0"/>
                        <item algoitem="FIN_SI" code="8#finsi"/>
                        <item algoitem="SINON" code="9#sinon">
                            <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                            <item algoitem="AFFICHER &quot;refus&quot;" code="4#refus#0"/>
                            <item algoitem="FIN_SINON" code="11#finsinon"/>
                        </item>
                    </item>
                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                </item>
            </item>
            <item algoitem="FIN_SI" code="8#finsi"/>
        </item>
        <item algoitem="SI ((A&lt;25 ET D>=2 ET N==0) OU (A>25 ET D&lt;2 ET N==0)) ALORS" code="6#(A&lt;25 ET D>=2 ET N==0) OU (A>25 ET D&lt;2 ET N==0)">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="SI (T>=1) ALORS" code="6#T>=1">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="AFFICHER &quot;vert&quot;" code="4#vert#0"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
                <item algoitem="SINON" code="9#sinon">
                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                    <item algoitem="AFFICHER &quot;orange&quot;" code="4#orange#0"/>
                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                </item>
            </item>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="SI ((A&lt;25 ET D>=2 ET N==1) OU (A>25 ET D&lt;2 ET N==0)) ALORS" code="6#(A&lt;25 ET D>=2 ET N==1) OU (A>25 ET D&lt;2 ET N==0)">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="SI (T>=1) ALORS" code="6#T>=1">
                        <item algoitem="DEBUT_SI" code="7#debutsi"/>
                        <item algoitem="AFFICHER &quot;ORANGE&quot;" code="4#ORANGE#0"/>
                        <item algoitem="FIN_SI" code="8#finsi"/>
                        <item algoitem="SINON" code="9#sinon">
                            <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                            <item algoitem="AFFICHER &quot;ROUGE&quot;" code="4#ROUGE#0"/>
                            <item algoitem="FIN_SINON" code="11#finsinon"/>
                        </item>
                    </item>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                    <item algoitem="SINON" code="9#sinon">
                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                        <item algoitem="SI (A>=25 ET D>=2 ET N==0) ALORS" code="6#A>=25 ET D>=2 ET N==0">
                            <item algoitem="DEBUT_SI" code="7#debutsi"/>
                            <item algoitem="SI (T>=1) ALORS" code="6#T>=1">
                                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                <item algoitem="AFFICHER &quot;BLEU&quot;" code="4#BLEU#0"/>
                                <item algoitem="FIN_SI" code="8#finsi"/>
                                <item algoitem="SINON" code="9#sinon">
                                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                    <item algoitem="AFFICHER &quot;VERT&quot;" code="4#VERT#0"/>
                                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                                </item>
                            </item>
                            <item algoitem="FIN_SI" code="8#finsi"/>
                            <item algoitem="SINON" code="9#sinon">
                                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                <item algoitem="SI (A>=25 ET D>=2 ET N==1) ALORS" code="6#A>=25 ET D>=2 ET N==1">
                                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                    <item algoitem="SI (T>=1) ALORS" code="6#T>=1">
                                        <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                        <item algoitem="AFFICHER &quot;vert&quot;" code="4#vert#0"/>
                                        <item algoitem="FIN_SI" code="8#finsi"/>
                                        <item algoitem="SINON" code="9#sinon">
                                            <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                            <item algoitem="AFFICHER &quot;orange&quot;" code="4#orange#0"/>
                                            <item algoitem="FIN_SINON" code="11#finsinon"/>
                                        </item>
                                    </item>
                                    <item algoitem="FIN_SI" code="8#finsi"/>
                                    <item algoitem="SINON" code="9#sinon">
                                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                        <item algoitem="SI (A>=25 ET D>=2 ET N==2) ALORS" code="6#A>=25 ET D>=2 ET N==2">
                                            <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                            <item algoitem="SI (T>=1) ALORS" code="6#T>=1">
                                                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                                <item algoitem="AFFICHER &quot;orange&quot;" code="4#orange#0"/>
                                                <item algoitem="FIN_SI" code="8#finsi"/>
                                                <item algoitem="SINON" code="9#sinon">
                                                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                                    <item algoitem="AFFICHER &quot;rouge&quot;" code="4#rouge#0"/>
                                                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                                                </item>
                                            </item>
                                            <item algoitem="FIN_SI" code="8#finsi"/>
                                            <item algoitem="SINON" code="9#sinon">
                                                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                                <item algoitem="AFFICHER &quot;pas assuré&quot;" code="4#pas assuré#0"/>
                                                <item algoitem="FIN_SINON" code="11#finsinon"/>
                                            </item>
                                        </item>
                                        <item algoitem="AFFICHER &quot;pas assuré&quot;" code="4#pas assuré#0"/>
                                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                                    </item>
                                </item>
                                <item algoitem="FIN_SINON" code="11#finsinon"/>
                            </item>
                        </item>
                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                    </item>
                </item>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
