function gitvalue(){
    var Amont=document.getElementById("num11").value;
    var Rate=document.getElementById("num12").value;
    var Year =document.getElementById("num13").value;
    var cal=Amont *Rate*Year;
    var calculat=cal /100;
   // console.log(calculat);"If you deposid"
   document.write("If you deposid"); document.write(Amont);
   document.write("at an intersetrate of "); document.write(Rate);
  
   document.write("you will recive an amont of");document.write(calculat);
   document.write("in the year");
    document.write(Year);

  
