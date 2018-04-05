function MainCtrl($scope, $http) {
    //agregando

    //eliminando
    $scope.remove = function (index) {
        $scope.pets.splice(index, 1);
    };

    //hora del json y buscar
    $scope.pets = [{
            "categoria": "Boa caninus",
            "categoriaId": 26,
            "url": "http://dummyimage.com/185x128.jpg/ff4444/ffffff",
            "name": "Boa, emerald green tree",
            "id": "60-403-6987",
            "tag": "Indigo"
        },
        {
            "categoria": "Cynictis penicillata",
            "categoriaId": 63,
            "url": "http://dummyimage.com/185x170.jpg/5fa2dd/ffffff",
            "name": "Mongoose, yellow",
            "id": "67-703-1342",
            "tag": "Purple"
        },
        {
            "categoria": "Pitangus sulphuratus",
            "categoriaId": 76,
            "url": "http://dummyimage.com/233x162.jpg/cc0000/ffffff",
            "name": "Kiskadee, great",
            "id": "57-098-6441",
            "tag": "Mauv"
        },
        {
            "categoria": "Halcyon smyrnesis",
            "categoriaId": 50,
            "url": "http://dummyimage.com/222x105.jpg/5fa2dd/ffffff",
            "name": "White-throated kingfisher",
            "id": "61-997-3707",
            "tag": "Pink"
        },
        {
            "categoria": "Gyps bengalensis",
            "categoriaId": 51,
            "url": "http://dummyimage.com/222x245.jpg/cc0000/ffffff",
            "name": "Bengal vulture",
            "id": "24-161-3848",
            "tag": "Maroon"
        },
        {
            "categoria": "Chlidonias leucopterus",
            "categoriaId": 96,
            "url": "http://dummyimage.com/221x243.jpg/dddddd/000000",
            "name": "White-winged tern",
            "id": "63-684-5418",
            "tag": "Khaki"
        },
        {
            "categoria": "Chionis alba",
            "categoriaId": 56,
            "url": "http://dummyimage.com/216x144.jpg/ff4444/ffffff",
            "name": "Sheathbill, snowy",
            "id": "03-018-8578",
            "tag": "Red"
        },
        {
            "categoria": "Papilio canadensis",
            "categoriaId": 89,
            "url": "http://dummyimage.com/218x233.jpg/5fa2dd/ffffff",
            "name": "Canadian tiger swallowtail butterfly",
            "id": "79-534-2582",
            "tag": "Violet"
        },
        {
            "categoria": "Milvago chimachima",
            "categoriaId": 8,
            "url": "http://dummyimage.com/117x108.jpg/cc0000/ffffff",
            "name": "Caracara, yellow-headed",
            "id": "20-040-2868",
            "tag": "Crimson"
        },
        {
            "categoria": "Terrapene carolina",
            "categoriaId": 32,
            "url": "http://dummyimage.com/202x238.jpg/dddddd/000000",
            "name": "Turtle, eastern box",
            "id": "09-320-7953",
            "tag": "Mauv"
        },
        {
            "categoria": "Tayassu pecari",
            "categoriaId": 96,
            "url": "http://dummyimage.com/194x138.jpg/cc0000/ffffff",
            "name": "White-lipped peccary",
            "id": "01-946-0974",
            "tag": "Violet"
        },
        {
            "categoria": "Chordeiles minor",
            "categoriaId": 12,
            "url": "http://dummyimage.com/155x205.jpg/5fa2dd/ffffff",
            "name": "Common nighthawk",
            "id": "83-341-4225",
            "tag": "Khaki"
        },
        {
            "categoria": "Eutamias minimus",
            "categoriaId": 14,
            "url": "http://dummyimage.com/110x154.jpg/dddddd/000000",
            "name": "Chipmunk, least",
            "id": "50-081-4155",
            "tag": "Red"
        },
        {
            "categoria": "Pseudalopex gymnocercus",
            "categoriaId": 5,
            "url": "http://dummyimage.com/125x104.jpg/cc0000/ffffff",
            "name": "Azara's zorro",
            "id": "20-995-9006",
            "tag": "Khaki"
        },
        {
            "categoria": "Halcyon smyrnesis",
            "categoriaId": 89,
            "url": "http://dummyimage.com/152x214.jpg/cc0000/ffffff",
            "name": "Kingfisher, white-throated",
            "id": "27-324-1140",
            "tag": "Teal"
        },
        {
            "categoria": "Cercatetus concinnus",
            "categoriaId": 6,
            "url": "http://dummyimage.com/140x181.jpg/dddddd/000000",
            "name": "Possum, western pygmy",
            "id": "41-606-8434",
            "tag": "Turquoise"
        },
        {
            "categoria": "Felis silvestris lybica",
            "categoriaId": 90,
            "url": "http://dummyimage.com/205x237.jpg/dddddd/000000",
            "name": "Cat, kaffir",
            "id": "49-107-1826",
            "tag": "Fuscia"
        },
        {
            "categoria": "Boa constrictor mexicana",
            "categoriaId": 98,
            "url": "http://dummyimage.com/122x157.jpg/cc0000/ffffff",
            "name": "Mexican boa",
            "id": "14-052-6997",
            "tag": "Indigo"
        },
        {
            "categoria": "Coluber constrictor",
            "categoriaId": 53,
            "url": "http://dummyimage.com/110x248.jpg/5fa2dd/ffffff",
            "name": "Snake, buttermilk",
            "id": "28-959-0013",
            "tag": "Fuscia"
        },
        {
            "categoria": "Lutra canadensis",
            "categoriaId": 18,
            "url": "http://dummyimage.com/200x194.jpg/5fa2dd/ffffff",
            "name": "Otter, canadian river",
            "id": "08-753-1665",
            "tag": "Puce"
        },
        {
            "categoria": "Phoenicopterus chilensis",
            "categoriaId": 66,
            "url": "http://dummyimage.com/219x158.jpg/ff4444/ffffff",
            "name": "Flamingo, chilean",
            "id": "96-982-8075",
            "tag": "Crimson"
        },
        {
            "categoria": "Lama guanicoe",
            "categoriaId": 31,
            "url": "http://dummyimage.com/115x147.jpg/5fa2dd/ffffff",
            "name": "Guanaco",
            "id": "06-938-2008",
            "tag": "Violet"
        },
        {
            "categoria": "Nectarinia chalybea",
            "categoriaId": 78,
            "url": "http://dummyimage.com/126x116.jpg/dddddd/000000",
            "name": "Sunbird, lesser double-collared",
            "id": "40-421-8892",
            "tag": "Yellow"
        },
        {
            "categoria": "Zalophus californicus",
            "categoriaId": 52,
            "url": "http://dummyimage.com/171x127.jpg/dddddd/000000",
            "name": "Lion, california sea",
            "id": "24-711-0568",
            "tag": "Crimson"
        },
        {
            "categoria": "Vulpes vulpes",
            "categoriaId": 34,
            "url": "http://dummyimage.com/108x239.jpg/5fa2dd/ffffff",
            "name": "North American red fox",
            "id": "19-204-9981",
            "tag": "Goldenrod"
        },
        {
            "categoria": "Sarcorhamphus papa",
            "categoriaId": 99,
            "url": "http://dummyimage.com/146x136.jpg/cc0000/ffffff",
            "name": "Vulture, king",
            "id": "23-195-5145",
            "tag": "Mauv"
        },
        {
            "categoria": "Felis silvestris lybica",
            "categoriaId": 64,
            "url": "http://dummyimage.com/239x125.jpg/5fa2dd/ffffff",
            "name": "European wild cat",
            "id": "80-032-6402",
            "tag": "Yellow"
        },
        {
            "categoria": "Cynictis penicillata",
            "categoriaId": 97,
            "url": "http://dummyimage.com/152x201.jpg/dddddd/000000",
            "name": "Meerkat, red",
            "id": "04-985-9799",
            "tag": "Violet"
        },
        {
            "categoria": "Estrilda erythronotos",
            "categoriaId": 69,
            "url": "http://dummyimage.com/118x123.jpg/dddddd/000000",
            "name": "Black-cheeked waxbill",
            "id": "94-565-9290",
            "tag": "Fuscia"
        },
        {
            "categoria": "Paroaria gularis",
            "categoriaId": 57,
            "url": "http://dummyimage.com/140x102.jpg/ff4444/ffffff",
            "name": "Black-throated cardinal",
            "id": "70-420-1668",
            "tag": "Purple"
        },
        {
            "categoria": "Phascogale calura",
            "categoriaId": 94,
            "url": "http://dummyimage.com/127x111.jpg/cc0000/ffffff",
            "name": "Wambenger, red-tailed",
            "id": "23-269-3378",
            "tag": "Khaki"
        },
        {
            "categoria": "Ardea cinerea",
            "categoriaId": 64,
            "url": "http://dummyimage.com/233x163.jpg/ff4444/ffffff",
            "name": "Heron, grey",
            "id": "29-781-4990",
            "tag": "Pink"
        },
        {
            "categoria": "Anthropoides paradisea",
            "categoriaId": 9,
            "url": "http://dummyimage.com/106x185.jpg/ff4444/ffffff",
            "name": "Crane, stanley",
            "id": "76-375-9316",
            "tag": "Maroon"
        },
        {
            "categoria": "Zenaida galapagoensis",
            "categoriaId": 28,
            "url": "http://dummyimage.com/180x122.jpg/cc0000/ffffff",
            "name": "Galapagos dove",
            "id": "07-674-9532",
            "tag": "Maroon"
        },
        {
            "categoria": "Panthera pardus",
            "categoriaId": 85,
            "url": "http://dummyimage.com/230x211.jpg/dddddd/000000",
            "name": "Leopard",
            "id": "43-241-9418",
            "tag": "Red"
        },
        {
            "categoria": "Mazama gouazoubira",
            "categoriaId": 38,
            "url": "http://dummyimage.com/125x181.jpg/ff4444/ffffff",
            "name": "Brown brocket",
            "id": "44-404-2749",
            "tag": "Orange"
        },
        {
            "categoria": "Oryx gazella",
            "categoriaId": 50,
            "url": "http://dummyimage.com/204x182.jpg/dddddd/000000",
            "name": "Oryx, beisa",
            "id": "25-537-7424",
            "tag": "Orange"
        },
        {
            "categoria": "Catharacta skua",
            "categoriaId": 11,
            "url": "http://dummyimage.com/112x133.jpg/cc0000/ffffff",
            "name": "Skua, great",
            "id": "09-965-9210",
            "tag": "Purple"
        },
        {
            "categoria": "Nyctea scandiaca",
            "categoriaId": 72,
            "url": "http://dummyimage.com/224x120.jpg/5fa2dd/ffffff",
            "name": "Owl, snowy",
            "id": "70-045-4646",
            "tag": "Red"
        },
        {
            "categoria": "Creagrus furcatus",
            "categoriaId": 86,
            "url": "http://dummyimage.com/156x184.jpg/dddddd/000000",
            "name": "Swallow-tail gull",
            "id": "89-834-1375",
            "tag": "Turquoise"
        },
        {
            "categoria": "Dicrostonyx groenlandicus",
            "categoriaId": 65,
            "url": "http://dummyimage.com/143x210.jpg/ff4444/ffffff",
            "name": "Lemming, collared",
            "id": "27-781-6443",
            "tag": "Crimson"
        },
        {
            "categoria": "Limnocorax flavirostra",
            "categoriaId": 69,
            "url": "http://dummyimage.com/158x227.jpg/dddddd/000000",
            "name": "African black crake",
            "id": "51-302-4946",
            "tag": "Violet"
        },
        {
            "categoria": "Plectopterus gambensis",
            "categoriaId": 89,
            "url": "http://dummyimage.com/123x189.jpg/5fa2dd/ffffff",
            "name": "Spur-winged goose",
            "id": "43-884-3465",
            "tag": "Red"
        },
        {
            "categoria": "Tayassu tajacu",
            "categoriaId": 51,
            "url": "http://dummyimage.com/204x129.jpg/cc0000/ffffff",
            "name": "Collared peccary",
            "id": "13-326-9461",
            "tag": "Pink"
        },
        {
            "categoria": "Suricata suricatta",
            "categoriaId": 9,
            "url": "http://dummyimage.com/234x250.jpg/cc0000/ffffff",
            "name": "Meerkat",
            "id": "71-068-5898",
            "tag": "Teal"
        },
        {
            "categoria": "Bucorvus leadbeateri",
            "categoriaId": 60,
            "url": "http://dummyimage.com/230x113.jpg/dddddd/000000",
            "name": "Hornbill, leadbeateri's ground",
            "id": "49-218-8310",
            "tag": "Teal"
        },
        {
            "categoria": "Manouria emys",
            "categoriaId": 57,
            "url": "http://dummyimage.com/220x124.jpg/cc0000/ffffff",
            "name": "Asian foreset tortoise",
            "id": "33-347-8889",
            "tag": "Teal"
        },
        {
            "categoria": "Physignathus cocincinus",
            "categoriaId": 17,
            "url": "http://dummyimage.com/177x209.jpg/cc0000/ffffff",
            "name": "Asian water dragon",
            "id": "27-550-3373",
            "tag": "Blue"
        },
        {
            "categoria": "Eunectes sp.",
            "categoriaId": 35,
            "url": "http://dummyimage.com/117x240.jpg/cc0000/ffffff",
            "name": "Anaconda (unidentified)",
            "id": "48-237-8130",
            "tag": "Goldenrod"
        },
        {
            "categoria": "Otaria flavescens",
            "categoriaId": 22,
            "url": "http://dummyimage.com/211x106.jpg/cc0000/ffffff",
            "name": "South American sea lion",
            "id": "50-402-2574",
            "tag": "Aquamarine"
        },
        {
            "categoria": "Paradoxurus hermaphroditus",
            "categoriaId": 90,
            "url": "http://dummyimage.com/119x218.jpg/dddddd/000000",
            "name": "Cat, toddy",
            "id": "95-390-3774",
            "tag": "Pink"
        },
        {
            "categoria": "Pteronura brasiliensis",
            "categoriaId": 43,
            "url": "http://dummyimage.com/250x164.jpg/ff4444/ffffff",
            "name": "Giant otter",
            "id": "04-050-9424",
            "tag": "Goldenrod"
        },
        {
            "categoria": "Colobus guerza",
            "categoriaId": 41,
            "url": "http://dummyimage.com/158x103.jpg/5fa2dd/ffffff",
            "name": "Guerza",
            "id": "90-482-8581",
            "tag": "Fuscia"
        },
        {
            "categoria": "Streptopelia senegalensis",
            "categoriaId": 68,
            "url": "http://dummyimage.com/234x219.jpg/5fa2dd/ffffff",
            "name": "Dove, laughing",
            "id": "67-555-3381",
            "tag": "Crimson"
        },
        {
            "categoria": "Colobus guerza",
            "categoriaId": 14,
            "url": "http://dummyimage.com/204x210.jpg/ff4444/ffffff",
            "name": "Black and white colobus",
            "id": "27-927-6884",
            "tag": "Crimson"
        },
        {
            "categoria": "Terrapene carolina",
            "categoriaId": 91,
            "url": "http://dummyimage.com/233x144.jpg/dddddd/000000",
            "name": "Eastern box turtle",
            "id": "19-360-6003",
            "tag": "Turquoise"
        },
        {
            "categoria": "Tamiasciurus hudsonicus",
            "categoriaId": 16,
            "url": "http://dummyimage.com/175x227.jpg/cc0000/ffffff",
            "name": "Squirrel, red",
            "id": "64-561-1644",
            "tag": "Aquamarine"
        },
        {
            "categoria": "Paradoxurus hermaphroditus",
            "categoriaId": 92,
            "url": "http://dummyimage.com/158x127.jpg/cc0000/ffffff",
            "name": "Cat, toddy",
            "id": "35-702-7436",
            "tag": "Turquoise"
        },
        {
            "categoria": "Elephas maximus bengalensis",
            "categoriaId": 65,
            "url": "http://dummyimage.com/112x196.jpg/5fa2dd/ffffff",
            "name": "Asian elephant",
            "id": "58-061-8177",
            "tag": "Purple"
        },
        {
            "categoria": "Cereopsis novaehollandiae",
            "categoriaId": 98,
            "url": "http://dummyimage.com/163x148.jpg/5fa2dd/ffffff",
            "name": "Cereopsis goose",
            "id": "85-376-1194",
            "tag": "Yellow"
        },
        {
            "categoria": "Francolinus swainsonii",
            "categoriaId": 15,
            "url": "http://dummyimage.com/156x161.jpg/ff4444/ffffff",
            "name": "Francolin, swainson's",
            "id": "63-248-1824",
            "tag": "Puce"
        },
        {
            "categoria": "Equus burchelli",
            "categoriaId": 61,
            "url": "http://dummyimage.com/124x133.jpg/cc0000/ffffff",
            "name": "Common zebra",
            "id": "47-082-4798",
            "tag": "Orange"
        },
        {
            "categoria": "Aquila chrysaetos",
            "categoriaId": 70,
            "url": "http://dummyimage.com/117x204.jpg/cc0000/ffffff",
            "name": "Eagle, golden",
            "id": "23-025-6405",
            "tag": "Teal"
        },
        {
            "categoria": "Crotalus adamanteus",
            "categoriaId": 47,
            "url": "http://dummyimage.com/121x156.jpg/dddddd/000000",
            "name": "Eastern diamondback rattlesnake",
            "id": "47-470-2641",
            "tag": "Purple"
        },
        {
            "categoria": "Varanus salvator",
            "categoriaId": 2,
            "url": "http://dummyimage.com/167x125.jpg/dddddd/000000",
            "name": "Two-banded monitor",
            "id": "15-844-5908",
            "tag": "Teal"
        },
        {
            "categoria": "Herpestes javanicus",
            "categoriaId": 80,
            "url": "http://dummyimage.com/212x221.jpg/dddddd/000000",
            "name": "Mongoose, small indian",
            "id": "80-708-6636",
            "tag": "Aquamarine"
        },
        {
            "categoria": "Priodontes maximus",
            "categoriaId": 50,
            "url": "http://dummyimage.com/231x237.jpg/dddddd/000000",
            "name": "Armadillo, giant",
            "id": "38-967-5161",
            "tag": "Turquoise"
        },
        {
            "categoria": "Ploceus rubiginosus",
            "categoriaId": 74,
            "url": "http://dummyimage.com/200x121.jpg/5fa2dd/ffffff",
            "name": "Chestnut weaver",
            "id": "49-684-5488",
            "tag": "Fuscia"
        },
        {
            "categoria": "Pelecans onocratalus",
            "categoriaId": 62,
            "url": "http://dummyimage.com/209x195.jpg/dddddd/000000",
            "name": "Eastern white pelican",
            "id": "21-369-0728",
            "tag": "Khaki"
        },
        {
            "categoria": "Globicephala melas",
            "categoriaId": 31,
            "url": "http://dummyimage.com/151x223.jpg/5fa2dd/ffffff",
            "name": "Whale, long-finned pilot",
            "id": "39-404-1400",
            "tag": "Maroon"
        },
        {
            "categoria": "Streptopelia senegalensis",
            "categoriaId": 75,
            "url": "http://dummyimage.com/109x161.jpg/5fa2dd/ffffff",
            "name": "Dove, laughing",
            "id": "34-759-7785",
            "tag": "Orange"
        },
        {
            "categoria": "Gymnorhina tibicen",
            "categoriaId": 3,
            "url": "http://dummyimage.com/163x144.jpg/5fa2dd/ffffff",
            "name": "Magpie, australian",
            "id": "14-430-0195",
            "tag": "Aquamarine"
        },
        {
            "categoria": "Coluber constrictor",
            "categoriaId": 57,
            "url": "http://dummyimage.com/174x186.jpg/ff4444/ffffff",
            "name": "Snake, buttermilk",
            "id": "06-030-3022",
            "tag": "Violet"
        },
        {
            "categoria": "Delphinus delphis",
            "categoriaId": 72,
            "url": "http://dummyimage.com/222x182.jpg/cc0000/ffffff",
            "name": "Dolphin, common",
            "id": "00-413-1101",
            "tag": "Khaki"
        },
        {
            "categoria": "Ursus americanus",
            "categoriaId": 91,
            "url": "http://dummyimage.com/141x119.jpg/cc0000/ffffff",
            "name": "American black bear",
            "id": "04-118-6490",
            "tag": "Red"
        },
        {
            "categoria": "Macropus eugenii",
            "categoriaId": 80,
            "url": "http://dummyimage.com/158x247.jpg/cc0000/ffffff",
            "name": "Dama wallaby",
            "id": "06-116-3516",
            "tag": "Crimson"
        },
        {
            "categoria": "Scolopax minor",
            "categoriaId": 76,
            "url": "http://dummyimage.com/184x222.jpg/cc0000/ffffff",
            "name": "American woodcock",
            "id": "44-443-3684",
            "tag": "Teal"
        },
        {
            "categoria": "Varanus sp.",
            "categoriaId": 82,
            "url": "http://dummyimage.com/128x117.jpg/cc0000/ffffff",
            "name": "Ground legaan",
            "id": "34-362-7087",
            "tag": "Fuscia"
        },
        {
            "categoria": "Macropus rufus",
            "categoriaId": 89,
            "url": "http://dummyimage.com/118x104.jpg/cc0000/ffffff",
            "name": "Kangaroo, red",
            "id": "22-621-2302",
            "tag": "Goldenrod"
        },
        {
            "categoria": "Libellula quadrimaculata",
            "categoriaId": 2,
            "url": "http://dummyimage.com/122x111.jpg/5fa2dd/ffffff",
            "name": "Dragonfly, russian",
            "id": "30-182-0781",
            "tag": "Indigo"
        },
        {
            "categoria": "Canis aureus",
            "categoriaId": 2,
            "url": "http://dummyimage.com/152x162.jpg/5fa2dd/ffffff",
            "name": "Asiatic jackal",
            "id": "35-934-5852",
            "tag": "Khaki"
        },
        {
            "categoria": "Coracias caudata",
            "categoriaId": 59,
            "url": "http://dummyimage.com/131x235.jpg/dddddd/000000",
            "name": "Lilac-breasted roller",
            "id": "81-012-1932",
            "tag": "Blue"
        },
        {
            "categoria": "Mazama gouazoubira",
            "categoriaId": 60,
            "url": "http://dummyimage.com/206x190.jpg/ff4444/ffffff",
            "name": "Deer, savannah",
            "id": "57-616-8462",
            "tag": "Goldenrod"
        },
        {
            "categoria": "Cynomys ludovicianus",
            "categoriaId": 82,
            "url": "http://dummyimage.com/234x143.jpg/dddddd/000000",
            "name": "Black-tailed prairie dog",
            "id": "22-793-9107",
            "tag": "Red"
        },
        {
            "categoria": "Cabassous sp.",
            "categoriaId": 57,
            "url": "http://dummyimage.com/214x180.jpg/5fa2dd/ffffff",
            "name": "Eleven-banded armadillo (unidentified)",
            "id": "75-058-3379",
            "tag": "Aquamarine"
        },
        {
            "categoria": "Platalea leucordia",
            "categoriaId": 100,
            "url": "http://dummyimage.com/119x193.jpg/5fa2dd/ffffff",
            "name": "European spoonbill",
            "id": "52-666-9089",
            "tag": "Orange"
        },
        {
            "categoria": "Cacatua tenuirostris",
            "categoriaId": 6,
            "url": "http://dummyimage.com/202x233.jpg/ff4444/ffffff",
            "name": "Cockatoo, long-billed",
            "id": "67-311-3531",
            "tag": "Red"
        },
        {
            "categoria": "Cervus canadensis",
            "categoriaId": 44,
            "url": "http://dummyimage.com/231x126.jpg/cc0000/ffffff",
            "name": "Elk, Wapiti",
            "id": "20-500-7914",
            "tag": "Orange"
        },
        {
            "categoria": "Centrocercus urophasianus",
            "categoriaId": 72,
            "url": "http://dummyimage.com/175x140.jpg/5fa2dd/ffffff",
            "name": "Grouse, sage",
            "id": "10-026-6298",
            "tag": "Indigo"
        },
        {
            "categoria": "Dusicyon thous",
            "categoriaId": 41,
            "url": "http://dummyimage.com/105x182.jpg/cc0000/ffffff",
            "name": "Fox, savanna",
            "id": "49-383-0217",
            "tag": "Red"
        },
        {
            "categoria": "Anthropoides paradisea",
            "categoriaId": 28,
            "url": "http://dummyimage.com/101x235.jpg/dddddd/000000",
            "name": "Blue crane",
            "id": "23-986-8297",
            "tag": "Aquamarine"
        },
        {
            "categoria": "Gymnorhina tibicen",
            "categoriaId": 40,
            "url": "http://dummyimage.com/121x172.jpg/cc0000/ffffff",
            "name": "Australian magpie",
            "id": "31-815-9301",
            "tag": "Maroon"
        },
        {
            "categoria": "Megaderma spasma",
            "categoriaId": 28,
            "url": "http://dummyimage.com/110x102.jpg/dddddd/000000",
            "name": "Asian false vampire bat",
            "id": "32-565-9436",
            "tag": "Orange"
        },
        {
            "categoria": "Dasyprocta leporina",
            "categoriaId": 96,
            "url": "http://dummyimage.com/174x181.jpg/5fa2dd/ffffff",
            "name": "Agouti",
            "id": "18-566-0425",
            "tag": "Pink"
        },
        {
            "categoria": "Mungos mungo",
            "categoriaId": 21,
            "url": "http://dummyimage.com/172x110.jpg/5fa2dd/ffffff",
            "name": "Banded mongoose",
            "id": "70-201-5788",
            "tag": "Blue"
        },
        {
            "categoria": "Pterocles gutturalis",
            "categoriaId": 67,
            "url": "http://dummyimage.com/134x145.jpg/5fa2dd/ffffff",
            "name": "Sandgrouse, yellow-throated",
            "id": "56-696-9875",
            "tag": "Blue"
        },
        {
            "categoria": "Stercorarius longicausus",
            "categoriaId": 100,
            "url": "http://dummyimage.com/172x102.jpg/5fa2dd/ffffff",
            "name": "Long-tailed skua",
            "id": "13-146-0736",
            "tag": "Yellow"
        },
        {
            "categoria": "Cebus apella",
            "categoriaId": 89,
            "url": "http://dummyimage.com/206x137.jpg/ff4444/ffffff",
            "name": "Black-capped capuchin",
            "id": "08-427-1140",
            "tag": "Green"
        },
        {
            "categoria": "Scolopax minor",
            "categoriaId": 73,
            "url": "http://dummyimage.com/180x237.jpg/cc0000/ffffff",
            "name": "Woodcock, american",
            "id": "52-888-2256",
            "tag": "Red"
        },
        {
            "categoria": "Litrocranius walleri",
            "categoriaId": 74,
            "url": "http://dummyimage.com/228x219.jpg/dddddd/000000",
            "name": "Gerenuk",
            "id": "66-908-8287",
            "tag": "Pink"
        }
    ];




};