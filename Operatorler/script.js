// Aritmatik Operatorler

// Aşağıdaki operatörler temel matematik hesaplamaları yapar.
let sonuc;
let a=10, b=11, c=40;


sonuc = (a + b);
sonuc = (a - b);
sonuc = (a / b);        
sonuc = (a * b);
sonuc = (a % b);

sonuc = a++;    // a = a + 1 işlemiyle aynı mantıkdır, a yı bir arttır arttırdığını a yerine koyar. ++ sağda olduğu için önce atama işlemi yapılır sonra a'nın değeri 1 arttırılır.
sonuc = ++a;    // Burada önce a nın değeri arttırılı daha sonra atama işlemi yapılır. 
sonuc = a--;    // a'yı sonuca eşitle daha sonra a'nın değerini bir azalt anlamına gelir.
sonuc = --a;    // a'yı bir azalt daha sonra sonaca eşitle anlamıan gelir. 

// Atama operatörleri

sonuc = a;
sonuc += a;  // sonuc = sonuc + a ifadesi ile aynı işlevi görür, sonucu al üstüne a'yı ekle anlamına gelir.
sonuc += (a+b); // Burada'da yine sonucu al üstüne a+b'yi ekle anlamına gelir. Parantezli yazmak okunurluk için önemli.
sonuc -= a; // Sonucu al a kadar çıkar anlamına gelir.,
sonuc *= a; // Sonuc = sonuc * a anlamına gelir. 
sonuc /= a; // sonuc = sonuc / a anlamına gelir.

// Karşılaştırma operatörleri

sonuc = (a == b); // a eşit mi b ye? sorusunu soran operatör, true veya false çıktı verir.
sonuc = (a != b); // a eşit değil mi b ye sorusunu sorar, true veya false çıktı verir.
sonuc = (3 == "3"); // İki eşitlik ile sorarsak verilen şeyin türünü önemsemez yandaki çıktıyı doğru olarak gösterir.
sonuc = (3 === "3"); // üç eşitlik ile sorarsak verilen şeyin türünü önemser yandaki çıktıyı yanlış olarak gösterir.
sonuc = (a > b); 
sonuc = (a <= b);
sonuc = (a >= b);

 // a => b  ifadesi fonskiyona girer, karşılaştırma operatörü değildir.

console.log(sonuc);

// and operatörü '&&' işaretiyle gösterilir, tüm durumlardan hepsi doğruysa doğru, değilse yanlışı gösterir.
// veya operatörü '||' işaretiye gösterilir, tüm durumlardan en az 1'i doğruysa doğru, yoksa yanlışı gösterir.
// % modülüs operatörü bir sayının diğer sayıya bölümünden kalanı verir.

