

var maVoiture = document.querySelector('.voiture');
var positionInitiale = maVoiture.style.left;
let voitureRotate = false
//console.log('Voiture style: ', maVoiture.style);
//alert(maVoiture.style);

function faireBouger(direction, rotation) {
  
  positionInitiale = +positionInitiale + direction;
 
  if(voitureRotate == false)
  {
  document.querySelector('.voiture').style.left = positionInitiale + 'px';
}else{
    document.querySelector('.voiture').style.top = positionInitiale + 'px'; 
}
}


   var positionInitial = maVoiture.style.transform; 
  function faireTourner()
  {
     //positionInitiale = +positionInitiale * rotation; 
     var positionInitial = maVoiture.style.transform; 
    document.querySelector('.voiture').style.transform = positionInitial + 'rotate(90deg)' ;
    voitureRotate = !voitureRotate
     
  }
  

  


