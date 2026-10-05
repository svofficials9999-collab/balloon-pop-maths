// Telugu literature and poets, batch 3 (original wording). Q(question te§en,[correct te~en,w1,w2,w3],explanation te§en)
// SOURCES (each fact checked in 2+ sources; conflicting or single-source facts left out):
//  [KT] te.wikipedia.org/wiki/కవిత్రయం + te.wikipedia.org/wiki/ఆంధ్ర_మహాభారతము + en.wikipedia.org/wiki/Nannaya (Kavitrayam = Nannaya, Tikkana, Errana; Tikkana wrote 15 parvas; Aranya parva left incomplete)
//  [NN] te.wikipedia.org/wiki/నన్నయ్య + en.wikipedia.org/wiki/Nannaya + telugukiranam.com (Adikavi, Rajaraja Narendra, Rajamahendravaram, Adi and Sabha parvas, Aranya part). Birthplace and exact dates left out (sources differ or single source)
//  [ER] te.wikipedia.org/wiki/ఎర్రన + sanchika.com/kavya-parimalam-8 and -9 + telugujagruti.blogspot.com (Prabandha Parameswara, Shambhudasa, Prolaya Vemareddy, Haravamsam, Nrisimha Purana). Exact dates left out
//  [PO] te.wikipedia.org/wiki/శ్రీమదాంధ్ర_భాగవతము + en.wikipedia.org/wiki/Pothana (Bammera Pothana, Andhra Maha Bhagavatam). Dates left out (sources differ)
//  [SN] te.wikipedia.org/wiki/భీమేశ్వర_పురాణము + eemaata.com/em/issues/201605/8709.html (Srinatha, Bhimeswara Purana, Draksharamam, 15th century)
//  [PE] te.wikipedia.org/wiki/అల్లసాని_పెద్దన + pratibha.eenadu.net (Andhra Kavita Pitamaha, Ashtadiggajas, Manucharitra first prabandha) + escholarship.org/uc/item/9v6585kp + eemaata.com/em/issues/200303/308.html (Amuktamalyada by Krishnadevaraya)
//  [VE] te.wikipedia.org/wiki/వేమన_శతకము + te.wikipedia.org/wiki/వేమన + telugutenelu.blogspot.com + gotelugu.com (makutam, Atavelati, praja kavi). Dates left out: sources give 1367-1478 and 1652-1730
//  [SU] te.wikipedia.org/wiki/సుమతీ_శతకము + en.wikipedia.org/wiki/Sumathi_Satakam + archive.org/details/sumati-satakam + teachersbadi.in (Baddena attributed, makutam Sumati, kanda padyas, about 1260 CE, neeti)
//  [GU] te.wikipedia.org/wiki/గురజాడ_అప్పారావు + archives.prajasakti.com + telugupoets.com + te.wikisource.org (born 21 Sept 1862, Kanyasulkam, Desamunu Preminchumanna)
//  [SS] te.wikipedia.org/wiki/శ్రీశ్రీ + te.wikipedia.org/wiki/మహాప్రస్థానం + archive.org/details/maha-prasthanam-sri-sri (Srirangam Srinivasarao 1910-1983, Mahaprasthanam)
//  [BD] bbc.com/telugu/india-53956036 + newindianexpress.com Aug 29 2024 + telangana.thefederal.com + ntvtelugu.com (Aug 29, Gidugu Venkata Ramamurthy, 1863-1940, vyavaharika bhasha). One site gave 1854 as birth year; disagrees with 4 others, so ignored
(function(){const Q=(q,o,e)=>q+'|'+o.join('|')+'|'+e;const A=LD.add;
const H=(t,e)=>'# '+t+'§# '+e, X=(t,e)=>{if(t.indexOf('§')>=0){const a=t.split('§');t=a[0];e=a[1];}return '> '+t+'§> '+e;};

A('telugu',[7,8,9,10],{id:'tel_kavitrayam',i:'📜',te:'కవిత్రయం - ఆంధ్ర మహాభారతం',en:'Kavitrayam - Andhra Mahabharatam',kw:'kavitrayam nannaya tikkana errana errapragada andhra mahabharatam vyasa parvalu కవిత్రయం నన్నయ తిక్కన ఎర్రన ఆంధ్ర మహాభారతం పర్వాలు',
n:[H('కవిత్రయం','The poet trio'),
'సంస్కృతంలో వ్యాసుడు రాసిన మహాభారతాన్ని తెలుగులోకి అనువదించిన ముగ్గురు కవులను కవిత్రయం అంటారు.§The three poets who put the Mahabharata, written in Sanskrit by Vyasa, into Telugu are called the Kavitrayam.',
X('కవిత్రయం: నన్నయ, తిక్కన, ఎర్రన.§The Kavitrayam: Nannaya, Tikkana, Errana.'),
H('ఎవరు ఏ భాగం','Who wrote which part'),
'నన్నయ ఆది, సభా పర్వాలను రాశాడు. అరణ్య పర్వాన్ని కొంత వరకే రాయగలిగాడు.§Nannaya wrote the Adi and Sabha parvas, and only part of the Aranya parva.',
'తిక్కన విరాట పర్వం నుంచి చివరి వరకు మిగిలిన 15 పర్వాలను రాశాడు. అరణ్య పర్వంలో మిగిలిన భాగాన్ని ఎర్రన పూర్తి చేశాడు.§Tikkana wrote the remaining 15 parvas. Errana finished the rest of the Aranya parva.',
'ముగ్గురూ తెలుగు సాహిత్యంలో ప్రసిద్ధులు. ఈ గ్రంథాన్ని ఆంధ్ర మహాభారతం అంటారు.§All three are famous in Telugu literature. The work is called Andhra Mahabharatam.'],
q:[Q('కవిత్రయంలో లేని కవి ఎవరు?§Who is NOT in the Kavitrayam?',['పోతన~Pothana','నన్నయ~Nannaya','తిక్కన~Tikkana','ఎర్రన~Errana'],'కవిత్రయం నన్నయ, తిక్కన, ఎర్రన. పోతన భాగవతం రాశాడు.§Kavitrayam is Nannaya, Tikkana, Errana. Pothana wrote the Bhagavatam.'),
Q('కవిత్రయం ఏ గ్రంథాన్ని తెలుగులోకి అనువదించింది?§Which work did the Kavitrayam translate into Telugu?',['మహాభారతం~Mahabharata','భాగవతం~Bhagavatam','రామాయణం~Ramayana','కన్యాశుల్కం~Kanyasulkam'],'వ్యాసుని సంస్కృత మహాభారతాన్ని అనువదించారు.§They translated Vyasa Sanskrit Mahabharata.'),
Q('తిక్కన ఎన్ని పర్వాలు రాశాడు?§How many parvas did Tikkana write?',['15','2','5','18'],'తిక్కన 15 పర్వాలు రాశాడు.§Tikkana wrote 15 parvas.'),
Q('నన్నయ రాసిన పర్వాలు ఏవి?§Which parvas did Nannaya write?',['ఆది, సభా (అరణ్యం కొంత)~Adi, Sabha (part of Aranya)','విరాట, ఉద్యోగ~Virata, Udyoga','భీష్మ, ద్రోణ~Bhishma, Drona','స్వర్గారోహణ~Svargarohana'],'నన్నయ ఆది, సభా పర్వాలు, అరణ్యం కొంత రాశాడు.§Nannaya wrote Adi, Sabha and part of Aranya.'),
Q('అరణ్య పర్వంలో మిగిలిన భాగాన్ని ఎవరు పూర్తి చేశారు?§Who finished the rest of the Aranya parva?',['ఎర్రన~Errana','తిక్కన~Tikkana','పోతన~Pothana','శ్రీనాథుడు~Srinatha'],'ఎర్రన అరణ్య పర్వ శేషాన్ని రాశాడు.§Errana wrote the remainder of Aranya parva.'),
Q('తెలుగు మహాభారతానికి మరో పేరు ఏమిటి?§What is Telugu Mahabharata called?',['ఆంధ్ర మహాభారతం~Andhra Mahabharatam','శ్రీమదాంధ్ర భాగవతం~Andhra Bhagavatam','మనుచరిత్ర~Manucharitra','మహాప్రస్థానం~Mahaprasthanam'],'దీనిని ఆంధ్ర మహాభారతం అంటారు.§It is called Andhra Mahabharatam.')]});

A('telugu',[7,8,9,10],{id:'tel_nannaya',i:'🖋️',te:'నన్నయ - ఆదికవి',en:'Nannaya - the Adikavi',kw:'nannaya nannayya adikavi rajaraja narendra rajamahendravaram champu andhra mahabharatam నన్నయ ఆదికవి రాజరాజ నరేంద్రుడు రాజమహేంద్రవరం',
n:[H('నన్నయ','Nannaya'),
'నన్నయ తెలుగు సాహిత్యంలో ఆదికవిగా ప్రసిద్ధుడు. ఆది అంటే మొదటి.§Nannaya is famous as the Adikavi of Telugu. Adi means first.',
'ఆయన 11వ శతాబ్దానికి చెందినవాడు.§He belongs to the 11th century.',
'రాజమహేంద్రవరాన్ని రాజధానిగా చేసుకుని పాలించిన రాజరాజ నరేంద్రుని ఆస్థాన కవి నన్నయ.§Nannaya was the court poet of Rajaraja Narendra, who ruled from Rajamahendravaram.',
'రాజరాజ నరేంద్రుడు ప్రోత్సహించగా నన్నయ మహాభారతాన్ని తెలుగులో రాయడం మొదలుపెట్టాడు.§Encouraged by Rajaraja Narendra, Nannaya began writing the Mahabharata in Telugu.',
'ఆయన ఆది, సభా పర్వాలు రాసి, అరణ్య పర్వాన్ని కొంత వరకే రాశాడు. రచన చంపూ శైలిలో ఉంది (పద్యం, గద్యం కలిసి).§He wrote the Adi and Sabha parvas and part of the Aranya parva. The style is champu (verse and prose together).',
X('నన్నయ = ఆదికవి = కవిత్రయంలో మొదటివాడు.§Nannaya = Adikavi = first of the Kavitrayam.')],
q:[Q('తెలుగు ఆదికవి ఎవరు?§Who is the Adikavi of Telugu?',['నన్నయ~Nannaya','తిక్కన~Tikkana','పోతన~Pothana','వేమన~Vemana'],'నన్నయను ఆదికవి అంటారు.§Nannaya is called the Adikavi.'),
Q('నన్నయ ఎవరి ఆస్థాన కవి?§Whose court poet was Nannaya?',['రాజరాజ నరేంద్రుడు~Rajaraja Narendra','శ్రీకృష్ణదేవరాయలు~Krishnadevaraya','ప్రోలయ వేమారెడ్డి~Prolaya Vemareddy','అశోకుడు~Ashoka'],'నన్నయ రాజరాజ నరేంద్రుని ఆస్థాన కవి.§Nannaya was Rajaraja Narendra court poet.'),
Q('రాజరాజ నరేంద్రుని రాజధాని ఏది?§Capital of Rajaraja Narendra?',['రాజమహేంద్రవరం~Rajamahendravaram','విజయనగరం~Vijayanagara','వరంగల్లు~Warangal','హైదరాబాద్~Hyderabad'],'రాజమహేంద్రవరం రాజధాని.§Rajamahendravaram was the capital.'),
Q('నన్నయ ఏ శతాబ్దానికి చెందినవాడు?§Which century was Nannaya from?',['11వ శతాబ్దం~11th','15వ శతాబ్దం~15th','19వ శతాబ్దం~19th','20వ శతాబ్దం~20th'],'నన్నయ 11వ శతాబ్దం వాడు.§Nannaya is of the 11th century.'),
Q('నన్నయ రచన ఏ శైలిలో ఉంది?§In which style is his work?',['చంపూ~Champu','కేవలం గద్యం~Only prose','వచన కవిత~Free verse','నాటకం~Drama'],'పద్యం, గద్యం కలిసిన చంపూ శైలి.§Champu, verse and prose mixed.'),
Q('నన్నయ ఏ గ్రంథాన్ని ప్రారంభించాడు?§Which work did Nannaya begin?',['ఆంధ్ర మహాభారతం~Andhra Mahabharatam','ఆముక్తమాల్యద~Amuktamalyada','సుమతీ శతకం~Sumati Satakam','భీమేశ్వర పురాణం~Bhimeswara Purana'],'ఆంధ్ర మహాభారతం ప్రారంభించాడు.§He began Andhra Mahabharatam.')]});

A('telugu',[7,8,9,10],{id:'tel_errana',i:'🖋️',te:'ఎర్రన - ప్రబంధ పరమేశ్వరుడు',en:'Errana - Prabandha Parameswara',kw:'errana errapragada prabandha parameswara shambhudasa haravamsam nrisimha puranam prolaya vemareddy ఎర్రన ఎర్రాప్రగడ ప్రబంధ పరమేశ్వరుడు శంభుదాసుడు హరివంశం నృసింహపురాణం',
n:[H('ఎర్రన','Errana'),
'ఎర్రన కవిత్రయంలో మూడవ కవి. ఆయన ఎర్రాప్రగడ అనే పేరుతో కూడా ప్రసిద్ధుడు.§Errana is the third poet of the Kavitrayam. He is also known as Errapragada.',
'ఆయన 14వ శతాబ్దంలో ప్రోలయ వేమారెడ్డి ఆస్థానంలో ఉన్నాడు.§He lived in the 14th century at the court of Prolaya Vemareddy.',
'నన్నయ వదిలేసిన అరణ్య పర్వంలోని మిగిలిన భాగాన్ని రాసి భారత రచనను కలిపాడు.§He wrote the rest of the Aranya parva that Nannaya left, joining the Mahabharata work.',
'ఆయనకు రెండు బిరుదులు ఉన్నాయి: శంభుదాసుడు, ప్రబంధ పరమేశ్వరుడు.§He has two titles: Shambhudasa and Prabandha Parameswara.',
'ఎర్రన నృసింహ పురాణం, హరివంశం కూడా రాశాడు.§Errana also wrote Nrisimha Purana and Haravamsam (Harivamsa).',
X('ఎర్రన = శంభుదాసుడు = ప్రబంధ పరమేశ్వరుడు.§Errana = Shambhudasa = Prabandha Parameswara.')],
q:[Q('ఎర్రన బిరుదు ఏది?§Which is a title of Errana?',['ప్రబంధ పరమేశ్వరుడు~Prabandha Parameswara','ఆంధ్ర కవితా పితామహుడు~Andhra Kavita Pitamaha','ఆదికవి~Adikavi','ప్రజాకవి~Prajakavi'],'ఎర్రనకు ప్రబంధ పరమేశ్వరుడు, శంభుదాసుడు బిరుదులు.§Titles: Prabandha Parameswara, Shambhudasa.'),
Q('ఎర్రన ఎవరి ఆస్థాన కవి?§Whose court poet was Errana?',['ప్రోలయ వేమారెడ్డి~Prolaya Vemareddy','రాజరాజ నరేంద్రుడు~Rajaraja Narendra','శ్రీకృష్ణదేవరాయలు~Krishnadevaraya','మనుమసిద్ధి~Manumasiddhi'],'ప్రోలయ వేమారెడ్డి ఆస్థానంలో ఉన్నాడు.§At the court of Prolaya Vemareddy.'),
Q('ఎర్రన ఏ పర్వంలో మిగిలిన భాగాన్ని రాశాడు?§Errana finished the rest of which parva?',['అరణ్య పర్వం~Aranya','సభా పర్వం~Sabha','ఆది పర్వం~Adi','విరాట పర్వం~Virata'],'అరణ్య పర్వ శేషం రాశాడు.§He wrote the rest of Aranya.'),
Q('ఎర్రన రాసిన గ్రంథం ఏది?§Which work did Errana write?',['నృసింహ పురాణం~Nrisimha Purana','మనుచరిత్ర~Manucharitra','కన్యాశుల్కం~Kanyasulkam','సుమతీ శతకం~Sumati Satakam'],'నృసింహ పురాణం ఆయన రచన.§Nrisimha Purana is his work.'),
Q('కవిత్రయంలో ఎర్రన స్థానం ఎన్నవది?§Errana position in Kavitrayam?',['మూడవది~Third','మొదటిది~First','రెండవది~Second','నాలుగవది~Fourth'],'నన్నయ, తిక్కన, ఎర్రన.§Nannaya, Tikkana, Errana.')]});

A('telugu',[7,8,9,10],{id:'tel_pothana',i:'🙏',te:'బమ్మెర పోతన - భాగవతం',en:'Bammera Pothana - Bhagavatam',kw:'pothana bammera potana bhagavatam andhra maha bhagavatam puranam బమ్మెర పోతన భాగవతం శ్రీమదాంధ్ర భాగవతం',
n:[H('పోతన','Pothana'),
'బమ్మెర పోతన తెలుగు కవి. ఆయన సంస్కృత భాగవతాన్ని తెలుగులోకి అనువదించాడు.§Bammera Pothana was a Telugu poet who put the Sanskrit Bhagavatam into Telugu.',
'ఈ గ్రంథం పేరు శ్రీమదాంధ్ర మహా భాగవతం. దీనిని పోతన భాగవతం అని కూడా అంటారు.§The work is Srimad Andhra Maha Bhagavatam, also called Pothana Bhagavatam.',
'భాగవతం పద్దెనిమిది పురాణాలలో ఒకటి.§The Bhagavatam is one of the eighteen puranas.',
'గ్రంథ రచనలో పోతనతో పాటు వెలిగందల నారయ, గంగన, సింగన కూడా పాలుపంచుకున్నారు.§Veligandala Narayya, Gangana and Singana also took part in writing, along with Pothana.',
X('పోతన = భాగవతం. నన్నయ, తిక్కన, ఎర్రన = భారతం.§Pothana = Bhagavatam. Nannaya, Tikkana, Errana = Bharatam.')],
q:[Q('పోతన తెలుగులోకి అనువదించిన గ్రంథం ఏది?§Which work did Pothana translate?',['భాగవతం~Bhagavatam','మహాభారతం~Mahabharatam','ఆముక్తమాల్యద~Amuktamalyada','వేమన శతకం~Vemana Satakam'],'పోతన భాగవతాన్ని అనువదించాడు.§Pothana translated the Bhagavatam.'),
Q('పోతన ఇంటి పేరు ఏమిటి?§Pothana is known by which place name?',['బమ్మెర~Bammera','తణుకు~Tanuku','గుడ్లూరు~Gudluru','పర్లాకిమిడి~Parlakimidi'],'బమ్మెర పోతన అంటారు.§He is called Bammera Pothana.'),
Q('భాగవతం ఎన్ని పురాణాలలో ఒకటి?§The Bhagavatam is one of how many puranas?',['18','10','4','108'],'అష్టాదశ (18) పురాణాలలో ఒకటి.§One of the 18 puranas.'),
Q('పోతన భాగవత రచనలో పాలుపంచుకున్నవారు ఎవరు?§Who also took part in the Bhagavatam work?',['వెలిగందల నారయ, గంగన, సింగన~Veligandala Narayya, Gangana, Singana','నన్నయ, తిక్కన~Nannaya, Tikkana','వేమన, బద్దెన~Vemana, Baddena','గురజాడ, శ్రీశ్రీ~Gurajada, Sri Sri'],'ఈ ముగ్గురు సహకరించారు.§These three helped.'),
Q('పోతన భాగవతం ఏ భాషలో రాసిన గ్రంథానికి అనువాదం?§Pothana Bhagavatam is a translation from?',['సంస్కృతం~Sanskrit','తమిళం~Tamil','కన్నడం~Kannada','ఉర్దూ~Urdu'],'సంస్కృత భాగవతానికి అనువాదం.§Translation of the Sanskrit Bhagavatam.')]});

A('telugu',[8,9,10],{id:'tel_srinatha',i:'🏛️',te:'శ్రీనాథుడు - భీమేశ్వర పురాణం',en:'Srinatha - Bhimeswara Purana',kw:'srinatha srinadhudu bhimeswara puranam bhimakhandam draksharamam prabandha శ్రీనాథుడు భీమేశ్వర పురాణం భీమఖండం ద్రాక్షారామం',
n:[H('శ్రీనాథుడు','Srinatha'),
'శ్రీనాథుడు 15వ శతాబ్దపు తెలుగు కవి.§Srinatha was a Telugu poet of the 15th century.',
'ఆయన రాసిన భీమేశ్వర పురాణం ఒక ప్రబంధం. దీనికి భీమఖండం అనే మరో పేరు ఉంది.§His Bhimeswara Purana is a prabandha. It has another name, Bhimakhandam.',
'ఈ కావ్యం ద్రాక్షారామంలోని భీమేశ్వరుని మహిమను చెబుతుంది.§The work tells the glory of Bhimeswara of Draksharamam.',
'ఇది స్థల మహాత్మ్యాన్ని తెలిపే కావ్యం.§It is a work on the glory of a holy place.',
X('శ్రీనాథుడు = భీమేశ్వర పురాణం (ద్రాక్షారామం).§Srinatha = Bhimeswara Purana (Draksharamam).')],
q:[Q('భీమేశ్వర పురాణం రాసింది ఎవరు?§Who wrote Bhimeswara Purana?',['శ్రీనాథుడు~Srinatha','పోతన~Pothana','నన్నయ~Nannaya','వేమన~Vemana'],'శ్రీనాథుడు రాశాడు.§Srinatha wrote it.'),
Q('భీమేశ్వర పురాణానికి మరో పేరు?§Another name of Bhimeswara Purana?',['భీమఖండం~Bhimakhandam','కాశీఖండం~Kashikhandam','భారతం~Bharatam','మనుచరిత్ర~Manucharitra'],'భీమఖండం అనే నామాంతరం ఉంది.§Also called Bhimakhandam.'),
Q('ఈ కావ్యంలోని క్షేత్రం ఏది?§Which holy place is in this work?',['ద్రాక్షారామం~Draksharamam','తిరుపతి~Tirupati','శ్రీశైలం~Srisailam','యాదగిరి~Yadagiri'],'ద్రాక్షారామ భీమేశ్వరుని మహిమ.§Glory of Bhimeswara at Draksharamam.'),
Q('శ్రీనాథుడు ఏ శతాబ్దపు కవి?§Srinatha belongs to which century?',['15వ శతాబ్దం~15th','11వ శతాబ్దం~11th','19వ శతాబ్దం~19th','20వ శతాబ్దం~20th'],'15వ శతాబ్దం.§15th century.'),
Q('భీమేశ్వర పురాణం ఏ రకం కావ్యం?§What type of work is Bhimeswara Purana?',['ప్రబంధం~Prabandha','శతకం~Satakam','నాటకం~Drama','కథల సంపుటి~Short stories'],'ఇది ఒక తెలుగు ప్రబంధం.§It is a Telugu prabandha.')]});

A('telugu',[8,9,10],{id:'tel_peddana',i:'👑',te:'అల్లసాని పెద్దన, శ్రీకృష్ణదేవరాయలు',en:'Allasani Peddana and Krishnadevaraya',kw:'peddana allasani manucharitra krishnadevaraya amuktamalyada ashtadiggajalu andhra kavita pitamaha అల్లసాని పెద్దన మనుచరిత్ర శ్రీకృష్ణదేవరాయలు ఆముక్తమాల్యద అష్టదిగ్గజాలు ఆంధ్ర కవితా పితామహుడు',
n:[H('పెద్దన','Peddana'),
'అల్లసాని పెద్దన శ్రీకృష్ణదేవరాయల ఆస్థానంలోని అష్టదిగ్గజ కవులలో అగ్రగణ్యుడు.§Allasani Peddana was the foremost of the Ashtadiggaja poets in the court of Sri Krishnadevaraya.',
'ఆయన బిరుదు ఆంధ్ర కవితా పితామహుడు.§His title is Andhra Kavita Pitamaha.',
'పెద్దన రాసిన మనుచరిత్ర (స్వారోచిష మనుసంభవం) తెలుగులో మొదటి ప్రబంధం అని చెబుతారు.§Peddana Manucharitra (Swarochisha Manusambhavam) is said to be the first prabandha in Telugu.',
H('కృష్ణదేవరాయలు','Krishnadevaraya'),
'శ్రీకృష్ణదేవరాయలు విజయనగర చక్రవర్తి. ఆయన తెలుగులో ఆముక్తమాల్యద కావ్యం రాశాడు.§Sri Krishnadevaraya was the Vijayanagara emperor. He wrote the Telugu work Amuktamalyada.',
'ఆయన ఆస్థానంలోని ఎనిమిది మంది కవులను అష్టదిగ్గజాలు అంటారు.§The eight poets of his court are called the Ashtadiggajas.',
X('పెద్దన = మనుచరిత్ర. రాయలు = ఆముక్తమాల్యద.§Peddana = Manucharitra. Raya = Amuktamalyada.')],
q:[Q('మనుచరిత్ర రచయిత ఎవరు?§Who wrote Manucharitra?',['అల్లసాని పెద్దన~Allasani Peddana','పోతన~Pothana','శ్రీనాథుడు~Srinatha','తిక్కన~Tikkana'],'పెద్దన మనుచరిత్ర రాశాడు.§Peddana wrote Manucharitra.'),
Q('ఆంధ్ర కవితా పితామహుడు ఎవరు?§Who is Andhra Kavita Pitamaha?',['అల్లసాని పెద్దన~Allasani Peddana','వేమన~Vemana','గురజాడ~Gurajada','శ్రీశ్రీ~Sri Sri'],'పెద్దనకు ఈ బిరుదు ఉంది.§Peddana has this title.'),
Q('ఆముక్తమాల్యద రాసింది ఎవరు?§Who wrote Amuktamalyada?',['శ్రీకృష్ణదేవరాయలు~Sri Krishnadevaraya','నన్నయ~Nannaya','బద్దెన~Baddena','ఎర్రన~Errana'],'రాయలు రాశాడు.§Krishnadevaraya wrote it.'),
Q('అష్టదిగ్గజాలు అంటే ఎంతమంది కవులు?§How many poets are Ashtadiggajas?',['ఎనిమిది~Eight','నలుగురు~Four','తొమ్మిది~Nine','పది~Ten'],'అష్ట = ఎనిమిది.§Ashta = eight.'),
Q('శ్రీకృష్ణదేవరాయలు ఏ సామ్రాజ్య చక్రవర్తి?§Krishnadevaraya ruled which empire?',['విజయనగరం~Vijayanagara','మౌర్య~Maurya','మొఘల్~Mughal','గుప్త~Gupta'],'విజయనగర చక్రవర్తి.§Vijayanagara emperor.'),
Q('తెలుగులో మొదటి ప్రబంధం అని ఏ కావ్యాన్ని చెబుతారు?§Which is said to be the first Telugu prabandha?',['మనుచరిత్ర~Manucharitra','కన్యాశుల్కం~Kanyasulkam','మహాప్రస్థానం~Mahaprasthanam','వేమన శతకం~Vemana Satakam'],'మనుచరిత్రను మొదటి ప్రబంధం అంటారు.§Manucharitra is called the first prabandha.')]});

A('telugu',[4,5,6,7,8],{id:'tel_vemana',i:'🌿',te:'వేమన శతకం',en:'Vemana Satakam',kw:'vemana satakam atavelati makutam vishwadabhirama vinuravema prajakavi వేమన శతకం ఆటవెలది మకుటం విశ్వదాభిరామ వినురవేమ ప్రజాకవి',
n:[H('వేమన','Vemana'),
'వేమన ప్రజాకవి, సంఘ సంస్కర్త అని పేరు పొందాడు.§Vemana is known as a poet of the people and a social reformer.',
'వేమన పద్యాల మకుటం: విశ్వదాభిరామ వినురవేమ.§The makutam of Vemana poems: విశ్వదాభిరామ వినురవేమ.',
'ఆయన పద్యాలన్నీ ఆటవెలది ఛందస్సులో ఉన్నాయి.§All his poems are in the Atavelati metre.',
'లోతైన భావాన్ని సులభమైన మాటలతో, ఉదాహరణలతో చెప్పడం వేమన ప్రత్యేకత.§Vemana speciality is saying deep ideas in simple words with examples.',
X('అల్పుడెపుడు బల్కు నాడంబరముగాను, సజ్జనుండు బల్కు చల్లగాను; కంచు మ్రోగునట్లు కనకంబు మ్రోగునా?§Example: a small-minded person boasts loudly, a good person speaks softly; bronze rings loud, does gold?'),
'మకుటం అంటే శతకంలోని ప్రతి పద్యం చివర వచ్చే ఒకే పాదం లేదా మాటలు.§Makutam is the same line or words that come at the end of every poem of a satakam.'],
q:[Q('వేమన శతక మకుటం ఏది?§What is Vemana makutam?',['విశ్వదాభిరామ వినురవేమ~Vishwadabhirama Vinura Vema','సుమతీ~Sumati','కుమారా~Kumara','దాశరథీ~Dasarathi'],'వేమన మకుటం విశ్వదాభిరామ వినురవేమ.§This is the makutam.'),
Q('వేమన పద్యాలు ఏ ఛందస్సులో ఉన్నాయి?§Metre of Vemana poems?',['ఆటవెలది~Atavelati','కందం~Kandam','ఉత్పలమాల~Utpalamala','మత్తేభం~Mattebham'],'ఆటవెలది.§Atavelati.'),
Q('వేమనను ఏ పేరుతో పిలుస్తారు?§Vemana is called?',['ప్రజాకవి~Prajakavi','ఆదికవి~Adikavi','ప్రబంధ పరమేశ్వరుడు~Prabandha Parameswara','మహాకవి శ్రీశ్రీ~Mahakavi Sri Sri'],'వేమనను ప్రజాకవి అంటారు.§Called Prajakavi.'),
Q('మకుటం అంటే ఏమిటి?§What is a makutam?',['ప్రతి పద్యం చివర వచ్చే మాట~Words at the end of each poem','పద్యం మొదటి అక్షరం~First letter','కవి వయసు~Poet age','పద్యంలోని పాదాల సంఖ్య~Number of lines'],'ప్రతి పద్యం చివర వచ్చే ఒకే మాటలు.§Same words ending every poem.'),
Q('వేమన పద్యాలు ఎటువంటి భాషలో ఉంటాయి?§What language style do Vemana poems have?',['సరళమైన భాష~Simple language','కఠినమైన సంస్కృత సమాసాలు~Hard Sanskrit compounds','ఆంగ్లం~English','ఉర్దూ~Urdu'],'సరళమైన మాటలతో చెప్పాడు.§He used simple words.')]});

A('telugu',[4,5,6,7,8],{id:'tel_sumati',i:'📖',te:'సుమతీ శతకం',en:'Sumati Satakam',kw:'sumati satakam sumathi baddena kandam neeti makutam సుమతీ శతకం బద్దెన కందం నీతి మకుటం',
n:[H('సుమతీ శతకం','Sumati Satakam'),
'సుమతీ శతకం తెలుగులో ప్రసిద్ధమైన నీతి శతకం.§Sumati Satakam is a famous moral (neeti) satakam in Telugu.',
'దీనిని బద్దెన రాశాడని చెబుతారు. రచన కాలం సుమారు 13వ శతాబ్దం.§It is said to be written by Baddena, around the 13th century.',
'ఈ శతకం మకుటం సుమతీ. సుమతి అంటే మంచి బుద్ధి గలవాడు.§The makutam is Sumati. Sumati means a person with good sense.',
'పద్యాలు కంద పద్యాలు.§The poems are kanda padyams (Kandam metre).',
'మొదటి పద్యం: శ్రీ రాముని దయచేతను నారూఢిగ సకల జనులు నౌరా యనగా...§First poem begins: శ్రీ రాముని దయచేతను నారూఢిగ సకల జనులు నౌరా యనగా...',
X('బద్దెన = సుమతీ శతకం = కందం.§Baddena = Sumati Satakam = Kandam.')],
q:[Q('సుమతీ శతకం రచయిత ఎవరు?§Author of Sumati Satakam?',['బద్దెన~Baddena','వేమన~Vemana','పోతన~Pothana','గురజాడ~Gurajada'],'బద్దెన రాశాడని చెబుతారు.§Attributed to Baddena.'),
Q('సుమతీ శతక మకుటం ఏది?§Makutam of Sumati Satakam?',['సుమతీ~Sumati','వినురవేమ~Vinura Vema','దాశరథీ~Dasarathi','కుమారీ~Kumari'],'మకుటం సుమతీ.§The makutam is Sumati.'),
Q('సుమతీ శతకం ఏ ఛందస్సులో ఉంది?§Metre of Sumati Satakam?',['కందం~Kandam','ఆటవెలది~Atavelati','శార్దూలం~Shardulam','చంపకమాల~Champakamala'],'కంద పద్యాలు.§Kanda padyams.'),
Q('సుమతీ శతకం ఏ రకం శతకం?§What kind of satakam?',['నీతి శతకం~Moral','భక్తి శతకం మాత్రమే~Only devotional','హాస్య శతకం~Comic','చరిత్ర~History'],'నీతి పద్యాలు.§Moral poems.'),
Q('సుమతి అంటే అర్థం?§Meaning of sumati?',['మంచి బుద్ధి గలవాడు~Person of good sense','ధనవంతుడు~Rich person','బలవంతుడు~Strong person','రాజు~King'],'సు = మంచి, మతి = బుద్ధి.§Su = good, mati = mind.'),
Q('శతకం అంటే ఎన్ని పద్యాల సమూహం అని పేరు సూచిస్తుంది?§The word satakam suggests a group of how many poems?',['నూరు~100','పది~10','వెయ్యి~1000','ఐదు~5'],'శతం = వంద.§Satam = hundred.')]});

A('telugu',[6,7,8,9,10],{id:'tel_gurajada',i:'🎭',te:'గురజాడ అప్పారావు',en:'Gurajada Apparao',kw:'gurajada apparao kanyasulkam desamunu preminchumanna nataka modern telugu గురజాడ అప్పారావు కన్యాశుల్కం దేశమును ప్రేమించుమన్నా',
n:[H('గురజాడ','Gurajada'),
'గురజాడ అప్పారావు 1862 సెప్టెంబరు 21న జన్మించిన తెలుగు కవి, రచయిత.§Gurajada Apparao was a Telugu poet and writer born on 21 September 1862.',
'ఆయన తన రచనలతో సమాజాన్ని మార్చడానికి ప్రయత్నించాడు.§He tried to change society through his writings.',
'కన్యాశుల్కం ఆయన ప్రసిద్ధ నాటకం. కన్యాశుల్కం అనే దురాచారాన్ని ఇది విమర్శిస్తుంది.§Kanyasulkam is his famous play. It criticises the bad custom of kanyasulkam.',
'దేశమును ప్రేమించుమన్నా ఆయన రాసిన దేశభక్తి గీతం.§Desamunu Preminchumanna is a patriotic song he wrote.',
X('దేశమును ప్రేమించుమన్నా, మంచి అన్నది పెంచుమన్నా; వొట్టి మాటలు కట్టిపెట్టోయ్, గట్టి మేల్ తలపెట్టవోయ్.§Love your country, grow what is good; stop empty talk, plan some solid good.')],
q:[Q('కన్యాశుల్కం నాటక రచయిత ఎవరు?§Who wrote the play Kanyasulkam?',['గురజాడ అప్పారావు~Gurajada Apparao','శ్రీశ్రీ~Sri Sri','పోతన~Pothana','బద్దెన~Baddena'],'గురజాడ రాశాడు.§Gurajada wrote it.'),
Q('గురజాడ ఎప్పుడు జన్మించాడు?§When was Gurajada born?',['1862 సెప్టెంబరు 21~21 Sept 1862','1910 ఏప్రిల్ 30~30 April 1910','1863 ఆగస్టు 29~29 Aug 1863','1983 జూన్ 15~15 June 1983'],'1862 సెప్టెంబరు 21.§21 September 1862.'),
Q('కన్యాశుల్కం నాటకం దేనిని విమర్శిస్తుంది?§What does Kanyasulkam criticise?',['కన్యాశుల్కం అనే దురాచారాన్ని~The custom of kanyasulkam','విద్యను~Education','వ్యవసాయాన్ని~Farming','క్రీడలను~Sports'],'ఆ దురాచారాన్ని విమర్శిస్తుంది.§It criticises that custom.'),
Q('దేశమును ప్రేమించుమన్నా ఎటువంటి గీతం?§What kind of song is Desamunu Preminchumanna?',['దేశభక్తి గీతం~Patriotic song','శృంగార గీతం~Love song','నీతి శతకం~Moral satakam','నృత్య నాటకం~Dance drama'],'దేశభక్తి గీతం.§Patriotic song.'),
Q('దేశమును ప్రేమించుమన్నా రచయిత ఎవరు?§Who wrote Desamunu Preminchumanna?',['గురజాడ~Gurajada','వేమన~Vemana','నన్నయ~Nannaya','శ్రీనాథుడు~Srinatha'],'గురజాడ రాశాడు.§Gurajada wrote it.')]});

A('telugu',[8,9,10],{id:'tel_srisri',i:'🔥',te:'శ్రీశ్రీ - మహాప్రస్థానం',en:'Sri Sri - Mahaprasthanam',kw:'sri sri srirangam srinivasarao mahaprasthanam modern poetry శ్రీశ్రీ శ్రీరంగం శ్రీనివాసరావు మహాప్రస్థానం',
n:[H('శ్రీశ్రీ','Sri Sri'),
'శ్రీశ్రీ అని పిలిచే శ్రీరంగం శ్రీనివాసరావు ప్రముఖ తెలుగు కవి.§Srirangam Srinivasarao, known as Sri Sri, was a famous Telugu poet.',
'ఆయన 1910 ఏప్రిల్ 30న పుట్టి, 1983 జూన్ 15న మరణించాడు.§He was born on 30 April 1910 and died on 15 June 1983.',
'మహాప్రస్థానం ఆయన కవితల సంకలనం.§Mahaprasthanam is his collection of poems.',
'ఈ కవితలు ప్రధానంగా 1930ల దశకంలో రాశారు.§These poems were written mainly in the 1930s.',
X('శ్రీశ్రీ = మహాప్రస్థానం.§Sri Sri = Mahaprasthanam.')],
q:[Q('మహాప్రస్థానం రచయిత ఎవరు?§Who wrote Mahaprasthanam?',['శ్రీశ్రీ~Sri Sri','గురజాడ~Gurajada','నన్నయ~Nannaya','వేమన~Vemana'],'శ్రీశ్రీ రాశాడు.§Sri Sri wrote it.'),
Q('శ్రీశ్రీ అసలు పేరు ఏమిటి?§Real name of Sri Sri?',['శ్రీరంగం శ్రీనివాసరావు~Srirangam Srinivasarao','గురజాడ అప్పారావు~Gurajada Apparao','అల్లసాని పెద్దన~Allasani Peddana','బమ్మెర పోతన~Bammera Pothana'],'శ్రీరంగం శ్రీనివాసరావు.§Srirangam Srinivasarao.'),
Q('శ్రీశ్రీ ఎప్పుడు జన్మించాడు?§When was Sri Sri born?',['1910 ఏప్రిల్ 30~30 April 1910','1862 సెప్టెంబరు 21~21 Sept 1862','1863 ఆగస్టు 29~29 Aug 1863','1940 జనవరి 22~22 Jan 1940'],'1910 ఏప్రిల్ 30.§30 April 1910.'),
Q('మహాప్రస్థానం ఏమిటి?§What is Mahaprasthanam?',['కవితల సంకలనం~Collection of poems','నాటకం~Play','శతకం~Satakam','వ్యాకరణ గ్రంథం~Grammar book'],'కవితల సంకలనం.§A poem collection.'),
Q('మహాప్రస్థానం కవితలు ప్రధానంగా ఏ దశకంలో రాశారు?§In which decade were its poems mainly written?',['1930లు~1930s','1100లు~1100s','1700లు~1700s','2000లు~2000s'],'1930ల దశకం.§The 1930s.')]});

A('telugu',[4,5,6,7,8,9,10],{id:'tel_bhashadinam',i:'🗓️',te:'తెలుగు భాషా దినోత్సవం - గిడుగు',en:'Telugu Language Day - Gidugu',kw:'telugu bhasha dinotsavam august 29 gidugu venkata ramamurthy vyavaharika bhasha granthika తెలుగు భాషా దినోత్సవం ఆగస్టు 29 గిడుగు వెంకట రామమూర్తి వ్యావహారిక భాష గ్రాంథిక',
n:[H('భాషా దినోత్సవం','Language Day'),
'ప్రతి సంవత్సరం ఆగస్టు 29న తెలుగు భాషా దినోత్సవం జరుపుకుంటారు.§Telugu Language Day is celebrated every year on 29 August.',
'ఇది గిడుగు వెంకట రామమూర్తి పుట్టిన రోజు.§It is the birthday of Gidugu Venkata Ramamurthy.',
'గిడుగు 1863 ఆగస్టు 29న పుట్టి 1940 జనవరి 22న మరణించారు.§Gidugu was born on 29 August 1863 and died on 22 January 1940.',
'ఆయన గ్రాంథిక భాష బదులు ప్రజలు మాట్లాడే వ్యావహారిక భాషలో రాయాలని ఉద్యమం నడిపారు.§He led a movement to write in the spoken (vyavaharika) language of the people instead of the book (granthika) language.',
'ఆయన పర్లాకిమిడిలో ఉపాధ్యాయుడిగా పనిచేశారు.§He worked as a teacher in Parlakimidi.',
X('ఆగస్టు 29 = గిడుగు జయంతి = తెలుగు భాషా దినోత్సవం.§29 August = Gidugu birthday = Telugu Language Day.')],
q:[Q('తెలుగు భాషా దినోత్సవం ఎప్పుడు?§When is Telugu Language Day?',['ఆగస్టు 29~29 August','సెప్టెంబరు 5~5 September','జనవరి 26~26 January','నవంబరు 14~14 November'],'ఆగస్టు 29.§29 August.'),
Q('తెలుగు భాషా దినోత్సవం ఎవరి జయంతి?§Whose birthday is it?',['గిడుగు వెంకట రామమూర్తి~Gidugu Venkata Ramamurthy','గురజాడ అప్పారావు~Gurajada Apparao','శ్రీశ్రీ~Sri Sri','పోతన~Pothana'],'గిడుగు జయంతి.§Gidugu birthday.'),
Q('గిడుగు ఏ భాషా ఉద్యమాన్ని నడిపారు?§Which language movement did Gidugu lead?',['వ్యావహారిక భాషా ఉద్యమం~Spoken language movement','సంస్కృత ఉద్యమం~Sanskrit movement','ఆంగ్ల ఉద్యమం~English movement','లిపి మార్పు ఉద్యమం~Script change movement'],'వాడుక భాషలో రాయాలని.§To write in spoken language.'),
Q('గిడుగు ఏ సంవత్సరంలో జన్మించారు?§Gidugu birth year?',['1863','1862','1910','1983'],'1863 ఆగస్టు 29.§29 August 1863.'),
Q('వ్యావహారిక భాష అంటే?§What is vyavaharika bhasha?',['ప్రజలు మాట్లాడే భాష~Spoken language of people','పుస్తకాల పాత భాష~Old book language','విదేశీ భాష~Foreign language','సంజ్ఞల భాష~Sign language'],'వ్యవహారంలో ఉన్న భాష.§Language in daily use.')]});

LD.reg('btel3',1)})();
