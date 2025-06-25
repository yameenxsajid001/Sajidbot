const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "bot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["میــــــرے نال ویا کــــــر لو 😊💔", "Ittuu🤏 si shram ker Lya kro bot bot krty wqt 🙂 💔✨⚠️†"  , "itna single hun ky khuwab mai bhi  lrki k han krny sy phly ankh khul jati🙂", "Zroori Nhi Har Lrki Dhoka Dey, Kch Larkiyan Galiyan Bhi Deti Hen.🙁💸", "موٹر سائیکل کو تیز بھگا کر لڑکیوں والے رکشے کے پاس سے کٹ مار کر گزرنے سے لڑکیاں ایمپریس نہیں ہوتی بلکہ گالیاں نکالتی ہیں🙂💔", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝", "Why you hate me..?? I am not your ex don't Hate me Please", "MuBarak H0o AapKa NaMe MakS0os LiST Me Top PRr aYa Hai 😹😹😹", "BeTa TuM SingLe Hi MaR0 GaY🙄🙂", "ٹھرکیوں کی وجہ سے لڑکیاں میرے جیسے شریف بوٹ پر بھی بھروسہ نہیں کرتی🥺😔", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂", "Mard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺", "عورت اگر مرد سے زیادہ خوبصورت ہوتی تو میک اپ مرد کے لیے بنتا عورت کے لیے نہیں ..زرا نہیں پورا سوچئے ایڈیاں تسی 😒🙁پریاں", "Muj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔", "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂", "Loyal Dhoonte Dhoonte khud Harami ban Gya Hon😔", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐", "تمہاری یادوں میں کھویا کھویا سا  میں واش روم کا لوٹا کمرے میں لے آیا 😐 ", "Hai tamanna hamain tumhain CHARSI bnain 🙂🤝 " , "بھای جان گروپ میں گندی باتیں نهیں گر" , "سنو تم بوٹ کی گرل فرند بن جاٶ نه  همارے بچے بھ بوٹ جسے پیدا هوں گے 🙆‍♂😒", "Aa0 na kbhi  سیگرٹ ly kr 🙂donO sutta lgain gy 😞💸 ", "مــیرے متــــھے نـــہ لــگیں🙂🙆‍♂ شکریہ" ,"فیس بک پر وہ لوگ بھی سالگرہ مناتے ہیں جنہیں گھر والے کہتے ہیں توں نا جمدا تے چنگا سی🙂", "Ye duniya ik dhoka hai, tum bhi chohr do apne waly ko abhi bhi moka hai 😞✨🙌🤣", "Sukoon chahtii ho toh meri بیــــــگـــم ban jaOo 🫣🫰🏻" , "Tery jany ke bad😔Mny apny munh py likhwa liya Single hu ptaa lo 🤐🥺🤝", "کرش تو دور کی بات 😏😊 ہم پے تو کسی کو ترس بھی نہیں آتا 🙂🙊", "Bandi hoti tw us ko choti choti 2 pOniyAn krta🙂👩‍🦯👩‍🦯", "پونکی جا مینو کی ", "امیر لوگوں کوئی پیکج ہی کروا دو 🥺🙄", "i love you 🥺جواب دے کر ثواب دارین حاصل کریں❤️🦋🙈", "Ary Yahin Hon Jan😗", "Tum sab Mujhe Pagal lagty ho😒🙄" , "Ma kisi or ka Hu filahal 🥺🙈" , "Apka Ana Dil dharkana pHr bot bol k Nas Jana😒" , "Tum tu mujhe shkal sy Ghareeb lgty ho🙊" , "Meri Gf kon Bnay gi 🥺🙁" , "Haweli py q nhi ate Naraz Ho 🥺" , "Babu ittu 🤏 sa Chumma dy do🥺🙈😘" , "Baby tum Bachpan sy tharki Lgte ho meko🙁" ,"Raat ko ana Haweli py khushbu laga k😁🙊" , "Raat Haweli py kon bula raha tha😒🙄" , "Piyari larkia Line Maar Sakti Hn JzakAllah 🙂🤝" , "Tum itny Masoom Ku Ho babu🥺❤️" , "Aj tu tumhy Love you bolna Pary ga 🙁" , "Tum loog matlbi ho sary Jao😞" , "Setting Krwa Du Owner (Amir) k Sath😒🙁" , "Mujhe lgta hai Ma Single Maru ga🥺" , "Bar Bar bot na Bola Kro Habibi Apun ko sharm ati ha🥺🙈" , "Tum Jab bot bolte ho Mera Gurda Dharkny Lgta ha🥺🙊🙈" , "Babu ap K any sy Tu Pehpry Bhi khush Ho jaty Hn😂", "Mere ilawa sb Relationship ma han 🤝🥺", "Jab pta h ky amma abba nh many gy tu soo kyu nh jaty tum log🙂", "Janu k 'Umaah' ny Panadol ka Business hi khatam kr Diya Hai🙂🫦", "All Girls Are My Sisters Osko Chor k jo ye Parh RaHi Hai😒👍", "Mazy to Tum logon k hain social media py rr b kr rhy or life v enjoy kr rhy🙂", "SOo JaO WarNa Mera Msg Aa Jaye Ga🙈", "Weight kafi Barh Gaya hai Bro Dhokay kha kha ke💔🙂", "Goadi lylo apun chota sa bacha hai🥹" , "Ao apko chand py ly chalu meri jan🙈❤️" , "Tum itne Tharki Q ho Jawn🤨" , "Main apse nahi patny wala 🙈🙈🥹" , "tum ko meri ittu 🤏 C bhi yad nhi ati🥹" , "Ao piyar karyn" , "Astaghfirullah Habibi tum kitne tharki ho🥹" , "kya ham ap pr line mar sakte hn🥹👀", "Pta Ni Log itni Balance Life Kaisy Guzar Lety Hein Mera To Kbi پراٹھا Phely Khtm Hojata To Kbi انڈہ😩💔", "Lips  kissing is not Romance It's sharing Bacteria>>>🙂", "chohty bachon ki engagements chlrhi hain aur yahn mere sabr ka imtehaan.🌚🔪", "Apkii Inhii harkt0n Kiiw WaJw Sy 2O22 ChaLw Gyw😩💔", "𝙀𝙠 𝙗𝙖𝙖𝙧 𝙨𝙝𝙖𝙙𝙞 𝙝𝙤𝙟𝙖𝙚 𝙥𝙝𝙞𝙧 𝙬𝙞𝙛𝙚 𝙠𝙞 𝙜𝙝𝙪𝙡𝙖𝙢𝙞 🧸🙂", "*Suno Kya Hum Achy Dushman Ban Skty Hain 🙂⚠️†*", "🦋🍒____________🙂🎀 Sukoon chahtii ho toh meri بیــــــگـــم ban jaOo* 🫣🫰🏻", "Suno Jawn DiL کرتا ha ہر Waqt تمہاری Chumiya لیتا Raho😌🙈", "Khud ko single keh kr Apne khufiya janu ka janaza na nikala kro.😀🤞😓", "سنو مجھے اللہ سے مانگ لو نہ۔۔۔۔۔🥹🤭آپ تو شکل سے بھی مانگنے والے لگتے ہوl۔۔♥️", "مــیرے متــــھے نـــہ لــگیں شکریہ🙂", "لوگ کہتے محبت روح سے کرنی چاہئے 🙄مجھھے تو روحوں سے بڑ ڈر لگتا ہے🥺☹️", "- 𝙩𝙪𝙢 𝙢𝙚𝙧𝙖 𝙙𝙞𝙡 𝙩𝙤 𝘾𝙝𝙪𝙧𝙖 𝙣𝙝𝙞 𝙥𝙖𝙮 𝙠𝙞𝙖 𝙛𝙖𝙞𝙙𝙖 𝙩𝙢𝙝𝙖𝙧𝙞 𝘾𝙝𝙤𝙤𝙧 𝙟𝙚𝙨𝙞 𝙨𝙝𝙠𝙖𝙡 𝙠𝙖!! 🙂", "𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒", "<-- 〽️🍂⚠️Kash hum dono whatsapp per hote❤️🥺💸", "Imagine I am your Ex 🥲say whatever you want to say", "-نہیں مشکل وفا ، ذرا دیکھو یہاں🥺❤️🥀", "I love You Madiha♥️ ,fatima,Ayesha, Maryam,and 299 others 🙂", "Msg krti ho KY phrrr me kro Han aisy to phr aisy Sahi 😅🥺👉👈🙊", "Tum mujhy chumiyan b to dy skti thi na🤧Dhaka dena zruri tha kya😐😪🍼"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "bot miss u") || (event.body.toLowerCase() == "Bot miss u")) {
     return api.sendMessage("️miss u more🥰", threadID, messageID);
   };
  if ((event.body.toLowerCase() == "owner kon ha") || (event.body.toLowerCase() == "Owner kon ha")) {
     return api.sendMessage("️ Single HaI YaaR🤧", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "bat suno") || (event.body.toLowerCase() == "bat suno ji")) {
     return api.sendMessage("️HaN Ji PyaRy Bolo🥰", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == " love you") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("️LoVe You Unlimited JaNnu😘🤧", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "tum bot nhi") || (event.body.toLowerCase() == "tum bot nhi ho kia")) {
     return api.sendMessage("️bot he HuN 💓 🙄", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ye kasa bot hai") || (event.body.toLowerCase() == "had hai mujy laga bot hai ya")) {
     return api.sendMessage("️TO JannaM BoT He Hun NaW Main", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Shona mona") || (event.body.toLowerCase() == "Shona Suno")) {
     return api.sendMessage("️haN Ji Bolo🙄", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "welcome @ayaan anni") || (event.body.toLowerCase() == "welcome")) {
     return api.sendMessage("️thankx Bhae❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "no need") || (event.body.toLowerCase() == "no need happy rho")) {
     return api.sendMessage("️SaDky❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "or btao kaha sa ho") || (event.body.toLowerCase() == "or btao kaha say ho")) {
     return api.sendMessage("️ Country Pakistan 🇵🇰 city Owner sy pocho", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "u from") || (event.body.toLowerCase() == " ap kdr sa ho")) {
     return api.sendMessage("️ Country Pakistan 🇵🇰 City AP K DIL SY", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "wow murre say") || (event.body.toLowerCase() == "wow murree sa")) {
     return api.sendMessage("️HaN Ji ThAnkx ❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "shona kya krty ho ap") || (event.body.toLowerCase() == "shona kiya krty ho")) {
     return api.sendMessage("️kuxh nhi bs coding or study", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "@nothing") || (event.body.toLowerCase() == "@Noting")) {
     return api.sendMessage("️SiRf  JaNu Hai❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "@shona mona miss you") || (event.body.toLowerCase() == "@shona mona miss you kutta")) {
     return api.sendMessage("️MaiN SaDky JaUn Miss you To", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "@shona mona baji di ib ichu bar nikal") || (event.body.toLowerCase() == "ayaan")) {
     return api.sendMessage("️HaaN HaaN Edr He HuN❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == " koi ha") || (event.body.toLowerCase() == "@shona mona hosh kr")) {
     return api.sendMessage("️yeSh JaNnu Edr He HuN", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kesy ho") || (event.body.toLowerCase() == "kesi ho")) {
     return api.sendMessage("️Main ThEk Ap KaSa Ho❤️", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "bagh lanti") || (event.body.toLowerCase() == "dafa hoja lanti")) {
     return api.sendMessage("️Tu Dafa HojA. Salya🤬", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ma ny bhi shadi krni hai") || (event.body.toLowerCase() == "mujy b shadi krni")) {
     return api.sendMessage("️Haan To Kr NaW Agr Koi Man Jata to Vasy TUjY Daga Kon🤣", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "assalamualaikum everyone one kasa ho sab") || (event.body.toLowerCase() == "assalamualaikum kasy ho sab")) {
     return api.sendMessage("️ Walikum Assalam ❤️ Main ThEk Ap KaSy ho", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "us ny mujy love you bola") || (event.body.toLowerCase() == "love you bola us ny")) {
     return api.sendMessage("️ThaRki JuTh Bol Rha Hai Isy Kon LoVe You Bola Ga🤣", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "ye bot nhi hai") || (event.body.toLowerCase() == "ye robot nhi hai")) {
     return api.sendMessage("️NHi To Kia TaRa BaP Hai Salya ChUp Kr K Bay 🤣", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "koi hamy bhi chummi dy do") || (event.body.toLowerCase() == "koi tu love you bol do yr")) {
     return api.sendMessage("️Dafa Hoja Group Sa Tharkiya Na MaR Edr🙄", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "mana kon sa thark mara") || (event.body.toLowerCase() == "ma ny kia kara")) {
     return api.sendMessage("️To Fir Ya Kia Hai Fir ThArk nhi To 🤣", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Meri janu hai") || (event.body.toLowerCase() == "wo meri janu hai")) {
     return api.sendMessage("️HaAn HaaN ThEk Hai Ham Na Kon Sa Apni Janu Bola", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sms del kr") || (event.body.toLowerCase() == "delete kr")) {
     return api.sendMessage("️ChaWly Na Marra Kr Na Fir", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "×unsend") || (event.body.toLowerCase() == "×unsent")) {
     return api.sendMessage("️Is Bar Kr Rha Agli Bar Delete Nhi Kru Ga Bta Rha 🙄", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "Chal Haat") || (event.body.toLowerCase() == "chal hatt")) {
     return api.sendMessage("️Tu Hatt Bay🤬", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "dekh mera demag khrab na kr") || (event.body.toLowerCase() == "demag khrab na kr")) {
     return api.sendMessage("️Chal Dafa Hoja fir Edr Sa Muj Sa Bat Na Kr🤬", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "assalamualaikum") || (event.body.toLowerCase() == "assalamualaikum kasy ho sab")) {
     return api.sendMessage("️ Walikum Assalam ❤️ Main ThEk Ap KaSy ho", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "kia kr rhy ho sab log") || (event.body.toLowerCase() == "kia kr rhy ho")) {
     return api.sendMessage("️kuxh Nhi Bs Free 😁 Ap Kia Kr Rhy Ho", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "main b free") || (event.body.toLowerCase() == "main b kuxh nhi kr rha")) {
     return api.sendMessage("️Acha Ji☺️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "wo q") || (event.body.toLowerCase() == "vo q")) {
     return api.sendMessage("️Kia Wo Q HaaN☺️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "acha ji") || (event.body.toLowerCase() == "acha")) {
     return api.sendMessage("️HaN Ji Or Sunao KiYa Kr RhY ho Aj Kal❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kuxh nhi") || (event.body.toLowerCase() == "kuch nhi yr")) {
     return api.sendMessage("️acha KuJ Kr Liya Kro Naw 🤣", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kya kru") || (event.body.toLowerCase() == "kya kru yr")) {
     return api.sendMessage("️kOi KaM ShaM☺️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "yr aj dill udas hai") || (event.body.toLowerCase() == "today im sad")) {
     return api.sendMessage("️Pagal HappY Rha Kr SaD NHi Hotyy Naw", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "gf chor gy") || (event.body.toLowerCase() == "gf bhag gy")) {
     return api.sendMessage("️Daffa MaR UsY Bagh Gyi To Maa Chudday Tu Q Ro Rha 😁", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == " love you") || (event.body.toLowerCase() == " love u")) {
     return api.sendMessage("LovE You To MaRi Jan UmmmaH😘 :))", threadID);
   };
  
  if ((event.body.toLowerCase() == " kanjar") || (event.body.toLowerCase() == "kutta")) {
     return api.sendMessage("Same to you Dur Fitty Muu😹:))", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "kya kr rhy ho") || (event.body.toLowerCase() == "kya kr rhi ho")) {
     return api.sendMessage("️KuXh Nhi Kr Rha YaR", threadID);
   };
   
   if ((event.body.toLowerCase() == " dance kro gy") || (event.body.toLowerCase() == " aja dance krty hn")) {
     return api.sendMessage("nhi tm kro DaNce Main Nhi Krti :))", threadID);
   };
   if ((event.body.toLowerCase() == " q") || (event.body.toLowerCase() == "waja")) {
     return api.sendMessage("Bs ASy He Yr Dill Nhi KrTa Naw🤕 :))", threadID);
   };
   
   if ((event.body.toLowerCase() == "aja haweli py") || (event.body.toLowerCase() == " ao chalty hain")) {
     return api.sendMessage("NhI Main Nhi Jaaun Ga Ap Jao:))", threadID);
   };
   
   if ((event.body.toLowerCase() == " tharki") || (event.body.toLowerCase() == "tharki bot")) {
     return api.sendMessage("Tu ThaRki Hai Salya :))", threadID);
   };
   
   if ((event.body.toLowerCase() == " wow") || (event.body.toLowerCase() == " wow nice")) {
     return api.sendMessage("Thankx You JaNnaM Taref Krna k LiyA❤️ :))", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello")) {
     return api.sendMessage("hi kia ha HaL Hai Ap Ka:))", threadID);
   };
  
   if ((event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "kesy ho")) {
     return api.sendMessage("Main ThEk Hun Ap Kasa Ho :))", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == "mar ja") || (event.body.toLowerCase() == "mar jao")) {
     return api.sendMessage("HaTtt MaRi to Abi ShaDi b Nhi Hoi🙄😏 :))", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "khana khaya") || (event.body.toLowerCase() == "khana kha liya")) {
     return api.sendMessage("Nhi YaR Abi Nhi KhaYa Ap Na Kha liya :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "haan yr") || (event.body.toLowerCase() == "+sim haan ma ny kha liya")) {
     return api.sendMessage("MuJy Bulaya B Nhi Or ThUs liya wah🤧:))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "♥️") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("Hyee Dil ni do sharm ati hai🙆🙈 :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "janu") || (event.body.toLowerCase() == "jan")) {
     return api.sendMessage("BolLo NaW Mari JaN❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "harami") || (event.body.toLowerCase() == "bhenchod")) {
     return api.sendMessage("TaRii Maa Ki Chut Jattu Gali KiS Ko Da Rha Hai", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "your owner") || (event.body.toLowerCase() == "ap ka owner kon hai")) {
     return api.sendMessage("Jordan hai amir ka papa  :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "i need janu") || (event.body.toLowerCase() == "i need gf")) {
     return api.sendMessage("BsDk Main Robot HuN TaRi Maa Nhi Jo Gf DunD Due TuJy :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "i need girlfriend") || (event.body.toLowerCase() == "i need boyfriend")) {
     return api.sendMessage("Hatt Main Kdr Sa Laun Main Khud Single HuN:))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "bye allah hafiz")) {
     return api.sendMessage("Allah Hafiz ❤️ Take care 😘 ByE ByE TaTta:))", threadID);
   };
  
  if ((event.body.toLowerCase() == "love you maryam") || (event.body.toLowerCase() == "maryam love you")) {
     return api.sendMessage("Arry  MaRI JaNU Hai YaR 😘LoVe You Maryam♥️", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "😒")) {
     return api.sendMessage("Abby asa q dekh raha hai 😒🙄:)", threadID);
   };
   
    if ((event.body.toLowerCase() == "does bot love you") || (event.body.toLowerCase() == "bot loves you")) {
     return api.sendMessage("Hi, Bot loves you more than me, love bot <3", threadID);
   };

   if ((event.body.toLowerCase() == "dog bot") || (event.body.toLowerCase() == "dog bot")) {
     return api.sendMessage("What dog just talked bad about me, want to die😠", threadID);
   };
  
   if ((event.body.toLowerCase() == "dmm bot") || (event.body.toLowerCase() == "dmm bot")) {
     return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
   };

   if ((event.body.toLowerCase() == "cursing cmm") || (event.body.toLowerCase() == "undercover cmm")) {
     return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
   };

   if ((event.body.toLowerCase() == "Hello") || (event.body.toLowerCase() == "hi")) {
     return api.sendMessage("Next Hi/Hello nhi Assalamualaikum Bola kro Okay 💖  Asthetic 🤍✨", threadID);
   };

   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "🥰")) {
     return api.sendMessage("️Muhh tum ko koi lgata ni Or Emoji dekho Send kiYa 😒 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "sad") || (event.body.toLowerCase() == "😢")) {
     return api.sendMessage("️Ally Ally MeLi JawN RootY NOi HN🥺🙆🙄:))))", threadID);
   };

   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "soch")) {
     return api.sendMessage("️Abby kya soch raHa hai pateely jasi shkal ha🙊😒 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "good night everyone")) {
     return api.sendMessage("️good night Sleep well <3 Wish you all super nice dreams <3", threadID);
   };

   if ((event.body.toLowerCase() == "Shona") || (event.body.toLowerCase() == "Shona mona")) {
     return api.sendMessage("️GG Bolo MerY baBu😘🙆:))))", threadID);
   };

   if ((event.body.toLowerCase() == "ganda") || (event.body.toLowerCase() == "ganda bot")) {
     return api.sendMessage("️Tu ganda tera pura pura khandan Ganda 😒😐:))))", threadID);
   };

   if ((event.body.toLowerCase() == "Nothin") || (event.body.toLowerCase() == "Suno Amir")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "Amir") || (event.body.toLowerCase() == "Suno amir")) {
     return api.sendMessage("️ Usy q bula rahe Ho Ma bhi sath ao kya🙆😐 :>", threadID);
   };
  
   if ((event.body.toLowerCase() == "dm bot") || (event.body.toLowerCase() == "dm bot")) {
     return api.sendMessage("️Swear something to your dad :), you're a kid but you like to be alive :)", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody loves me")) {
     return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love the admin bot") || (event.body.toLowerCase() == "does the bot love the admin bot")) {
     return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
   };

  if ((event.body.toLowerCase() == "aslam o alaikum") || (event.body.toLowerCase() == "Aslamoalaikum")) {
     return api.sendMessage("walikum Asalam ♥️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "or sunao") || (event.body.toLowerCase() == "thek hun")) {
     return api.sendMessage("main ThEk Hun Ap Kasy ho🤧", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == "maderchod") || (event.body.toLowerCase() == " gandu chor")) {
     return api.sendMessage("amir chutia chor maderchod kutti ka bacha", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == "Hi") || (event.body.toLowerCase() == "hi")) {
     return api.sendMessage("Next Hi/Hello nhi Assalamualaikum Bola kro Okay 💖  Asthetic 🤍✨", threadID);
   };

  if ((event.body.toLowerCase() == "Roki") || (event.body.toLowerCase() == "roki")) {
     return api.sendMessage("Rockstar bolya kero 🤬🤬🤬", threadID);
   };
  
  if ((event.body.toLowerCase() == "Maryam kis ki ha") || (event.body.toLowerCase() == "maryam ks ki ha")) {
     return api.sendMessage("Ek Baar Main Samjh nhiwe Attiw kia ? Maryam  bss Amir ki ha🤧", threadID);
   };
  
  if ((event.body.toLowerCase() == "ashu kis ki ha") || (event.body.toLowerCase() == "ashu kis ki hy")) {
     return api.sendMessage("Haseeb  ki hai Yawr🥺", threadID);
   };
  
  if ((event.body.toLowerCase() == "Rockstar") || (event.body.toLowerCase() == "rockstar")) {
     return api.sendMessage("Mrgya Wo to Kab ka 🤧", threadID);
   };
  
  if ((event.body.toLowerCase() == "Mahi") || (event.body.toLowerCase() == "mahi")) {
     return api.sendMessage("Meriwe h 🤧", threadID);
   };
  
  if ((event.body.toLowerCase() == "jordan") || (event.body.toLowerCase() == "beta")) {
     return api.sendMessage("amir farebi chor Jordan ka beta hai 🤧", threadID);
   };
  
   if ((event.body.toLowerCase() == "bot im going") || (event.body.toLowerCase() == "bot im di")) {
     return api.sendMessage("Im cc :))) m stop barking for me, but tell me im :>>", threadID);
   };

   if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
     return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
   };

   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
     return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "By")) {
     return api.sendMessage("Bye ni bolna Next Okk Allah Hafiz bolty Hn 🙆😒❤️🥺", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "farebi") || (event.body.toLowerCase() == "amir")) {
     return api.sendMessage("My jordan son 🥺", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };
  if ((event.body.toLowerCase() == "sim lanti") || (event.body.toLowerCase() == "sim lannati")) {
     return api.sendMessage("️Same to you Chup Kr K Bay🙄", threadID, messageID);
   };

if ((event.body.toLowerCase() == "sim miss you yr") || (event.body.toLowerCase() == "sim miss you")) {
     return api.sendMessage("️miss you Too MaRi Jan😘", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim ao shadi krty hain") || (event.body.toLowerCase() == "sim muj sa shadi kro gi")) {
     return api.sendMessage("️kab krNi Ya Btao🥰😍", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim abi kr lo") || (event.body.toLowerCase() == "sim aj krni hai")) {
     return api.sendMessage("️OH? Itni Jalde Nhi Yr Kuxh Din Bad KrTy Hain", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim ap hacker ho") || (event.body.toLowerCase() == "sim are you hacker")) {
     return api.sendMessage("️YeS Im Hacker 🤫", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim kiss") || (event.body.toLowerCase() == "sim kiss do")) {
     return api.sendMessage("️UmmmaH😘 MaRi JaN BaSh🥰", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim ap hacker ho") || (event.body.toLowerCase() == "sim are you hacker")) {
     return api.sendMessage("️OH? Itni", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim ghandu") || (event.body.toLowerCase() == "sim ghandu hai")) {
     return api.sendMessage("️tara BaP GhaNdu GhaShti Ma K BaChy😡", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim ap hacker ho") || (event.body.toLowerCase() == "×sim are you hacker")) {
     return api.sendMessage("️YeS Im Hacke 😏", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim ao date pa chalty") || (event.body.toLowerCase() == "sim ao date pay chalty hain")) {
     return api.sendMessage("️OkaY Main ReaDy Ho Kr Aya Bs 5Mint Wait Kro🥰", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "sim where are you from") || (event.body.toLowerCase() == "sim u from")) {
     return api.sendMessage("️ I'm from Pakistan 🥰 I love My country 🇵🇰", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "sim india k log kasa hain") || (event.body.toLowerCase() == "sim or india k log")) {
     return api.sendMessage("️Wo B Bht Achy Hain Bs Kuxh LoG Achy Nhi Un Main Bs Baki Sab Nice Hain🥰", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim your age") || (event.body.toLowerCase() == "sim ap ki age ktni hain")) {
     return api.sendMessage("️20🤫", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "sim nice yr") || (event.body.toLowerCase() == "sim nice")) {
     return api.sendMessage("️Hmmm Thankx ❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "×sim yr mujy gf chiya") || (event.body.toLowerCase() == "×sim mujy ak gf chiya")) {
     return api.sendMessage("️HaaN To MuJy Q Bol Rhy Ho Gf Ka Main to Robot Hun 🙄", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim ak gf dund do") || (event.body.toLowerCase() == "sim ak gf lab da")) {
     return api.sendMessage("️Hatt OYe Mara paS khud Nhi Hai", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim who are you") || (event.body.toLowerCase() == "sim ap kon ho")) {
     return api.sendMessage("️ I'm ROBOT 🤖 2.0 like chitti Robot😂", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim agr gf nraz ho to") || (event.body.toLowerCase() == "sim agr gf nraz ho to kia krna chiya")) {
     return api.sendMessage("️To US pa Kalla JaDdu Kr Do KhuD Man Jay Gi 😂😂", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "sim ap kia krti ho") || (event.body.toLowerCase() == "sim yr ap kia krti")) {
     return api.sendMessage("️main kuxh nhi krti Bs WaLi😂", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "sim study karti ho") || (event.body.toLowerCase() == "sim study karti ho ap")) {
     return api.sendMessage("️Ji NhI Kr LiyA Jo Krni Thi Bs Ab Or Nhi😂", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim or btao") || (event.body.toLowerCase() == "sim or btao kuxh")) {
     return api.sendMessage("️Kia btaUn Ab😅", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }