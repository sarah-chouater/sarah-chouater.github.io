$(function(){

    $(".navbar a, footer a").on("click", function(event){
    
        event.preventDefault();
        var hash = this.hash;
        
        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
        
    });

})

const gallery = document.getElementById("gallery");

const images = [
    "1-DREAM ORANGE.jpg",
    "2-DREAM YELLOW.jpg",
    "3-DREAM GREEN.jpg",
    "4-DREAM RED.jpg",
    "5-DREAM MIDNIGHT BLUE.jpg",
    "6-DREAM PURPLE.jpg",
    "7-DREAM SKY BLUE.jpg",
    "8-CHARTE GRAPHIQUE CHIMERA DIVINA.jpg",
    "9-ARTISTIQUE FONT.jpg",
    "10-AFFICHE BALLET DE LORRAINE.jpg",
    "11-BD LA NAISSANCE DU GRAPHISME.jpg",
    "12-REVE BALEINE VOLANTE.jpg",
    "13-REVE CHAT GEANT.jpg",
    "14-REVE POISSON NAGEANT EN FORET.jpg",
    "15-REVE DROMADAIRE PLUS PETIT QU'UN CHAMPIGNON.jpg",
    "16-LOUP DANS UNE GROTTE AQUATIQUE.jpg",
    "17-COCCINELLE SUR SA MONTAGNE.jpg",
    "18-PIEUVRE MOGOLFIERE.jpg",
    "19-MONTAGE PHOTO VIKING.jpg",
    "20-CHATON JOUANT UNE NUIT PLUVIEUSE.jpg",
    "21-BATEAU PIRATE VU DU PHARE.jpg",
    "22-LE PETIT DEJEUNER.jpg",
    "23-PORTRAIT DE ISY.jpg",
    "24-FANART UNDERTAKER.jpg",
    "25-DEGRADATION DE L'IMAGE.jpg",
    "26-LA SALLE D'ARCADE DE POCHE.jpg",
    "27-BUMBLEBEES OLFACTION AND VISION.jpg",
    "28-FANART BEBE DORIS.jpg",
    "29-BRODERIE AU COIN DU FEU.jpg" 
];

images.forEach(image => {

    const link = document.createElement("a");
    link.className = "pin";
    link.href = "images/" + image;
    link.target = "_blank";

    const img = document.createElement("img");
    img.src = "images/" + image;
    img.alt = "Image " + image;

    link.appendChild(img);
    gallery.appendChild(link);

});