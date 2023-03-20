var timeAct=120; timeIni=120; timeBon=1;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Acertaste, muy bien!"; messageTime="Acabo el tiempo"; messageError="Ups! verifica tus respuestas"; messageErrorG="Ups! verifica tus respuestas"; messageAttempts="intentalo de nuevo :("; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="anVlZ28wMQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["TWFudWVsIEVucmlxdWUgQXJhdWpv","VG9tYXMgUmVnYWxhZG8=","TWF4aW1pbGlhbm8gSGVybsOhbmRleiBNYXJ0w61uZXo=","UGVkcm8gSm9zw6kgRXNjYWxvbg==","QWxmb25zbyBRdWnDscOzbmV6IE1vbGluYQ=="];imaW=["manuel-enrique-araujo.jpg","220px-Tomas_Regalado_ii.jpg","Hernandez_Martinez.jpg","Escalon.jpg","alfonzo-quinonez-molina.jpg"];queW=["","","","",""];altW=["","","","",""];c=[21,14,30,18,23];
var auW=["MQ==","Mg==","Mw==","NA==","NQ=="];
var actMaxWidth="600"; actMaxHeight="300";indexG=0;profG=0;dirMedia="juego01_resources/media/"; textBNext="";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];
