// todo Karar Yapilari

const s1=Number(prompt("number1"));
const islem=prompt("islem giriniz");
const s2=Number(prompt("number2"));
let sonuc=0;
if(islem=="+"){
    sonuc=s1+s2;
}
else if(islem=="-"){
    sonuc=s1-s2;
}
else if(islem=="*"){
    sonuc=s1*s2;
}
else if(islem=="/"){
    sonuc =s1/s2;
}
console.log(sonuc);
console.log(`${s1} ${s2} =${sonuc}`); // buda console.log(sonuc); isleminin aynini verir

// todo TERNARY===================
const name1=prompt("Please your name enter")
const age=Number(prompt("Please your age enter"));
const healt=prompt("Please your santΓ© y/n");
console.log(
    age >=18 && healt=="y"
    ? `${name1} you can take papier π` 
    : `${name1} you can't take papier π€`
);


//ornek
const borc1=0;
const maas=3000;
console.log(borc1&&maas>2500?"You can take the credited π":
"You dont take the credited π");

