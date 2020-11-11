/*
//Console'a merhaba yazdırma
console.log("Merhaba");
//Console'a Error-Hata mesaji yazdirma
console.error("Hata Mesaji");
//Console'a Warn-Uyari mesaji yazdirma
console.warn("Bir Uyari olustu");
// -> Yorum Satiri

//Console Temizleme
console.clear();

*/

//Veri Türleri
/*
    Basit veri türleri
String (dize), Number (sayi). Boolean (mantiksal) 
    Bileşik veri türleri 
Array (dlzi), Object (nesne)
Özel verl türleri 
Undefined (tanımsiz). Null (bos)


*/
//Degiskenler

var age;
console.log(age); //undefined  Tanimlanmadi hatasi verir.

var age = 15;
console.log(age); //15

var fullname = 'Necati Cuhadar';
console.log(fullname); //Necati Cuhadar

fullname = 'Necati';
console.log(fullname); //Necati

//Degisken Tanimlama Kurallari
/*
    Degisken ismi sayi ile baslayamaz
    Komut isimleri tanimlamada kullanilamaz

    case sensitive : Büyük küçük harf duyarlı

    var , let , const

    var = Standart değişken tanımlamakta kullanılır.
    var yerine let kullanabiliriz.
    let = Blok kapsamlı yerel değişken tanımlamakta kullanılır.

    const: tanimladigimiz degiskeni tekrar degistiremeyiz. Sabit değişken tanımlamakta kullanılır.
    const email = "abc@gmail.com";
    console.log(email);
*/


//Degisken Turleri
/*
    Primitive Types
        String
            let firstName = "Necati"
            console.log(firstName);

        Number
            let age = 20;
            let money = 100.5;
            console.log(age);
            console.log(money);
            console.log(typeof money);

        Boolean
            let isAktif = false;
            console.log(isAktif);

        null
            let job = null;

        undefined
            let car;
            console.log(typeof car);

    Reference Types - Objects
        Array
            let names=["Ahmet","Necati","Isim"];
            let address ={city:"Kocaeli",counter:"Turkey"}
            console.log(typeof address);

        Function
            var calculateAge = functuin(){
                return 0;
            };

*/

// Tür Dönüşümü
/*

//İki stringi toplarsak birleştirme işlemi yapmış oluruz.
let num1 = "5";
let num2 = '10';

console.log(num1+num2); //510
console.log(typeof num1); //string

let num1 = Number("5");
let num2 = Number("10");

let total = num1 + num2;

console.log(total); //15
console.log(typeof total); //number

//Sayiyi stringe cevirme
let val;
val = String(10);

console.log(val); //10
console.log(typeof val); //string
console.log(val.length); //10

//bool turundekini stringe cevirme
val = String(true);
console.log(val); //true
console.log(typeof val); //string
console.log(val.length); //4

//Date to string
val = String(new Date());
val = String(new Date().getDay());

//Array'i stringe cevirme
val = String([1,2,3,4]);

val = (10).toString();
val = (false).toString();

//Stringi sayiya cevirme
val = Number('10');

console.log(val); //10
console.log(typeof val); //number
console.log(val.length); //undefined

val = Number('a');

console.log(val); //NaN
console.log(typeof val); //number
console.log(val.length); //NaN

val = Number([1,2,3,4]);

console.log(val); //NaN
console.log(typeof val); //number
console.log(val.length); //NaN

val = parseInt('10');
val = parseInt('10.5');
val = parseFloat('10.5');
*/
/*
ÖZEL OPERATÖRLER
+  = Birlestirme operatoru
,  = Virgül operatörü
    for(b = 0; b < 10; b++, a++){
        c = b + a;
    }
this = Oluşturulmuş olan bir object’i (nesneyi) işaret etmek için kullanılır
in = Herhangi bir object’in (nesnenin) bir özelliğe sahip olup olmadığını sınamak için
kullanılır.
    ozellik in a
    a = new Object();
    a.adi = "Volkan";
    "adi" in a (true)
    "soyadi" in a (false)
instanceof = Herhangi bir object’in (nesnenin) özel bir class (sınıf) örneği olup olmadığını sınamak için
kullanılır.
*/

/*

*/