//color de fons #ECDDBE que es rgb(236,221,190)
//color vermell #C1322C que es rgb(193,50,44) 
//color groc #F1BB00 que es rgb(241,187,0)
//color blau #0268BD que es rgb(2,104,189)

//Tarda 7 segons justos en fer la animació completa
let myFont;
let y = 0;
let x = 0;
let z = 0;
let size = 0;
let i = 0;
let j;

let doneBauhaus = false;
let doneAuss = false;
let doneJuli = false;
let doneYear = false;

let Opcio1 = false;
let Opcio2 = false;
let Opcio3 = false;

let mythreecolors;
let allrelatedcolors_r;
let allrelatedcolors_y;
let allrelatedcolors_b;

function preload(){
    myFont = loadFont('NovaSquare.ttf');
}

function setup() {
    createCanvas(620, 700);
    background(236, 221, 190);
    frameRate(10);
    textFont(myFont);
    y = 0;
    x = 0;
    z = 0;
    size = 0;
    i = random(3);
    Opcio = random(3);

    doneBauhaus = false;
    doneAuss = false;
    doneJuli = false;
    doneYear = false;

    mythreecolors = [];
    mythreecolors.push(color(193, 50, 44));
    mythreecolors.push(color(241, 187, 0));
    mythreecolors.push(color(2, 104, 189));

    allrelatedcolors_r = [];
    allrelatedcolors_y = [];
    allrelatedcolors_b = [];

    //Inserto dins el vector tots els colors relacionats amb el vermell:
    allrelatedcolors_r.push(color(37, 9, 2));
    allrelatedcolors_r.push(color(56, 4, 14));
    allrelatedcolors_r.push(color(100, 13, 20));
    allrelatedcolors_r.push(color(128, 14, 19));
    allrelatedcolors_r.push(color(201, 123, 132));
    allrelatedcolors_r.push(color(125, 46, 104));
    allrelatedcolors_r.push(color(37, 19, 81));
    allrelatedcolors_r.push(color(4, 9, 38));
    allrelatedcolors_r.push(color(240, 162, 2));
    allrelatedcolors_r.push(color(241, 136, 5));
    allrelatedcolors_r.push(color(14, 20, 40));
    allrelatedcolors_r.push(color(123, 158, 137));
    allrelatedcolors_r.push(color(86, 65, 56));
    allrelatedcolors_r.push(color(46, 134, 171));
    allrelatedcolors_r.push(color(246, 245, 174));
    allrelatedcolors_r.push(color(245, 247, 73));
    allrelatedcolors_r.push(color(249, 220, 92));
    allrelatedcolors_r.push(color(194, 234, 189));
    allrelatedcolors_r.push(color(1, 25, 54));
    allrelatedcolors_r.push(color(70, 83, 98));
    allrelatedcolors_r.push(color(226, 113, 29));
    allrelatedcolors_r.push(color(225, 149, 5));
    allrelatedcolors_r.push(color(255, 182, 39));
    allrelatedcolors_r.push(color(255, 201, 113));
    allrelatedcolors_r.push(color(33, 17, 3));
    allrelatedcolors_r.push(color(61, 19, 8));
    allrelatedcolors_r.push(color(123, 13, 30));
    allrelatedcolors_r.push(color(248, 229, 238));
    allrelatedcolors_r.push(color(3, 25, 39));
    allrelatedcolors_r.push(color(157, 209, 241));
    allrelatedcolors_r.push(color(80, 138, 168));
    allrelatedcolors_r.push(color(200, 224, 244));
    allrelatedcolors_r.push(color(45, 45, 42));
    allrelatedcolors_r.push(color(76, 76, 71));
    allrelatedcolors_r.push(color(132, 143, 165));
    allrelatedcolors_r.push(color(229, 220, 197));
    allrelatedcolors_r.push(color(23, 126, 137));
    allrelatedcolors_r.push(color(8, 76, 97));
    allrelatedcolors_r.push(color(255, 200, 87));
    allrelatedcolors_r.push(color(50, 48, 49));
    allrelatedcolors_r.push(color(67, 100, 54));
    allrelatedcolors_r.push(color(214, 245, 153));
    allrelatedcolors_r.push(color(210, 255, 40));
    allrelatedcolors_r.push(color(66, 2, 23));
    allrelatedcolors_r.push(color(40, 61, 59));
    allrelatedcolors_r.push(color(186, 193, 184));
    allrelatedcolors_r.push(color(88, 164, 176));
    allrelatedcolors_r.push(color(12, 124, 89));
    allrelatedcolors_r.push(color(43, 48, 58));
    allrelatedcolors_r.push(color(204, 201, 161));
    allrelatedcolors_r.push(color(240, 255, 206));
    allrelatedcolors_r.push(color(76, 35, 10));
    allrelatedcolors_r.push(color(40, 0, 4));
    allrelatedcolors_r.push(color(0, 107, 166));
    allrelatedcolors_r.push(color(4, 150, 255));
    allrelatedcolors_r.push(color(255, 188, 66));
    allrelatedcolors_r.push(color(143, 45, 86));
    allrelatedcolors_r.push(color(41, 51, 92));
    allrelatedcolors_r.push(color(243, 167, 18));
    allrelatedcolors_r.push(color(168, 198, 134));
    allrelatedcolors_r.push(color(102, 155, 188));
    allrelatedcolors_r.push(color(255, 224, 181));
    allrelatedcolors_r.push(color(138, 101, 82));
    allrelatedcolors_r.push(color(70, 37, 33));
    allrelatedcolors_r.push(color(189, 178, 70));
    allrelatedcolors_r.push(color(255, 34, 12));
    allrelatedcolors_r.push(color(155, 120, 116));
    allrelatedcolors_r.push(color(102, 99, 112));
    allrelatedcolors_r.push(color(28, 31, 51));
    allrelatedcolors_r.push(color(252, 247, 248));

    //Inserto dins el vector tots els colors relacionats amb el blau:
    allrelatedcolors_b.push(color(143, 201, 58));
    allrelatedcolors_b.push(color(228, 204, 55));
    allrelatedcolors_b.push(color(225, 131, 53));
    allrelatedcolors_b.push(color(1, 142, 66));
    allrelatedcolors_b.push(color(237, 174, 73));
    allrelatedcolors_b.push(color(209, 73, 91));
    allrelatedcolors_b.push(color(0, 61, 91));
    allrelatedcolors_b.push(color(1, 142, 66));
    allrelatedcolors_b.push(color(27, 23, 37));
    allrelatedcolors_b.push(color(83, 75, 98));
    allrelatedcolors_b.push(color(164, 153, 179));
    allrelatedcolors_b.push(color(208, 188, 213));
    allrelatedcolors_b.push(color(143, 191, 224));
    allrelatedcolors_b.push(color(124, 119, 185));
    allrelatedcolors_b.push(color(11, 201, 205));
    allrelatedcolors_b.push(color(38, 38, 38));
    allrelatedcolors_b.push(color(126, 163, 204));
    allrelatedcolors_b.push(color(204, 173, 143));
    allrelatedcolors_b.push(color(231, 235, 144));
    allrelatedcolors_b.push(color(230, 175, 46));
    allrelatedcolors_b.push(color(99, 43, 48));
    allrelatedcolors_b.push(color(33, 41, 92));
    allrelatedcolors_b.push(color(27, 59, 111));
    allrelatedcolors_b.push(color(6, 90, 130));
    allrelatedcolors_b.push(color(158, 179, 194));
    allrelatedcolors_b.push(color(193, 154, 183));
    allrelatedcolors_b.push(color(156, 149, 220));
    allrelatedcolors_b.push(color(11, 113, 137));
    allrelatedcolors_b.push(color(23, 10, 28));
    allrelatedcolors_b.push(color(220, 220, 221));
    allrelatedcolors_b.push(color(197, 195, 198));
    allrelatedcolors_b.push(color(70, 73, 76));
    allrelatedcolors_b.push(color(76, 92, 104));
    allrelatedcolors_b.push(color(87, 184, 255));
    allrelatedcolors_b.push(color(182, 109, 13));
    allrelatedcolors_b.push(color(251, 177, 60));
    allrelatedcolors_b.push(color(254, 104, 71));
    allrelatedcolors_b.push(color(150, 52, 132));
    allrelatedcolors_b.push(color(96, 175, 255));
    allrelatedcolors_b.push(color(40, 194, 255));
    allrelatedcolors_b.push(color(42, 245, 255));
    allrelatedcolors_b.push(color(62, 146, 204));
    allrelatedcolors_b.push(color(19, 41, 61));
    allrelatedcolors_b.push(color(22, 50, 79));
    allrelatedcolors_b.push(color(24, 67, 90));
    allrelatedcolors_b.push(color(172, 128, 160));
    allrelatedcolors_b.push(color(137, 170, 230));
    allrelatedcolors_b.push(color(54, 133, 181));
    allrelatedcolors_b.push(color(6, 24, 38));
    allrelatedcolors_b.push(color(18, 44, 52));
    allrelatedcolors_b.push(color(34, 72, 112));
    allrelatedcolors_b.push(color(78, 165, 217));
    allrelatedcolors_b.push(color(68, 207, 203));
    allrelatedcolors_b.push(color(163, 231, 252));
    allrelatedcolors_b.push(color(38, 196, 133));
    allrelatedcolors_b.push(color(85, 58, 65));
    allrelatedcolors_b.push(color(47, 6, 1));
    allrelatedcolors_b.push(color(80, 81, 79));
    allrelatedcolors_b.push(color(203, 212, 194));
    allrelatedcolors_b.push(color(255, 252, 255));
    allrelatedcolors_b.push(color(195, 178, 153));
    allrelatedcolors_b.push(color(2, 47, 64));
    allrelatedcolors_b.push(color(56, 174, 204));
    allrelatedcolors_b.push(color(24, 52, 70));
    allrelatedcolors_b.push(color(195, 247, 58));
    allrelatedcolors_b.push(color(149, 224, 108));
    allrelatedcolors_b.push(color(104, 182, 132));
    allrelatedcolors_b.push(color(28, 16, 24));
    allrelatedcolors_b.push(color(241, 153, 83));
    allrelatedcolors_b.push(color(196, 115, 53));

    //Inserto dins el vector tots els colors relacionats amb el groc:
    allrelatedcolors_y.push(color(197, 123, 87));
    allrelatedcolors_y.push(color(152, 71, 62));
    allrelatedcolors_y.push(color(7, 9, 15));
    allrelatedcolors_y.push(color(156, 175, 183));
    allrelatedcolors_y.push(color(230, 127, 13));
    allrelatedcolors_y.push(color(254, 78, 0));
    allrelatedcolors_y.push(color(233, 25, 15));
    allrelatedcolors_y.push(color(255, 15, 128));
    allrelatedcolors_y.push(color(228, 87, 46));
    allrelatedcolors_y.push(color(41, 51, 92));
    allrelatedcolors_y.push(color(168, 198, 134));
    allrelatedcolors_y.push(color(102, 155, 188));
    allrelatedcolors_y.push(color(34, 9, 1));
    allrelatedcolors_y.push(color(98, 23, 8));
    allrelatedcolors_y.push(color(148, 27, 12));
    allrelatedcolors_y.push(color(188, 57, 8));
    allrelatedcolors_y.push(color(255, 147, 79));
    allrelatedcolors_y.push(color(145, 245, 173));
    allrelatedcolors_y.push(color(255, 255, 255));
    allrelatedcolors_y.push(color(191, 203, 194));
    allrelatedcolors_y.push(color(241, 136, 5));
    allrelatedcolors_y.push(color(217, 93, 57));
    allrelatedcolors_y.push(color(32, 44, 89));
    allrelatedcolors_y.push(color(88, 31, 24));
    allrelatedcolors_y.push(color(101, 13, 27));
    allrelatedcolors_y.push(color(130, 50, 0));
    allrelatedcolors_y.push(color(155, 61, 18));
    allrelatedcolors_y.push(color(174, 142, 28));
    allrelatedcolors_y.push(color(9, 64, 116));
    allrelatedcolors_y.push(color(60, 105, 151));
    allrelatedcolors_y.push(color(90, 219, 255));
    allrelatedcolors_y.push(color(255, 221, 74));
    allrelatedcolors_y.push(color(25, 23, 22));
    allrelatedcolors_y.push(color(224, 226, 219));
    allrelatedcolors_y.push(color(61, 52, 139));
    allrelatedcolors_y.push(color(190, 183, 164));
    allrelatedcolors_y.push(color(68, 100, 173));
    allrelatedcolors_y.push(color(164, 176, 245));
    allrelatedcolors_y.push(color(125, 70, 0));
    allrelatedcolors_y.push(color(70, 105, 149));
    allrelatedcolors_y.push(color(8, 103, 136));
    allrelatedcolors_y.push(color(7, 160, 195));
    allrelatedcolors_y.push(color(255, 241, 208));
    allrelatedcolors_y.push(color(221, 28, 26));
    allrelatedcolors_y.push(color(77, 157, 224));
    allrelatedcolors_y.push(color(3, 71, 50));
    allrelatedcolors_y.push(color(0, 129, 72));
    allrelatedcolors_y.push(color(239, 41, 23));
    allrelatedcolors_y.push(color(119, 104, 174));
    allrelatedcolors_y.push(color(12, 9, 13));
    allrelatedcolors_y.push(color(224, 26, 79));
    allrelatedcolors_y.push(color(241, 89, 70));
    allrelatedcolors_y.push(color(83, 179, 203));
    allrelatedcolors_y.push(color(228, 87, 46));
    allrelatedcolors_y.push(color(23, 190, 187));
    allrelatedcolors_y.push(color(46, 40, 42));
    allrelatedcolors_y.push(color(118, 176, 65));
    allrelatedcolors_y.push(color(149, 25, 12));
    allrelatedcolors_y.push(color(97, 3, 69));
    allrelatedcolors_y.push(color(16, 126, 125));
    allrelatedcolors_y.push(color(4, 75, 127));
    allrelatedcolors_y.push(color(0, 110, 144));
    allrelatedcolors_y.push(color(173, 202, 214));
    allrelatedcolors_y.push(color(153, 194, 77));
    allrelatedcolors_y.push(color(65, 187, 217));
    allrelatedcolors_y.push(color(0, 38, 66));
    allrelatedcolors_y.push(color(132, 0, 50));
    allrelatedcolors_y.push(color(229, 218, 218));
    allrelatedcolors_y.push(color(2, 4, 15));
    allrelatedcolors_y.push(color(191, 26, 47));
}

function draw() {

    if (i <= 1) {
        if (y <= 70) {
            noStroke();

            lletres();

            if (y == 0 || y == 70) {
                fill(random(mythreecolors));
                rect(30 + y, 100 - y, 70, 70);
                fill(random(mythreecolors));
                rect(30 + y, 240 - y, 70, 70);
                fill(random(mythreecolors));
                rect(30 + y, 380 - y, 70, 70);
                fill(random(mythreecolors));
                rect(30 + y, 520 - y, 70, 70);

                fill(random(mythreecolors));
                rect(170 + y, 100 - y, 70, 70);
                fill(random(mythreecolors));
                rect(170 + y, 240 - y, 70, 70);
                fill(random(mythreecolors));
                rect(170 + y, 380 - y, 70, 70);
                fill(random(mythreecolors));
                rect(170 + y, 520 - y, 70, 70);

                fill(random(mythreecolors));
                rect(310 + y, 100 - y, 70, 70);
                fill(random(mythreecolors));
                rect(310 + y, 240 - y, 70, 70);
                fill(random(mythreecolors));
                rect(310 + y, 380 - y, 70, 70);
                fill(random(mythreecolors));
                rect(310 + y, 520 - y, 70, 70);

                fill(random(mythreecolors));
                rect(450 + y, 100 - y, 70, 70);
                fill(random(mythreecolors));
                rect(450 + y, 240 - y, 70, 70);
                fill(random(mythreecolors));
                rect(450 + y, 380 - y, 70, 70);
                fill(random(mythreecolors));
                rect(450 + y, 520 - y, 70, 70);
            }
            else {
                size = random(17, 70);
                fill(random(allrelatedcolors_r));
                rect(30 + y, 100 - y, size, size);
                size = random(17, 70);
                fill(random(allrelatedcolors_y));
                rect(30 + y, 240 - y, size, size);
                size = random(17, 70);
                fill(random(allrelatedcolors_b));
                rect(30 + y, 380 - y, size, size);
                size = random(17, 70);
                fill(random(allrelatedcolors_r));
                rect(30 + y, 520 - y, size, size);

                size = random(17, 70);
                fill(random(allrelatedcolors_y));
                rect(170 + y, 100 - y, size, size);
                size = random(17, 70);
                fill(random(allrelatedcolors_b));
                rect(170 + y, 240 - y, size, size);
                size = random(17, 70);
                fill(random(allrelatedcolors_r));
                rect(170 + y, 380 - y, size, size);
                size = random(17, 70);
                fill(random(allrelatedcolors_y));
                rect(170 + y, 520 - y, size, size);

                size = random(17, 70);
                fill(random(allrelatedcolors_b));
                rect(310 + y, 100 - y, size, size);
                size = random(17, 70);
                fill(random(allrelatedcolors_r));
                rect(310 + y, 240 - y, size, size);
                size = random(17, 70);
                fill(random(allrelatedcolors_y));
                rect(310 + y, 380 - y, size, size);
                size = random(17, 70);
                fill(random(allrelatedcolors_b));
                rect(310 + y, 520 - y, size, size);

                size = random(17, 70);
                fill(random(allrelatedcolors_r));
                rect(450 + y, 100 - y, size, size);
                size = random(17, 70);
                fill(random(allrelatedcolors_y));
                rect(450 + y, 240 - y, size, size);
                size = random(17, 70);
                fill(random(allrelatedcolors_b));
                rect(450 + y, 380 - y, size, size);
                size = random(17, 70);
                fill(random(allrelatedcolors_r));
                rect(450 + y, 520 - y, size, size);
            }

            y++;
        }
    } else if ((i > 1) && (i <= 2)) {
        if (Opcio <= 1 && Opcio1 == false) {
            if (y <= 70) {
                lletres();
                stroke(0, 0, 0);
                fill(random(allrelatedcolors_r));
                rect(30 + y, 100 - y, 70, 70);
                fill(random(allrelatedcolors_r));
                rect(30 + y, 520 - y, 70, 70);
                fill(random(allrelatedcolors_r));
                rect(170 + y, 380 - y, 70, 70);
                fill(random(allrelatedcolors_r));
                rect(310 + y, 240 - y, 70, 70);
                fill(random(allrelatedcolors_r));
                rect(450 + y, 100 - y, 70, 70);
                fill(random(allrelatedcolors_r));
                rect(450 + y, 520 - y, 70, 70);
                y++;
            }
            else {
                stroke(0, 0, 0);
                fill(193, 50, 44);
                rect(30 + y, 100 - y, 70, 70);
                fill(193, 50, 44);
                rect(30 + y, 520 - y, 70, 70);
                fill(193, 50, 44);
                rect(170 + y, 380 - y, 70, 70);
                fill(193, 50, 44);
                rect(310 + y, 240 - y, 70, 70);
                fill(193, 50, 44);
                rect(450 + y, 100 - y, 70, 70);
                fill(193, 50, 44);
                rect(450 + y, 520 - y, 70, 70);
                Opcio1 = true;
            }
        } else if ((Opcio > 1) && (Opcio <= 2) && Opcio2 == false) {
            if (x <= 70) {
                stroke(0, 0, 0);
                fill(random(allrelatedcolors_y));
                rect(30 + x, 240 - x, 70, 70);
                fill(random(allrelatedcolors_y));
                rect(170 + x, 100 - x, 70, 70);
                fill(random(allrelatedcolors_y));
                rect(170 + x, 520 - x, 70, 70);
                fill(random(allrelatedcolors_y));
                rect(310 + x, 380 - x, 70, 70);
                fill(random(allrelatedcolors_y));
                rect(450 + x, 240 - x, 70, 70);

                x++;
            } else {
                stroke(0, 0, 0);
                fill(241, 187, 0);
                rect(30 + x, 240 - x, 70, 70);
                fill(241, 187, 0);
                rect(170 + x, 100 - x, 70, 70);
                fill(241, 187, 0);
                rect(170 + x, 520 - x, 70, 70);
                fill(241, 187, 0);
                rect(310 + x, 380 - x, 70, 70);
                fill(241, 187, 0);
                rect(450 + x, 240 - x, 70, 70);
                Opcio2 = true;
            }
        } else if ((Opcio > 2) && (Opcio <= 3)&& Opcio3 == false){
            if (z <= 70) {
                stroke(0, 0, 0);
                fill(random(allrelatedcolors_b));
                rect(30 + z, 380 - z, 70, 70);
                fill(random(allrelatedcolors_b));
                rect(170 + z, 240 - z, 70, 70);
                fill(random(allrelatedcolors_b));
                rect(310 + z, 100 - z, 70, 70);
                fill(random(allrelatedcolors_b));
                rect(310 + z, 520 - z, 70, 70);
                fill(random(allrelatedcolors_b));
                rect(450 + z, 380 - z, 70, 70);
                z++;
            } else {
                stroke(0, 0, 0);
                fill(2, 104, 189);
                rect(30 + z, 380 - z, 70, 70);
                fill(2, 104, 189);
                rect(170 + z, 240 - z, 70, 70);
                fill(2, 104, 189);
                rect(310 + z, 100 - z, 70, 70);
                fill(2, 104, 189);
                rect(310 + z, 520 - z, 70, 70);
                fill(2, 104, 189);
                rect(450 + z, 380 - z, 70, 70);
                Opcio3 = true;
            }
        } else{
            if(Opcio1 == false || Opcio2 == false || Opcio3 == false){
                Opcio = random(3);
            }
        }
    } else {
        if (y <= 70) {

            noStroke();

            lletres();
            
            stroke(0, 0, 0);

            fill(random(mythreecolors));
            rect(30 + y, 100 - y, 70, 70);
            fill(random(mythreecolors));
            rect(30 + y, 240 - y, 70, 70);
            fill(random(mythreecolors));
            rect(30 + y, 380 - y, 70, 70);
            fill(random(mythreecolors));
            rect(30 + y, 520 - y, 70, 70);

            fill(random(mythreecolors));
            rect(170 + y, 100 - y, 70, 70);
            fill(random(mythreecolors));
            rect(170 + y, 240 - y, 70, 70);
            fill(random(mythreecolors));
            rect(170 + y, 380 - y, 70, 70);
            fill(random(mythreecolors));
            rect(170 + y, 520 - y, 70, 70);

            fill(random(mythreecolors));
            rect(310 + y, 100 - y, 70, 70);
            fill(random(mythreecolors));
            rect(310 + y, 240 - y, 70, 70);
            fill(random(mythreecolors));
            rect(310 + y, 380 - y, 70, 70);
            fill(random(mythreecolors));
            rect(310 + y, 520 - y, 70, 70);

            fill(random(mythreecolors));
            rect(450 + y, 100 - y, 70, 70);
            fill(random(mythreecolors));
            rect(450 + y, 240 - y, 70, 70);
            fill(random(mythreecolors));
            rect(450 + y, 380 - y, 70, 70);
            fill(random(mythreecolors));
            rect(450 + y, 520 - y, 70, 70);

            y++;
        } else {
            stroke(0, 0, 0);
            fill(193, 50, 44);
            rect(30 + y, 100 - y, 70, 70);
            fill(241, 187, 0);
            rect(30 + y, 240 - y, 70, 70);
            fill(2, 104, 189);
            rect(30 + y, 380 - y, 70, 70);
            fill(193, 50, 44);
            rect(30 + y, 520 - y, 70, 70);

            fill(241, 187, 0);
            rect(170 + y, 100 - y, 70, 70);
            fill(2, 104, 189);
            rect(170 + y, 240 - y, 70, 70);
            fill(193, 50, 44);
            rect(170 + y, 380 - y, 70, 70);
            fill(241, 187, 0);
            rect(170 + y, 520 - y, 70, 70);

            fill(2, 104, 189);
            rect(310 + y, 100 - y, 70, 70);
            fill(193, 50, 44);
            rect(310 + y, 240 - y, 70, 70);
            fill(241, 187, 0);
            rect(310 + y, 380 - y, 70, 70);
            fill(2, 104, 189);
            rect(310 + y, 520 - y, 70, 70);

            fill(193, 50, 44);
            rect(450 + y, 100 - y, 70, 70);
            fill(241, 187, 0);
            rect(450 + y, 240 - y, 70, 70);
            fill(2, 104, 189);
            rect(450 + y, 380 - y, 70, 70);
            fill(193, 50, 44);
            rect(450 + y, 520 - y, 70, 70);
        }
    }
}

function lletres(){
    if (y == 17 || y == 34 || y == 51 || y == 68) {

        if (doneBauhaus == false && doneAuss == false && doneJuli == false && doneYear == false) {
            j = random(4);
            if (j <= 1) {
                textSize(42);
                fill(0);
                text('BAUHAUS', 30, 650);
                doneBauhaus = true;
            }
            else if ((j > 1) && (j <= 2)) {
                textSize(21);
                fill(0);
                text('AUSSTELLUNG', 453, 635);
                doneAuss = true;
            }
            else if ((j > 2) && (j <= 3)) {
                textSize(21);
                fill(0);
                text('JULI, AUGUST, SEPTEMBER', 32, 676);
                doneJuli = true;
            }
            else {
                textSize(42);
                fill(0);
                text('1923', 500, 676);
                doneYear = true;
            }
        }

        else if (doneBauhaus == true && doneAuss == false && doneJuli == false && doneYear == false) {
            j = random(3);
            if (j <= 1) {
                textSize(21);
                fill(0);
                text('AUSSTELLUNG', 453, 635);
                doneAuss = true;
            }
            else if ((j > 1) && (j <= 2)) {
                textSize(21);
                fill(0);
                text('JULI, AUGUST, SEPTEMBER', 32, 676);
                doneJuli = true;
            }
            else {
                textSize(42);
                fill(0);
                text('1923', 500, 676);
                doneYear = true;
            }
        }

        else if (doneBauhaus == false && doneAuss == true && doneJuli == false && doneYear == false) {
            j = random(3);
            if (j <= 1) {
                textSize(42);
                fill(0);
                text('BAUHAUS', 30, 650);
                doneBauhaus = true;
            }
            else if ((j > 1) && (j <= 2)) {
                textSize(21);
                fill(0);
                text('JULI, AUGUST, SEPTEMBER', 32, 676);
                doneJuli = true;
            }
            else {
                textSize(42);
                fill(0);
                text('1923', 500, 676);
                doneYear = true;
            }
        }

        else if (doneBauhaus == false && doneAuss == false && doneJuli == true && doneYear == false) {
            j = random(3);
            if (j <= 1) {
                textSize(42);
                fill(0);
                text('BAUHAUS', 30, 650);
                doneBauhaus = true;
            }
            else if ((j > 1) && (j <= 2)) {
                textSize(21);
                fill(0);
                text('AUSSTELLUNG', 453, 635);
                doneAuss = true;
            }
            else {
                textSize(42);
                fill(0);
                text('1923', 500, 676);
                doneYear = true;
            }
        }

        else if (doneBauhaus == false && doneAuss == false && doneJuli == false && doneYear == true) {
            j = random(3);
            if (j <= 1) {
                textSize(21);
                fill(0);
                text('JULI, AUGUST, SEPTEMBER', 32, 676);
                doneJuli = true;
            }
            else if ((j > 1) && (j <= 2)) {
                textSize(21);
                fill(0);
                text('AUSSTELLUNG', 453, 635);
                doneAuss = true;
            }
            else {
                textSize(42);
                fill(0);
                text('BAUHAUS', 30, 650);
                doneBauhaus = true;
            }
        }


        else if (doneBauhaus == true && doneAuss == true && doneJuli == false && doneYear == false) {
            j = random(2);
            if (j <= 1) {
                textSize(21);
                fill(0);
                text('JULI, AUGUST, SEPTEMBER', 32, 676);
                doneJuli = true;
            }
            else {
                textSize(42);
                fill(0);
                text('1923', 500, 676);
                doneYear = true;
            }
        }

        else if (doneBauhaus == false && doneAuss == false && doneJuli == true && doneYear == true) {
            j = random(2);
            if (j <= 1) {
                textSize(21);
                fill(0);
                text('AUSSTELLUNG', 453, 635);
                doneAuss = true;
            }
            else {
                textSize(42);
                fill(0);
                text('BAUHAUS', 30, 650);
                doneBauhaus = true;
            }
        }

        else if (doneBauhaus == true && doneAuss == false && doneJuli == true && doneYear == false) {
            j = random(2);
            if (j <= 1) {
                textSize(21);
                fill(0);
                text('AUSSTELLUNG', 453, 635);
                doneAuss = true;
            }
            else {
                textSize(42);
                fill(0);
                text('1923', 500, 676);
                doneYear = true;
            }
        }

        else if (doneBauhaus == false && doneAuss == true && doneJuli == false && doneYear == true) {
            j = random(2);
            if (j <= 1) {
                textSize(42);
                fill(0);
                text('BAUHAUS', 30, 650);
                doneBauhaus = true;
            }
            else {
                textSize(21);
                fill(0);
                text('JULI, AUGUST, SEPTEMBER', 32, 676);
                doneJuli = true;
            }
        }

        else if (doneBauhaus == false && doneAuss == true && doneJuli == true && doneYear == false) {
            j = random(2);
            if (j <= 1) {
                textSize(42);
                fill(0);
                text('BAUHAUS', 30, 650);
                doneBauhaus = true;
            }
            else {
                textSize(42);
                fill(0);
                text('1923', 500, 676);
                doneYear = true;
            }
        }

        else if (doneBauhaus == true && doneAuss == false && doneJuli == false && doneYear == true) {
            j = random(2);
            if (j <= 1) {
                textSize(21);
                fill(0);
                text('AUSSTELLUNG', 453, 635);
                doneAuss = true;
            }
            else {
                textSize(21);
                fill(0);
                text('JULI, AUGUST, SEPTEMBER', 32, 676);
                doneJuli = true;
            }
        }

        else if (doneBauhaus == true && doneAuss == true && doneJuli == true && doneYear == false) {
            textSize(42);
            fill(0);
            text('1923', 500, 676);
            doneYear = true;
        }

        else if (doneBauhaus == false && doneAuss == true && doneJuli == true && doneYear == true) {
            textSize(42);
            fill(0);
            text('BAUHAUS', 30, 650);
            doneBauhaus = true;
        }

        else if (doneBauhaus == true && doneAuss == false && doneJuli == true && doneYear == true) {
            textSize(21);
            fill(0);
            text('AUSSTELLUNG', 453, 635);
            doneAuss = true;
        }

        else if (doneBauhaus == true && doneAuss == true && doneJuli == false && doneYear == true) {
            textSize(21);
            fill(0);
            text('JULI, AUGUST, SEPTEMBER', 32, 676);
            doneJuli = true;
        }

    }
}

function mouseClicked() {

    clear();
    i = random(3);
    y = 0;
    x = 0;
    z = 0;
    background(236, 221, 190);
    Opcio = random(3);

    doneBauhaus = false;
    doneAuss = false;
    doneJuli = false;
    doneYear = false;

    Opcio1 = false;
    Opcio2 = false;
    Opcio3 = false;
}

function deviceShaken() {

    clear();
    i = random(3);
    y = 0;
    x = 0;
    z = 0;
    background(236, 221, 190);
    Opcio = random(3);

    doneBauhaus = false;
    doneAuss = false;
    doneJuli = false;
    doneYear = false;

    Opcio1 = false;
    Opcio2 = false;
    Opcio3 = false;
}