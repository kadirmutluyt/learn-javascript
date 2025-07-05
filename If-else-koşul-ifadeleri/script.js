// If - Else Koşul İfadeleri
// Koşul doğruysa koşul içi true anlamına gelir, içeriyi çalıştırır yanlışsa false anlamına gelir else'i çalıştırır.

// and operatörü '&&' işaretiyle gösterilir, tüm durumlardan hepsi doğruysa doğru, değilse yanlışı gösterir.
// veya operatörü '||' işaretiye gösterilir, tüm durumlardan en az 1'i doğruysa doğru, yoksa yanlışı gösterir.

 /*
let username = "kadirmutlu";
let password ="123";

if (username =="kadirmutlu") {
    if (password == "123") {
        console.log("Giriş Başarılı.");
    }
    else {
    console.log("Şifre hatalı");
    }
}
else {
    console.log("Kullanıcı adı hatalı");
}
------------------------------------------

let yas = 20;
let mezuziniyet = "lise";

if ((yas >= 18) && (mezuziniyet == "lise" || mezuziniyet == "universite")) {
    console.log("Ehliyet alabilir.");
}
else {
    console.log("Ehliyet Alamazsın.");
}
 */


let a= 100, b=500, c=670;

if ( 100 > a && a >50) {
    console.log("a 100 ile 50 arasında.");
}
else {
    console.log("a 100 ile 50 arasında değil.");
}


if (a>b && a > c) {
    console.log("a büyüktür b ve c den");
}
else if (c > a && c > b) {
    console.log("c büyüktür a ve b den");
}
else if (b > c && b > a){
    console.log("b büyüktür a ve c den");
}
else { 
    console.log ("Hatalı giriş.");
}
//---------------------------------------

let vize_1 = 50;
let vize_2 = 60;
let final =50;

let ortalama = ((vize_1 + vize_2) /2 ) %40 + (final %60);

if (ortalama >= 50 && final >=50) {
    console.log("Sınavdan geçtiniz.");
}
else if (ortalama <= 50 && final >= 70) {
    console.log("Sınavdan geçtiniz.");
}
else {
    console.log("Sınavdan kaldınız.");    
}