
pic1= new Image();
pic1.src = "Images/burger1.png";
pic2 = new Image();
pic2.src = "Images/burger2.png";
pic3 = new Image();
pic3.src = "Images/burger3.gif";

function toggleDiv(element1,element2){
if(document.getElementById(element1).style.display == 'block')
document.getElementById(element1).style.display = 'none';
else
document.getElementById(element1).style.display = 'block';
if(document.getElementById(element2).src == pic1.src )
document.getElementById(element2).src = pic2.src;
else 
document.getElementById(element2).src = pic1.src;
}

function toggleB(element){
if(document.getElementById(element).src == pic1.src )
document.getElementById(element).src = pic2.src;
}