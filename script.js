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
//Degiskenler

var age;
console.log(age); //undefined  Tanimlanmadi hatasi verir.

var age = 15;
console.log(age); //15

var fullname = 'Necati Cuhadar';
console.log(fullname); //Necati Cuhadar

fullname = 'Necati';
console.log(fullname); //Necati

let isim = "Necati";

if (true) {
    let isim = "Cuhadar";
    console.log(isim);
}

console.log(isim);

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

/*
Değişkenlerin isimlendirme kuralları:
1. Değişken isimleri her zaman anlamlı olarak kullanılmalıdır.
2. Değişken isimleri harfler ile başlayabilir. (Türkçe karakter kullanılamaz.)
3. Değişken isimleri _ (Alt çizgi) işareti ile başlayabilir.
4. Değişken isimleri $ (Dolar) işareti ile başlayabilir.
5. Değişken isimleri hiçbir zaman bir rakam ile başlayamaz. Fakat rakamlar değişken isimlerinde ilk karakterden sonra kullanılabilir.
6. Değişken isimleri büyük harf / küçük harf duyarlıdır.
7. Aynı değişken isimleri kullanılacaksa, değişkenin değeri her zaman son yazılan değişkenin depoladığı veri olacaktır.
8. Değişken isimleri Javascript tarafından rezerve edilmiş kelimeler olamaz.
9. Aynı değişken adı değişken ifadelerinde kullanılamaz.
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
    eval() : Kendisine parametre olarak verilen degerleri Javascript kodlamasina cevirerek komut gibi calistirir ve
            olusan degeri geriye dondurur.

    var degerbir = 10;
    var degeriki = 30;

    var sonuc = "degerbir+degeriki";
    document.write(sonuc); //degerbir+degeriki
    var sonuc = eval("degerbir+degeriki")";
    document.write(sonuc); //40

    trim() : Değişken içeriğinin varsa başındaki ve sonundaki tüm boşlukları temizleyerek değeri geriye döndürür.

    slice() : Kendisine verilecek olan parametreler ile tanımlanmış değişken içerği aralığında bulunan değerleri kopyalayarak
                yeni bir içerik oluşturur. Ve oluşturduğu değeri geriye döndürür
                baslangic-bitis

    substring() : Kendisine verilecek olan parametreler ile tanımlanmış
                değişken içeriği aralığında bulunan değerleri kopyalayarak yeni bir içerik oluşturur ve
                oluşturduğu değer geriye döndürür.
                Baslangıç - Bitiş

    substr() : Kendisine verilecek olan parametreler ile tanımlanmış
                değişken içeriği aralığında bulunan değerleri kopyalayarak yeni bir içerik oluşturur ve
                oluşturduğu değer geriye döndürür.
                Baslangıç - Bitiş(kaç karakter ilerlesin)
                - deger alabilir.
    
    concat() : Üzerinden çalışılan değişkene parametrik olarak verilen değişken veya değişkenleri dahil ederek yeni
                bir içerik oluşturur. Oluşturduğu değeri geriye döndürür.
    
    repeat() : Kendisine parametre olarak verilen değer doğrultusunda değişken içeriğini tekrar edip kopyalayarak, yeni bir
                içerik oluşturur ve oluşturduğu içeriği geriye döndürür.

*/
var icerik = "Necati Cuhadar Javascript";
document.write("<br/>");
document.write(icerik);
document.write("<br/><br/>");
var sonuc = icerik.slice(3, 4);//3 ten itibaren tum icerigi alir.
document.write(sonuc);