// ==UserScript==
// @name         Translate GM
// @version      0.6
// @description  Translate GM
// @author		 Phost
// @updateURL	 https://github.com/2phost/mh-gh-translator/raw/main/translate_gm.user.js
// @downloadURL  https://github.com/2phost/mh-gh-translator/raw/main/translate_gm.user.js
// @match        https://gest-hordes2.eragaming.fr/*
// @grant        none
// ==/UserScript==

(function() {
    var replaceArry = [
        [/Ration d'eau/gi, "Water Ration"],
        [/Pile/gi, "Battery"],
        [/Boîte de conserve/gi, "Can"],
        [/Boîte de conserve ouverte/gi, "Open Can"],
        [/Lance-Pile 1-PDTG (chargé)/gi, "Battery Launcher 1-ITF (loaded)"],
        [/Taser d'auto-défense/gi, "Taser"],
        [/Aqua-Splash (vide)/gi, "Aqua-Splash (empty)"],
        [/Batteur électrique (chargé)/gi, "Electric Whisk (loaded)"],
        [/Tronçonneuse/gi, "Chainsaw (loaded)"],
        [/Tondeuse à gazon/gi, "Lawnmower"],
        [/Clé à Molette/gi, "Adjustable Spanner"],
        [/Tournevis/gi, "Screwdriver"],
        [/Grand Bâton Sec/gi, "Staff"],
        [/Couteau à dents/gi, "Serrated Knife"],
        [/Coupe-Coupe/gi, "Machete"],
        [/Canif dérisoire/gi, "Pathetic Penknife"],
        [/Couteau suisse/gi, "Swiss Army Knife"],
        [/Cutter/gi, "Box Cutter"],
        [/Caddie/gi, "Shopping Trolley"],
        [/Ouvre-boîtes/gi, "Can Opener"],
        [/Sac supplémentaire/gi, "Manbag"],
        [/Boîte d'allumettes/gi, "Box of Matches"],
        [/Piqure de calmant/gi, "Valium Shot"],
        [/Rocking Chair/gi, "Rocking Chair"],
        [/Livre poussiéreux/gi, "Dusty Book"],
        [/Matelas/gi, "Mattress"],
        [/Lampe de chevet éteinte/gi, "Bedside Lamp"],
        [/Tapis persan/gi, "Persian Rug"],
        [/Petite chaîne Hi-Fi en panne/gi, "Mini HI-Fi (Broken)"],
        [/Chaîne de Porte + cadenas/gi, "Padlock and Chain"],
        [/Paillasson/gi, "Doormat"],
        [/Dés/gi, "Dice"],
        [/Moteur/gi, "Engine"],
        [/Courroie/gi, "Belt"],
        [/Poignée de vis et écrous/gi, "Handful of nuts and bolts"],
        [/Poule/gi, "Chicken"],
        [/Cochon malodorant/gi, "Stinking Pig"],
        [/Rat géant/gi, "Giant Rat"],
        [/Chien hargneux (alias Pepette)/gi, "Guard Dog"],
        [/Gros chat mignon/gi, "Fat Cat"],
        [/Serpent de 2 mètres/gi, "Huge Snake (Ophiophagus trouser)"],
        [/Petit manche vibrant (chargé)/gi, "Pocket Vibrator (charged)"],
        [/Stéroïdes Anabolisants/gi, "Anabolic Steroids"],
        [/Steak appétissant/gi, "Tasty-looking Steak"],
        [/Viande indéfinissable/gi, "Unspecified Meat"],
        [/Toile de tente/gi, "Groundsheet"],
        [/Sac super-pratique/gi, "Ultra-Rucksack"],
        [/Jerrycan/gi, "Full Jerrycan"],
        [/Planche tordue/gi, "Twisted Plank"],
        [/Ferraille/gi, "Wrought Iron"],
        [/Bombe à eau/gi, "Water Bomb"],
        [/Plaque de tôle/gi, "Sheet Metal"],
        [/Pompe à Jerrycan (démontée)/gi, "Jerrycan Gun (unattached)"],
        [/Bandage rudimentaire/gi, "Bandage"],
        [/Bière/gi, "Green Beer Bottle"],
        [/Pompe à Jerrycan (vide)/gi, "Jerrycan Gun (empty)"],
        [/Vidéoprojecteur/gi, "Video Projector"],
        [/Explosifs bruts/gi, "Semtex"],
        [/Viande humaine/gi, "Human Flesh"],
        [/Sac plastique/gi, "Plastic Bag"],
        [/Bombe à eau explosive/gi, "Exploding Water Bomb"],
        [/Sac plastique + explosif/gi, "Plastic Bag and Semtex"],
        [/Tronçonneuse incomplète/gi, "Incomplete Chainsaw"],
        [/Batteur électrique incomplet/gi, "Electric Whisk (incomplete)"],
        [/Rustine/gi, "Duct Tape"],
        [/Tondeuse démontée/gi, "Dismantled Mower"],
        [/Tube de cuivre/gi, "Copper Pipe"],
        [/Caddie bancal/gi, "Wonky Shopping Trolley"],
        [/Ceinture à poches/gi, "Utility Belt"],
        [/Twinoïde 500mg/gi, "Twinoid 500mg"],
        [/Boîte en métal/gi, "Metal Chest"],
        [/Gros coffre en métal/gi, "Large Metal Chest"],
        [/Caisse de matériel/gi, "Toolbox"],
        [/Lampe de chevet (Allumée)/gi, "Bedside Lamp (on)"],
        [/Petite chaîne HiFi (Allumée)/gi, "Mini Hi-Fi (on)"],
        [/Produits Pharmaceutiques/gi, "Pharmaceutical Products"],
        [/Fragments de tôle/gi, "Sheet Metal (parts)"],
        [/« Debout-les-morts »/gi, "“Wake The Dead”"],
        [/Café brûlant/gi, "Bloody Hot Coffee"],
        [/Cafetière/gi, "Cafetière"],
        [/Cafetière incomplète/gi, "Incomplete Cafetière"],
        [/Composant électronique/gi, "Electronic component"],
        [/Affaires d'un citoyen/gi, "Citizen's Welcome Pack"],
        [/Hydratone 100mg/gi, "Hydratone 100mg"],
        [/Radio K7 (éteint)/gi, "Radio Cassette Player (no battery)"],
        [/Radio K7/gi, "Radio Cassette Player"],
        [/Cyanure/gi, "Cyanide"],
        [/Vieille porte/gi, "Old Door"],
        [/Légume suspect/gi, "Suspicious-looking Vegetable"],
        [/Kit de bricolage (abimé)/gi, "Repair Kit (damaged)"],
        [/Kit de bricolage/gi, "Repair Kit"],
        [/Pistolet à eau (vide)/gi, "Water Pistol (empty)"],
        [/Aqua-Splash (3 charges)/gi, "Aqua-Splash (3 shots)"],
        [/Aqua-Splash (2 charges)/gi, "Aqua-Splash (2 shots)"],
        [/Aqua-Splash (1 charge)/gi, "Aqua-Splash (1 shot)"],
        [/Batteur électrique (éteint)/gi, "Electric Whisk (no battery)"],
        [/Tronçonneuse (éteinte)/gi, "Chainsaw (empty)"],
        [/Lance-Pile 1-PDTG (vide)/gi, "Battery Launcher 1-ITF (empty)"],
        [/Taser d'auto-défense (éteint)/gi, "Taser (incomplete)"],
        [/Sport-élec (éteint)/gi, "EMS System (incomplete)"],
        [/Sport-élec (chargé)/gi, "EMS System (charged)"],
        [/Devastator (vide)/gi, "Devastator (empty)"],
        [/Devastator (chargé)/gi, "Devastator (loaded)"],
        [/Devastator incomplet/gi, "Devastator (incomplete)"],
        [/Balise « Radius »/gi, "Radius Radar Beacon"],
        [/Fusée éclairante/gi, "Spy Flare"],
        [/Pompe à jerrycan (prête)/gi, "Jerrycan Gun (ready)"],
        [/Chaise Ektörp-Gluten/gi, "Ektorp-Gluten Chair"],
        [/Revolver (vide)/gi, "Revolver (unloaded)"],
        [/Fusil d'assault (vide)/gi, "Assault Rifle (unloaded)"],
        [/Détonateur compact/gi, "Compact detonator"],
        [/Sac de ciment/gi, "Bag of Cement"],
        [/Pavés de béton informes/gi, "Unshaped Concrete Blocks"],
        [/Médicament sans étiquette/gi, "Unlabelled Drug"],
        [/Paracétoïde 7g/gi, "Paracetoid 7g"],
        [/Désherbant Ness-Quick/gi, "Ness-Quick Weedkiller"],
        [/Caisse de nourriture/gi, "Food Parcel"],
        [/Doggy-bag/gi, "Doggy Bag"],
        [/Paquet de chips molles/gi, "Packet of Soft Crisps"],
        [/Napolitains moisis/gi, "Mouldy Neapolitan"],
        [/Chewing-gums séchés/gi, "Dried Chewing Gum"],
        [/Petits beurres rances/gi, "Rancid Jaffa Cakes"],
        [/Ailerons de poulet entamés/gi, "Half-eaten Chicken Wings"],
        [/Pim's périmé/gi, "Out-of-Date Biscuits"],
        [/Biscuit fade/gi, "Stale Tart"],
        [/Jambon-beurre moisi/gi, "Mouldy Ham Sandwich"],
        [/Nouilles chinoises/gi, "Chinese Noodles"],
        [/Epices fortes/gi, "Strong Spices"],
        [/Nouilles chinoises épicées/gi, "Spicy Chinese Noodles"],
        [/Jeu de cartes incomplet/gi, "Incomplete Deck of Cards"],
        [/Boîte de jeu/gi, "Box of Games"],
        [/Aqua-Splash (démonté)/gi, "Aqua-Splash (incomplete)"],
        [/Petit manche vibrant (déchargé)/gi, "Pocket Vibrator (incomplete)"],
        [/Os charnu/gi, "Meaty Bone"],
        [/Os humain fêlé/gi, "Broken Human Bone"],
        [/Poutre rafistolée/gi, "Patchwork Beam"],
        [/Structures métalliques/gi, "Metal Support"],
        [/Débris métalliques/gi, "Scrap Metal"],
        [/Souche de bois pourrie/gi, "Rotting Log"],
        [/Scie à métaux/gi, "Hacksaw"],
        [/Buche en bon état/gi, "Quality Log"],
        [/Appareil électronique en panne/gi, "Broken Electronic Device"],
        [/Meuble en kit/gi, "Flatpacked Furniture"],
        [/Scie à métaux abimée/gi, "Broken Hacksaw"],
        [/Mécanisme/gi, "Mechanism"],
        [/Tréteau/gi, "Trestle"],
        [/Table Järpen/gi, "Järpen Table"],
        [/Micropur effervescent/gi, "Water Purifying Tablets"],
        [/Melon d'intestin/gi, "Intestine Melon"],
        [/Poudre-comète brute/gi, "Flash Powder"],
        [/Bombe Pulvérine/gi, "Flash Grenade"],
        [/Teddy n'Ours/gi, "Teddy Bear"],
        [/Morceau de caisse/gi, "Crate Lid"],
        [/Plaque de bois solide/gi, "Solid Wooden Board"],
        [/Liasse de billets/gi, "Wad of Cash"],
        [/Outils en vrac/gi, "Tool Bag"],
        [/Balise Radius Mark II (déchargé)/gi, "Radius Mark II (incomplete)"],
        [/Balise Radius Mark II/gi, "Radius Mark II"],
        [/Brico'Facile/gi, "Kwik-fix"],
        [/Moteur incomplet/gi, "Engine (incomplete)"],
        [/Vieille machine à laver/gi, "Old Washing Machine"],
        [/Four cancérigène/gi, "Carcinogenic Oven"],
        [/Réfrigérateur d'étudiant/gi, "Beer Fridge"],
        [/Une lettre sans adresse/gi, "A letter with no address"],
        [/Feuille raccornie/gi, "Scroll"],
        [/Manuel d'instructions/gi, "Instruction Manual"],
        [/Carnet illisible/gi, "Illegible Notebook"],
        [/Album photo/gi, "Photo Album"],
        [/Pile de feuilles/gi, "Stack of Papers"],
        [/Grosse chaîne rouillée/gi, "Rusty Chain"],
        [/Plat fait-maison douteux/gi, "Dodgy Homemade Dish"],
        [/Bon plat fait-maison/gi, "Tasty Homemade Dish"],
        [/Cantine en fer/gi, "Iron Chest"],
        [/Cartons/gi, "Boxes"],
        [/Barricades à clouer/gi, "Makeshift Barricade"],
        [/Une enveloppe/gi, "Envelope"],
        [/Un colis/gi, "Parcel"],
        [/Morceau de grillage/gi, "Wire Mesh"],
        [/Pistolet à eau (3 charges)/gi, "Water Pistol (3 shots)"],
        [/Pistolet à eau (2 charges)/gi, "Water Pistol (2 shots)"],
        [/Pistolet à eau (1 charge)/gi, "Water Pistol (1 shot)"],
        [/Aqua-Splash (5 charges)/gi, "Aqua-Splash (5 shots)"],
        [/Aqua-Splash (4 charges)/gi, "Aqua-Splash (4 shots)"],
        [/Paquet de cigarettes entamé/gi, "Opened packet of Cigarettes"],
        [/Calibrateur PDTT Mark II/gi, "PUTA Mark II Calibrator"],
        [/Lance-pile Mark II (vide)/gi, "Battery Launcher Mk. II (empty)"],
        [/Lance-pile Mark II (chargé)/gi, "Battery Launcher Mk. II (loaded)"],
        [/Pile broyée/gi, "Crushed Battery"],
        [/Carton de matériaux (3)/gi, "Construction Kit (3)"],
        [/Carton de matériaux (2)/gi, "Construction Kit (2)"],
        [/Carton de matériaux (1)/gi, "Construction Kit (1)"],
        [/Portière de voiture/gi, "Car Door"],
        [/Portière de voiture incomplète/gi, "Car Door (incomplete)"],
        [/Fiole de poison/gi, "Vial of Poison"],
        [/Produit corrosif/gi, "Corrosive Liquid"],
        [/Réserves d'un citoyen avisé/gi, "Shrewd Citizen's Stash"],
        [/Colis postal/gi, "Gift Parcel"],
        [/Boîte-déjeuner/gi, "Armageddon Lunch Box"],
        [/Poignée de bonbons/gi, "Handful of Sweets"],
        [/Morceau de contreplaqué/gi, "Sheet of Plywood"],
        [/Torche/gi, "Torch"],
        [/Torche consumée/gi, "Burnt out Torch"],
        [/Chamallows séchés/gi, "Dried Marshmallows"],
        [/Chamallows calcinés/gi, "Burnt Marshmallows"],
        [/Unité centrale/gi, "PC Base Unit"],
        [/Coffre-fort/gi, "Safe"],
        [/Une encyclopédie/gi, "Encyclopedia"],
        [/Bonbonne d'eau (vide)/gi, "Water Cooler Bottle (Empty)"],
        [/Bonbonne d'eau (1 ration)/gi, "Water Cooler Bottle (1 Ration)"],
        [/Bonbonne d'eau (2 rations)/gi, "Water Cooler Bottle (2 Rations)"],
        [/Bonbonne d'eau (3 rations)/gi, "Water Cooler Bottle (3 Rations)"],
        [/Betapropine 5mg périmée/gi, "Betapropine 5mg (expired)"],
        [/Betapropine 5mg/gi, "Betapropine 5mg"],
        [/Charognardes/gi, "Fleshrooms"],
        [/Boule de pâtes visqueuse/gi, "Sticky Pastry Ball"],
        [/Lambeau de chair/gi, "Pound of Flesh"],
        [/Bombe macabre/gi, "Grisly Bomb"],
        [/Substance épaisse/gi, "Thick Solution"],
        [/Purée de charognardes/gi, "Fleshroom Puree"],
        [/Eau croupie/gi, "Stagnant Water Can"],
        [/Eau croupie purifiée/gi, "Purified Stagnant Water"],
        [/Note d'un citoyen banni/gi, "Banned Citizen's Note"],
        [/Pansement ensanglanté/gi, "Bloody Dressing"],
        [/Teddy n'Ours maudit/gi, "Cursed Cuddly Toy"],
        [/Steak de sciure/gi, "Sawdust Steak"],
        [/Veste rouge usée/gi, "Second-hand Red Coat"],
        [/Pantalon rouge déchiré/gi, "Ripped Red Trousers"],
        [/Bonnet rouge malodorant/gi, "Foul-smelling Red Hat"],
        [/Costume malodorant d'une autre époque/gi, "Foul-smelling Vintage Suit"],
        [/Téléphone portable/gi, "Mobile Phone"],
        [/Pelures de peau/gi, "Festering Flesh"],
        [/Maglite Pif'Gadget (éteinte)/gi, "Novelty Torch (off)"],
        [/Maglite Pif'Gadget (1 charge)/gi, "Novelty Torch (1 charge)"],
        [/Maglite Pif'Gadget (2 charges)/gi, "Novelty Torch (2 charges)"],
        [/Cadavre d'un voyageur/gi, "Traveller's Corpse"],
        [/Cadavre rongé/gi, "Gnawed Corpse"],
        [/Fumigène « Senteur Sapin »/gi, "« Pine Fresh » Smoke Bomb"],
        [/Boule de sable/gi, "Sand Ball"],
        [/Plan de chantier (commun)/gi, "Construction Blueprint (common)"],
        [/Plan de chantier (inhabituel)/gi, "Construction Blueprint (uncommon)"],
        [/Plan de chantier (rare)/gi, "Construction Blueprint (rare)"],
        [/Plan de chantier (très rare !)/gi, "Construction Blueprint (very rare!)"],
        [/Coffre d'architecte/gi, "Architect's Chest"],
        [/Coffre d'architecte scellé/gi, "Sealed Architect's Chest"],
        [/Œuf/gi, "Egg"],
        [/Pomme/gi, "Apple"],
        [/Pamplemousse explosif/gi, "Exploding Grapefruit"],
        [/Sacoche usée/gi, "Worn Leather Bag"],
        [/Clé magnétique/gi, "Magnetic Key"],
        [/Clé à percussion/gi, "Bump Key"],
        [/Décapsuleur/gi, "Bottle Opener"],
        [/Empreinte de clé magnétique/gi, "Magnetic Key Blank"],
        [/Empreinte de clé à percussion/gi, "Bump Key Blank"],
        [/Sérum pour Goule/gi, "Ghoul Vaccine"],
        [/Plan de chantier (inhabituel)/gi, "Hotel Blueprint (uncommon)"],
        [/Plan de chantier (rare)/gi, "Hotel Blueprint (rare)"],
        [/Plan de chantier (très rare !)/gi, "Hotel Blueprint (very rare!)"],
        [/Plan de chantier (inhabituel)/gi, "Bunker Blueprint (uncommon)"],
        [/Plan de chantier (rare)/gi, "Bunker Blueprint (rare)"],
        [/Plan de chantier (très rare !)/gi, "Bunker Blueprint (very rare!)"],
        [/Plan de chantier (inhabituel)/gi, "Hospital Blueprint (uncommon)"],
        [/Plan de chantier (rare)/gi, "Hospital Blueprint (rare)"],
        [/Plan de chantier (très rare !)/gi, "Hospital Blueprint (very rare!)"],
        [/Âme errante/gi, "Lost Soul"],
        [/Âme forte/gi, "Powerful Soul"],
        [/Âme faible/gi, "Weak Soul"],
        [/Chope de bière/gi, "Beer mug"],
        [/Bretzel/gi, "Pretzel"],
        [/Teckel/gi, "Dachshund"],
        [/Lance-pieu/gi, "Stake Launcher"],
        [/Kalachnik'eau/gi, "Kalashni-Splash"],
        [/Bureau monté à la rache/gi, "Hastily-built Desk"],
        [/Distributeur vide/gi, "Empty Vending Machine"],
        [/Renne du papa noyel/gi, "Santa's Reindeer"],
        [/Oeuf de Pâques/gi, "Easter Egg"],
        [/Badge de Shérif/gi, "ANZAC Badge"],
        [/Kalachnik'eau (vide)/gi, "Kalashni-Splash (empty)"],
        [/Bobine de fil de fer/gi, "Wire Reel"],
        [/Bidon d'huile vide/gi, "Empty Oil Can"],
        [/Lentille convexe/gi, "Convex Lens"],
        [/Petit chaton furieux (partiellement digéré)/gi, "Furious Kitten (partially digested)"],
        [/Mine Antipersonnelle/gi, "Claymore Mine"],
        [/Diode laser/gi, "Laser Diode"],
        [/Guitare artisanale/gi, "Makeshift Guitar"],
        [/LSD/gi, "LSD"],
        [/Pointeur laser brûlant (4 charges)/gi, "Burning Laser Pointer (4 charges)"],
        [/Pointeur laser brûlant (3 charges)/gi, "Burning Laser Pointer (3 charges)"],
        [/Pointeur laser brûlant (2 charges)/gi, "Burning Laser Pointer (2 charges)"],
        [/Pointeur laser brûlant (1 charge)/gi, "Burning Laser Pointer (1 charge)"],
        [/Pointeur laser brûlant déchargé/gi, "Burning Laser Pointer (Empty)"],
        [/Téléscope/gi, "Telescope"],
        [/Paillasson piégé/gi, "Impersonal Exploding Doormat"],
        [/Figurine de Chuck/gi, "Chuck Figurine"],
        [/Livre zen miniature/gi, "Little Book of Calm"],
        [/Sac d'herbe fraîche/gi, "Bag of Damp Grass"],
        [/Claviceps Purpurea/gi, "Ergot Fungus"],
        [/Cidre Claviceps Artisanal/gi, "Ergot Homebrew"],
        [/Chaine Hifi maudite/gi, "Cursed HiFi"],
        [/CD de Phil Collins/gi, "Phil Collins CD"],
        [/Boules Quies/gi, "Earplugs"],
        [/Bâton cassé/gi, "Broken Staff"],
        [/CD de Britney Spears/gi, "Britney Spears CD"],
        [/Compilation du King/gi, "Best of The King CD"],
        [/Chaîne HI-FI Rock n'Roll/gi, "Rock n Roll HiFi"],
        [/Chaîne Hi-Fi défensive/gi, "Anti-personnel HiFi"],
        [/Boîte de Schrödinger/gi, "Schrödinger's Box"],
        [/Discours rassurant multicoloré/gi, "Psychadelic Spiritual Counsel"],
        [/Serpent agonisant/gi, "Fat Serpent"],
        [/Caisse surprise (3)/gi, "Christmas Present (3)"],
        [/Caisse surprise (2)/gi, "Christmas Present (2)"],
        [/Caisse surprise (1)/gi, "Christmas Present (1)"],
        [/Jus de mirabelle suspect/gi, "Suspicious looking plum juice"],
        [/Une étiquette/gi, "Label"],
        [/Uniforme de citoyen/gi, "Town Uniform"],
        [/Uniforme de citoyen sale/gi, "Dirty Uniform"],
        [/Tenue de camouflage/gi, "Camouflage Vest"],
        [/Camouflage (inactif !)/gi, "Camouflage Vest (not equipped!)"],
        [/Petite Pelle/gi, "Small Spade"],
        [/Bichon maltais à 3 pattes/gi, "Three-legged Labradoodle"],
        [/Bichon maltais shooté/gi, "Drugged Labradoodle"],
        [/Bichon maltais fatigué/gi, "Tired Labradoodle"],
        [/Livre de survie/gi, "Survival Book"],
        [/Clé à molette de compet'/gi, "Handyman's Toolbelt"],
        [/Bouclier Anti-émeutes/gi, "Riot Shield"],
        [/Masque Voodoo/gi, "Voodoo Mask"],
        [/Retour du Héros/gi, "Heroic Return"],
        [/Trouvaille/gi, "Seeker"],
        [/Uppercut sauvage/gi, "Vicious Uppercut"],
        [/Second souffle/gi, "Second Lease of Life"],
        [/Vaincre la mort/gi, "Cheat Death"],
        [/Sauvetage/gi, "Rescue"],
        [/Actions héroïques/gi, "Heroic Actions"],
        [/Objet de métier (ne peut être posé)/gi, "Professional tool (cannot be dropped)"],
        [/Objet encombrant/gi, "Heavy object"],
        [/Aménagement de maison/gi, "Home decoration"],
        [/Objet de défense/gi, "Defense Object"],
        [/Arme/gi, "Weapon"],
        [/Poudre Super-Fuzz/gi, "Super-Fuzz Powder"],
        [/Tube de lancement Floush/gi, "Firework Launch Tube"],
        [/Caisse de feux d'artifice/gi, "Box of Fireworks"],
        [/Citrouille allumée/gi, "Lit Pumpkin"],
        [/Citrouille molle sculptée/gi, "Carved Soft Pumpkin"],
        [/Guirlande de Corbeaux/gi, "Crow garland"],
        [/Ressources/gi, "Resources"],
        [/Provisions/gi, "Food"],
        [/Pharmacie/gi, "Pharmacy"],
        [/Expédition/gi, "Expedition"],
        [/Divers/gi, "Miscellaneous"],
        [/Aménagements/gi, "Facilities"],
        [/Défense/gi, "Defences"],
        [/Armurerie/gi, "Armoury"],
        [/Conteneurs et boîtes/gi, "Containers and boxes"],
        [/Cassé/gi, "Broken"],
        [/Attaque et défense/gi, "Attack and Defense"],
        [/Cuisiner/gi, "Cook"],
        [/Potion chamanique/gi, "Mystic Potion"],
        [/Vodka Marinostov/gi, "Vodka Marinostov"],
        [/Trèfle/gi, "Clubs"],
        [/Pique/gi, "Spades"],
        [/Cœur/gi, "Hearts"],
        [/Carreau/gi, "Diamonds"],
        [/Valet/gi, "Jack"],
        [/Dame/gi, "Queen"],
        [/Roi/gi, "King"],
        [/Arme de veille/gi, "Guard weapon"],
        [/Pts/gi, "Pts"],
        [/Se soigner/gi, "Heal"],
        [/Organiser les défenses/gi, "Organize defence"],
        [/Purifier/gi, "Clean"],
        [/Nettoyer/gi, "Clean"],
        [/Empreinte de décapsuleur/gi, "Bottle Opener Blank"],
        [/Appareil photo d'avant-guerre/gi, "Pre-war camera"],
        [/La banque de la ville/gi, "Send to the Bank"],
        [/Utiliser/gi, "Use"],
        [/Trouvaille (améliorée)/gi, "Lucky Find"],
        [/Mon coffre personnel/gi, "Send to the Chest"],
        [/Âme torturée/gi, "Tortured Soul"],
        [/Ouvrir (1 PC)/gi, "Open (1 CP)"],
        [/Elfe corbeau/gi, "Crow elf"],
        [/Bûche de Noël/gi, "Chocolate log"],
        [/Costume de Lutin Vert/gi, "Green Imp Suit"],
        [/Débris méconnaissables/gi, "Unrecognisable Remains"],
        [/Poignée de cartouches/gi, "Handful of Bullets"],
        [/Passage en Force/gi, "Break Through"],
        [/Bonbon de Noël/gi, "Christmas candy"],
        [/Colis de Noël/gi, "Gift Parcel"],
        [/Gros colis postal/gi, "Large Gift Parcel"],
        [/Citrouille molle/gi, "Soft Pumpkin"],
        [/Crosse de Hockey/gi, "Hurling stick"],
        [/Guiness/gi, "Winness"],
        [/Suintement cervical noir/gi, "Black Neck Ooze"],
        [/Vous êtes maintenant camouflé(e)./gi, "You are now camouflaged."],
        [/Témoin de l'Armageddon/gi, "Armageddon Witness"],
        [/Gloire/gi, "Glory"],
        [/Réveil-Hurleur/gi, "Screaming Alarm Clock"],
        [/La pile est tombée un peu plus loin./gi, "The battery landed a bit further away."],
        [/Améliore la défense et empêche les vols/gi, "Improves defenses and prevents theft"],
        [/Augmente la défense/gi, "Increases defense"],
        [/Empêche les vols/gi, "Prevents thefts"],
        [/Laissez-passer/gi, "Admission ticket"],
        [/Toxine/gi, "Toxin"],

		[/Douves/gi, "Great Moat"],
        [/Grand Fossé/gi, "Great Pit"],
        [/Muraille rasoir/gi, "Grater"],
        [/Fosse à Pieux/gi, "Spiked Pit"],
        [/Appâts/gi, "Bait"],
        [/Barbelés/gi, "Barbed Wire"],
        [/Remparts avancés/gi, "Wall Upgrade v2"],
        [/Grogro mur/gi, "Überwall"],
        [/Muraille à pointes/gi, "Spiked Wall"],
        [/Troisième couche/gi, "Third Wall"],
        [/Seconde couche/gi, "Inner Wall"],
        [/Bétonnade/gi, "Concrete Reinforcement"],
        [/Muraille évolutive/gi, "Evolutive Wall"],
        [/Poutres renfort/gi, "Metal Patches"],
        [/Râpe à zombies/gi, "Zombie Grater"],
        [/Oubliettes/gi, "Old-school traps"],
        [/Palissade/gi, "Small Fence"],
        [/Contre-plaqué/gi, "Plywood"],
        [/Cloison épaisse/gi, "Armour Plating v3"],
        [/Bastion/gi, "Extrawall"],
        [/Cloison en bois/gi, "Armour Plating"],
        [/Cloison métallique/gi, "Armour Plating v2"],
        [/Mur Savonné/gi, "Slip 'n' Slide"],
        [/Neurotoxine/gi, "Gas Gun"],
        [/Projection acide/gi, "Acid Spray"],
        [/Pulvérisateur/gi, "Vaporiser"],
        [/Muraille/gi, "Wall Upgrade v1"],
        [/Champ mines eau/gi, "Mines"],
        [/Filtre/gi, "Water Filter"],
        [/Purificateur/gi, "Water Purifier"],
        [/Fertilisation sauvage/gi, "Fertilizer"],
        [/Pamplemousses explosifs/gi, "Grapeboom"],
        [/Potager/gi, "Vegetable Plot"],
        [/Projet Eden/gi, "Eden Project"],
        [/Foreuse puits/gi, "Drilling Rig"],
        [/Vaporisateur/gi, "Boiling Fog"],
        [/Sanibroyeur/gi, "Saniflow Macerator"],
        [/Arroseurs auto/gi, "Automatic Sprinkler"],
        [/Douches/gi, "Shower"],
        [/Réseau hydraulique/gi, "Hydraulic Network"],
        [/Aqua tourelles/gi, "Water Turrets"],
        [/Percée/gi, "Water Catcher"],
        [/Pluvio-canons/gi, "Mist Spray"],
        [/Caniveaux/gi, "Sluice"],
        [/Rid'eau/gi, "Decon Shower"],
        [/Roquette Foreuse/gi, "Divining Rocket"],
        [/Détecteur à eau/gi, "Divining Rods"],
        [/Pommier de l'Outre-Monde/gi, "Apple Tree"],
        [/Pompe/gi, "Pump"],
        [/Crémato-Cue/gi, "Cremato-Cue"],
        [/Boucherie/gi, "Butcher"],
        [/Fixations de défenses/gi, "Defensive Focus"],
        [/Canon à briques/gi, "Rock Cannon"],
        [/Perforeuse/gi, "Railgun"],
        [/Lance-Grenailles/gi, "Plate Gun"],
        [/Canon brutal/gi, "Brutal Cannon"],
        [/Monticules canons/gi, "Cannon Mounds"],
        [/Tourniquet/gi, "War Mill"],
        [/Manufacture/gi, "Factory"],
        [/Scies hurlantes/gi, "Screaming Saws"],
        [/Architectoire/gi, "Architect’s Study"],
        [/Registre chantier/gi, "Building Registry"],
        [/Potence/gi, "Gallows"],
        [/Cantine à bois/gi, "Small Café"],
        [/Cercueils sur ressort/gi, "Coffin Catapult"],
        [/Cimetière cadenassé/gi, "Small Cemetary"],
        [/Poulailler/gi, "Henhouse"],
        [/Abattoir/gi, "Abbatoir"],
        [/Supports défensifs/gi, "Defensive Thinktank"],
        [/Cantine centrale/gi, "Central Cafeteria"],
        [/Quartiers circulaires/gi, "Community Involvement"],
        [/Stratégies citoyennes/gi, "Builder’s Merchant"],
        [/Infirmerie/gi, "Infirmary"],
        [/Laboratoire central/gi, "Central Laboratory"],
        [/Atelier/gi, "Workshop"],
        [/Scanner/gi, "Scanner"],
        [/Carte améliorée/gi, "Upgraded Map"],
        [/Planificateur/gi, "Predictor"],
        [/Scrutateur/gi, "Searchtower"],
        [/Champs piégés/gi, "Spikes"],
        [/Renforts d'urgence/gi, "Wood Plating"],
        [/Guérilla/gi, "Guerilla Traps"],
        [/Mont pointu/gi, "Mount Killaman-Jaro"],
        [/Tas détritus/gi, "Rubbish Heap"],
        [/Piège à loups/gi, "Pits"],
        [/Dynamitage/gi, "Bomb Factory"],
        [/Panique/gi, "Abject Panic"],
        [/La Bamba/gi, "Frat House"],
        [/Pluie bénite/gi, "Holy Raincloud"],
        [/Poupée Vaudou XXL/gi, "XXL Voodoo Doll"],
        [/Mirage Spirituel/gi, "Spirit Mirage"],
        [/Guillotine à Bokor/gi, "Sword of Bokor"],
        [/Dispositifs d'urgence/gi, "Emergency Supplies"],
        [/Catapulte calibrée/gi, "Upgraded Catapult"],
        [/Catapulte Primitive/gi, "Catapult"],
        [/Armurerie/gi, "Miniature Armory"],
        [/Magasin suédois/gi, "Swedish Workshop"],
        [/Tourelle lance-eau/gi, "Shooting Gallery"],
        [/Lance-bête/gi, "Small Trebuchet"],
        [/Tour des gardiens/gi, "Guard Tower"],
        [/Tour des éclaireurs/gi, "Crows’ Nest"],
        [/Tour de guet/gi, "Watchtower"],
        [/Derrick/gi, "Mechanical Pump"],
        [/Fausse Ville/gi, "False Town"],
        [/Robinetterie/gi, "Faucet"],
        [/Grand déménagement/gi, "The Big Rebuild"],
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
        [/Château de sable/gi, "Giant Sandcastle"],
        [/Feu de joie/gi, "Bonfire"],
        [/Bureau des esclavagistes/gi, "Ministry of Slavery"],
        [/Réacteur soviétique/gi, "Reactor"],
        [/Labyrinthe/gi, "Labyrinth"],
        [/Dernière chance/gi, "All or Nothing"],
        [/PMV géant/gi, "Giant BRD"],
        [/Grande roue de Grostas/gi, "Wonder Wheel"],
        [/Feux d'artifices/gi, "Firework Foray"],
        [/Statue du Corbeau/gi, "Crow Statue"],
        [/Cinéma/gi, "Cinema"],
        [/Roquettes/gi, "Air Strike"],
        [/Montgolfière/gi, "Hot Air Balloon"],
        [/Foreuse améliorée/gi, "No Holes Barred"],
        [/Fondations/gi, "Foundations"],
        [/Blindage d'entrée/gi, "Reinforced Gates"],
        [/Piston calibré/gi, "Last-Minute Lock"],
        [/Piston verrou/gi, "Automatic Piston Lock"],
        [/Conduite d'aération/gi, "Ventilation System"],
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
        [/Cave laboratoire/gi, "Home Laboratory"],
        [/Cuisine/gi, "Kitchen"],
        [/Alarme rudimentaire/gi, "Rudimentary Alarm"],
        [/Coin sieste/gi, "Siesta Time™"],
        [/Verrou/gi, "Lock"],
        [/Rangements/gi, "More Storage"],
        [/Renforts/gi, "Reinforcements"],
        [/en défense/gi, "Defence"],
        [/Chemin de ronde/gi, "Battlements"],
        [/Hamâme/gi, "Hammam"],
        [/Construction temporaire !/gi, "Temporary Building!"],
        [/Barrières/gi, "Wooden Fencing"],
        [/Clôture/gi, "Fence"],
        [/Croix en Chocolat/gi, "Chocolate Cross"],
        [/Eclairage public/gi, "Public lights"],
        [/Hôpital abandonné/gi, "Abandonned Hospital"],
        [/Hôtel abandonné/gi, "Abandoned Hotel"],
        [/Nuclear Bunker abandonné/gi, "Abandoned Bunker"],
		[/Carte/gi, "Map"],
		[/Sauvegarder/gi, "Save"],
		[/Annuler modification/gi, "Cancel"],
		[/Vous êtes actuellement dans la/gi, "You are currently in the"],
        [/Plans de chantier dans les ruines/gi, "ERuin Blueprints"],
        [/Plans de chantiers/gi, "Blueprints"],
        [/Plans de chantier/gi, "Blueprints"],
        [/Mise à jour/gi, "Update"],
        [/Mis à jour par/gi, "Updated by"],
        [/Ville/gi, "Town"],
        [/Citoyens/gi, 'Citizens'],
        [/Bâtiments/gi, 'Ruins'],
        [/jour/gi, 'day'],
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
