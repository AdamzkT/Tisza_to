var tomb = ["Guvat","Jégmadár","Kárókatona"]
var kepek = ["guvat.png","jegmadar.png","karokatona.png"]
var leiras = ["leiras guvat","leiras jegmadar","leiras karokatona"]
function kattintas(szam){
    //alert(tomb[szam])
    document.getElementById("modalfej").innerHTML=tomb[szam]
    document.getElementById("modaltorzs").innerHTML=`<img src="kepek/${kepek[szam]}" class="img-fluid">${leiras[szam]}`
}