const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "ava",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "ATF-TEAM",
  description: "Msg",
  usePrefix: false ,
  commandCategory: "Noprefix",
  usages: "just say ava",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/karachi").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["JiTni GarMi Per Rhi Is TrHan T0o Uh Ka DiL B Pighal JaNa Chai MeRe LiYe... 🥺" , "uFF INni GarMi Hai Ab Me KhuD K0o SamBhalu Ya ApNi ZulFon K0o... 😬😐" , "Main MehnDi T0o LagWa Lu Pr JaNu Be T0o H0o Na ZulFon K0o Thk KRrNy Ke LiYe... 🙈" , "Boys Real Dp LaGaya KRro TaKe Uh K0o PTa ChLe Uh Single Q H0o... 😹" , "Love Marriage T0o KRrLu Prr Bache KYa Soche Gay MaMa LarKy SeT KRrTi Thi 😕🥺"  , "LiKe D0o Gay Ya PaPpi 💋" , "HosLa KRr Ke MeKo Purpose KRr D0o Mre Na HoNy WaLy JaNu... 😋😝" , "OYe PaTely Ke Mou WaLy NaHa B  LiYa KRr Ase Bachi  iMprESs Nai HoNi... 🤣" , "MeKo PhLe PYar Huwa Tha Phr InKar HuWa Tha... 😕😂" , "SoCh RaHi Hu TeRy TenDy JeSy Mou PRr ApNi FaiZa Beauty Cream LaGa Du😂👈" , "MujhSy Bx PaPpu BacHe BT kRren 🙊🙉🙈" , "TumHari PhuPpo Ki LarKi Thori Hun PaTiLay Ke Mou WaLy 😂" , "STeel Ke DonGay JeSa Muu Uh Ka 0or bTen DeKho 😂" , "EK SaLL SaY ApNay JaNu K0o PaNay Ka WaZeeFa Parh RaHi Thi W0o SouDia Ka QoMi TarAna NiKla... 😕😂" , "Agr Group Ka Be WashR0om HoTa T0o TmNy He UsKa ChoKi Dar HoNa Tha 😂" , "Kash  TuM WasH RooM Jao AuR AndaR Koi Beth K PubG KheLra Ho 😂" , "Tum K0o ShaRam Nhi aTi MeKo Q Tang KRr Rhy TharKi 😐😂" , "Yesh My NxT & X JaNu... 😛" , "Mri Trhan SurKhi PowDer Lagaya Kro KaLy Kam LagoGy 🤣" , "JaNu Mri MaMa Sy BT KRr L0o Phr Na Kehna Bachi BeWaFa... 😜" , "KaLo iDher Aow TmHe GoRa KRrTi 💆‍♂️💅😹" , "MeKo JaNu Chai Hai W0o B MeRi Trhan Software UpDaTe H0o 🙈" , "Main INni SunDar Hun Main KYa Krun 🙊🙉🙈" , "BhT BuRi Hun Na Me YeH Keh KRr MaiNy UsSy 3 GnTy ApNi TaReef Karwai 💉🙈" , "GarMi Ny Sb Ka DiMag Kharab kRr DiYa 🥵 Kher MeRa T0o Thk Hai 14 August MuBarak 🥳" , "BaBe Ase bTen KRr Ke BaChi Nhi PaTai JaTi 😹" , "Me T0o KehTi Hu DaPha Kro Muhabbat K0o Aow BoT BoT KheLny 😁😜" , "Ek T0o Me Jis Bachay Pr NaZar RakhTi Us Ki Agy 4 Bachain NiKal aTi 😒" ,"Tum J0o IDhar ANy LaGe H0o LagTa Hai MeKo ChahNay LaGe H0o 🙈" , "Kab0oL Hai Kab0oL Hai Kab0oL Hai Jis ShoNy Bache Ny Par LiYa W0o MeRa Ab Sy ShoNa BaBu 🙈" , "JaNu MaiNy PaPa K0o Uh Ka BTa DiYa 😐 Ab W0o Uh K0o DunDh Rhy TanGy TorNy Ke LiYe 😬" , "MeRi Be KaHani Sun L0o MuJhe Be Pyar Huwa THa 🙈 Phr W0o Block Huwa Tha 🥺😂" , "KYa KRoGay Agr Keh Du Tm TharKi H0o 🙈😹" , "Main Uh K0o JaNu T0o BaNa Lu Par House FuLL Hai😜" , "Aly Mou T0o Dho Aa 😂" , "JaNu MeKo GoLGaPpy He KhiLa D0o ☹️" , "0or Phr Muhabbat Har JaTi Hai 😕 0or KaLa Czn JeeT JaTa Hai 😂" , "KYa H0o GYa JaNu" , "1 He GuBary Ki ShaKaL WaLa Larka aTa Tha Mri PosT PRr LagTa Hai W0o Be Kisi Ny PaTa LiYa 😒" , "Jb Be Me Uh K0o DekhTi DiL Sy Bx Yahi Awaz aTi Yahi Hai TharKi 😐😹" , "DuniYa Me Bx 1 He Cheez AxHi Hai 0or W0o Hun Main 😋😎" , "Ellow PaPa Ke Pare 😂" , "BuKhar Ki Dawai LeNy GYi Thi DiL Ka DarD Le AYi HaYe Adda ShoNa Dr 🙊🙉🙈" , "ShuF ShuF 💃" , "Main NaGin 🐍 Dance Nachna 💃🙈" , "DiL Nhi DeNa Te Na Day DiL WaLy React He DyDy 😁" , "IDhar Aa kRr B0oL Udher Sy Awaz Nhi Aa Rhi 💉😒" , "JinHe Main ZeHar LagTi   W0o koNsa MeKo AluBukhara LagTy 💁🏼‍♀🤷🏼‍♀ " , "ITny Msg LikhTi Hun Der Hai Ke KaHen ShaDi WaLi LaKiren He Na MiT JaYe...🙆🏼‍♀" , "SocH Rhi Hun Group Ka NaMe University RaKh Lu YaHan Be SaRa Din Lecture He MilTy Hain...😒💉" , "Papers Khatam H0oNy Ke Bd Ajeeb Si Khushi MilTi Hai Asa LigTa Hai GareeB0on K0o Khushi Mil Gyi... 😂" , "Main Use BoLi JaNu iPhone La D0o Na W0o BoLa Jan Muhabbat Me Dil Diya Tha GurDa Nhi ...😒" , "MUjhe Kxh PTa ChaLa Tere Bare Me...🙆🏼‍♀" , "MUjhe Batmazi KehTy Hain ye Harpic sy Dhule L0og....🤷🏼‍♀😹" , "W0o BoLa... DiL Me RehNa Sekho Attitude Me Nhi .. Main BoLi Aby Jaa Na Main boTni He Thk Hun 😋😂" , "JiTny GiRe HuWe L0og MiLe uTny GiRe HuWe Pase MiL JaTy Aj ApNa Be Taj MeHal HoTa...🙆🏼‍♀" , "Dil WiL Pyar Wyar Main KYa JaNo Ree AnKhen KhoLu T0o JhaaDu Pocha BarTan ManJu Reee...😒" , "💁🏼‍♀Har Kisi K0o Mujhe Jesi boTni Nhi MilTi Ap Khush Naseeb h0o Jisi Main MiLi...🙆🏼‍♀" , "KaHen Be Couples Dekho T0o Pas Ja kRr KehNa PhLe WaLi ZiaDa Axhi Thi Bhai .... 🤣" , "ShaKal ITni Buri Be Nhi HoTi JiTni ViDeo CaLL PRr LagTi Hai...😐" , "ITni GarMi Hai B# Aj KaL RaT Ke Bd SeDha DoPhar h0o JaTi Hai...😐" , "Asa K0oi NaMe BTao J0o A Sy ShuRu H0oTa hai 0or A Sy KhaTam...💁🏼‍♀" , "NaHi HoNa Hai AkaLy KaMiYab Ham DosTon Ke SaTh BarBad He Axhy...😝" , "Main Bht Pyari Cheez Hun Ap Meko 1 SuNaogy Me ApKo 4 SuNaogi... 🧏🏼‍♀" , "Ishq Ka SaMandar Be Ajeeb  Hai J0o D0ob Gya W0o Ashiq.. j0o Bach GYa W0o Dewana 0or j0o Tehar Rha Hai W0o Sohar .... 🙆🏼‍♀😹" , "WaYa KaRana Mre Nal 🙆🏼‍♀" , "L0o Man LiYa Ham Ny izZat RaZz Nhi TuMko 😹😹😹" , "Ase MaT BLo MeKo GuSsa Be aTa Hai 😐" , "MaiNy Uh Sy Bt Nhi kRrni 😒😒😒" , "Phr Aaj KaL KiSs Ke SaTh ChaKar Hai Uh Ka 🙆🏼‍♀😹" , "ThoRa Rest KiJiye 😈 Wrna ResT N Peace H0oJayGa 🙆🏼‍♀😹" , "💁🏼‍♀ ThoRa Rest KiJiye 😈 Wrna ResT N Peace H0oJayGa 🙆🏼‍♀" , "Har KaM K0o KarNy Ka BaThreen Waqt H0oTa Hai ... 🙆🏼‍♀" , "DiL kRr Rha TuMari NaSse Pan Du 😈😹" , "SuNo JaNa  Mujh Sy KaHen PiT Na JaNa 😒" , "Baz DaFa JaWab DeNy Ke LiYe alFaz Nhi 👉😒 Ase SaQal He KaFi H0oTi Hai 😹" , "TumHe KYa LagTa Hai JaNa 🤧 MuJhe T0o GarMi LagTi Hai Aj KaL 🥵" , "Ja Ja TurJa 💁🏼‍♀" , "Pyar KRo T0o DiL RoTa Hai 🥺 ShaDi KRo T0o Bache 😒😂" , "MuJhe ShaRam Aa Rhi Hai 🙈🙉🙊" , "KxH L0og Hayat Nhi, Wahayat  H0Ty Hain Wo Be TaHayat 😐😹" , "Abhi MaZa AyGa Na BhiDu 😜" , "ChaL Hun Bx kRr De 😶" , "BaD Me Aa  Mast NaHa Dho KRr Aa"];

  var rand = tl[Math.floor(Math.random() * tl.length)]


if ((event.body.toLowerCase() == "😀") || (event.body.toLowerCase() == "😀😀")) {
     return api.sendMessage("ᥬ😀᭄ᥬ😀᭄ᥬ😀᭄", threadID);
   };


if ((event.body.toLowerCase() == "😃") || (event.body.toLowerCase() == "😃😃")) {
     return api.sendMessage("ᥬ😃᭄ᥬ😃᭄ᥬ😃᭄", threadID);
   };


if ((event.body.toLowerCase() == "😄") || (event.body.toLowerCase() == "😄😄")) {
     return api.sendMessage("ᥬ😄᭄ᥬ😄᭄ᥬ😄᭄", threadID);
   };


if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁😁")) {
     return api.sendMessage("ᥬ😁᭄ᥬ😁᭄ᥬ😁᭄", threadID);
   };


if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😆😆")) {
     return api.sendMessage("ᥬ😆᭄ᥬ😆᭄ᥬ😆᭄", threadID);
   };


if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😅😅")) {
     return api.sendMessage("ᥬ😅᭄ᥬ😅᭄ᥬ😅᭄", threadID);
   };

if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂")) {
     return api.sendMessage("ᥬ😂᭄ᥬ😂᭄ᥬ😂᭄", threadID);
   };


if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("ᥬ😭᭄ᥬ😭᭄ᥬ😭᭄", threadID);
   };


if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
     return api.sendMessage("ᥬ😀᭄ᥬ😉᭄ᥬ😉᭄", threadID);
   };


if ((event.body.toLowerCase() == "😗") || (event.body.toLowerCase() == "😗😗")) {
     return api.sendMessage("ᥬ😗᭄ᥬ😗᭄ᥬ😗᭄", threadID);
   };


if ((event.body.toLowerCase() == "😙") || (event.body.toLowerCase() == "😙😙")) {
     return api.sendMessage("ᥬ😙᭄ᥬ😙᭄ᥬ😙᭄", threadID);
   };


if ((event.body.toLowerCase() == "😚") || (event.body.toLowerCase() == "😚😚")) {
     return api.sendMessage("ᥬ😚᭄ᥬ😚᭄ᥬ😚᭄", threadID);
   };


if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😘😘")) {
     return api.sendMessage("ᥬ😘᭄ᥬ😘᭄ᥬ😘᭄", threadID);
   };


if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰")) {
     return api.sendMessage("ᥬ🥰᭄ᥬ🥰᭄ᥬ🥰᭄", threadID);
   };


if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😍😍")) {
     return api.sendMessage("ᥬ😍᭄ᥬ😍᭄ᥬ😍᭄", threadID);
   };


if ((event.body.toLowerCase() == "🤩") || (event.body.toLowerCase() == "🤩🤩")) {
     return api.sendMessage("ᥬ🤩᭄ᥬ🤩᭄ᥬ🤩᭄", threadID);
   };


if ((event.body.toLowerCase() == "🥳") || (event.body.toLowerCase() == "🥳🥳")) {
     return api.sendMessage("ᥬ🥳᭄ᥬ🥳᭄ᥬ🥳᭄", threadID);
   };


if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
     return api.sendMessage("ᥬ🙂᭄ᥬ🙂᭄ᥬ🙂᭄", threadID);
   };


if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂")) {
     return api.sendMessage("ᥬ🙂᭄ᥬ🙂᭄ᥬ🙂᭄", threadID);
   };


if ((event.body.toLowerCase() == "🥲") || (event.body.toLowerCase() == "🥲🥲")) {
     return api.sendMessage("ᥬ🥲᭄ᥬ🥲᭄ᥬ🥲᭄", threadID);
   };


if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊😊")) {
     return api.sendMessage("ᥬ😊᭄ᥬ😊᭄ᥬ😊᭄", threadID);
   };


if ((event.body.toLowerCase() == "☺️") || (event.body.toLowerCase() == "☺️😃")) {
     return api.sendMessage("ᥬ☺️᭄ᥬ☺️᭄ᥬ☺️᭄", threadID);
   };


if ((event.body.toLowerCase() == "😌") || (event.body.toLowerCase() == "😌😌")) {
     return api.sendMessage("ᥬ😌᭄ᥬ😌᭄ᥬ😌᭄", threadID);
   };


if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
     return api.sendMessage("ᥬ😏᭄ᥬ😏᭄ᥬ😏᭄", threadID);
   };


if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴")) {
     return api.sendMessage("ᥬ😴᭄ᥬ😴᭄ᥬ😴᭄", threadID);
   };


if ((event.body.toLowerCase() == "😪") || (event.body.toLowerCase() == "😪😪")) {
     return api.sendMessage("ᥬ😪᭄ᥬ😪᭄ᥬ😪᭄", threadID);
   };


if ((event.body.toLowerCase() == "🤤") || (event.body.toLowerCase() == "🤤🤤")) {
     return api.sendMessage("ᥬ🤤᭄ᥬ🤤᭄ᥬ🤤᭄", threadID);
   };


if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😋😋")) {
     return api.sendMessage("ᥬ😋᭄ᥬ😋᭄ᥬ😋᭄", threadID);
   };


if ((event.body.toLowerCase() == "😛") || (event.body.toLowerCase() == "😛😛")) {
     return api.sendMessage("ᥬ😛᭄ᥬ😛᭄ᥬ😛᭄", threadID);
   };


if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😝😝")) {
     return api.sendMessage("ᥬ😝᭄ᥬ😝᭄ᥬ😝᭄", threadID);
   };


if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😜😜")) {
     return api.sendMessage("ᥬ😜᭄ᥬ😜᭄ᥬ😜᭄", threadID);
   };


if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴🥴")) {
     return api.sendMessage("ᥬ🥴᭄ᥬ🥴᭄ᥬ🥴᭄", threadID);
   };


if ((event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😔😔")) {
     return api.sendMessage("ᥬ😔᭄ᥬ😔᭄ᥬ😔᭄", threadID);
   };


if ((event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥺🥺")) {
     return api.sendMessage("ᥬ🥺᭄ᥬ🥺᭄ᥬ🥺᭄", threadID);
   };


if ((event.body.toLowerCase() == "😬") || (event.body.toLowerCase() == "😬😬")) {
     return api.sendMessage("ᥬ😬᭄ᥬ😬᭄ᥬ😬᭄", threadID);
   };


if ((event.body.toLowerCase() == "😑") || (event.body.toLowerCase() == "😑😑")) {
     return api.sendMessage("ᥬ😑᭄ᥬ😑᭄ᥬ😑᭄", threadID);
   };


if ((event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😐😐")) {
     return api.sendMessage("ᥬ😐᭄ᥬ😐᭄ᥬ😐᭄", threadID);
   };


if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶😶")) {
     return api.sendMessage("ᥬ😶᭄ᥬ😶᭄ᥬ😶᭄", threadID);
   };


if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "🤐🤐")) {
     return api.sendMessage("ᥬ🤐᭄ᥬ🤐᭄ᥬ🤐᭄", threadID);
   };


if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
     return api.sendMessage("ᥬ🤔᭄ᥬ🤔᭄ᥬ🤔᭄", threadID);
   };


if ((event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "🤫🤫")) {
     return api.sendMessage("ᥬ🤫᭄ᥬ🤫᭄ᥬ🤫᭄", threadID);
   };


if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭")) {
     return api.sendMessage("ᥬ🤭᭄ᥬ🤭᭄ᥬ🤭᭄", threadID);
   };


if ((event.body.toLowerCase() == "🥱") || (event.body.toLowerCase() == "🥱🥱")) {
     return api.sendMessage("ᥬ🥱᭄ᥬ🥱᭄ᥬ🥱᭄", threadID);
   };


if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗🤗")) {
     return api.sendMessage("ᥬ🤗᭄ᥬ🤗᭄ᥬ🤗᭄", threadID);
   };


if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😱😱")) {
     return api.sendMessage("ᥬ😱᭄ᥬ😱᭄ᥬ😱᭄", threadID);
   };


if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "🤨🤨")) {
     return api.sendMessage("ᥬ🤨᭄ᥬ🤨᭄ᥬ🤨᭄", threadID);
   };


if ((event.body.toLowerCase() == "🧐") || (event.body.toLowerCase() == "🧐🧐")) {
     return api.sendMessage("ᥬ🧐᭄ᥬ🧐᭄ᥬ🧐᭄", threadID);
   };


if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒")) {
     return api.sendMessage("ᥬ😒᭄ᥬ😒᭄ᥬ😒᭄", threadID);
   };


if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("ᥬ🙄᭄ᥬ🙄᭄ᥬ🙄᭄", threadID);
   };


if ((event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😤😤")) {
     return api.sendMessage("ᥬ😤᭄ᥬ😤᭄ᥬ😤᭄", threadID);
   };


if ((event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "😠😠")) {
     return api.sendMessage("ᥬ🙁᭄ᥬ🙁᭄ᥬ🙁᭄", threadID);
   };


if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡")) {
     return api.sendMessage("ᥬ🙁᭄ᥬ🙁᭄ᥬ🙁᭄", threadID);
   };


if ((event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "🤬🤬")) {
     return api.sendMessage("ᥬ🙁᭄ᥬ🙁᭄ᥬ🙁᭄", threadID);
   };


if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😞😞")) {
     return api.sendMessage("ᥬ😞᭄ᥬ😞᭄ᥬ😞᭄", threadID);
   };


if ((event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😓😓")) {
     return api.sendMessage("ᥬ😓᭄ᥬ😓᭄ᥬ😓᭄", threadID);
   };


if ((event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😟😟")) {
     return api.sendMessage("ᥬ😟᭄ᥬ😟᭄ᥬ😟᭄", threadID);
   };


if ((event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😟😟")) {
     return api.sendMessage("ᥬ😥᭄ᥬ😥᭄ᥬ😟᭄", threadID);
   };


if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😢😢")) {
     return api.sendMessage("ᥬ😢᭄ᥬ😢᭄ᥬ😢᭄", threadID);
   };


if ((event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "☹️☹️")) {
     return api.sendMessage("ᥬ☹️᭄ᥬ☹️᭄ᥬ☹️᭄", threadID);
   };


if ((event.body.toLowerCase() == "🙁") || (event.body.toLowerCase() == "🙁🙁")) {
     return api.sendMessage("ᥬ🙁᭄ᥬ🙁᭄ᥬ🙁᭄", threadID);
   };


if ((event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "😕😕")) {
     return api.sendMessage("ᥬ😕᭄ᥬ😕᭄ᥬ😕᭄", threadID);
   };


if ((event.body.toLowerCase() == "😰") || (event.body.toLowerCase() == "😰😰")) {
     return api.sendMessage("ᥬ😰᭄ᥬ😰᭄ᥬ😰᭄", threadID);
   };


if ((event.body.toLowerCase() == "😨") || (event.body.toLowerCase() == "😨😨")) {
     return api.sendMessage("ᥬ😨᭄ᥬ😨᭄ᥬ😨᭄", threadID);
   };


if ((event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😧😧")) {
     return api.sendMessage("ᥬ😧᭄ᥬ😧᭄ᥬ😧᭄", threadID);
   };


if ((event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😦😦")) {
     return api.sendMessage("ᥬ😦᭄ᥬ😦᭄ᥬ😦᭄", threadID);
   };


if ((event.body.toLowerCase() == "😮") || (event.body.toLowerCase() == "😮😮")) {
     return api.sendMessage("ᥬ😮᭄ᥬ😮᭄ᥬ😮᭄", threadID);
   };


if ((event.body.toLowerCase() == "😯") || (event.body.toLowerCase() == "😯😯")) {
     return api.sendMessage("ᥬ😯᭄ᥬ😦᭄ᥬ😯᭄", threadID);
   };


if ((event.body.toLowerCase() == "😲") || (event.body.toLowerCase() == "😲😲")) {
     return api.sendMessage("ᥬ😲᭄ᥬ😲᭄ᥬ😲᭄", threadID);
   };


if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😳😳")) {
     return api.sendMessage("ᥬ😳᭄ᥬ😳᭄ᥬ😳᭄", threadID);
   };


if ((event.body.toLowerCase() == "🤯") || (event.body.toLowerCase() == "🤯🤯")) {
     return api.sendMessage("ᥬ🤯᭄ᥬ🤯᭄ᥬ🤯᭄", threadID);
   };


if ((event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😖😖")) {
     return api.sendMessage("ᥬ😖᭄ᥬ😖᭄ᥬ😖᭄", threadID);
   };


if ((event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "😣😣")) {
     return api.sendMessage("ᥬ😣᭄ᥬ😣᭄ᥬ😣᭄", threadID);
   };


if ((event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😩😩")) {
     return api.sendMessage("ᥬ😩᭄ᥬ😩᭄ᥬ😩᭄", threadID);
   };


if ((event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😫😫")) {
     return api.sendMessage("ᥬ😫᭄ᥬ😫᭄ᥬ😫᭄", threadID);
   };


if ((event.body.toLowerCase() == "😵") || (event.body.toLowerCase() == "😵😵")) {
     return api.sendMessage("ᥬ😵᭄ᥬ😵᭄ᥬ😵᭄", threadID);
   };


if ((event.body.toLowerCase() == "🥶") || (event.body.toLowerCase() == "🥶🥶")) {
     return api.sendMessage("ᥬ🥶᭄ᥬ🥶᭄ᥬ🥶᭄", threadID);
   };


if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵")) {
     return api.sendMessage("ᥬ🥵᭄ᥬ🥵᭄ᥬ🥵᭄", threadID);
   };


if ((event.body.toLowerCase() == "🤢") || (event.body.toLowerCase() == "🤢🤢")) {
     return api.sendMessage("ᥬ🤢᭄ᥬ🤢᭄ᥬ🤢᭄", threadID);
   };


if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮🤮")) {
     return api.sendMessage("ᥬ🤮᭄ᥬ🤮᭄ᥬ🤮᭄", threadID);
   };


if ((event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤧🤧")) {
     return api.sendMessage("ᥬ🤧᭄ᥬ🤧᭄ᥬ🤧᭄", threadID);
   };


if ((event.body.toLowerCase() == "🤒") || (event.body.toLowerCase() == "🤒🤒")) {
     return api.sendMessage("ᥬ🤒᭄ᥬ🤒᭄ᥬ🤒᭄", threadID);
   };


if ((event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤕🤕")) {
     return api.sendMessage("ᥬ🤕᭄ᥬ🤕᭄ᥬ🤕᭄", threadID);
   };


if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "😷😷")) {
     return api.sendMessage("ᥬ😷᭄ᥬ😷᭄ᥬ😷᭄", threadID);
   };


if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥🤥")) {
     return api.sendMessage("ᥬ🤥᭄ᥬ🤥᭄ᥬ🤥᭄", threadID);
   };


if ((event.body.toLowerCase() == "😇") || (event.body.toLowerCase() == "😇😇")) {
     return api.sendMessage("ᥬ😇᭄ᥬ😇᭄ᥬ😇᭄", threadID);
   };


if ((event.body.toLowerCase() == "🤠") || (event.body.toLowerCase() == "🤠🤠")) {
     return api.sendMessage("ᥬ🤠᭄ᥬ🤠᭄ᥬ🤠᭄", threadID);
   };


if ((event.body.toLowerCase() == "🤑") || (event.body.toLowerCase() == "🤑🤑")) {
     return api.sendMessage("ᥬ🤑᭄ᥬ🤑᭄ᥬ🤑᭄", threadID);
   };


if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖🤖")) {
     return api.sendMessage("ᥬ🤖᭄ᥬ🤖᭄ᥬ🤖᭄", threadID);
   };


if ((event.body.toLowerCase() == "🤓") || (event.body.toLowerCase() == "🤓🤓")) {
     return api.sendMessage("ᥬ🤓᭄ᥬ🤓᭄ᥬ🤓᭄", threadID);
   };


if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎😎")) {
     return api.sendMessage("ᥬ😎᭄ᥬ😎᭄ᥬ😎᭄", threadID);
   };


if ((event.body.toLowerCase() == "🥸") || (event.body.toLowerCase() == "🥸🥸")) {
     return api.sendMessage("ᥬ🥸᭄ᥬ🥸᭄ᥬ🥸᭄", threadID);
   };


if ((event.body.toLowerCase() == "🤡") || (event.body.toLowerCase() == "🤡🤡")) {
     return api.sendMessage("ᥬ🤡᭄ᥬ🤡᭄ᥬ🤡᭄", threadID);
   };


if ((event.body.toLowerCase() == "😈") || (event.body.toLowerCase() == "😈😈")) {
     return api.sendMessage("ᥬ😈᭄ᥬ😈᭄ᥬ😈᭄", threadID);
   };


if ((event.body.toLowerCase() == "👿") || (event.body.toLowerCase() == "👿👿")) {
     return api.sendMessage("ᥬ👿᭄ᥬ👿᭄ᥬ👿᭄", threadID);
   };


if ((event.body.toLowerCase() == "👻") || (event.body.toLowerCase() == "👻👻")) {
     return api.sendMessage("ᥬ👻᭄ᥬ👻᭄ᥬ👻᭄", threadID);
   };


if ((event.body.toLowerCase() == "🎃") || (event.body.toLowerCase() == "🎃🎃")) {
     return api.sendMessage("ᥬ🎃᭄ᥬ🎃᭄ᥬ🎃᭄", threadID);
   };


if ((event.body.toLowerCase() == "👽") || (event.body.toLowerCase() == "👽👽")) {
     return api.sendMessage("ᥬ👽᭄ᥬ👽᭄ᥬ👽᭄", threadID);
   };


if ((event.body.toLowerCase() == "🌚") || (event.body.toLowerCase() == "🌚🌚")) {
     return api.sendMessage("ᥬ🌚᭄ᥬ🌚᭄ᥬ🌚᭄", threadID);
   };


if ((event.body.toLowerCase() == "🌝") || (event.body.toLowerCase() == "🌝🌝")) {
     return api.sendMessage("ᥬ🌝᭄ᥬ🌝᭄ᥬ🌝᭄", threadID);
   };


if ((event.body.toLowerCase() == "🔥") || (event.body.toLowerCase() == "🔥🔥")) {
     return api.sendMessage("💦💦💦", threadID);
};


if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙈🙈")) {
     return api.sendMessage("ᥬ🙈᭄ᥬ🙈᭄ᥬ🙈᭄", threadID);
   };


if ((event.body.toLowerCase() == "🙉") || (event.body.toLowerCase() == "🙉🙉")) {
     return api.sendMessage("ᥬ🙉᭄ᥬ🙉᭄ᥬ🙉᭄", threadID);
   };


if ((event.body.toLowerCase() == "🙊") || (event.body.toLowerCase() == "🙊🙊")) {
     return api.sendMessage("ᥬ🙊᭄ᥬ🙊᭄ᥬ🙊᭄", threadID);
   };


if ((event.body.toLowerCase() == "😺") || (event.body.toLowerCase() == "😺😺")) {
     return api.sendMessage("ᥬ😺᭄ᥬ😺᭄ᥬ😺᭄", threadID);
   };


if ((event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😸😸")) {
     return api.sendMessage("ᥬ😸᭄ᥬ😸᭄ᥬ😸᭄", threadID);
   };


if ((event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "😹😹")) {
     return api.sendMessage("ᥬ🤣᭄ᥬ🤣᭄ᥬ🤣᭄", threadID);
   };


if ((event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "😻😻")) {
     return api.sendMessage("ᥬ😻᭄ᥬ😻᭄ᥬ😻᭄", threadID);
   };


if ((event.body.toLowerCase() == "😼") || (event.body.toLowerCase() == "😼😼")) {
     return api.sendMessage("ᥬ😼᭄ᥬ😼᭄ᥬ😼᭄", threadID);
   };


if ((event.body.toLowerCase() == "🙀") || (event.body.toLowerCase() == "🙀🙀")) {
     return api.sendMessage("ᥬ🙀᭄ᥬ🙀᭄ᥬ🙀᭄", threadID);
   };


if ((event.body.toLowerCase() == "😿") || (event.body.toLowerCase() == "😿😿")) {
     return api.sendMessage("ᥬ🥺᭄ᥬ🥺᭄ᥬ🥺᭄", threadID);
   };


if ((event.body.toLowerCase() == "😾") || (event.body.toLowerCase() == "😾😾")) {
     return api.sendMessage("ᥬ😾᭄ᥬ😾᭄ᥬ😾᭄", threadID);
   };


if ((event.body.toLowerCase() == "💋") || (event.body.toLowerCase() == "💋💋")) {
     return api.sendMessage("Awww BaBe\nUumumaaahhh💋", threadID);
   };


if ((event.body.toLowerCase() == "🖕") || (event.body.toLowerCase() == "🖕🖕")) {
     return api.sendMessage("IsTo ApNi BunD Me\nL0oLo ᥬ😃᭄", threadID);
   };


if ((event.body.toLowerCase() == "🙏") || (event.body.toLowerCase() == "🙏🙏")) {
     return api.sendMessage("BaBe ᥬ🥺᭄", threadID);
   };


  if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "admin")) {
     return api.sendMessage("My Owner JORDAN Xhk 🖤", threadID);
   };


 if ((event.body.toLowerCase() == "inbox") || (event.body.toLowerCase() == "ib")) {
     return api.sendMessage("️ KYa IB IB 👿 Idher BOL MeRe SaMny  ᥬ😏᭄", threadID);
   };


  if ((event.body.toLowerCase() == "ja rha") || (event.body.toLowerCase() == "ja rhi")) {
     return api.sendMessage("Are Tu Ja Na Ree ᥬ😄᭄", threadID);
   };

   if ((event.body.toLowerCase() == "nikal") || (event.body.toLowerCase() == "nikl")) {
     return api.sendMessage("ChaL ChaL Tu NiKaL ᥬ😏᭄", threadID);
   };

   if ((event.body.toLowerCase() == "jan") || (event.body.toLowerCase() == "janu")) {
     return api.sendMessage("Jee Mri Jaan ᥬ😘᭄", threadID);
   };


if ((event.body.toLowerCase() == "babe") || (event.body.toLowerCase() == "baby")) {
     return api.sendMessage("Jee BaBe ᥬ😍᭄", threadID);
   };


if ((event.body.toLowerCase() == "babu") || (event.body.toLowerCase() == "shona")) {
     return api.sendMessage("Jee BaBe ᥬ😍᭄", threadID);
   };


if ((event.body.toLowerCase() == "ok") || (event.body.toLowerCase() == "okay")) {
     return api.sendMessage("0Ty BaBe  ᥬ😉᭄", threadID);
   };


if ((event.body.toLowerCase() == "jee") || (event.body.toLowerCase() == "g")) {
     return api.sendMessage("HanJi BaBe ᥬ😋᭄", threadID);
   };


if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "axha")) {
     return api.sendMessage("Yesh BaBe  ᥬ😄᭄", threadID);
   };


if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "hahaha")) {
     return api.sendMessage("ᥬ🤣᭄ᥬ🤣᭄ᥬ🤣᭄", threadID);
   };


if ((event.body.toLowerCase() == "hmm") || (event.body.toLowerCase() == "hmmm")) {
     return api.sendMessage("UmMm ᥬ😴᭄", threadID);
   };


if ((event.body.toLowerCase() == "bot") || (event.body.toLowerCase() == "Bot")) {
     return api.sendMessage("●●●━━━━━◥💜◤━━━━━●●●\n❖•━━━━━━━━━━━━━━━━•❖\n\n𝐁𝐨𝐓 𝐁𝐨𝐓 𝐍𝐚 𝐊𝐑𝐫 𝐌𝐞 𝐁𝐨𝐓𝐧𝐢 𝐇𝐮𝐧 𝐁𝐡𝐎𝐨𝐓𝐧𝐢 𝐊𝐞 😹 \n𝐈'𝐦 ➠☆||  ⋆⃝❥͜͡Ava ❥||ㅎ\n\n❖•━━━━━━━━━━━━━━━━•❖\n●●●━━━━━◥💜◤━━━━━●●●", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("Ava") == 0 || (event.body.indexOf("ava") == 0)) {
    var msg = {
      body: `╭┳≛✿≛──────────► ✿≛\n*╭─── ◈☆◈ 巛 ◑──►\n*╰ ➣||  ⋆⃝❥͜͡${name}❥||ㅎ\n❖•━━━━━━━━━━━━━━━━•❖ \n\n➥ ${rand} \n\n ❖•━━━━━━━━━━━━━━━━•❖\n ●●●━━━━━◥💜◤━━━━━●●●`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }