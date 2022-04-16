let bg;
let Maps;
let angles = [9968,9608];
function preload(){
  bg = loadImage('bg.jpeg')
  Maps = loadImage('Maps.jpeg')
}
function setup() {
  createCanvas(1800, 3000);
  noStroke();
  noLoop();
}

function draw() {
  background(255,255,255);
  pieChart(300, angles);
  fill(0,0,51)
  textSize(23)
  text('Peta Desa Karang Anyar',50,2350)
  image(Maps,50,2400,900,500)
  image(bg,50,1200,1300,1000)
   textAlign(CENTER);
  
  fill(240,255,240,)
  rect(0,0,600,500)
  //Islam  
  fill(255, 128, 128);
  stroke(211, 211, 211);
  rect(65, 110, 55, 340);
  //Khatolik   
  fill(153, 204, 255);
  rect(150, 300, 55, 150);
  //Kristen   
  fill(255, 0, 0);
  rect(240, 315, 55, 135);
  //Hindu   
  fill(255, 255, 51);
  rect(330, 410, 55, 40);
  //Budha   
  fill(50, 205, 50);
  rect(420,390, 55, 60)

   

  textSize (23); 
  fill(255, 102, 102);
  text('Data Penganut Agama Desa Karang Anyar 2021',350,20);

 
  line(60, 450, 600, 450)
  line(60, 450, 60, 10)
  {
    
    textSize (12); 
    fill(96);
    textAlign(CENTER);
    text('ISLAM', 90, 470);
    text('KHATOLIK', 180,470);
    text('KRISTEN', 270,470);
    text('HINDU', 360,470);
    text('BUDHA', 450,470)

    //jumlah data
    fill (0,0,0);
    text(0,50,450);
    text(100,48, 380);
    text(500,48, 330)
    text(1000,45, 260);
    text(5000,45, 210)
    text(10000,40,140);
    text(50000,40,90);
 
    

    text('J',10, 150);
    text('U',10, 170);
    text('M',10, 190);
    text('L',10, 210);
    text('A',10, 230);
    text('H',10, 250);
    text('P',10, 280);
    text('E',10, 300);
    text('N',10, 320);
    text('G',10, 340);
    text('A',10, 360);
    text('N',10, 380);
    text('U',10, 400);
    text('T',10, 420);

  fill(248,248,255)
  rect(680,0,700,500)
  fill(255, 0, 0);
  stroke(211, 211, 211);
  rect(800, 285, 55, 165);
  fill(255, 255, 0);
  rect(885, 278, 55,173);
  fill(127, 255, 1);
  rect(970, 260, 55, 190);

  textSize (23); 
  fill (255, 102, 102);
  text('Data Pertumbuhan Penduduk Desa Karang Anyar',1100,20);

 
  line(780, 450, 1200, 450)
  line(780, 450, 780, 10)
    
    textSize (12); 
    fill(0, 0, 0);
    textAlign(CENTER);
    text('Tahun 2018', 830,470);
    text('Tahun 2019', 920,470);
    text('Tahun 2020', 1000,470);
   
    //jumlah data
    fill (0,0,0);
    text(0,770,450);
    text(10000,760,390);
    text(15000,760,330);
    text(20000,760,270);
    text(25000,760,210);
    text(30000,760,150);
    text(35000,760,90);
    text(40000,760,30);
    

    text('J',700, 150);
    text('U',700, 170);
    text('M',700, 190);
    text('L',700, 210);
    text('A',700, 230);
    text('H',700, 250)
    text('P',700, 280);
    text('E',700, 300);
    text('N',700, 320);
    text('D',700, 340);
    text('U',700, 360);
    text('D',700, 380);
    text('U',700, 400);
    text('K',700, 420);
    
  fill(255,228,196)
  rect(0,520,700,600)
  fill(255, 128, 128);
  stroke(211, 211, 211);
  rect(65, 935, 55, 155);
  //Pedagang   
  fill(153, 204, 255);
  rect(150, 860, 55, 230);
  //Petani   
  fill(255, 0, 0);
  rect(240, 1010, 55, 80);
  //Pensiunan   
  fill(255, 255, 51);
  rect(330, 640, 55, 450);
  //Swasta  
  fill(50, 205, 50);
  rect(420,1020, 55, 70)
  //PNS/Guru/TNI/POLRI
  fill(204,102,0)
  rect(510,850, 55, 240)
  //Buruh
  fill(64,64,64)
  rect(600, 1060, 55, 30)
  //dan lain lain

   
}
  textSize (23); 
  fill(255, 102, 102);
  text('Data Pekerjaan',305,550);

 
  line(60, 1095, 750, 1095)
  line(60, 1099, 60, 550)
  {
    
    textSize (12); 
    fill(0, 0, 0);
    textAlign(CENTER);
    text('Pedagang', 90, 1110);
    text('Petani', 180,1110);
    text('Pensiunan', 270,1110);
    text('Swasta', 360,1110);
    text('PNS/TNI/POLRI', 450,1110);
    text('Buruh', 540, 1110);
    text('lainnya', 630,1110);

    //jumlah data
    fill (0,0,0);
    text(0,50,1100);
    text(100,48, 1030);
    text(500,48, 960)
    text(1000,45, 890);
    text(5000,45, 820)
    text(10000,40,750);
    text(50000,40,680);
    text(8000,40,610);
    
 
    

    text('J',10, 600);
    text('U',10, 630);
    text('M',10, 660);
    text('L',10, 690);
    text('A',10, 720);
    text('H',10, 750);
    text('P',10, 780);
    text('E',10, 810);
    text('K',10, 840);
    text('E',10, 870);
    text('R',10, 900);
    text('J',10, 930);
    text('A',10, 960);
    text('A',10, 990);
    text('N',10, 1020);
    
    fill(216,191,216,100)
    rect(800,520,400,602,)
    fill(0, 76, 153)
    textSize(20)
    text('Data jenis Kelamin',1000, 550)
    text('Laki-laki         =  9968', 1000, 1000)
    text('Perempuan         =  9608', 1000, 1030)
    
    fill('#FF9999')
    rect(1000, 980, 20, 20 )
    fill('#CC6600')
    rect(1000, 1010, 20, 20 )
    
    fill(245,255,250,150)
    rect(50,1200,1300,1000)
    fill(0,0,0)
    text('Profil Desa',700,1300)
    text('Karang Anyar, berdasarkan asal-usul daerah yang didukung adanya ciri-ciri dan cerita turun-temurun dari berbagai tokoh masyarakat,', 700,1340)
    text(' maka di ungkap sejarah Desa Karang Anyar memiliki versi yang cukup unik hal tersebut disebabkan oleh suatu tempat yang terpencil,',700,1370)
    text(' di antara sawah dan hutan yang kemudian di percaya dan dijadikan pedoman pekarangan yang baru, yang kemudian dikenal dengan',700,1400)
    text('nama Desa Karang Anyar.', 229,1430)
    text('*Batas Wilayah Desa',210,1470 )
    text('Letak geografis Desa Karang Anyar, terletak diantara :',360,1500)
    text('a. Sebelah Utara : Desa Rejomulyo, Kecamatan Jati Agung',380,1530)
    text('b. Sebelah Selatan : Desa Karangsari, Kecamatan Jati Agung',390,1560)
    text('c. Sebelah Barat : Desa Krawangsari, Kecamatan Natar', 365,1590)
    text('d. Sebelah Timur : Desa Marga Kaya, Kecamatan Jati Agung',390,1620)
    text('*Luas Wilayah Desa',210,1650)
    text('#Pemukiman (17 Dusun) 		: 3.755 hektar',305,1680)
    text('#Pertanian Sawah Tadah Hujan 	: 150 	hektar',325,1710)
    text('#Ladang/Tegalan 			: 601 	hektar',275,1740)
    text('#Perkebunan Rakyat 			: 52 	hektar', 285,1770)
    text('#Perkantoran 				: 0,2 	hektar', 260,1800)
    text('#Sekolah 				 : 16,25 hektar', 249,1830)
    text('#TK/PAUD 				: 4,25 	hektar',255,1860)
    text('#SD 					: 6 	hektar',220,1890)
    text('#SMP 					: 2 	hektar', 230,1920)
    text('#SMA 					: 1 	hektar', 230,1950)
    text('#Pondok Pesantren 			: 7 	hektar',280,1980)
    text('#Masjid (49 Bangunan) 		: 6 	hektar', 290,2010)
    text('#Jalan 					: 16,8 	hektar',245,2040)
    text('#Lapangan Sepak Bola dan Pasar 	: 2 	hektar',330,2070)
    text('#Luas Pekarangan 			: 192 	hektar',285,2100)
    text('#Sarana Umum 				: 0,75 	hektar',280,2130)
    text('#Ruko 					: 3 	hektar',230,2160)
    text('#Tempat wisata 			: 5 	hektar',260,2190)
    
    
  }
var data = {
labels: [
 'SD/MI', 'SMP/MTs', 'SMU/MA',
 'Si/Diploma', 'Tidak Tamat', 'Buta Huruf'
],
datasets: [{
 label: 'Data Pendidikan Desa Karang Anyar',
 data: [4612, 5721, 4619, 1006, 1998, 250],
 backgroundColor: [
   'rgb(255, 99, 132)','rgb(54, 162, 235)',
   'rgb(255, 205, 86)','rgb(153,51,255)',
   'rgb(51,255,51)','rgb(128,128,128)',
 ],
 hoverOffset: 2
}]
};
var options = {
maintainAspectRatio: false,
scales: {
 y: {
   stacked: true,
   grid: {
     display: true,
     color: "rgba(255,99,132,0.2)"
   }
 },
 x: {
   grid: {
     display: false
   }
 }
}
};

new Chart('chart', {
type: 'pie',
options: options,
data: data
});
    
  }
function pieChart(diameter, data) {
  let lastAngle = 0;
  var colors = ['#CC6600','#FF9999']
  for (let i = 0; i < data.length; i++) {
    let gray = map(i, 0, data.length, 0, 255);
    fill(colors[i])
    arc(
      1000,
      800,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(angles[i])
    );
    lastAngle += radians(angles[i]);
  }
}