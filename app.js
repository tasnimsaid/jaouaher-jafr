


function countWord() {

   let text = document.getElementById("text").value;
   
    let words = text.split(" ").length ;
   
    
   
      
   document.getElementById("best4").innerHTML=words;
     
      
   
     
   
     
   
   let Counter1 = 0 ;
   let Counter2 = 0 ;
   let Counter3 = 0 ;
   let Counter4 = 0 ;
   
    let Counter5 = 0 ;
    let Counter6 = 0 ;
   let Counter7 = 0 ;
   let Counter8 = 0 ;
   let Counter9 = 0 ;
   let Counter10 = 0 ;
   
   let Counter11 = 0 ;
   let Counter12 = 0 ;
   let Counter13 = 0 ;
   let Counter14 = 0 ;
   let Counter15 = 0 ;
   let Counter16 = 0 ;
   let Counter17 = 0 ;
   let Counter18 = 0 ;
   let Counter19 = 0 ;
   let Counter20 = 0 ;
   let Counter21 = 0 ;
   let Counter22 = 0 ;
   let Counter23 = 0 ;
   let Counter24 = 0 ;
   let Counter25 = 0 ;
   let Counter26 = 0 ;
   let Counter27 = 0 ;
   let Counter28 = 0 ;
   // let Counter29 = 0 ;
   
   
   
   
   
   
   
   
   
   

let alif = ['ا','أ','إ','آ'];

let laa = ['ل'];
let haa = ['ح'];
let mim = ['م'];
let dal = ['د'];
let haae = ['ه' ,'ة'];
let raa = ['ر'];
let baa = ['ب'];
let ine = ['ع'];
let yaa = ['ي','ى','ئ'];
 let noon = ['ن'];
let kaf = ['ك'];
let ouaou = ['و','ؤ'];
let sin = ['س'];
let taa = ['ت'];
let saad = ['ص'];
let ttae = ['ط'];
let ppaf = ['ق'];
let ddal = ['ذ'];
let gaa = ['غ'];
let daa = ['ض'];
let faa = ['ف'];
let zay = ['ز'];
let kha = ['خ'];
let chine = ['ش'];
let ddda = ['ظ'];
let jim = ['ج'];
let ttta = ['ث'];



   
   
   
   for(ch of text) {
   
      
   
    if (alif.includes(ch)){
       Counter1++
    }
    if (baa.includes(ch)){
       Counter2++
    }
   
    if (jim.includes(ch)){
      Counter3++
   }
   
   if (dal.includes(ch)){
      Counter4++
      
   }
   
   if (haae.includes(ch)){
      Counter5++
   }
   
   if (ouaou.includes(ch)){
      Counter6++
   }
   
   
   if (zay.includes(ch)){
      Counter7++
   }
   if (haa.includes(ch)){
      Counter8++
   }
   if (ttae.includes(ch)){
      Counter9++
   }
   if (yaa.includes(ch)){
      Counter10++
   }
   
   if (kaf.includes(ch)){
      Counter11++
   }
   
   
   if (laa.includes(ch)){
      Counter12++
   }
   
   
   if (mim.includes(ch)){
      Counter13++
   }
   
   
   
   if (noon.includes(ch)){
      Counter14++
   }
   
   
   if (sin.includes(ch)){
      Counter15++
   }
   
   
   if (ine.includes(ch)){
      Counter16++
   }
   
   
   if (faa.includes(ch)){
      Counter17++
   }
   
   
   if (saad.includes(ch)){
      Counter18++
   }
   
   
   if (ppaf.includes(ch)){
      Counter19++
   }
   
   
   if (raa.includes(ch)){
      Counter20++
   }
   
   
   if (chine.includes(ch)){
      Counter21++
   }
   
   
   if (taa.includes(ch)){
      Counter22++
   }
   
   
   if (ttta.includes(ch)){
      Counter23++
   }
   
   
   if (kha.includes(ch)){
      Counter24++
   }
   
   
   if (ddal.includes(ch)){
      Counter25++
   }
   
   
   if (daa.includes(ch)){
      Counter26++
   }
   
   
   if (ddda.includes(ch)){
      Counter27++
   }
   
   
   if (gaa.includes(ch)){
      Counter28++
   }
   
   
   
   }
   
   
   
   document.getElementById("alif").innerHTML=Counter1;
   document.getElementById("alif1").innerHTML=Counter1;
   
   document.getElementById("baa").innerHTML=Counter2;
   document.getElementById("baa2").innerHTML=Counter2*2;
   
   document.getElementById("jim").innerHTML=Counter3;
   document.getElementById("jim3").innerHTML=Counter3*3;
   
   document.getElementById("dal").innerHTML=Counter4;
   document.getElementById("dal4").innerHTML=Counter4*4;
   
   document.getElementById("haae").innerHTML=Counter5;
   document.getElementById("haae5").innerHTML=Counter5*5;
   
   document.getElementById("ouaou").innerHTML=Counter6;
   document.getElementById("ouaou6").innerHTML=Counter6*6;
   
   document.getElementById("zay").innerHTML=Counter7;
   document.getElementById("zay7").innerHTML=Counter7*7;
   
   document.getElementById("haa").innerHTML=Counter8;
   document.getElementById("haa8").innerHTML=Counter8*8;
   
   document.getElementById("ttae").innerHTML=Counter9;
   document.getElementById("ttae9").innerHTML=Counter9*9;
   
   document.getElementById("yaa").innerHTML=Counter10;
   document.getElementById("yaa10").innerHTML=Counter10*10;
   
   document.getElementById("kaf").innerHTML=Counter11;
   document.getElementById("kaf11").innerHTML=Counter11*20;
   
   document.getElementById("laa").innerHTML=Counter12;
   document.getElementById("laa12").innerHTML=Counter12*30;
   
   
   document.getElementById("mim").innerHTML=Counter13;
   document.getElementById("mim13").innerHTML=Counter13*40;
   
   
   document.getElementById("noon").innerHTML=Counter14;
   document.getElementById("noon14").innerHTML=Counter14*50;

      
   document.getElementById("saad").innerHTML=Counter18;
   document.getElementById("saad18").innerHTML=Counter18*60;
   
  
   
   document.getElementById("ine").innerHTML=Counter16;
   document.getElementById("ine16").innerHTML=Counter16*70;
   
   document.getElementById("faa").innerHTML=Counter17;
   document.getElementById("faa17").innerHTML=Counter17*80;

   document.getElementById("daa").innerHTML=Counter26;
   document.getElementById("daa26").innerHTML=Counter26*90;

   
   
   document.getElementById("ppaf").innerHTML=Counter19;
   document.getElementById("ppaf19").innerHTML=Counter19*100;
   
   document.getElementById("raa").innerHTML=Counter20;
   document.getElementById("raa20").innerHTML=Counter20*200;
   
   document.getElementById("sin").innerHTML=Counter15;
   document.getElementById("sin15").innerHTML=Counter15*300;
   
   document.getElementById("taa").innerHTML=Counter22;
   document.getElementById("taa22").innerHTML=Counter22*400;
   
   document.getElementById("ttta").innerHTML=Counter23;
   document.getElementById("ttta23").innerHTML=Counter23*500;
   
   document.getElementById("kha").innerHTML=Counter24;
   document.getElementById("kha24").innerHTML=Counter24*600;
   
   document.getElementById("ddal").innerHTML=Counter25;
   document.getElementById("ddal25").innerHTML=Counter25*700;
   
  
   
   document.getElementById("ddda").innerHTML=Counter27;
   document.getElementById("ddda27").innerHTML=Counter27*800;
   
   document.getElementById("gaa").innerHTML=Counter28;
   document.getElementById("gaa28").innerHTML=Counter28*900;

   document.getElementById("chine").innerHTML=Counter21;
   document.getElementById("chine21").innerHTML=Counter21*1000;


   

// الجسد

var jasad1 = Counter1 ;
var jasad2 = Counter2 ;
var jasad3 = Counter3 ;
var jasad4 = Counter4 ;
var jasad5 = Counter5 ;
var jasad6 = Counter6 ;
var jasad7 = Counter7  ;
var jasad8 =  Counter8  ;
var jasad9 = Counter9  ;
var jasad10 = Counter10 ;
var jasad11 = Counter11  ;
var jasad12 = Counter12  ;
var jasad13 = Counter13  ;
var jasad14 = Counter14 ;
var jasad15 = Counter18 ;
var jasad16 = Counter16;
var jasad17 =  Counter17 ;
var jasad18 = Counter26 ;
var jasad19 = Counter19 ;
var jasad20 = Counter20 ;
var jasad21 = Counter15 ;
var jasad22 = Counter22 ;
var jasad23 = Counter23 ;
var jasad24 = Counter24 ;
var jasad25 = Counter25 ;
var jasad26 = Counter27 ;
var jasad27 = Counter28 ;
var jasad28 =  Counter21;

var jasad77 = jasad1 +  jasad2 + jasad3 + jasad4 + jasad5 + jasad6 + jasad7 + jasad8 + jasad9 + jasad10 + jasad11 + jasad12 + jasad13 + jasad14 + jasad15 + jasad16 + jasad17 + jasad18 + jasad19 + jasad20 + jasad21 + jasad22 + jasad23 + jasad24 + jasad25 + jasad26 + jasad27 + jasad28 ;


//  الروح

var rouh1 = Counter1 * 1 ;
var rouh2 = Counter2 * 2;
var rouh3 = Counter3 * 3;
var rouh4 = Counter4 * 4 ;
var rouh5 = Counter5 * 5 ;
var rouh6 = Counter6 * 6 ;
var rouh7 = Counter7 * 7  ;
var rouh8 =  Counter8 * 8 ;
var rouh9 = Counter9 * 9  ;
var rouh10 = Counter10 * 10 ;
var rouh11 = Counter11 * 20 ;
var rouh12 = Counter12  * 30 ;
var rouh13 = Counter13 * 40 ;
var rouh14 = Counter14 * 50;
var rouh15 = Counter18 * 60 ;
var rouh16 = Counter16 * 70 ;
var rouh17 =  Counter17 * 80;
var rouh18 = Counter26  * 90;
var rouh19 = Counter19 * 100 ;
var rouh20 = Counter20  * 200;
var rouh21 = Counter15 * 300 ;
var rouh22 = Counter22 * 400;
var rouh23 = Counter23 * 500;
var rouh24 = Counter24 * 600;
var rouh25 = Counter25 * 700;
var rouh26 = Counter27  * 800;
var rouh27 = Counter28 * 900;
var rouh28 =  Counter21 * 1000;

var rouh77 = rouh1 + rouh2 + rouh3 + rouh4 + rouh5 + rouh6 + rouh7 + rouh8 + rouh9 + rouh10 + rouh11 + rouh12 + rouh13 + rouh14 + rouh15 + rouh16 + rouh17 + rouh18 + rouh19 + rouh20 + rouh21 + rouh22 + rouh23 + rouh24 + rouh25 + rouh26 + rouh27 + rouh28 ;



// النفس
var nafs1 = Counter1 * 3 ;
var nafs2  = Counter2 * 2;
var nafs3  = Counter3 * 3 ;
var nafs4  = Counter4 * 3;
var nafs5  = Counter5 * 2;
var nafs6  = Counter6 * 3 ;
var nafs7  = Counter7 * 3;
var nafs8  = Counter8 * 2;
var nafs9  = Counter9 * 2;
var nafs10  = Counter10 * 2;
var nafs11  = Counter11 * 3;
var nafs12  = Counter12 * 3;
var nafs13  = Counter13 * 3 ;
var nafs14  = Counter14 * 3;
var nafs15  = Counter18 * 3;
var nafs16  = Counter16 * 3;
var nafs17  = Counter17 * 2;
var nafs18  = Counter26 * 2;
var nafs19  = Counter19 * 3;
var nafs20  = Counter20 * 2  ;
var nafs21  = Counter15 * 3 ;
var nafs22  = Counter22 * 2  ;
var nafs23  = Counter23 * 2  ;
var nafs24  = Counter24 * 2  ;
var nafs25  =  Counter25 * 3  ;
var nafs26  = Counter27 * 2  ;
var nafs27  = Counter28 * 3  ;
var nafs28  = Counter21 * 3 ;

var nafs77 = nafs1 + nafs2 + nafs3 + nafs4 + nafs5 + nafs6 + nafs7 + nafs8 + nafs9 + nafs10 + nafs11 + nafs12 + nafs13 + nafs14 + nafs15 + nafs16 + nafs17 + nafs18 + nafs19 + nafs20 + nafs21 + nafs22 + nafs23 + nafs24 + nafs25 + nafs26 + nafs27 + nafs28 ; 

   document.getElementById("nafs_alif").innerHTML=nafs1 ;
   document.getElementById("nafs_baa").innerHTML=nafs2 ;
   document.getElementById("nafs_jim").innerHTML= nafs3 ;
   document.getElementById("nafs_dal").innerHTML= nafs4 ;
   document.getElementById("nafs_haae").innerHTML= nafs5 ;
   document.getElementById("nafs_ouaou").innerHTML= nafs6 ;
   document.getElementById("nafs_zay").innerHTML= nafs7 ;
   document.getElementById("nafs_haa").innerHTML= nafs8 ;
   document.getElementById("nafs_ttae").innerHTML= nafs9 ;
   document.getElementById("nafs_yaa").innerHTML= nafs10 ;
   document.getElementById("nafs_kaf").innerHTML= nafs11 ;
   document.getElementById("nafs_laa").innerHTML= nafs12 ;
   document.getElementById("nafs_mim").innerHTML= nafs13 ;
   document.getElementById("nafs_noon").innerHTML= nafs14 ;
   document.getElementById("nafs_saad").innerHTML= nafs15 ;
   
   document.getElementById("nafs_ine").innerHTML= nafs16 ;
   document.getElementById("nafs_faa").innerHTML= nafs17 ;
   document.getElementById("nafs_daa").innerHTML= nafs18 ;
   document.getElementById("nafs_ppaf").innerHTML= nafs19 ;
   document.getElementById("nafs_raa").innerHTML= nafs20 ;
   document.getElementById("nafs_sin").innerHTML= nafs21 ;
   document.getElementById("nafs_taa").innerHTML= nafs22  ;
   document.getElementById("nafs_ttta").innerHTML= nafs23 ;
   document.getElementById("nafs_kha").innerHTML= nafs24 ;
   document.getElementById("nafs_ddal").innerHTML= nafs25 ;
   
   document.getElementById("nafs_ddda").innerHTML= nafs26 ;
   document.getElementById("nafs_gaa").innerHTML= nafs27 ;
   document.getElementById("nafs_chine").innerHTML= nafs28 ;
   
   
   // الدم
   var dam1 = Counter1 * 3 ;
   var dam2 = Counter2 * 5 ;
   var dam3 = Counter3 * 5 ;
   var dam4 = Counter4 * 5 ;
   var dam5 = Counter5 * 4 ;
   var dam6 = Counter6 * 3 ;
   var dam7 = Counter7 * 4  ;
   var dam8 = Counter8 * 6;
   var dam9 = Counter9 * 4  ;
   var dam10 = Counter10 * 4  ;
   var dam11 = Counter11 * 5 ;
   var dam12 =  Counter12 * 6 ;
   var dam13 = Counter13 * 5 ;
   var dam14 = Counter14 * 5  ;
   var dam15 = Counter18 * 4  ;
   var dam16 = Counter16 * 5  ;
   var dam17 = Counter17 * 6  ;
   var dam18 = Counter26 * 5  ;
   var dam19 = Counter19 * 3 ;
   var dam20 = Counter20 * 5 ;
   var dam21 = Counter15 * 8  ;
   var dam22 = Counter22 * 8 ;
   var dam23 = Counter23 * 7  ;
   var dam24 = Counter24 * 6 ;
   var dam25 =  Counter25 * 7 ;
   var dam26 =  Counter27 * 9 ;
   var dam27 = Counter28 * 7 ;
   var dam28 = Counter21 * 3  ;
   
   var dam77 = dam1 + dam2 + dam3 + dam4 + dam5 + dam6 + dam7 + dam8 + dam9 + dam10 + dam11 + dam12 + dam13 + dam14 + dam15 + dam16 + dam17 + dam18 + dam19 + dam20 + dam21 + dam22 + dam23 + dam24 + dam25 + dam26 + dam27 + dam28 ;
   
document.getElementById("dam_alif").innerHTML= dam1 ;
document.getElementById("dam_baa").innerHTML= dam2 ;
document.getElementById("dam_jim").innerHTML= dam3 ;
document.getElementById("dam_dal").innerHTML= dam4 ;
document.getElementById("dam_haae").innerHTML= dam5 ;
document.getElementById("dam_ouaou").innerHTML= dam6 ;
document.getElementById("dam_zay").innerHTML= dam7 ;
document.getElementById("dam_haa").innerHTML= dam8 ;
document.getElementById("dam_ttae").innerHTML= dam9 ;
document.getElementById("dam_yaa").innerHTML= dam10 ;
document.getElementById("dam_kaf").innerHTML= dam11 ;
document.getElementById("dam_laa").innerHTML= dam12 ;
document.getElementById("dam_mim").innerHTML= dam13 ;
document.getElementById("dam_noon").innerHTML= dam14 ;
document.getElementById("dam_saad").innerHTML= dam15 ;

document.getElementById("dam_ine").innerHTML= dam16 ;
document.getElementById("dam_faa").innerHTML= dam17 ;
document.getElementById("dam_daa").innerHTML= dam18 ;
document.getElementById("dam_ppaf").innerHTML= dam19 ;
document.getElementById("dam_raa").innerHTML= dam20 ;
document.getElementById("dam_sin").innerHTML= dam21 ;
document.getElementById("dam_taa").innerHTML= dam22 ;
document.getElementById("dam_ttta").innerHTML= dam23 ;
document.getElementById("dam_kha").innerHTML = dam24 ;
document.getElementById("dam_ddal").innerHTML= dam25 ;

document.getElementById("dam_ddda").innerHTML= dam26 ;
document.getElementById("dam_gaa").innerHTML= dam27 ;
document.getElementById("dam_chine").innerHTML= dam28 ;


// العقل
var akl1 = Counter1 * 111 ;
var akl2 = Counter2 * 3 ;
var akl3 = Counter3 * 53  ;
var akl4 = Counter4 * 35  ;
var akl5 = Counter5 * 6  ;
var akl6 = Counter6 * 13 ;
var akl7 = Counter7 * 18 ;
var akl8 = Counter8 * 9  ;
var akl9 = Counter9 * 10 ;
var akl10 = Counter10 * 11  ;
var akl11 = Counter11 * 101  ;
var akl12 = Counter12 * 71 ;
var akl13 = Counter13 * 90 ;
var akl14 = Counter14 * 106 ;
var akl15 = Counter18 * 65  ;
var akl16 = Counter16 * 130  ;
var akl17 = Counter17 * 81 ;
var akl18 = Counter26 * 91  ;
var akl19 = Counter19 * 181;
var akl20 = Counter20 * 201 ;
var akl21 = Counter15 * 360 ;
var akl22 = Counter22 * 401 ;
var akl23 = Counter23 * 501;
var akl24 = Counter24 * 601 ;
var akl25 = Counter25 * 731 ;
var akl26 = Counter27 * 801 ;
var akl27 = Counter28 * 960 ;
var akl28 = Counter21 * 1060 ;

var akl77 = akl1 + akl2 + akl3 + akl4 + akl5 + akl6 + akl7 + akl8 + akl9 + akl10 + akl11 + akl12 + akl13 + akl14 + akl15 + akl16 + akl17 + akl18 + akl19 + akl20 + akl21 + akl22 + akl23 + akl24 + akl25 + akl26 + akl27 + akl28 ;
var koua77 = nafs77 * dam77 * jasad77 ;
var kolia77 = rouh77 * akl77 * koua77 ;
var hassa77 = rouh77 * nafs77 ;
var haraka77 = jasad77 * dam77 ;
var chahoua77 = nafs77 * dam77 ;
var kalb77 = rouh77 * dam77 ;
var dimagh77 = rouh77 * akl77 ;
var kamel77 =  jasad77  + rouh77 + nafs77 + dam77  + akl77 + koua77 + kolia77 + hassa77 + haraka77 + chahoua77 + kalb77 + dimagh77 ;

document.getElementById("jasad").innerHTML = jasad77 ;
document.getElementById("rouh").innerHTML = rouh77;
document.getElementById("nafs").innerHTML = nafs77;
document.getElementById("dam").innerHTML = dam77 ;
document.getElementById("akl").innerHTML = akl77 ;
document.getElementById("koua").innerHTML = koua77 ;
document.getElementById("kolia").innerHTML = kolia77 ;
document.getElementById("hassa").innerHTML = hassa77 ;
document.getElementById("haraka").innerHTML = haraka77 ;
document.getElementById("chahoua").innerHTML = chahoua77 ;
document.getElementById("kalb").innerHTML = kalb77;
document.getElementById("dimagh").innerHTML = dimagh77;
document.getElementById("kamel").innerHTML = kamel77;





document.getElementById("akl_alif").innerHTML= akl1 ;
document.getElementById("akl_baa").innerHTML= akl2 ;
document.getElementById("akl_jim").innerHTML= akl3 ;
document.getElementById("akl_dal").innerHTML= akl4 ;
document.getElementById("akl_haae").innerHTML= akl5 ;
document.getElementById("akl_ouaou").innerHTML= akl6 ;
document.getElementById("akl_zay").innerHTML= akl7 ;
document.getElementById("akl_haa").innerHTML= akl8 ;
document.getElementById("akl_ttae").innerHTML= akl9 ;
document.getElementById("akl_yaa").innerHTML= akl10 ;
document.getElementById("akl_kaf").innerHTML= akl11 ;
document.getElementById("akl_laa").innerHTML= akl12 ;
document.getElementById("akl_mim").innerHTML= akl13 ;
document.getElementById("akl_noon").innerHTML= akl14 ;
document.getElementById("akl_saad").innerHTML= akl15 ;

document.getElementById("akl_ine").innerHTML= akl16 ;
document.getElementById("akl_faa").innerHTML= akl17 ;
document.getElementById("akl_daa").innerHTML= akl18 ;
document.getElementById("akl_ppaf").innerHTML= akl19 ;
document.getElementById("akl_raa").innerHTML= akl20 ;
document.getElementById("akl_sin").innerHTML= akl21 ;
document.getElementById("akl_taa").innerHTML= akl22 ;
document.getElementById("akl_ttta").innerHTML= akl23 ;
document.getElementById("akl_kha").innerHTML= akl24 ;
document.getElementById("akl_ddal").innerHTML= akl25 ;

document.getElementById("akl_ddda").innerHTML= akl26 ;
document.getElementById("akl_gaa").innerHTML= akl27 ;
document.getElementById("akl_chine").innerHTML= akl28 ;


//القوة الطبيعية = النفس *  الدم  * الجسد 

var koua1 = nafs1 * dam1 * jasad1   ;
var koua2 = nafs2 * dam2 * jasad2  ;
var koua3 = nafs3 * dam3 * jasad3 ;
var koua4 = nafs4 * dam4 * jasad4  ;
var koua5 =  nafs5 * dam5 * jasad5 ;
var koua6 = nafs6 * dam6 * jasad6 ;
var koua7 = nafs7 * dam7 * jasad7  ;
var koua8 =  nafs8 * dam8 * jasad8 ;
var koua9 = nafs9 * dam9 * jasad9  ;
var koua10 = nafs10 * dam10 * jasad10  ;
var koua11 =  nafs11 * dam11 * jasad11  ;
var koua12 = nafs12 * dam12 * jasad12  ;
var koua13 = nafs13 * dam13 * jasad13  ;
var koua14 = nafs14 * dam14 * jasad14  ;
var koua15 = nafs15 * dam15 * jasad15  ;
var koua16 = nafs16 * dam16 * jasad16  ;
var koua17 =  nafs17 * dam17 * jasad17  ;
var koua18 =  nafs18 * dam18 * jasad18  ;
var koua19 = nafs19 * dam19 * jasad19  ;
var koua20 = nafs20 * dam20 * jasad20   ;
var koua21 = nafs21 * dam21 * jasad21  ;
var koua22 = nafs22 * dam22 * jasad22   ;
var koua23 = nafs23 * dam23 * jasad23  ;
var koua24 = nafs24 * dam24 * jasad24   ;
var koua25 = nafs25 * dam25 * jasad25   ;
var koua26 = nafs26 * dam26 * jasad26   ;
var koua27 = nafs27 * dam27 * jasad27  ;
var koua28 = nafs28 * dam28 * jasad28  ;

document.getElementById("koua_alif").innerHTML = koua1 ;
document.getElementById("koua_baa").innerHTML  = koua2 ;
document.getElementById("koua_jim").innerHTML  = koua3 ;
document.getElementById("koua_dal").innerHTML  = koua4 ;
document.getElementById("koua_haae").innerHTML = koua5 ;
document.getElementById("koua_ouaou").innerHTML= koua6 ;
document.getElementById("koua_zay").innerHTML  = koua7 ;
document.getElementById("koua_haa").innerHTML  = koua8 ;
document.getElementById("koua_ttae").innerHTML = koua9 ;
document.getElementById("koua_yaa").innerHTML  = koua10 ;
document.getElementById("koua_kaf").innerHTML  = koua11 ;
document.getElementById("koua_laa").innerHTML  = koua12 ;
document.getElementById("koua_mim").innerHTML  = koua13 ;
document.getElementById("koua_noon").innerHTML = koua14 ;
document.getElementById("koua_saad").innerHTML = koua15 ;
document.getElementById("koua_ine").innerHTML  = koua16 ;
document.getElementById("koua_faa").innerHTML  = koua17 ;
document.getElementById("koua_daa").innerHTML  = koua18 ;
document.getElementById("koua_ppaf").innerHTML = koua19 ;
document.getElementById("koua_raa").innerHTML  = koua20 ;
document.getElementById("koua_sin").innerHTML  = koua21 ;
document.getElementById("koua_taa").innerHTML  = koua22 ;
document.getElementById("koua_ttta").innerHTML = koua23 ;
document.getElementById("koua_kha").innerHTML  = koua24 ;
document.getElementById("koua_ddal").innerHTML = koua25 ;
document.getElementById("koua_ddda").innerHTML = koua26 ;
document.getElementById("koua_gaa").innerHTML  = koua27 ;
document.getElementById("koua_chine").innerHTML= koua28 ;




// القوة الكلية  = الروح  * العقل  * القوة الطبيعية


var kolia1 = rouh1 * akl1 * koua1 ;
var kolia2 = rouh2 * akl2 * koua2 ;
var kolia3 = rouh3 * akl3 * koua3 ;
var kolia4 = rouh4 * akl4 * koua4 ;
var kolia5 = rouh5 * akl5 * koua5 ;
var kolia6 = rouh6 * akl6 * koua6 ;
var kolia7 = rouh7 * akl7 * koua7 ;
var kolia8 = rouh8 * akl8 * koua8 ;
var kolia9 = rouh9 * akl9 * koua9 ;
var kolia10 = rouh10 * akl10 * koua10 ;
var kolia11 = rouh11 * akl11 * koua11 ;
var kolia12 = rouh12 * akl12 * koua12 ;
var kolia13 = rouh13 * akl13 * koua13 ;
var kolia14 = rouh14 * akl14 * koua14 ;
var kolia15 = rouh15 * akl15 * koua15 ;
var kolia16 = rouh16 * akl16 * koua16 ;
var kolia17 = rouh17 * akl17 * koua17 ;
var kolia18 = rouh18 * akl18 * koua18 ;
var kolia19 = rouh19 * akl19 * koua19 ;
var kolia20 = rouh20 * akl20 * koua20 ;
var kolia21 = rouh21 * akl21 * koua21 ;
var kolia22 = rouh22 * akl22 * koua22 ;
var kolia23 = rouh23 * akl23 * koua23 ;
var kolia24 = rouh24 * akl24 * koua24 ;
var kolia25 = rouh25 * akl25 * koua25 ;
var kolia26 = rouh26 * akl26 * koua26 ;
var kolia27 = rouh27 * akl27 * koua27 ;
var kolia28 = rouh28 * akl28 * koua28 ;




document.getElementById("kolia_alif").innerHTML = kolia1  ;
document.getElementById("kolia_baa").innerHTML  = kolia2 ;
document.getElementById("kolia_jim").innerHTML  = kolia3 ;
document.getElementById("kolia_dal").innerHTML  = kolia4 ;
document.getElementById("kolia_haae").innerHTML = kolia5 ;
document.getElementById("kolia_ouaou").innerHTML= kolia6 ;
document.getElementById("kolia_zay").innerHTML  = kolia7 ;
document.getElementById("kolia_haa").innerHTML  = kolia8 ;
document.getElementById("kolia_ttae").innerHTML = kolia9 ;
document.getElementById("kolia_yaa").innerHTML  = kolia10 ;
document.getElementById("kolia_kaf").innerHTML  = kolia11 ;
document.getElementById("kolia_laa").innerHTML  = kolia12 ;
document.getElementById("kolia_mim").innerHTML  = kolia13 ;
document.getElementById("kolia_noon").innerHTML = kolia14 ;
document.getElementById("kolia_saad").innerHTML = kolia15 ;
document.getElementById("kolia_ine").innerHTML  = kolia16 ;
document.getElementById("kolia_faa").innerHTML  = kolia17  ;
document.getElementById("kolia_daa").innerHTML  = kolia18  ;
document.getElementById("kolia_ppaf").innerHTML = kolia19  ;
document.getElementById("kolia_raa").innerHTML  = kolia20  ;
document.getElementById("kolia_sin").innerHTML  = kolia21  ;
document.getElementById("kolia_taa").innerHTML  = kolia22  ;
document.getElementById("kolia_ttta").innerHTML = kolia23 ;
document.getElementById("kolia_kha").innerHTML  = kolia24  ;
document.getElementById("kolia_ddal").innerHTML = kolia25  ;
document.getElementById("kolia_ddda").innerHTML = kolia26  ;
document.getElementById("kolia_gaa").innerHTML  = kolia27  ;
document.getElementById("kolia_chine").innerHTML= kolia28 ;


//  الحاسة  = الروح * النفس 

var hassa1 = rouh1  *  nafs1 ;
var hassa2 = rouh2  *  nafs2 ;
var hassa3 = rouh3  *  nafs3 ;
var hassa4 = rouh4  *  nafs4 ;
var hassa5 = rouh5  *  nafs5 ;
var hassa6 = rouh6  *  nafs6 ;
var hassa7 = rouh7  *  nafs7 ;
var hassa8 = rouh8  *  nafs8 ;
var hassa9 = rouh9  *  nafs9 ;
var hassa10 = rouh10  *  nafs10 ;
var hassa11 = rouh11  *  nafs11 ;
var hassa12 = rouh12  *  nafs12 ;
var hassa13 = rouh13  *  nafs13 ;
var hassa14 = rouh14  *  nafs14 ;
var hassa15 = rouh15  *  nafs15 ;
var hassa16 = rouh16  *  nafs16 ;
var hassa17 = rouh17  *  nafs17 ;
var hassa18 = rouh18  *  nafs18 ;
var hassa19 = rouh19  *  nafs19 ;
var hassa20 = rouh20  *  nafs20 ;
var hassa21 = rouh21  *  nafs21 ;
var hassa22 = rouh22  *  nafs22 ;
var hassa23 = rouh23  *  nafs23 ;
var hassa24 = rouh24  *  nafs24 ;
var hassa25 = rouh25  *  nafs25 ;
var hassa26 = rouh26  *  nafs26 ;
var hassa27 = rouh27  *  nafs27 ;
var hassa28 = rouh28  *  nafs28 ;



document.getElementById("hassa_alif").innerHTML = hassa1  ;
document.getElementById("hassa_baa").innerHTML  = hassa2 ;
document.getElementById("hassa_jim").innerHTML  = hassa3 ;
document.getElementById("hassa_dal").innerHTML  = hassa4 ;
document.getElementById("hassa_haae").innerHTML = hassa5 ;
document.getElementById("hassa_ouaou").innerHTML= hassa6 ;
document.getElementById("hassa_zay").innerHTML  = hassa7 ;
document.getElementById("hassa_haa").innerHTML  = hassa8 ;
document.getElementById("hassa_ttae").innerHTML = hassa9 ;
document.getElementById("hassa_yaa").innerHTML  = hassa10 ;
document.getElementById("hassa_kaf").innerHTML  = hassa11 ;
document.getElementById("hassa_laa").innerHTML  = hassa12 ;
document.getElementById("hassa_mim").innerHTML  = hassa13 ;
document.getElementById("hassa_noon").innerHTML = hassa14 ;
document.getElementById("hassa_saad").innerHTML = hassa15 ;
document.getElementById("hassa_ine").innerHTML  = hassa16 ;
document.getElementById("hassa_faa").innerHTML  = hassa17  ;
document.getElementById("hassa_daa").innerHTML  = hassa18  ;
document.getElementById("hassa_ppaf").innerHTML = hassa19  ;
document.getElementById("hassa_raa").innerHTML  = hassa20  ;
document.getElementById("hassa_sin").innerHTML  = hassa21  ;
document.getElementById("hassa_taa").innerHTML  = hassa22  ;
document.getElementById("hassa_ttta").innerHTML = hassa23 ;
document.getElementById("hassa_kha").innerHTML  = hassa24  ;
document.getElementById("hassa_ddal").innerHTML = hassa25  ;
document.getElementById("hassa_ddda").innerHTML = hassa26  ;
document.getElementById("hassa_gaa").innerHTML  = hassa27  ;
document.getElementById("hassa_chine").innerHTML= hassa28 ;


// الحركة = الجسد * الدم 
var haraka1 = jasad1  *  dam1 ;
var haraka2 = jasad2  *  dam2 ;
var haraka3 = jasad3  *  dam3 ;
var haraka4 = jasad4  *  dam4 ;
var haraka5 = jasad5  *  dam5 ;
var haraka6 = jasad6  *  dam6 ;
var haraka7 = jasad7  *  dam7 ;
var haraka8 = jasad8  *  dam8 ;
var haraka9 = jasad9  *  dam9 ;
var haraka10 = jasad10  *  dam10 ;
var haraka11 = jasad11  *  dam11 ;
var haraka12 = jasad12  *  dam12 ;
var haraka13 = jasad13  *  dam13 ;
var haraka14 = jasad14  *  dam14 ;
var haraka15 = jasad15  *  dam15 ;
var haraka16 = jasad16  *  dam16 ;
var haraka17 = jasad17  *  dam17 ;
var haraka18 = jasad18  *  dam18 ;
var haraka19 = jasad19  *  dam19 ;
var haraka20 = jasad20  *  dam20 ;
var haraka21 = jasad21  *  dam21 ;
var haraka22 = jasad22  *  dam22 ;
var haraka23 = jasad23  *  dam23 ;
var haraka24 = jasad24  *  dam24 ;
var haraka25 = jasad25  *  dam25 ;
var haraka26 = jasad26  *  dam26 ;
var haraka27 = jasad27  *  dam27 ;
var haraka28 = jasad28  *  dam28 ;



document.getElementById("haraka_alif").innerHTML = haraka1  ;
document.getElementById("haraka_baa").innerHTML  = haraka2 ;
document.getElementById("haraka_jim").innerHTML  = haraka3 ;
document.getElementById("haraka_dal").innerHTML  = haraka4 ;
document.getElementById("haraka_haae").innerHTML = haraka5 ;
document.getElementById("haraka_ouaou").innerHTML= haraka6 ;
document.getElementById("haraka_zay").innerHTML  = haraka7 ;
document.getElementById("haraka_haa").innerHTML  = haraka8 ;
document.getElementById("haraka_ttae").innerHTML = haraka9 ;
document.getElementById("haraka_yaa").innerHTML  = haraka10 ;
document.getElementById("haraka_kaf").innerHTML  = haraka11 ;
document.getElementById("haraka_laa").innerHTML  = haraka12 ;
document.getElementById("haraka_mim").innerHTML  = haraka13 ;
document.getElementById("haraka_noon").innerHTML = haraka14 ;
document.getElementById("haraka_saad").innerHTML = haraka15 ;
document.getElementById("haraka_ine").innerHTML  = haraka16 ;
document.getElementById("haraka_faa").innerHTML  = haraka17  ;
document.getElementById("haraka_daa").innerHTML  = haraka18  ;
document.getElementById("haraka_ppaf").innerHTML = haraka19  ;
document.getElementById("haraka_raa").innerHTML  = haraka20  ;
document.getElementById("haraka_sin").innerHTML  = haraka21  ;
document.getElementById("haraka_taa").innerHTML  = haraka22  ;
document.getElementById("haraka_ttta").innerHTML = haraka23 ;
document.getElementById("haraka_kha").innerHTML  = haraka24  ;
document.getElementById("haraka_ddal").innerHTML = haraka25  ;
document.getElementById("haraka_ddda").innerHTML = haraka26  ;
document.getElementById("haraka_gaa").innerHTML  = haraka27  ;
document.getElementById("haraka_chine").innerHTML= haraka28 ;


//  الشهوة  = النفس * الدم 

var chahoua1 = nafs1  *  dam1 ;
var chahoua2 = nafs2  *  dam2 ;
var chahoua3 = nafs3  *  dam3 ;
var chahoua4 = nafs4  *  dam4 ;
var chahoua5 = nafs5  *  dam5 ;
var chahoua6 = nafs6  *  dam6 ;
var chahoua7 = nafs7  *  dam7 ;
var chahoua8 = nafs8  *  dam8 ;
var chahoua9 = nafs9  *  dam9 ;
var chahoua10 = nafs10  *  dam10 ;
var chahoua11 = nafs11  *  dam11 ;
var chahoua12 = nafs12  *  dam12 ;
var chahoua13 = nafs13  *  dam13 ;
var chahoua14 = nafs14  *  dam14 ;
var chahoua15 = nafs15  *  dam15 ;
var chahoua16 = nafs16  *  dam16 ;
var chahoua17 = nafs17  *  dam17 ;
var chahoua18 = nafs18  *  dam18 ;
var chahoua19 = nafs19  *  dam19 ;
var chahoua20 = nafs20  *  dam20 ;
var chahoua21 = nafs21  *  dam21 ;
var chahoua22 = nafs22  *  dam22 ;
var chahoua23 = nafs23  *  dam23 ;
var chahoua24 = nafs24  *  dam24 ;
var chahoua25 = nafs25  *  dam25 ;
var chahoua26 = nafs26  *  dam26 ;
var chahoua27 = nafs27  *  dam27 ;
var chahoua28 = nafs28  *  dam28 ;



document.getElementById("chahoua_alif").innerHTML = chahoua1  ;
document.getElementById("chahoua_baa").innerHTML  = chahoua2 ;
document.getElementById("chahoua_jim").innerHTML  = chahoua3 ;
document.getElementById("chahoua_dal").innerHTML  = chahoua4 ;
document.getElementById("chahoua_haae").innerHTML = chahoua5 ;
document.getElementById("chahoua_ouaou").innerHTML= chahoua6 ;
document.getElementById("chahoua_zay").innerHTML  = chahoua7 ;
document.getElementById("chahoua_haa").innerHTML  = chahoua8 ;
document.getElementById("chahoua_ttae").innerHTML = chahoua9 ;
document.getElementById("chahoua_yaa").innerHTML  = chahoua10 ;
document.getElementById("chahoua_kaf").innerHTML  = chahoua11 ;
document.getElementById("chahoua_laa").innerHTML  = chahoua12 ;
document.getElementById("chahoua_mim").innerHTML  = chahoua13 ;
document.getElementById("chahoua_noon").innerHTML = chahoua14 ;
document.getElementById("chahoua_saad").innerHTML = chahoua15 ;
document.getElementById("chahoua_ine").innerHTML  = chahoua16 ;
document.getElementById("chahoua_faa").innerHTML  = chahoua17  ;
document.getElementById("chahoua_daa").innerHTML  = chahoua18  ;
document.getElementById("chahoua_ppaf").innerHTML = chahoua19  ;
document.getElementById("chahoua_raa").innerHTML  = chahoua20  ;
document.getElementById("chahoua_sin").innerHTML  = chahoua21  ;
document.getElementById("chahoua_taa").innerHTML  = chahoua22  ;
document.getElementById("chahoua_ttta").innerHTML = chahoua23 ;
document.getElementById("chahoua_kha").innerHTML  = chahoua24  ;
document.getElementById("chahoua_ddal").innerHTML = chahoua25  ;
document.getElementById("chahoua_ddda").innerHTML = chahoua26  ;
document.getElementById("chahoua_gaa").innerHTML  = chahoua27  ;
document.getElementById("chahoua_chine").innerHTML= chahoua28 ;


//  القلب = الروح  *  الدم 
var kalb1 = rouh1  *  dam1 ;
var kalb2 = rouh2  *  dam2 ;
var kalb3 = rouh3  *  dam3 ;
var kalb4 = rouh4  *  dam4 ;
var kalb5 = rouh5  *  dam5 ;
var kalb6 = rouh6  *  dam6 ;
var kalb7 = rouh7  *  dam7 ;
var kalb8 = rouh8  *  dam8 ;
var kalb9 = rouh9  *  dam9 ;
var kalb10 = rouh10  *  dam10 ;
var kalb11 = rouh11  *  dam11 ;
var kalb12 = rouh12  *  dam12 ;
var kalb13 = rouh13  *  dam13 ;
var kalb14 = rouh14  *  dam14 ;
var kalb15 = rouh15  *  dam15 ;
var kalb16 = rouh16  *  dam16 ;
var kalb17 = rouh17  *  dam17 ;
var kalb18 = rouh18  *  dam18 ;
var kalb19 = rouh19  *  dam19 ;
var kalb20 = rouh20  *  dam20 ;
var kalb21 = rouh21  *  dam21 ;
var kalb22 = rouh22  *  dam22 ;
var kalb23 = rouh23  *  dam23 ;
var kalb24 = rouh24  *  dam24 ;
var kalb25 = rouh25  *  dam25 ;
var kalb26 = rouh26  *  dam26 ;
var kalb27 = rouh27  *  dam27 ;
var kalb28 = rouh28  *  dam28 ;



document.getElementById("kalb_alif").innerHTML = kalb1  ;
document.getElementById("kalb_baa").innerHTML  = kalb2 ;
document.getElementById("kalb_jim").innerHTML  = kalb3 ;
document.getElementById("kalb_dal").innerHTML  = kalb4 ;
document.getElementById("kalb_haae").innerHTML = kalb5 ;
document.getElementById("kalb_ouaou").innerHTML= kalb6 ;
document.getElementById("kalb_zay").innerHTML  = kalb7 ;
document.getElementById("kalb_haa").innerHTML  = kalb8 ;
document.getElementById("kalb_ttae").innerHTML = kalb9 ;
document.getElementById("kalb_yaa").innerHTML  = kalb10 ;
document.getElementById("kalb_kaf").innerHTML  = kalb11 ;
document.getElementById("kalb_laa").innerHTML  = kalb12 ;
document.getElementById("kalb_mim").innerHTML  = kalb13 ;
document.getElementById("kalb_noon").innerHTML = kalb14 ;
document.getElementById("kalb_saad").innerHTML = kalb15 ;
document.getElementById("kalb_ine").innerHTML  = kalb16 ;
document.getElementById("kalb_faa").innerHTML  = kalb17  ;
document.getElementById("kalb_daa").innerHTML  = kalb18  ;
document.getElementById("kalb_ppaf").innerHTML = kalb19  ;
document.getElementById("kalb_raa").innerHTML  = kalb20  ;
document.getElementById("kalb_sin").innerHTML  = kalb21  ;
document.getElementById("kalb_taa").innerHTML  = kalb22  ;
document.getElementById("kalb_ttta").innerHTML = kalb23 ;
document.getElementById("kalb_kha").innerHTML  = kalb24  ;
document.getElementById("kalb_ddal").innerHTML = kalb25  ;
document.getElementById("kalb_ddda").innerHTML = kalb26  ;
document.getElementById("kalb_gaa").innerHTML  = kalb27  ;
document.getElementById("kalb_chine").innerHTML= kalb28 ;


// الدماغ  = الروح  * العقل 

var dimagh1 = rouh1  * akl1 ;
var dimagh2 = rouh2  * akl2 ;
var dimagh3 = rouh3  * akl3 ;
var dimagh4 = rouh4  * akl4 ;
var dimagh5 = rouh5  * akl5 ;
var dimagh6 = rouh6  * akl6 ;
var dimagh7 = rouh7  * akl7 ;
var dimagh8 = rouh8  * akl8 ;
var dimagh9 = rouh9  * akl9 ;
var dimagh10 = rouh10  * akl10 ;
var dimagh11 = rouh11  * akl11 ;
var dimagh12 = rouh12  * akl12 ;
var dimagh13 = rouh13  * akl13 ;
var dimagh14 = rouh14  * akl14 ;
var dimagh15 = rouh15  * akl15 ;
var dimagh16 = rouh16  * akl16 ;
var dimagh17 = rouh17  * akl17 ;
var dimagh18 = rouh18  * akl18 ;
var dimagh19 = rouh19  * akl19 ;
var dimagh20 = rouh20  * akl20 ;
var dimagh21 = rouh21  * akl21 ;
var dimagh22 = rouh22  * akl22 ;
var dimagh23 = rouh23  * akl23 ;
var dimagh24 = rouh24  * akl24 ;
var dimagh25 = rouh25  * akl25 ;
var dimagh26 = rouh26  * akl26 ;
var dimagh27 = rouh27  * akl27 ;
var dimagh28 = rouh28  * akl28 ;



document.getElementById("dimagh_alif").innerHTML = dimagh1  ;
document.getElementById("dimagh_baa").innerHTML  = dimagh2 ;
document.getElementById("dimagh_jim").innerHTML  = dimagh3 ;
document.getElementById("dimagh_dal").innerHTML  = dimagh4 ;
document.getElementById("dimagh_haae").innerHTML = dimagh5 ;
document.getElementById("dimagh_ouaou").innerHTML= dimagh6 ;
document.getElementById("dimagh_zay").innerHTML  = dimagh7 ;
document.getElementById("dimagh_haa").innerHTML  = dimagh8 ;
document.getElementById("dimagh_ttae").innerHTML = dimagh9 ;
document.getElementById("dimagh_yaa").innerHTML  = dimagh10 ;
document.getElementById("dimagh_kaf").innerHTML  = dimagh11 ;
document.getElementById("dimagh_laa").innerHTML  = dimagh12 ;
document.getElementById("dimagh_mim").innerHTML  = dimagh13 ;
document.getElementById("dimagh_noon").innerHTML = dimagh14 ;
document.getElementById("dimagh_saad").innerHTML = dimagh15 ;
document.getElementById("dimagh_ine").innerHTML  = dimagh16 ;
document.getElementById("dimagh_faa").innerHTML  = dimagh17  ;
document.getElementById("dimagh_daa").innerHTML  = dimagh18  ;
document.getElementById("dimagh_ppaf").innerHTML = dimagh19  ;
document.getElementById("dimagh_raa").innerHTML  = dimagh20  ;
document.getElementById("dimagh_sin").innerHTML  = dimagh21  ;
document.getElementById("dimagh_taa").innerHTML  = dimagh22  ;
document.getElementById("dimagh_ttta").innerHTML = dimagh23 ;
document.getElementById("dimagh_kha").innerHTML  = dimagh24  ;
document.getElementById("dimagh_ddal").innerHTML = dimagh25  ;
document.getElementById("dimagh_ddda").innerHTML = dimagh26  ;
document.getElementById("dimagh_gaa").innerHTML  = dimagh27  ;
document.getElementById("dimagh_chine").innerHTML= dimagh28 ;


//  الإنسان الكامل = جمع جميع الجواهر

var kamel1 = nafs1  + jasad1  + rouh1 + dam1  + akl1 + koua1 + kolia1 + hassa1 + haraka1 + chahoua1 + kalb1 + dimagh1 ;
var kamel2 = nafs2  + jasad2  + rouh2 + dam2  + akl2 + koua2 + kolia2 + hassa2 + haraka2 + chahoua2 + kalb2 + dimagh2 ;
var kamel3 = nafs3  + jasad3  + rouh3 + dam3  + akl3 + koua3 + kolia3 + hassa3 + haraka3 + chahoua3 + kalb3 + dimagh3 ;
var kamel4 = nafs4  + jasad4  + rouh4 + dam4  + akl4 + koua4 + kolia4 + hassa4 + haraka4 + chahoua4 + kalb4 + dimagh4 ;
var kamel5 = nafs5  + jasad5  + rouh5 + dam5  + akl5 + koua5 + kolia5 + hassa5 + haraka5 + chahoua5 + kalb5 + dimagh5 ;
var kamel6 = nafs6  + jasad6  + rouh6 + dam6  + akl6 + koua6 + kolia6 + hassa6 + haraka6 + chahoua6 + kalb6 + dimagh6 ;
var kamel7 = nafs7  + jasad7  + rouh7 + dam7  + akl7 + koua7 + kolia7 + hassa7 + haraka7 + chahoua7 + kalb7 + dimagh7 ;
var kamel8 = nafs8  + jasad8  + rouh8 + dam8  + akl8 + koua8 + kolia8 + hassa8 + haraka8 + chahoua8 + kalb8 + dimagh8 ;
var kamel9 = nafs9  + jasad9  + rouh9 + dam9  + akl9 + koua9 + kolia9 + hassa9 + haraka9 + chahoua9 + kalb9 + dimagh9 ;
var kamel10 =nafs10  +  jasad10  + rouh10 + dam10  + akl10 + koua10 + kolia10 + hassa10 + haraka10 + chahoua10 + kalb10 + dimagh10 ;
var kamel11 =nafs11  +  jasad11  + rouh11 + dam11  + akl11 + koua11 + kolia11 + hassa11 + haraka11 + chahoua11 + kalb11 + dimagh11 ;
var kamel12 =nafs12  +  jasad12  + rouh12 + dam12  + akl12 + koua12 + kolia12 + hassa12 + haraka12 + chahoua12 + kalb12 + dimagh12 ;
var kamel13 =nafs13  +  jasad13  + rouh13 + dam13  + akl13 + koua13 + kolia13 + hassa13 + haraka13 + chahoua13 + kalb13 + dimagh13 ;
var kamel14 =nafs14  +  jasad14  + rouh14 + dam14  + akl14 + koua14 + kolia14 + hassa14 + haraka14 + chahoua14 + kalb14 + dimagh14 ;
var kamel15 =nafs15  +  jasad15  + rouh15 + dam15  + akl15 + koua15 + kolia15 + hassa15 + haraka15 + chahoua15 + kalb15 + dimagh15 ;
var kamel16 =nafs16  +  jasad16  + rouh16 + dam16  + akl16 + koua16 + kolia16 + hassa16 + haraka16 + chahoua16 + kalb16 + dimagh16 ;
var kamel17 =nafs17  +  jasad17  + rouh17 + dam17  + akl17 + koua17 + kolia17 + hassa17 + haraka17 + chahoua17 + kalb17 + dimagh17 ;
var kamel18 =nafs18  +  jasad18  + rouh18 + dam18  + akl18 + koua18 + kolia18 + hassa18 + haraka18 + chahoua18 + kalb18 + dimagh18 ;
var kamel19 =nafs19  +  jasad19  + rouh19 + dam19  + akl19 + koua19 + kolia19 + hassa19 + haraka19 + chahoua19 + kalb19 + dimagh19 ;
var kamel20 =nafs20  +  jasad20  + rouh20 + dam20  + akl20 + koua20 + kolia20 + hassa20 + haraka20 + chahoua20 + kalb20 + dimagh20 ;
var kamel21 =nafs21  +  jasad21  + rouh21 + dam21  + akl21 + koua21 + kolia21 + hassa21 + haraka21 + chahoua21 + kalb21 + dimagh21 ;
var kamel22 =nafs22  +  jasad22  + rouh22 + dam22  + akl22 + koua22 + kolia22 + hassa22 + haraka22 + chahoua22 + kalb22 + dimagh22 ;
var kamel23 =nafs23  +  jasad23  + rouh23 + dam23  + akl23 + koua23 + kolia23 + hassa23 + haraka23 + chahoua23 + kalb23 + dimagh23 ;
var kamel24 =nafs24  +  jasad24  + rouh24 + dam24  + akl24 + koua24 + kolia24 + hassa24 + haraka24 + chahoua24 + kalb24 + dimagh24 ;
var kamel25 =nafs25  +  jasad25  + rouh25 + dam25  + akl25 + koua25 + kolia25 + hassa25 + haraka25 + chahoua25 + kalb25 + dimagh25 ;
var kamel26 =nafs26  +  jasad26  + rouh26 + dam26  + akl26 + koua26 + kolia26 + hassa26 + haraka26 + chahoua26 + kalb26 + dimagh26 ;
var kamel27 =nafs27  +  jasad27  + rouh27 + dam27  + akl27 + koua27 + kolia27 + hassa27 + haraka27 + chahoua27 + kalb27 + dimagh27 ;
var kamel28 =nafs28  +  jasad28  + rouh28 + dam28  + akl28 + koua28 + kolia28 + hassa28 + haraka28 + chahoua28 + kalb28 + dimagh28 ;



document.getElementById("kamel_alif").innerHTML =kamel1  ;
document.getElementById("kamel_baa").innerHTML  =kamel2 ;
document.getElementById("kamel_jim").innerHTML  =kamel3 ;
document.getElementById("kamel_dal").innerHTML  =kamel4 ;
document.getElementById("kamel_haae").innerHTML =kamel5 ;
document.getElementById("kamel_ouaou").innerHTML=kamel6 ;
document.getElementById("kamel_zay").innerHTML  =kamel7 ;
document.getElementById("kamel_haa").innerHTML  =kamel8 ;
document.getElementById("kamel_ttae").innerHTML =kamel9 ;
document.getElementById("kamel_yaa").innerHTML  =kamel10 ;
document.getElementById("kamel_kaf").innerHTML  =kamel11 ;
document.getElementById("kamel_laa").innerHTML  =kamel12 ;
document.getElementById("kamel_mim").innerHTML  =kamel13 ;
document.getElementById("kamel_noon").innerHTML =kamel14 ;
document.getElementById("kamel_saad").innerHTML =kamel15 ;
document.getElementById("kamel_ine").innerHTML  =kamel16 ;
document.getElementById("kamel_faa").innerHTML  =kamel17  ;
document.getElementById("kamel_daa").innerHTML  =kamel18  ;
document.getElementById("kamel_ppaf").innerHTML =kamel19  ;
document.getElementById("kamel_raa").innerHTML  =kamel20  ;
document.getElementById("kamel_sin").innerHTML  =kamel21  ;
document.getElementById("kamel_taa").innerHTML  =kamel22  ;
document.getElementById("kamel_ttta").innerHTML =kamel23 ;
document.getElementById("kamel_kha").innerHTML  =kamel24  ;
document.getElementById("kamel_ddal").innerHTML =kamel25  ;
document.getElementById("kamel_ddda").innerHTML =kamel26  ;
document.getElementById("kamel_gaa").innerHTML  =kamel27  ;
document.getElementById("kamel_chine").innerHTML=kamel28 ;




   
   
   document.getElementById("text").addEventListener("keyup",countWord);
   
   
   document.getElementById("best3").innerHTML= Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter18*60 + Counter16*70 + Counter17*80 + Counter26*90 + Counter19*100 + Counter20*200  + Counter15*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter27*800 + Counter28*900 + Counter21*1000  ;
   
   document.getElementById("best6").innerHTML= Counter1 + Counter2 + Counter3 + Counter4 + Counter5 + Counter6 + Counter7 + Counter8 + Counter9 + Counter10 + Counter11 + Counter12 + Counter13 + Counter14 + Counter15 + Counter16 + Counter17 + Counter18 + Counter19 + Counter20 + Counter21 + Counter22 + Counter23 + Counter24 + Counter25 + Counter26 + Counter27 + Counter28 ;
   
   // document.getElementById("best7").innerHTML=words + Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*11 + Counter11*22 + Counter12*33 + Counter13*44 + Counter14*55 + Counter15*66 + Counter16*77 + Counter17*88 + Counter18*99 + Counter19*111 + Counter20*222 + Counter21*333 + Counter22*444 + Counter23*555 + Counter24*666 + Counter25*777 + Counter26*888 + Counter27*999 + Counter28*1111 + Counter1 + Counter2 + Counter3 + Counter4 + Counter5 + Counter6 + Counter7 + Counter8 + Counter9 + Counter10 + Counter11 + Counter12 + Counter13 + Counter14 + Counter15 + Counter16 + Counter17 + Counter18 + Counter19 + Counter20 + Counter21 + Counter22 + Counter23 + Counter24 + Counter25 + Counter26 + Counter27 + Counter28;
   
   }
   
   
   
