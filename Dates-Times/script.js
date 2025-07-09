let simdi = new Date();


// get methotları ile tarihe bakma.
sonuc = simdi.getDate(); // günü gösterir
sonuc = simdi.getDay(); // 0-6 arası günü gösterir. 0 = pazar, 6= cumartesi
sonuc = simdi.getFullYear(); /// yılı gösterir

// set methotları ile tarihi güncelleme
simdi.setDate(22);
simdi.setFullYear(20023);
simdi.setMonth(5);

sonuc = simdi;

console.log(sonuc);

let dogumtarihi = new Date (2001, 7, 12);
sonuc = dogumtarihi;

sonuc= simdi.getFullYear() - dogumtarihi.getFullYear;
let milisecond = simdi - dogumtarihi;

let saniye = milisecond /1000;

let dakika = saniye / 60;
sonuc = dakika;
console.log(sonuc);
