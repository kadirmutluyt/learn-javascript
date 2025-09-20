// Objects

// Person, Product, Comment
/*
const product = {
    // Properties (özellikler)
    title: "Tecno Camon 19 Pro",
    deskcription: "On numara telefon",
    price: 70000,
    stock: 100,

    // Methods
    display: function (){
       return `Ürün basligi: ${this.title} ürünün aciklamasi:  ${this.deskcription} ürünün fiyatı: ${this.price}`;
    },

    is_Active: function (){
        return (this.stock > 0) ? "stock var": "stock yok";
    }
}

const carproduct = {
    color: "white",
    motor: "bmw 1.3",
    mod: "sportif",
    
    display: function(){
        return `Araba rengi: ${this.color}, arabanın motoru: ${this.motor}, arabanın modu ${this.mod}`;
    }
}

console.log(product.title);
console.log(product.deskcription);
console.log(product.price);

console.log(product.display());
console.log(product.is_Active());
console.log(carproduct.display());


// function Constructor | CamelKase ile adlandırlır, yani baş harfler büyük. Kalıp oluştururuz, otomatikleştiririz.
function Product (title, deskcription, price, stock){  

    this.title = title;
    this.deskcription = deskcription;
    this.price = price;
    this.stock = stock;

    this.display = function(){
        return `marka: ${title}, aciklama: ${deskcription}, fiyat: ${price}, stok miktari: ${stock} `;
    }

    this.stockKontrol = function(){
        return stock > 0 ? "stock var" : "stock kalmadi";
    }
}

const product1 = new Product ("bmw", "güzel bir araba", 100000, 25);
const product2 = new Product ("mercedes", "güzel bir araba", 300000, 0);
const product3 = new Product ("fiat", "güzel bir araba", 200000, 50);

const tv1 = new television ("white", 18800, 183, "On numara mal abi");
const tv2 = new television ("red", 1580, 30, "On numara mal abi");
const tv3 = new television ("black", 12500, 13, "On numara mal abi");


function television (color, price, stock, deskcription){
    this.color = color;
    this.price = price;
    this.stock = stock;
    this.deskcription = deskcription;

    this.display = function (){
        return `marka: ${color}, aciklama: ${deskcription}, fiyat: ${price}, stok miktari: ${stock} `;
    } 

    this.stockKontrol = function (){
        return stock > 0 ? "stock var" : "stock yok";
    }
}

// console.log(product1.title); 
// console.log(product2.title); 
// console.log(product3.title); 

console.log(product1.display());
console.log(product2.display());
console.log(product3.display());

console.log(product1.stockKontrol());
console.log(product2.stockKontrol());
console.log(product3.stockKontrol());

console.log(tv1.display());
console.log(tv2.display());
console.log(tv3.display());

console.log(tv1.stockKontrol());
console.log(tv2.stockKontrol());
console.log(tv3.stockKontrol());

// ----------------------------
// Uygulama - Constructor

// Player Constructor


function Player (username){
    this.username = username;
    this.score = 0;

    this.start = function (){
       return `${username} oyuna basladi.`;
    }

    this.pouse = function (){
        return `${username} oyundan ayrildi.`
    }

    this.stop = function () {
        return `${username} oyunu durdurdu.`
    } 

    this.add_score = function (val) {
        this.score += val;
    }

    this.show_score = function () {
        return `${username} isimli oyuncunun skoru ${this.score}.`;
    }
}


const oyuncu1 = new Player("Ahmet");
const oyuncu2 = new Player("Cinar");
const oyuncu3 = new Player("yeliz");

console.log(oyuncu1.start());
console.log(oyuncu2.pouse());
console.log(oyuncu3.stop());

oyuncu1.add_score(50);

console.log(oyuncu1.show_score());
*/
//---------------------------------

// Object Properties

function rectangle (name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;

    this.area = function (){
        return this.width * this.height;
    }

    this.perimeter = function () {
        return ("çevre: " + 2*(this.width + this.height));
    }
}

const rect1 = new rectangle("rectangle 1", 10, 5);
const rect2 = new rectangle("rectangle 2", 200, 15);

// add Property
rect1.color = "red"; // Sadece bu objeye Properties ekledik, dışarıdan müdahale ederek.

// remove Property
delete rect1.color; // eklediğimiz properties'i sildik.

// delete rect1.area; // sadece bu objeden area properties'i sildik


// hasOwnProperty ile istediğimiz property var mı? diye oluşturduğumuz objeye bakıyoruz. true veya false döner.
console.log(rect1.hasOwnProperty("width"));


console.log(rect1);
console.log(rect2);


console.log(rect1.area());
console.log(rect2.area());

console.log(rect1.perimeter());
console.log(rect2.perimeter());

// Get Keys 
console.log(Object.keys(rect1));  // Objenin içerisine kaydettiğimiz anahtar değerleri verir

// Get Values
console.log(Object.values(rect1)); // anahtarlara karşılık gelen değerleri verir

// Get Entities
console.log(Object.entries(rect1)); // Entries, key ve value aynı anda getirir


for (let [key, value] of Object.entries(rect1) ) {
    if (typeof value !== "function" ) {
        console.log(key, value);
    }
}

//.................................

// Prototype 

console.log([]);
console.log(new Array());

function Comment (title, body, username) {
    this.title = title;
    this.body = body;
    this.username = username;
    this.CreatedAt = Date.now();
    console.log(this);

}

// prototype verdik, yani önceden sadece aşşağıda oluşturduğumuz c1, c2 ile ulaşıyorduk, şuan kapsamı genişledi. köpekte yemek yer kedide fakat sınıflar aynı değil, ikisine de ayrı ayrı yemek yeme fonksiyonu yazmak yerine prototype kısmına yazıp sonradan çağırarak kullanabiliriz.

Comment.prototype.display = function (){ 
    return this.title;
}

const c1 = new Comment("dikkat!", "bu olaylar çok ilginc, kalitim gibi", "kadir mutlu");
const c2 = new Comment("begeniyorum!", "üst üste geliyor, fazladan yer kaplamiyor", "kadir mutlu"); 
