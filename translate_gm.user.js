// ==UserScript==
// @name         Translate GM
// @version      0.1
// @description  Translate GM
// @author		 Phost
// @updateURL	 https://github.com/2phost/mh-gh-translator/raw/main/translate_gm.user.js
// @downloadURL  https://github.com/2phost/mh-gh-translator/raw/main/translate_gm.user.js
// @match        https://gest-hordes2.eragaming.fr/*
// @grant        none
// ==/UserScript==

(function() {
    var replaceArry = [
        [/Plans de chantiers/gi, "Blueprints"],
        [/Ville/gi, "Town"],
        [/Citoyens/gi, 'Citizens'],
        [/Bâtiments/gi, 'Ruins'],
        [/Douves/gi, "Great Moat"],
        [/Grand Fossé/gi, "Great Pit"],
        [/Muraille rasoir/gi, "Grater"],
        [/Fosse à Pieux/gi, "Spiked Pit"],
        [/Appâts/gi, "Bait"],
        [/Barbelés/gi, "Barbed Wire"],
        [/Grogro mur/gi, "Überwall"],
        [/Muraille à pointes/gi, "Spiked Wall"],
        [/Troisième couche/gi, "Third Wall"],
        [/Seconde couche/gi, "Inner Wall"],
        [/Muraille évolutive/gi, "Evolutive Wall"],
        [/Poutres renfort/gi, "Metal Patches"],
        [/Râpe à zombies/gi, "Zombie Grater"],
        [/Palissade/gi, "Small Fence"],
        [/Contre-plaqué/gi, "Plywood"],
        [/Bastion/gi, "Extrawall"],
        [/Cloison en bois/gi, "Armour Plating"],
        [/Mur Savonné/gi, "Slip 'n' Slide"],
        [/Neurotoxine/gi, "Gas Gun"],
        [/Projection acide/gi, "Acid Spray"],
        [/Pulvérisateur/gi, "Vaporiser"],
        [/Champ mines eau/gi, "Mines"],
        [/Filtre/gi, "Water Filter"],
        [/Purificateur/gi, "Water Purifier"],
        [/Fertilisation sauvage/gi, "Fertilizer"],
        [/Pamplemousses explosifs/gi, "Grapeboom"],
        [/Potager/gi, "Vegetable Plot"],
        [/Projet Eden/gi, "Eden Project"],
        [/Foreuse puits/gi, "Drilling Rig"],
        [/Vaporisateur/gi, "Boiling Fog"],
        [/Douches/gi, "Shower"],
        [/Aqua tourelles/gi, "Water Turrets"],
        [/Percée/gi, "Water Catcher"],
        [/Pluvio-canons/gi, "Mist Spray"],
        [/Caniveaux/gi, "Sluice"],
        [/Rid'eau/gi, "Decon Shower"],
        [/Détecteur à eau/gi, "Divining Rods"],
        [/Pommier de l'Outre-Monde/gi, "Apple Tree"],
        [/Pompe/gi, "Pump"],
        [/Crémato-Cue/gi, "Cremato-Cue"],
        [/Boucherie/gi, "Butcher"],
        [/Canon à briques/gi, "Rock Cannon"],
        [/Perforeuse/gi, "Railgun"],
        [/Lance-Grenailles/gi, "Plate Gun"],
        [/Canon brutal/gi, "Brutal Cannon"],
        [/Monticules canons/gi, "Cannon Mounds"],
        [/Tourniquet/gi, "War Mill"],
        [/Manufacture/gi, "Factory"],
        [/Scies hurlantes/gi, "Screaming Saws"],
        [/Potence/gi, "Gallows"],
        [/Cantine à bois/gi, "Small Café"],
        [/Cimetière cadenassé/gi, "Small Cemetary"],
        [/Poulailler/gi, "Henhouse"],
        [/Abattoir/gi, "Abbatoir"],
        [/Infirmerie/gi, "Infirmary"],
        [/Atelier/gi, "Workshop"],
        [/Scanner/gi, "Scanner"],
        [/Carte améliorée/gi, "Upgraded Map"],
        [/Planificateur/gi, "Predictor"],
        [/Scrutateur/gi, "Searchtower"],
        [/Champs piégés/gi, "Spikes"],
        [/Renforts d'urgence/gi, "Wood Plating"],
        [/Guérilla/gi, "Guerilla Traps"],
        [/Tas détritus/gi, "Rubbish Heap"],
        [/Piège à loups/gi, "Pits"],
        [/Dynamitage/gi, "Bomb Factory"],
        [/Panique/gi, "Abject Panic"],
        [/La Bamba/gi, "Frat House"],
        [/Pluie bénite/gi, "Holy Raincloud"],
        [/Mirage Spirituel/gi, "Spirit Mirage"],
        [/Guillotine à Bokor/gi, "Sword of Bokor"],
        [/Catapulte Primitive/gi, "Catapult"],
        [/Tour des gardiens/gi, "Guard Tower"],
        [/Tour des éclaireurs/gi, "Crows’ Nest"],
        [/Tour de guet/gi, "Watchtower"],
        [/Fausse Ville/gi, "False Town"],
        [/Robinetterie/gi, "Faucet"],
        [/Champs d'épouvantails/gi, "Scarecrows"],
        [/Cage à viande/gi, "Meat Locker"],
        [/Dictature des héros/gi, "People’s Court"],
        [/Habitations fortifiées/gi, "Fortifications"],
        [/Déchardes de bois/gi, "Wood Dump"],
        [/Ferraillerie/gi, "Metal Dump"],
        [/Enclos/gi, "Animal Dump"],
        [/Décharge organisée/gi, "Free Dump"],
        [/Décharge piégée/gi, "Weapons Dump"],
        [/Appâts odorants/gi, "Food Dump"],
        [/Décharge blindée/gi, "Defence Dump"],
        [/Décharge humidifiée/gi, "Dump Upgrade"],
        [/Décharge publique/gi, "Garbage Dump"],
        [/Phare/gi, "Lighthouse"],
        [/Autel de la rédemption/gi, "Altar"],
        [/Feu de joie/gi, "Bonfire"],
        [/Réacteur soviétique/gi, "Reactor"],
        [/Labyrinthe/gi, "Labyrinth"],
        [/Dernière chance/gi, "All or Nothing"],
        [/PMV géant/gi, "Giant BRD"],
        [/Grande roue de Grostas/gi, "Wonder Wheel"],
        [/Feux d'artifices/gi, "Firework Foray"],
        [/Statue du Corbeau/gi, "Crow Statue"],
        [/Cinéma/gi, "Cinema"],
        [/Roquettes/gi, "Air Strike"],
        [/Fondations/gi, "Foundations"],
        [/Portail/gi, "Portal Lock"],
        [/Lit de camp/gi, "Camp Bed"],
        [/Tente/gi, "Tent"],
        [/Taudis/gi, "Hovel"],
        [/Baraque/gi, "Shack"],
        [/Maison/gi, "House"],
        [/Maison clôturée/gi, "Safehouse"],
        [/Abri fortifié/gi, "Stronghold"],
        [/Bunker/gi, "Nuclear Bunker"],
        [/Château/gi, "Palace"],
        [/Gros rideau/gi, "Large Curtain"],
        [/Cuisine/gi, "Kitchen"],
        [/Coin sieste/gi, "Siesta Time™"],
        [/Verrou/gi, "Lock"],
        [/Rangements/gi, "More Storage"],
        [/Renforts/gi, "Reinforcements"],
        [/en défense/gi, "Defence"],
        [/Chemin de ronde/gi, "Battlements"],
        [/Hamâme/gi, "Hammam"],
        [/Barrières/gi, "Wooden Fencing"],
        [/Clôture/gi, "Fence"],
        [/Éclairage public/gi, "Public lights"],

    ];
    var numTerms = replaceArry.length;
    var txtWalker = document.createTreeWalker (
        document.body,
        NodeFilter.SHOW_TEXT,
        {acceptNode: function (node) {
            //-- Skip whitespace-only nodes
            if (node.nodeValue.trim()){
                return NodeFilter.FILTER_ACCEPT;
            }

            return NodeFilter.FILTER_SKIP;
        }
        },
        false
    );
    var txtNode = null;

    while (txtNode = txtWalker.nextNode () ) {
        var oldTxt = txtNode.nodeValue;

        for (var J = 0; J < numTerms; J++) {
            oldTxt = oldTxt.replace (replaceArry[J][0], replaceArry[J][1]);
        }
        txtNode.nodeValue = oldTxt;
    }
})();
