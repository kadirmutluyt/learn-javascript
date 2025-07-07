//Nesneler (Objects)

//  Nesneleri tanımlarken süslü parantezi kullanırız
//  Key : bilgi tarzında ilerleriz, iki nokta ile karşısına yazılacak şeyi yazarız.
//  Obje içinde obje tanımlayabiliyoruz, aynı dizide ki gibi. | sonuc = kullanici["adres"]["ilce"];
// Köşeli parantez dışında, nokta ilede çağırabiliyoruz.| sonuc = kullanici.adres.sehir; 
// Nesnenin içinde dizi açıp, çağırabiliriz. | "hobiler": ["Futbol", "Basketbol"] --- sonuc= kullanici.hobiler[0];
// objeleri nir diziye tanımlayabiliriz, aşşağıda iki objeyi bir dizinin içine koydum ve ondan aşşağıdan bilgilerini çağırdım

/*
let kullanici1 = {
    "ad": "Kadir", 
    "soyad": "mutlu",
    "yas" : 20,
    "adres" : {
        "sehir": "ankara", 
        "ilce":  "polatli",
        "mahalle": "xxx", 
    },
    "hobiler": ["Futbol", "Basketbol"] 
};

let kullanici2 = {
    "ad": "canan", 
    "soyad": "mutlu",
    "yas" : 20,
    "adres" : {
        "sehir": "eskiseşir", 
        "ilce":  "odunpazarı",
        "mahalle": "xxxx", 
    },
    "hobiler": ["tenis", "kayak"] 
};

let kullanicilar = [kullanici1, kullanici2];


let sonuc = kullanicilar[1].ad;
console.log(sonuc);

*/

// ürün bilgilerini nesneye kaydetme, nesne içinde dizi uygulaması, siparişleri toplama ve kdv hesaplama.

let siparis1 = {
    "siparis_id": 101,
    "musteri_id": 12,
    "siparis tarihi": "31.12.2025",
    "ödeme şekli": "kredi kartı",
    "kargo adresi": 
        {
            "mahalle": "xxx",
            "ilçe": "polatli",
            "şehir": "ankara"
        },

    "satin_alinan_urunler": [
        {
        "urun_id": 5,
        "urun_basligi": "iphone 16 pro",
        "urun_url": "https://www.apple.com/tr/shop/buy-iphone/iphone-16-pro",
        "urun_fiyati": 75000
        },
        {
        "urun_id": 6,
        "urun_basligi": "iphone 16 pro max",
        "urun_url": "https://www.apple.com/tr/shop/buy-iphone/iphone-16-promax",
        "urun_fiyati": 85000
    }] 
};

let siparis2 = {
    "siparis_id": 102,
    "musteri_id": 12,
    "siparis tarihi": "30.12.2025",
    "ödeme şekli": "kredi kartı",
    "kargo adresi": 
        {
            "mahalle": "xxx",
            "ilçe": "polatli",
            "şehir": "ankara"
        },

    "satin_alinan_urunler": 
        {
        "urun_id": 5,
        "urun_basligi": "iphone 16 pro",
        "urun_url": "https://www.apple.com/tr/shop/buy-iphone/iphone-16-pro",
        "urun_fiyati": 75000
        }
};


let siparis1toplam = (siparis1.satin_alinan_urunler[0].urun_fiyati + siparis1.satin_alinan_urunler[1].urun_fiyati) * 1.2;

let siparis2toplam = siparis2.satin_alinan_urunler.urun_fiyati * 1.2;

let toplam_siparis = siparis1toplam + siparis2toplam;

console.log("1.siparis tutarı: " + siparis1toplam);
console.log("2.siparis tutarı: " + siparis2toplam);
console.log("toplam sipariş tutarı: " + toplam_siparis);






