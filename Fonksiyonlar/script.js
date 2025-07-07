// Fonksiyonlar

// Yaş hesaplama fonksiyonu
function yashesapla (dogumyili) {
    let simdikiyil = new Date().getFullYear(); // new date şimdiki tarih ve saati, getfullyear'da Şimdiiki yılı alır.
return simdikiyil - dogumyili;  //  return, değeri döndürerek fonksiyonun dışında değeri kullanmamıza sağlar, console.log() gibi sadece ekrana yazdırmaz, değeri başka yerde kullanmamızı sağlar.
                                //  önemli olarakta return fonksiyon çalıştıktan sonra işlemi o anda sonlandırmak için kullanılır, fonksiyon sonraki kodlara bakmaz.
}

console.log("Yaşınız: " + yashesapla(1990));

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

