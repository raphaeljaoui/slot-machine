function machineASous(){
	
	var creditJoueur = document.getElementById("credit").value;
	var highscore = document.getElementById("highscore").value;
	
	// Génération de 3 nombres aléatoires entre 0 et 3 pour afficher les images
	var w = Math.floor(Math.random()*4);
	var x = Math.floor(Math.random()*4);
	var y = Math.floor(Math.random()*4);
    var z = Math.floor(Math.random()*4);
    
    const tab = ['carreau','pique','coeur','trefle']
	// Modification de la source des images à l'aide des 3 nombres aléatoires
	document.getElementById("img_sous_1").src = 'img_' + w + '.png';
	document.getElementById("img_sous_2").src = 'img_' + x + '.png';
	document.getElementById("img_sous_3").src = 'img_' + y + '.png';
	document.getElementById("img_sous_4").src = 'img_' + z + '.png';
	
	creditJoueur -= 1;
	

	if(creditJoueur==0){
		
		document.getElementById("boutonGO").disabled = "disabled";
	}else 
	
	if(w == x && x == y && y== z){
		creditJoueur += 5;
    }
        if(w == x && x == y){
		creditJoueur += 3;
	}
   

	
	
	if(creditJoueur > highscore){
		highscore = creditJoueur;
	}
	document.getElementById("credit").value = creditJoueur;
	document.getElementById("highscore").value = highscore;
}