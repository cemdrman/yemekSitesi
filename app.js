var express = require("express");
var app = express();

app.set("view engine","ejs");

app.get("/",function(req,res){
  res.render("home");
});

app.get("/yemekler",function(req,res){
  var yemekList =[
    {adi:"çorba",resim:"http://cdn.yemek.com/mncrop/940/625/uploads/2016/10/lokanta-usulu-mercimek-corbasi.jpg"},
    {adi:"pilav",resim:"http://cdn.yemek.com/mncrop/940/625/uploads/2014/11/tereyagli-pilav-tarifi.jpg"},
    {adi:"musakka",resim:"http://www.nefisyemekmutfagi.com/wp-content/uploads/2015/02/patlican-musakka-tarifi-malzemeleri-ve-yapilisi-1-391x262.jpg"}
  ];


  res.render("yemekler", {yemekList:yemekList});//yemekList: dizinin adı - yemekler:bunları listelerken kullanacağımız isim
});

var server = app.listen(3000,function(){
  console.log("sunucu çalışıyor!");
});
