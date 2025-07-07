// For döngüsün ve while dögüsü içerisi true olduğu sürece koşula göre çalışır. 
// For'da mutlaka iki tane ";" noktalı virgül olması şart.
// for'da değişken oluşturabilirken while döngüsünde değişken oluşturamayız. Temel fark budur.

// Break, döngüden çık sonraki kodlara geç anlamına gelir.
// Continue, döngüyü bitirmez sadece o döngü turunu atlatır döngü devam eder.
// do while döngüsü döngüde ki koşula bakmaksızın içeriği bir kere çalıştırır daha sonra koşula bakarak döngüye devam eder.

/* 
for (let i=0; i <= 100; i++) {
    console.log(i);
}


let meyveler = ["armut", "Elma", "çilek", "kaysi", "seftali", "ayva"];

for (let index = 0; index < (meyveler.length);  index++) {
    console.log(meyveler[index]);
}


let sayilar = [0,3,9,12,65,8,21,45,63,21,4,5,6,88];
let toplamsayi = 0;
for (let x = 0; x < sayilar.length; x++  ){
    console.log(sayilar[x]);
    toplamsayi += sayilar[x]; 
}
console.log("Dizide ki toplam sayı: " + toplamsayi);

let i =0;
while ( i<10 ) {
    i++;
    if (i % 2 == 0){
        console.log("İ çifttir: " + i);
       continue;
    }
    
}


let a = 25;
let b = 20;

do {
    console.log("Bu mesaj bir kere çalışacak.");
}
while (b>a)

*/

// Dizideki her sayının karesini aldırdım.
let sayilar = [3,5,7,8,10,20,25,37,40];

for (let i =0; i<sayilar.length; i++) {
    sayilar[i] *= sayilar[i];
    console.log(sayilar[i]);
}

// for döngüsüyle 100 den 50 ye kadar geriye saydırdım.
for ( let i=100; i > 50; i--) { 
    console.log(i);
}

// for döngüsüyle içiinde samsung geçen kelimeleri yazdırdım.
let urunler = ["iphone 16", "samsung s25", "iphone 17", "samsung s26"];

for(let i = 0; i< urunler.length; i++) {
    console.log (urunler[i].toUpperCase());
    console.log ((urunler[i] === "samsung") );
}


// Öğrencilerin not ortalamasını, sınavdan geçip geçmediklerini for döngüsü ile nesnelerin içiine girerek hesapladım.
let ogrenciler = [
    {"ad" : "kadir", "soyad" : "mutlu", "notlar" : [60,70,80]},
    {"ad" : "mehmet", "soyad" : "şahin", "notlar" : [80,50,75]},
    {"ad" : "canan", "soyad" : "özhüner", "notlar" : [70,70,80]}
]

    let toplamnotortalamasi =0

for (let i = 0; i < ogrenciler.length; i++) {

    let not_ortalamasi = ((ogrenciler[i].notlar[0]+ ogrenciler[i].notlar[1]) /2 ) *0.4 + (ogrenciler[i].notlar[2] *0.6);

    toplamnotortalamasi += not_ortalamasi;

    if (not_ortalamasi >= 50 && ogrenciler[i].notlar[2] > 50) {
    console.log("Öğrenci başarıyla geçti: " + not_ortalamasi);
    }

    else if (not_ortalamasi <= 50 && ogrenciler[i].notlar[2] > 70 ) {
    console.log("Öğrenci başarıyla geçti: " + not_ortalamasi);

    }
    else {
    console.log("Öğrenci sınavı geçemedi: " + not_ortalamasi);
    }
}

console.log(toplamnotortalamasi / 3 ) ;
