
$(document).ready(function () {

    $('#carouselExample').carousel({
        interval: 2000,
        pause: "hover"
    });

    // Fonction pour ajouter et supprimer l'animation
    function addAndRemoveAnimation() {
        $('#animatedBtn').addClass('shake');
        void $('#animatedBtn')[1].offsetWidth;
        $('#animatedBtn').removeClass('shake');
    }

    // Appelle la fonction toutes les 3 secondes (3000 millisecondes)
    setInterval(addAndRemoveAnimation, 3000);




});

    $(document).ready(function () {
        // Fonction pour mettre à jour le texte et la couleur au survol
        function updateCardOnHover() {
            // Sélectionner le card
            var card = $('#myCard');

            // Mettre à jour le texte et la couleur
            card.find('.card-title').text("Nous rejoindre");
            card.find('.card-text').text("Nous somme une communaute rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem ...");
            card.css('background-color', 'rgba(224, 224, 219, 0.824)'); // Remplacez avec la couleur de votre choix
        }

        // Fonction pour rétablir le texte et la couleur après le survol
        function resetCardOnLeave() {
            var card = $('#myCard');
            card.find('.card-title').text("Nous rejoindre");
            card.find('.card-text').text("Nous sommes Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit....");
            card.css('background-color', ''); // Réinitialiser à la couleur d'origine ou supprimer pour utiliser la CSS
        }

        // Appliquer les fonctions aux événements de survol
        $('#myCard').hover(updateCardOnHover, resetCardOnLeave);
    });

    $(document).ready(function () {
        var burgerIcon = $('#burger-icon');
        var menu = $('#menu');

        burgerIcon.click(function () {
            menu.slideToggle();
        });
    });