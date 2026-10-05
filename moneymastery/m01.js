const O=(a,b)=>[a,b];
const MODS=[
{i:"🧠",t:["డబ్బు మైండ్‌సెట్","Money Mindset"],s:[
["డబ్బు ఒక సాధనం, లక్ష్యం కాదు. అది మన అవసరాలు, కలలు తీర్చడానికి ఉపయోగపడుతుంది.","Money is a tool, not the goal. It helps you meet needs and reach dreams."],
["ఎంత సంపాదిస్తున్నాం అనేదానికంటే, ఎంత మిగుల్చుకుంటున్నాం అన్నదే ముఖ్యం.","What matters more than how much you earn is how much you keep."],
["డబ్బు గురించి భయం వద్దు. చిన్న చిన్న అలవాట్లతో ఎవరైనా నేర్చుకోవచ్చు.","Do not fear money. Anyone can learn it through small habits."]],
q:[["డబ్బు అంటే ఏమిటి?","Money is best seen as…",[O("ఒక సాధనం","A tool"),O("ఒక్కటే లక్ష్యం","The only goal"),O("చెడ్డది","Evil")],0],
["ఏది ముఖ్యం?","What matters more?",[O("ఎక్కువ ఖర్చు","Spending more"),O("ఎంత మిగులుతుంది","How much you keep"),O("అప్పు చేయడం","Borrowing")],1]]},
{i:"💰",t:["ఆదాయం vs ఖర్చులు","Income vs Expenses"],s:[
["ఆదాయం అంటే నెలకు వచ్చే మొత్తం డబ్బు: జీతం, వ్యాపారం, కిరాయి, రోజు కూలీ.","Income is all money coming in: salary, business, rent, daily wages."],
["ఖర్చులు రెండు రకాలు: తప్పనిసరివి (అద్దె, కరెంట్, రేషన్) మరియు ఇష్టానుసారం చేసేవి (సినిమా, బయట తిండి).","Expenses are of two kinds: needs (rent, power, groceries) and wants (movies, eating out)."],
["నెల మొత్తం ప్రతి ఖర్చు ఒక నోట్‌బుక్ లేదా ఫోన్‌లో రాసుకోండి. ఎక్కడ పోతోందో తెలుస్తుంది.","Write down every expense for a month in a notebook or phone. You will see where money leaks."]],
q:[["కరెంట్ బిల్లు ఏ రకం?","Electricity bill is a…",[O("అవసరం","Need"),O("ఇష్టం","Want")],0],
["ఖర్చులు రాసుకోవడం ఎందుకు?","Why track expenses?",[O("డబ్బు ఎక్కడ పోతోందో తెలుసుకోవడానికి","To see where money goes"),O("ఎవరికీ చూపడానికి","To show others"),O("అవసరం లేదు","Not needed")],0]]},
{i:"📊",t:["బడ్జెట్: 50-30-20","Budget: 50-30-20"],s:[
["50-30-20 నియమం: ఆదాయంలో 50% అవసరాలకు, 30% ఇష్టాలకు, 20% పొదుపు/అప్పు తీర్చడానికి.","The 50-30-20 rule: 50% of income to needs, 30% to wants, 20% to savings or debt repayment."],
["ఉదాహరణ: నెలకు ₹30,000 వస్తే, ₹15,000 అవసరాలు, ₹9,000 ఇష్టాలు, ₹6,000 పొదుపు.","Example: on ₹30,000 a month, ₹15,000 needs, ₹9,000 wants, ₹6,000 savings."],
["ఇది ఒక మార్గదర్శకం మాత్రమే. మీ కుటుంబానికి తగ్గట్టు శాతాలు మార్చుకోండి. జీతం రాగానే ముందు పొదుపు పక్కన పెట్టండి.","It is only a guide. Adjust the percentages to your family. Set savings aside first, the day income arrives."]],
q:[["₹40,000 ఆదాయంలో 20% పొదుపు ఎంత?","20% savings of ₹40,000 is…",[O("₹4,000","₹4,000"),O("₹8,000","₹8,000"),O("₹10,000","₹10,000")],1],
["పొదుపు ఎప్పుడు పక్కన పెట్టాలి?","When should you set savings aside?",[O("నెల చివర మిగిలితే","If anything is left at month end"),O("జీతం రాగానే","As soon as income arrives")],1]]},
{i:"🛟",t:["ఎమర్జెన్సీ ఫండ్","Emergency Fund"],s:[
["ఉద్యోగం పోవడం, ఆసుపత్రి ఖర్చు వంటి అనుకోని సమయాల కోసం ఉంచే డబ్బే ఎమర్జెన్సీ ఫండ్.","An emergency fund is money kept for surprises like job loss or hospital bills."],
["సాధారణంగా 3 నుండి 6 నెలల ఖర్చులకు సరిపడా ఉంచమని సూచిస్తారు. ఇది సాధారణ మార్గదర్శకం.","A common guideline is 3 to 6 months of expenses. This is a general guide."],
["దీన్ని సేవింగ్స్ ఖాతా లేదా సులభంగా తీసుకోగల చోట ఉంచండి. షేర్లలో లేదా రిస్క్ ఉన్న చోట వద్దు.","Keep it in a savings account or somewhere easy to withdraw, not in risky assets."]],
q:[["ఎమర్జెన్సీ ఫండ్ ఎంత నెలలకు?","A common emergency fund target is…",[O("1 వారం","1 week"),O("3-6 నెలలు","3-6 months"),O("10 ఏళ్లు","10 years")],1],
["ఎక్కడ ఉంచాలి?","Where to keep it?",[O("సులభంగా తీసుకోగలచోట","Easily accessible place"),O("రిస్క్ ఉన్న చోట","A risky place")],0]]},
{i:"🐖",t:["పొదుపు అలవాట్లు","Saving Habits"],s:[
["ఆటోమేటిక్ పొదుపు ఉత్తమం: జీతం రాగానే ఒక భాగం వేరే ఖాతాకు వెళ్లేలా సెట్ చేయండి.","Automate saving: set a part of income to move to a separate account on payday."],
["చిన్న మొత్తాలు కూడా విలువైనవే. రోజుకు ₹50 పొదుపు చేస్తే నెలకు సుమారు ₹1,500.","Small amounts count. Saving ₹50 a day is about ₹1,500 a month."],
["కొనే ముందు 24 గంటలు ఆగండి. చాలా సార్లు అది అవసరం కాదని తెలుస్తుంది.","Wait 24 hours before a big purchase. Often you find you did not need it."]],
q:[["రోజుకు ₹50 అంటే నెలకు సుమారు?","₹50 a day is about how much a month?",[O("₹150","₹150"),O("₹1,500","₹1,500"),O("₹15,000","₹15,000")],1],
["ఆటోమేటిక్ పొదుపు ప్రయోజనం?","Benefit of automatic saving?",[O("మర్చిపోకుండా క్రమం తప్పదు","It stays regular without effort"),O("ఖర్చు పెరుగుతుంది","Spending rises")],0]]},
{i:"🏦",t:["బ్యాంక్ & UPI భద్రత","Bank & UPI Safety"],s:[
["UPI PIN డబ్బు పంపడానికి మాత్రమే. డబ్బు తీసుకోవడానికి PIN ఎప్పుడూ అవసరం లేదు.","UPI PIN is only for sending money. You never need a PIN to receive money."],
["OTP, PIN, CVV ఎవరికీ చెప్పకండి. బ్యాంక్ వాళ్లు కూడా అడగరు.","Never share OTP, PIN or CVV with anyone. Even real bank staff will not ask."],
["బ్యాంక్ డిపాజిట్లకు DICGC ద్వారా ఒక్కో బ్యాంక్‌లో ఒక్కో డిపాజిటర్‌కు ₹5 లక్షల వరకు బీమా ఉంటుంది (అసలు + వడ్డీ).","Deposits are insured by DICGC up to ₹5 lakh per depositor per bank (principal plus interest)."]],
q:[["డబ్బు రావడానికి UPI PIN అవసరమా?","Do you need UPI PIN to receive money?",[O("అవును","Yes"),O("లేదు","No")],1],
["OTP ఎవరికి చెప్పాలి?","Who should you tell your OTP?",[O("బ్యాంక్ ఉద్యోగికి","Bank staff"),O("ఎవరికీ కాదు","Nobody"),O("స్నేహితుడికి","A friend")],1]]},
{i:"📈",t:["క్రెడిట్ స్కోర్ (CIBIL)","Credit Score (CIBIL)"],s:[
["క్రెడిట్ స్కోర్ మీరు అప్పులు ఎంత సక్రమంగా తీరుస్తారో చూపే సంఖ్య. CIBIL స్కోర్ 300 నుండి 900 వరకు ఉంటుంది.","A credit score shows how reliably you repay. CIBIL scores run from 300 to 900."],
["సాధారణంగా 750 పైన ఉంటే మంచిదిగా భావిస్తారు. బ్యాంక్‌ను బట్టి మారవచ్చు.","Generally 750 and above is seen as good. Banks may differ."],
["EMI, కార్డ్ బిల్లు సమయానికి కట్టండి. కార్డ్ లిమిట్‌లో ఎక్కువ భాగం వాడకండి. తరచుగా కొత్త లోన్లకు అప్లై చేయకండి.","Pay EMIs and card bills on time. Do not use most of your card limit. Avoid applying for many loans at once."]],
q:[["CIBIL స్కోర్ పరిధి?","CIBIL score range?",[O("0-100","0-100"),O("300-900","300-900"),O("1-10","1-10")],1],
["స్కోర్ పెంచేది?","What helps your score?",[O("సమయానికి చెల్లింపు","Paying on time"),O("చెల్లింపు ఆలస్యం","Paying late")],0]]},
{i:"🧮",t:["లోన్లు & EMI","Loans & EMI"],s:[
["EMI అంటే ప్రతి నెలా కట్టే స్థిర మొత్తం. అందులో అసలు మరియు వడ్డీ ఉంటాయి.","EMI is the fixed monthly payment, made of principal and interest."],
["కాలపరిమితి పెరిగితే EMI తగ్గుతుంది కానీ మొత్తం వడ్డీ పెరుగుతుంది.","A longer tenure lowers EMI but raises total interest paid."],
["EMIలు మొత్తం ఆదాయంలో సుమారు 40% లోపు ఉంచడం సురక్షితం అని సాధారణంగా చెబుతారు. క్రింద కాలిక్యులేటర్ ప్రయత్నించండి (టూల్స్ చూడండి).","A common guide is to keep total EMIs under about 40% of income. Try the calculator under Tools."]],
q:[["కాలం పెరిగితే మొత్తం వడ్డీ?","Longer tenure means total interest…",[O("పెరుగుతుంది","Rises"),O("తగ్గుతుంది","Falls")],0],
["EMI లో ఉండేవి?","EMI contains…",[O("అసలు + వడ్డీ","Principal + interest"),O("వడ్డీ మాత్రమే","Only interest")],0]],tool:"emi"},
{i:"💳",t:["క్రెడిట్ కార్డ్‌లు","Credit Cards"],s:[
["క్రెడిట్ కార్డ్ మీ డబ్బు కాదు, బ్యాంక్ అప్పు. గడువులోగా మొత్తం బిల్లు కడితే వడ్డీ ఉండదు.","A credit card is the bank's money, not yours. Pay the full bill by the due date and there is no interest."],
["కనీస మొత్తం మాత్రమే కడితే మిగతాపై చాలా ఎక్కువ వడ్డీ పడుతుంది. మీ కార్డ్ నిబంధనలు చూడండి.","Paying only the minimum attracts very high interest on the rest. Check your card terms."],
["కార్డ్ మీద ATM నుండి నగదు తీయకండి, ఫీజులు మరియు వడ్డీ వెంటనే మొదలవుతాయి.","Avoid cash withdrawal on a card; fees and interest begin immediately."]],
q:[["పూర్తి బిల్లు గడువులో కడితే?","Pay the full bill on time and…",[O("వడ్డీ ఉండదు","No interest"),O("ఎక్కువ వడ్డీ","High interest")],0],
["కనీస మొత్తం మాత్రమే కడితే?","Pay only the minimum and…",[O("అప్పు తీరిపోతుంది","Debt clears"),O("మిగతాపై వడ్డీ పడుతుంది","Interest on the rest")],1]]},
{i:"🛡️",t:["ఇన్సూరెన్స్","Insurance"],s:[
["ఇన్సూరెన్స్ పెట్టుబడి కాదు, రక్షణ. కుటుంబం ఆధారపడేవారికి టర్మ్ ఇన్సూరెన్స్ చాలా తక్కువ ఖర్చుతో పెద్ద రక్షణ ఇస్తుంది.","Insurance is protection, not investment. Term insurance gives large cover at low cost if others depend on you."],
["ఆరోగ్య బీమా ఆసుపత్రి ఖర్చుల నుండి మీ పొదుపును కాపాడుతుంది. ఆరోగ్యంగా ఉన్నప్పుడే తీసుకోండి.","Health insurance protects your savings from hospital bills. Buy it while healthy."],
["పాలసీ నిబంధనలు, మినహాయింపులు పూర్తిగా చదవండి. ఎవరైనా 'డబుల్ డబ్బు' అంటే నమ్మకండి.","Read policy terms and exclusions. Do not believe 'double your money' pitches."]],
q:[["ఇన్సూరెన్స్ అంటే?","Insurance is mainly…",[O("రక్షణ","Protection"),O("లాటరీ","A lottery")],0],
["ఆరోగ్య బీమా ఎప్పుడు తీసుకోవాలి?","When to buy health cover?",[O("ఆరోగ్యంగా ఉన్నప్పుడే","While healthy"),O("జబ్బు వచ్చాకే","Only after illness")],0]]},
{i:"🌱",t:["పెట్టుబడి ప్రాథమికాలు","Investing Basics"],s:[
["పెట్టుబడి అంటే డబ్బు కాలక్రమేణా పెరగాలని వాడటం. ఎంపికలు: FD, PPF, మ్యూచువల్ ఫండ్స్, బంగారం, షేర్లు, రియల్ ఎస్టేట్.","Investing means putting money to work over time. Options: FD, PPF, mutual funds, gold, equity, real estate."],
["ఎక్కువ రాబడి ఆశించే చోట ఎక్కువ రిస్క్ ఉంటుంది. హామీ ఉన్న రాబడి అని ఎవరైనా చెబితే జాగ్రత్త.","Higher possible return comes with higher risk. Be wary of anyone promising guaranteed returns."],
["ఇది కేవలం విద్య కోసమే. నిర్దిష్ట షేర్ల సలహా కాదు. నిర్ణయాలకు ముందు SEBI రిజిస్టర్డ్ సలహాదారును సంప్రదించండి.","This is education only, not stock advice. Consult a SEBI-registered advisor before deciding."]],
q:[["ఎక్కువ రాబడి సాధారణంగా?","Higher potential return usually means…",[O("ఎక్కువ రిస్క్","Higher risk"),O("రిస్క్ లేదు","No risk")],0],
["'హామీతో రెట్టింపు' అంటే?","'Guaranteed double money' is…",[O("మంచి అవకాశం","A great chance"),O("హెచ్చరిక సంకేతం","A warning sign")],1]]},
{i:"🔥",t:["ద్రవ్యోల్బణం","Inflation"],s:[
["ధరలు ఏటా పెరగడమే ద్రవ్యోల్బణం. ఈ ఏడు ₹100 కొనేది వచ్చే ఏడు ₹100కు రాకపోవచ్చు.","Inflation is the rise in prices over time. What ₹100 buys today, it may not buy next year."],
["పొదుపు ఖాతా వడ్డీ ద్రవ్యోల్బణం కంటే తక్కువైతే, మీ డబ్బు విలువ నెమ్మదిగా తగ్గుతుంది.","If savings interest is below inflation, your money slowly loses buying power."],
["అందుకే అవసరం లేని డబ్బును సరిగ్గా, అర్థం చేసుకుని పెట్టుబడి పెట్టడం నేర్చుకోవాలి.","So learn to invest spare money wisely and with understanding."]],
q:[["ద్రవ్యోల్బణం అంటే?","Inflation means…",[O("ధరలు పెరగడం","Prices rising"),O("ధరలు తగ్గడం","Prices falling")],0],
["వడ్డీ కంటే ద్రవ్యోల్బణం ఎక్కువైతే?","If inflation beats interest…",[O("విలువ తగ్గుతుంది","Buying power falls"),O("విలువ పెరుగుతుంది","Buying power rises")],0]]},
{i:"❄️",t:["చక్రవడ్డీ శక్తి","Power of Compounding"],s:[
["చక్రవడ్డీ అంటే వడ్డీ మీద కూడా వడ్డీ రావడం. కాలం గడిచే కొద్దీ అది వేగంగా పెరుగుతుంది.","Compounding is earning interest on interest. It grows faster as time passes."],
["త్వరగా మొదలుపెట్టడమే రహస్యం. చిన్న మొత్తంతో ఎక్కువ కాలం, పెద్ద మొత్తంతో తక్కువ కాలం కంటే మెరుగు కావచ్చు.","Starting early is the secret. A small sum for long can beat a larger sum for short."],
["రూల్ ఆఫ్ 72: 72ని వడ్డీ శాతంతో భాగిస్తే డబ్బు రెట్టింపు కావడానికి పట్టే ఏళ్లు (సుమారు). టూల్స్‌లో కాలిక్యులేటర్ చూడండి.","Rule of 72: divide 72 by the rate to estimate years to double (approximate). See Tools for the calculator."]],
q:[["చక్రవడ్డీ అంటే?","Compounding is…",[O("వడ్డీపై వడ్డీ","Interest on interest"),O("మొదటి వడ్డీ మాత్రమే","Only simple interest")],0],
["72 ÷ 8% = ?","72 ÷ 8% = ?",[O("9 ఏళ్లు","9 years"),O("20 ఏళ్లు","20 years"),O("2 ఏళ్లు","2 years")],0]],tool:"comp"},
{i:"📦",t:["SIP & మ్యూచువల్ ఫండ్స్","SIP & Mutual Funds"],s:[
["మ్యూచువల్ ఫండ్ అనేది చాలా మంది డబ్బు కలిపి నిపుణులు నిర్వహించే పెట్టుబడి. SIP అంటే ప్రతి నెలా నిర్ణీత మొత్తం పెట్టడం.","A mutual fund pools many people's money, run by professionals. SIP means investing a fixed amount every month."],
["మార్కెట్ ఆధారిత ఫండ్ల రాబడికి హామీ లేదు. విలువ పెరగొచ్చు, తగ్గొచ్చు, నష్టం కూడా రావచ్చు.","Returns of market-linked funds are not guaranteed. Values can rise, fall, and you can lose money."],
["ఫండ్ గురించి అప్లై చేసే ముందు ఖర్చు నిష్పత్తి, రిస్క్ స్థాయి, గడువు చూడండి. KYC పూర్తి చేసి, అధికారిక యాప్ లేదా వెబ్‌సైట్ మాత్రమే వాడండి. SEBI నమోదు చూడండి.","Before investing check cost ratio, risk level and horizon. Complete KYC and use only official apps or sites. Check SEBI registration."]],
q:[["SIP అంటే?","SIP means…",[O("నెలనెలా నిర్ణీత పెట్టుబడి","Fixed regular investing"),O("ఒకే సారి లాటరీ","One-time lottery")],0],
["మార్కెట్ ఫండ్ రాబడి?","Market-linked fund returns are…",[O("హామీ","Guaranteed"),O("హామీ లేదు","Not guaranteed")],1]],tool:"sip"},
{i:"🧾",t:["పన్ను ప్రాథమికాలు","Tax Basics"],s:[
["ఆదాయం ఒక పరిమితి దాటితే ఆదాయపు పన్ను రిటర్న్ (ITR) దాఖలు చేయాలి. అధికారిక సైట్: incometax.gov.in.","If income crosses limits you must file an Income Tax Return (ITR). Official site: incometax.gov.in."],
["పాత పన్ను విధానంలో సెక్షన్ 80C కింద (EPF, PPF, జీవిత బీమా ప్రీమియం మొదలైనవి) గరిష్టంగా ₹1,50,000 వరకు మినహాయింపు ఉంది.","Under the old tax regime, Section 80C (EPF, PPF, life insurance premium etc.) allows a deduction up to ₹1,50,000."],
["నియమాలు, పరిమితులు ప్రతి బడ్జెట్‌లో మారవచ్చు. ఫైల్ చేసే ముందు ప్రస్తుత నియమాలు అధికారిక సైట్‌లో లేదా CA వద్ద చూసుకోండి.","Rules change with budgets. Check current rules on the official site or with a CA before filing."]],
q:[["80C గరిష్ట మినహాయింపు (పాత విధానం)?","80C maximum deduction (old regime)?",[O("₹50,000","₹50,000"),O("₹1,50,000","₹1,50,000"),O("₹5,00,000","₹5,00,000")],1],
["ITR అధికారిక సైట్?","Official ITR site?",[O("incometax.gov.in","incometax.gov.in"),O("ఏదైనా లింక్","Any link from SMS")],0]]},
{i:"🌅",t:["రిటైర్మెంట్ ప్లానింగ్","Retirement Planning"],s:[
["రిటైర్మెంట్ తర్వాత జీతం రాదు కాబట్టి ముందే పొదుపు చేయాలి. 20లలో మొదలుపెడితే చాలా సులభం.","No salary after retirement, so save early. Starting in your 20s is far easier."],
["ప్రభుత్వ పథకాలు (PPF, NPS) మరియు EPF దీర్ఘకాల పొదుపుకు ఉపయోగపడతాయి. PPF వడ్డీ రేటును ప్రభుత్వం త్రైమాసికంగా ప్రకటిస్తుంది. అక్టోబర్-డిసెంబర్ 2026 త్రైమాసికానికి 7.1% గా కొనసాగింది.","Government options (PPF, NPS) and EPF help long-term saving. The government sets the PPF rate quarterly; it stayed 7.1% for Oct-Dec 2026."],
["ద్రవ్యోల్బణం దృష్టిలో ఉంచుకుని భవిష్యత్తు ఖర్చు అంచనా వేయండి. అనారోగ్య ఖర్చులకు ఆరోగ్య బీమా ఉండాలి.","Estimate future costs with inflation in mind, and keep health cover for medical expenses."]],
q:[["రిటైర్మెంట్ పొదుపు ఎప్పుడు మొదలు?","When to start retirement saving?",[O("వీలైనంత త్వరగా","As early as possible"),O("60 ఏళ్ల తర్వాత","After 60")],0],
["PPF వడ్డీ రేటు ఎవరు ప్రకటిస్తారు?","Who announces the PPF rate?",[O("కేంద్ర ప్రభుత్వం (త్రైమాసికం)","Central govt (quarterly)"),O("పక్కింటి వారు","Neighbours")],0]]},
{i:"🧒",t:["పిల్లలు & డబ్బు","Kids and Money"],s:[
["చిన్నప్పటినుంచే పిల్లలకు డబ్బు విలువ నేర్పండి. పాకెట్ మనీ ఇచ్చి రాసుకోమనండి.","Teach kids the value of money early. Give pocket money and ask them to track it."],
["అవసరం మరియు ఇష్టం మధ్య తేడా ఆటల ద్వారా నేర్పండి. ఒక హుండీ లేదా మినీ పొదుపు ఖాతా పెట్టించండి.","Teach need versus want through play. Start a piggy bank or a minor savings account."],
["మీరే ఆదర్శంగా ఉండండి. పిల్లలు మనం చేసేది చూసి నేర్చుకుంటారు.","Lead by example. Children learn from what we do."]],
q:[["పిల్లలకు ఏది నేర్పాలి?","Teach kids…",[O("అవసరం vs ఇష్టం","Need vs want"),O("అప్పు చేయడం","To borrow freely")],0],
["పిల్లలు ఎలా నేర్చుకుంటారు?","Kids learn best by…",[O("మన ప్రవర్తన చూసి","Watching us"),O("చెప్పినదే","Only being told")],0]]},
{i:"🚨",t:["మోసాలు, Ponzi & లోన్ యాప్స్","Scams, Ponzi & Loan Apps"],s:[
["'తక్కువ సమయంలో రెట్టింపు', 'హామీతో రాబడి', 'మరో ఇద్దరిని చేర్చండి' అనేవి Ponzi మోసాల సంకేతాలు.","'Double fast', 'guaranteed returns', 'add two more people' are Ponzi scam signs."],
["గుర్తింపు లేని లోన్ యాప్స్ మీ కాంటాక్ట్స్, ఫోటోలు తీసుకుని బెదిరించవచ్చు. RBI గుర్తింపు ఉన్న సంస్థల నుండి మాత్రమే అప్పు తీసుకోండి.","Unregulated loan apps may grab contacts and photos and threaten you. Borrow only from RBI-regulated lenders."],
["మోసపోతే వెంటనే 1930 (సైబర్ క్రైమ్ హెల్ప్‌లైన్)కు కాల్ చేయండి లేదా cybercrime.gov.in లో ఫిర్యాదు చేయండి. అనుమానాస్పద లింక్స్ నొక్కకండి.","If cheated, call 1930 (cyber crime helpline) quickly or report at cybercrime.gov.in. Do not tap suspicious links."]],
q:[["సైబర్ క్రైమ్ హెల్ప్‌లైన్?","Cyber crime helpline?",[O("1930","1930"),O("100100","100100")],0],
["'హామీతో రెట్టింపు' ఆఫర్?","A 'guaranteed double' offer is…",[O("స్కామ్ అనుమానం","Likely a scam"),O("ఖచ్చితమైన లాభం","Sure profit")],0]]},
{i:"⛓️",t:["అప్పు తీర్చే వ్యూహం","Debt Payoff Strategy"],s:[
["అన్ని అప్పుల జాబితా రాయండి: మొత్తం, వడ్డీ, EMI.","List all debts: amount, interest rate, EMI."],
["అవలాంచ్ పద్ధతి: ఎక్కువ వడ్డీ ఉన్న అప్పును ముందు తీర్చండి. స్నోబాల్ పద్ధతి: చిన్న అప్పు ముందు తీర్చి ఉత్సాహం పొందండి.","Avalanche: pay the highest-interest debt first. Snowball: clear the smallest first for motivation."],
["మిగతా వాటికి కనీసం EMI కడుతూనే, అదనపు డబ్బు ఒక అప్పుపై పెట్టండి. కొత్త అప్పులు తగ్గించండి.","Keep paying minimums on others and put extra money on one debt. Avoid new debt."]],
q:[["అవలాంచ్ పద్ధతి ఏది ముందు?","Avalanche pays first…",[O("ఎక్కువ వడ్డీ","Highest interest"),O("తక్కువ వడ్డీ","Lowest interest")],0],
["మొదటి అడుగు?","First step?",[O("అప్పుల జాబితా","List all debts"),O("కొత్త అప్పు","Take a new loan")],0]]},
{i:"🏪",t:["చిన్న వ్యాపారులకు డబ్బు","Business Money for Small Owners"],s:[
["వ్యాపార డబ్బు, ఇంటి డబ్బు కలపకండి. వేరే బ్యాంక్ ఖాతా వాడండి.","Do not mix business and home money. Use a separate bank account."],
["రోజువారీ అమ్మకాలు, ఖర్చులు రాయండి. లాభం = అమ్మకం − ఖర్చు. జీతం మీకు నిర్ణీతంగా తీసుకోండి.","Record daily sales and costs. Profit = sales − costs. Pay yourself a fixed salary."],
["పన్ను, రిజిస్ట్రేషన్ (GST ఉంటే) నియమాలు అధికారిక సైట్‌లో లేదా CA వద్ద చూసుకోండి. చిన్న నిల్వ ఫండ్ ఉంచండి.","Check tax and registration (GST if applicable) rules on official sites or with a CA. Keep a small reserve."]],
q:[["లాభం ఎలా?","Profit is…",[O("అమ్మకం − ఖర్చు","Sales − costs"),O("అమ్మకం + ఖర్చు","Sales + costs")],0],
["ఖాతాలు?","Accounts?",[O("వేరువేరుగా","Keep separate"),O("కలిపేయండి","Mix them")],0]]},
{i:"🏆",t:["సంపద అలవాట్లు","Wealth Habits"],s:[
["ఆదాయం కంటే తక్కువ ఖర్చు చేయండి. ప్రతి నెలా పొదుపు పెంచండి.","Spend less than you earn. Raise your savings each month."],
["నేర్చుకోవడం ఆపకండి. ఆర్థిక విషయాలు చదవండి, అధికారిక వనరులను నమ్మండి.","Keep learning. Read about finance and trust official sources."],
["సహనం ముఖ్యం. సంపద ఒక్క రోజులో రాదు. 21 రోజుల ఛాలెంజ్‌తో అలవాటు మొదలుపెట్టండి.","Patience matters. Wealth is not built in a day. Start the habit with the 21-day challenge."]],
q:[["ముఖ్య సూత్రం?","Core rule?",[O("ఆదాయం కంటే తక్కువ ఖర్చు","Spend less than you earn"),O("అప్పు ఎక్కువ","Borrow more")],0],
["సంపద ఎలా వస్తుంది?","Wealth comes from…",[O("సహనం మరియు అలవాట్లు","Patience and habits"),O("ఒక్క రోజులో","One day")],0]]}
];
const DAYS=[
["ఈ రోజు మీ నెలవారీ ఆదాయం రాయండి.","Write down your monthly income."],
["నేటి ప్రతి ఖర్చు నోట్ చేయండి.","Note every expense today."],
["అవసరాలు, ఇష్టాల జాబితా చేయండి.","List your needs and wants."],
["ఈ రోజు ఒక ఇష్టమైన ఖర్చు మానేయండి.","Skip one wanted purchase today."],
["50-30-20 తో మీ బడ్జెట్ తయారు చేయండి.","Make a 50-30-20 budget."],
["ఒక చిన్న మొత్తం పొదుపు ఖాతాకు పంపండి.","Move a small amount to savings."],
["మీ బ్యాంక్ ఖాతాలు, UPI యాప్స్ జాబితా చేయండి.","List your bank accounts and UPI apps."],
["UPI PIN, యాప్ లాక్ సెట్ చేయండి లేదా మార్చండి.","Set or update UPI PIN and app lock."],
["ఈ వారం ఖర్చులు సమీక్షించండి.","Review this week's spending."],
["మీ ఎమర్జెన్సీ ఫండ్ లక్ష్యం లెక్కించండి.","Calculate your emergency fund target."],
["మీ క్రెడిట్ స్కోర్ ఉచితంగా చూడండి (అధికారిక సైట్).","Check your credit score via an official source."],
["మీ అప్పులు, EMIలు జాబితా చేయండి.","List all debts and EMIs."],
["EMI కాలిక్యులేటర్ ప్రయత్నించండి.","Try the EMI calculator."],
["కార్డ్ బిల్లు గడువు తేదీని రిమైండర్‌గా పెట్టండి.","Set a reminder for card due dates."],
["మీ బీమా కవర్ చూడండి: ఆరోగ్యం, టర్మ్.","Review your insurance: health and term."],
["SIP కాలిక్యులేటర్‌తో ఒక ఉదాహరణ చూడండి.","Try an example in the SIP calculator."],
["చక్రవడ్డీ కాలిక్యులేటర్ ప్రయత్నించండి.","Try the compounding calculator."],
["ఒక స్కామ్ ఉదాహరణ కుటుంబానికి వివరించండి.","Explain one scam example to family."],
["మీ లక్ష్యాలు రాయండి: 1 సంవత్సరం, 5 సంవత్సరాలు.","Write goals: 1 year and 5 years."],
["పిల్లలకు డబ్బు గురించి ఒక విషయం నేర్పండి.","Teach a kid one money idea."],
["మీ 21 రోజుల అనుభవం రాయండి మరియు పొదుపు కొనసాగించండి.","Reflect on your 21 days and keep saving."]
];
MODS.push(
{i:"🎯",t:["ఆర్థిక లక్ష్యాలు","Financial Goals"],s:[
["లక్ష్యం స్పష్టంగా ఉండాలి: ఎంత డబ్బు, ఎప్పటికి, ఎందుకు. ఉదాహరణ: 2 ఏళ్లలో ₹1,20,000 బైక్ కోసం.","Make goals specific: how much, by when, why. Example: ₹1,20,000 for a bike in 2 years."],
["లక్ష్యాన్ని నెలవారీ మొత్తంగా విభజించండి: ₹1,20,000 ÷ 24 నెలలు = ₹5,000.","Break it into a monthly amount: ₹1,20,000 ÷ 24 months = ₹5,000."],
["లక్ష్యాలను స్వల్ప, మధ్య, దీర్ఘకాలంగా విడదీయండి. స్వల్పకాలానికి సురక్షిత చోట, దీర్ఘకాలానికి వేరే విధంగా ఆలోచించండి.","Split goals into short, medium and long term. Short goals need safer places than long ones."]],
q:[["₹60,000 ను 12 నెలల్లో సేకరించడానికి నెలకు?","To save ₹60,000 in 12 months, per month?",[O("₹5,000","₹5,000"),O("₹6,000","₹6,000"),O("₹500","₹500")],0],
["మంచి లక్ష్యం?","A good goal is…",[O("స్పష్టమైన మొత్తం మరియు తేదీ","Clear amount and date"),O("ఏదో ఒకరోజు","Someday")],0]]},
{i:"🎭",t:["డబ్బు మానసికశాస్త్రం","Money Psychology"],s:[
["FOMO, గుంపును అనుసరించడం, అత్యాశ, భయం వంటివి మన డబ్బు నిర్ణయాలను పాడు చేస్తాయి.","FOMO, herd behaviour, greed and fear spoil money decisions."],
["'అందరూ చేస్తున్నారు' అనేది కారణం కాదు. మీ లక్ష్యానికి సరిపోతుందా అని చూడండి.","'Everyone is doing it' is not a reason. Ask if it fits your goal."],
["పెద్ద నిర్ణయాలకు ముందు ఆగండి, రాసుకోండి, ఒకరోజు ఆలోచించండి. తొందర పెట్టే వారిని అనుమానించండి.","Pause, write it down, sleep on big decisions. Doubt anyone who rushes you."]],
q:[["గుంపును గుడ్డిగా అనుసరించడం?","Blindly following the crowd is…",[O("ప్రమాదకరం","Risky"),O("ఎల్లప్పుడూ సురక్షితం","Always safe")],0],
["తొందర పెట్టే ఆఫర్?","An offer that rushes you…",[O("అనుమానించాలి","Deserves doubt"),O("వెంటనే ఒప్పుకోవాలి","Accept at once")],0]]},
{i:"📱",t:["డిజిటల్ ఫైనాన్స్ భద్రత","Digital Finance Safety"],s:[
["అధికారిక యాప్ స్టోర్ నుండి మాత్రమే యాప్స్ ఇన్‌స్టాల్ చేయండి. APK ఫైళ్లు, తెలియని లింక్స్ వద్దు.","Install apps only from official stores. No APK files or unknown links."],
["స్క్రీన్ షేరింగ్ యాప్స్ (AnyDesk వంటివి) ఎవరికీ ఇవ్వకండి. 'KYC అప్‌డేట్ చేయండి' SMS లింక్స్ నమ్మకండి.","Never allow screen-sharing apps like AnyDesk. Do not trust 'update KYC' SMS links."],
["ఫోన్ లాక్, బలమైన పాస్‌వర్డ్, SMS అలర్ట్స్ ఆన్ చేయండి. తెలియని QR స్కాన్ చేసి డబ్బు పొందలేరు.","Use phone lock, strong passwords and SMS alerts. Scanning a QR never receives money."]],
q:[["APK ఫైల్ ద్వారా యాప్?","Installing a banking app from an APK link is…",[O("సురక్షితం","Safe"),O("ప్రమాదం","Risky")],1],
["QR స్కాన్ చేస్తే డబ్బు వస్తుందా?","Does scanning a QR receive money?",[O("అవును","Yes"),O("కాదు, పంపుతారు","No, it sends money")],1]]},
{i:"⚖️",t:["మీ హక్కులు & ఫిర్యాదులు","Your Rights & Complaints"],s:[
["బ్యాంక్ లేదా NBFC సరిగా స్పందించకపోతే మొదట వారి గ్రీవెన్స్ విభాగంలో ఫిర్యాదు చేయండి, రసీదు నంబర్ ఉంచుకోండి.","If a bank or NBFC does not respond, first complain to its grievance cell and keep the reference number."],
["సంతృప్తి లేకపోతే RBI ఓంబుడ్స్‌మన్ పథకం ద్వారా ఫిర్యాదు చేయవచ్చు: rbi.org.in లో 'Complaints' చూడండి.","If unsatisfied, use the RBI Ombudsman scheme: see 'Complaints' on rbi.org.in."],
["అన్ని పత్రాలు, రసీదులు, స్క్రీన్‌షాట్లు భద్రపరచండి. ఏదైనా సంతకం చేసే ముందు చదవండి.","Keep all papers, receipts, screenshots. Read before you sign."]],
q:[["మొదట ఎక్కడ ఫిర్యాదు?","Where to complain first?",[O("సంస్థ గ్రీవెన్స్ విభాగం","The firm's grievance cell"),O("సోషల్ మీడియా మాత్రమే","Social media only")],0],
["తర్వాతి దశ?","Next step if unresolved?",[O("RBI ఓంబుడ్స్‌మన్","RBI Ombudsman"),O("ఏమీ చేయకూడదు","Do nothing")],0]]},
{i:"📜",t:["నామినీ, పత్రాలు & వీలునామా","Nominee, Documents & Will"],s:[
["బ్యాంక్ ఖాతాలు, బీమా, EPF, మ్యూచువల్ ఫండ్స్‌కు నామినీ పేరు చేర్చండి. లేకపోతే కుటుంబానికి ఇబ్బంది.","Add a nominee to bank accounts, insurance, EPF, mutual funds. Without it, family faces trouble."],
["ముఖ్యమైన పత్రాల జాబితా కుటుంబ సభ్యునికి చెప్పండి: ఖాతాలు, పాలసీలు, ఆస్తి పత్రాలు.","Tell a family member where key papers are: accounts, policies, property documents."],
["ఆస్తి ఉంటే వీలునామా గురించి న్యాయ నిపుణుని అడగండి.","If you own assets, ask a legal professional about a will."]],
q:[["నామినీ ఎందుకు?","Why add a nominee?",[O("కుటుంబానికి సులభంగా డబ్బు అందడానికి","Smooth access for family"),O("అవసరం లేదు","Not needed")],0],
["ఎక్కడ చేర్చాలి?","Add nominee to…",[O("అన్ని ఖాతాలు, పాలసీలు","All accounts and policies"),O("ఒక్క ఖాతా మాత్రమే","Only one account")],0]]},
{i:"🧺",t:["రిస్క్ & వైవిధ్యం","Risk & Diversification"],s:[
["అన్ని గుడ్లు ఒకే బుట్టలో పెట్టకండి. ఒకే చోట పెట్టిన డబ్బు అక్కడ సమస్య వస్తే మొత్తం పోతుంది.","Do not put all eggs in one basket. If one place fails, everything is lost."],
["సాధారణంగా FD, PPF తక్కువ రిస్క్. మార్కెట్ ఆధారిత ఉత్పత్తులకు ఎక్కువ ఊగిసలాట ఉంటుంది. బంగారం, ఆస్తి ధరలు కూడా ఎక్కువ తక్కువ అవుతాయి.","FD and PPF are generally lower risk. Market-linked products swing more. Gold and property prices also move up and down."],
["మీ వయసు, లక్ష్యం, కాలం, నిద్ర పట్టేంత రిస్క్ ఆధారంగా నిర్ణయించండి. అవసరమైతే SEBI రిజిస్టర్డ్ సలహాదారును సంప్రదించండి.","Decide by your age, goal, horizon and comfort. Consult a SEBI-registered advisor if needed."]],
q:[["వైవిధ్యం అంటే?","Diversification means…",[O("డబ్బును పంచడం","Spreading money"),O("ఒకే చోట పెట్టడం","One place only")],0],
["గుర్తుంచుకోండి?","Remember…",[O("అన్నిటికీ ధర ఎక్కువ తక్కువ అవుతుంది","All assets can fluctuate"),O("బంగారం ఎప్పుడూ తగ్గదు","Gold never falls")],0]]}
);
const DAYS30=[
["నెలవారీ ఆదాయం, ఖర్చులు రాయండి.","Write monthly income and expenses."],["ఒక అనవసర సబ్‌స్క్రిప్షన్ రద్దు చేయండి.","Cancel one unused subscription."],["ఇంట్లో నగదు, ఖాతా నిల్వలు లెక్కించండి.","Count cash and account balances."],["నేటి ఖర్చు మొత్తం రాయండి.","Record all of today's spending."],["బయట తిండి లేని రోజు పాటించండి.","Go a day without eating out."],["ఈ వారం ఖర్చు సమీక్ష.","Weekly spending review."],["చిన్న మొత్తం పొదుపుకు పంపండి.","Send a small amount to savings."],
["అప్పులన్నీ జాబితా చేయండి.","List all debts."],["అత్యధిక వడ్డీ అప్పును గుర్తించండి.","Identify the highest-interest debt."],["EMI గడువు తేదీలు రిమైండర్ పెట్టండి.","Set EMI due-date reminders."],["క్రెడిట్ స్కోర్ చూడండి.","Check your credit score."],["అదనంగా ₹100 అప్పుకు కట్టండి.","Pay an extra ₹100 on a debt."],["కొత్త అప్పు లేకుండా రోజు గడపండి.","Spend a day with no new borrowing."],["ఈ వారం ప్రగతి రాయండి.","Write this week's progress."],
["ఎమర్జెన్సీ ఫండ్ లక్ష్యం నిర్ణయించండి.","Set an emergency fund target."],["ఎమర్జెన్సీ ఫండ్‌కు వేరే ఖాతా లేదా చోటు ఎంచుకోండి.","Pick a separate place for it."],["ఆటోమేటిక్ పొదుపు సెట్ చేయండి.","Set up automatic saving."],["ఒక అవసరం లేని వస్తువు అమ్మండి లేదా ఇవ్వండి.","Sell or donate one unused item."],["బీమా పాలసీలు సమీక్షించండి.","Review insurance policies."],["కుటుంబంతో బడ్జెట్ మాట్లాడండి.","Talk budget with family."],["ఈ వారం ఖర్చు తగ్గింపు లెక్కించండి.","Count this week's savings."],
["నామినీలు ఉన్నాయో చూడండి.","Check nominees exist."],["పన్ను పత్రాలు ఒకే చోట ఉంచండి.","Keep tax papers in one place."],["ఒక స్కామ్ గురించి తెలుసుకోండి.","Learn about one scam type."],["ఫోన్ భద్రత సెట్టింగులు సరిచూడండి.","Check phone security settings."],["SIP కాలిక్యులేటర్ ప్రయత్నించండి.","Try the SIP calculator."],["1 సంవత్సర లక్ష్యం రాయండి.","Write a 1-year goal."],["5 సంవత్సరాల లక్ష్యం రాయండి.","Write a 5-year goal."],["30 రోజుల ఫలితాలు సమీక్షించండి.","Review your 30-day results."],["మీ కొత్త నెలవారీ ప్లాన్ రాయండి.","Write your next monthly plan."]
];
const DAYS42=[
// week1 awareness
["ఆదాయం రాయండి.","Write income."],["రోజు ఖర్చులు ట్రాక్ చేయండి.","Track daily spending."],["అవసరం vs ఇష్టం గుర్తించండి.","Mark need vs want."],["నగదు ఖర్చు రాయండి.","Log cash spending."],["UPI ఖర్చులు రాయండి.","Log UPI spending."],["కార్డ్ ఖర్చులు రాయండి.","Log card spending."],["వారం సమీక్ష.","Week 1 review."],
// week2 budget & save
["బడ్జెట్ తయారు చేయండి.","Make a budget."],["పొదుపు శాతం నిర్ణయించండి.","Set a savings percentage."],["
