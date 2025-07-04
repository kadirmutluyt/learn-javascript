//Dizileri tanımlarken kapalı parantez kullanırız

let meyveler = ["Kiraz","Karpuz", "Kavun", "Erik"];

let goster;

goster = meyveler.length; // Liste eleman sayısını verir
goster = meyveler.toString(); // Diziden string bilgiyi verir ama virgüller var düz string oalrak veriyor
goster = meyveler.join(" "); //stringi verir parantez arasıyla string arasına bir şeyler eklememize sağlar
goster = meyveler.shift(); // listenin ilk elemanını siler
goster = meyveler.pop(); // listenin son elemanını siler
goster = meyveler.push("Çiek"); //Listenin sonunu eleman eklememizi sağlar
goster = meyveler.unshift("Ayva"); // listenin en başına eleman eklememize olanak tanır.
goster = meyveler.indexOf("Karpuz"); // Dizide baştan başlayarak ilk bulduğu karpuzu getirir
goster = meyveler.lastIndexOf("Karpuz"); // Dizide sondan başlayarak ilk bulduğu karpuzu getirir 
goster = meyveler.includes( "Erik"); // dizide erik varsa true yoksa false gösterir
goster = meyveler.splice (0,1, "Muz"); //Burada 0,1 hangi yeri silip eklemek istediğimiz yeri gösteriyor, hiç bir şey silmeden de ekleyebiliriz o da 0,0 ile en başa ekle olur 


goster = meyveler.length;
goster = meyveler.push("Çilek");

console.log(goster);
console.log(meyveler[0],[3]);