// Fonksiyonlar ile ilgili uygulamalar.

// Yaş hesaplama fonksiyonu.
function yashesapla (dogumyili) {
    let simdikiyil = new Date().getFullYear(); // new date şimdiki tarih ve saati, getfullyear'da Şimdiiki yılı alır.
return simdikiyil - dogumyili;  //  return, değeri döndürerek fonksiyonun dışında değeri kullanmamıza sağlar, console.log() gibi sadece ekrana yazdırmaz, değeri başka yerde kullanmamızı sağlar.
                                //  önemli olarakta return fonksiyon çalıştıktan sonra işlemi o anda sonlandırmak için kullanılır, fonksiyon sonraki kodlara bakmaz.
}

console.log("Yaşınız: " + yashesapla(1990));

// emekliliğe ne kadar kaldı fonksiyonu.
function emekliligekacyilkaldi (dogumyili, isim) {
    let yas = yashesapla (dogumyili);

    let kalan_sene = 70 - yas;  

    if (kalan_sene > 0) {
        console.log(isim + " emekli olmanıza " + kalan_sene + " yıl kaldı")
    }
    else {
        console.log("Zaten emeklisinz");
    }
}

emekliligekacyilkaldi (2005, "kadir");

// Verilen kelimeyi belli sayıda tekrar ettirme fonksiyonu.
function tekrarla (tekrarlanacakkelime, adet) {
    for (let i = 0; i<adet; i++) {
        console.log(tekrarlanacakkelime);
    }
} 
tekrarla("Kadir", 7);

// Diktörtgenin alan ve çevre hesaplama fonksiyonu.
function alanhesapla (x,y) {
let sonuc = x * y;
return sonuc;
}
function cevrehesapla (x,y) {
let sonuc = x + y + x + y;
return sonuc;
}

console.log("Diktörtgenin Alanı: " + alanhesapla (5,6));
console.log("Diktörtgenin Çevresi: " + cevrehesapla (5,6));

// Yazı - tura uygulaması fonksiyon ile.
function yazitura (){
    let randomsayi = Math.random(); // 0-1 arası rastgele sayı üretir.
    if (randomsayi < 0.5) {
        console.log("tura");
    }
    else {
        console.log("yazı");
    }
}
yazitura();

// Verilerin sayının tam bölenlerini alma ve diziye yazma fonksiyonu.
function tambolenleribul (verilensayi){
    let tambolunensayilar = [];   
    for (let i = 1; i< verilensayi; i++) {
    
    if (verilensayi % i == 0) {
        tambolunensayilar.push(i);          // eğer kalan sıfırsa diziye ekleriz 
    }
    }
    return tambolunensayilar;
}

console.log(tambolenleribul(70)); 


// Arguments ile toplama fonksiyonu. 
function topla () {
    let sonuc =0;
    for (let i =0; i < arguments.length; i++) {
    sonuc += arguments[i];                        // Arguments, bir fonsksiyona gönderilen tüm parametreleri tutan dizi benzeri nesnedir.
    }
return sonuc;
}
let x = topla(1,2,3,5,20);
console.log(x);

