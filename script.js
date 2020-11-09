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

//Degisken Tanimlama Kurallari
/*
    Degisken ismi sayi ile baslayamaz
    Komut isimleri tanimlamada kullanilamaz

    case sensitive : Büyük küçük harf duyarlı

    var , let , const

    var yerine let kullanabiliriz.

    const: tanimladigimiz degiskeni tekrar degistiremeyiz.
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