
document.body.style.fontFamily ="Voyage-Bold";
document.body.style.fontSize = "5em";
document.body.style.background = "rgba(15, 15, 15, 0.986)";
document.body.style.color="white";
linebreak = document.createElement("br");
//container
    let container = document.createElement("main");
    container.id = 'biggest';
    container.className = 'borderpad';
    container.style.background="black";
    container.style.width="100%";
    container.style.height="100vh";
    container.style.padding="0";
    container.style.margin="0";

    document.body.appendChild(container);

//top section
let firstSection = document.createElement("section");
firstSection.className = "first-award";
firstSection.style.backgroundColor = "transparent";
firstSection.style.marginTop = "0";
firstSection.style.padding = "0";
firstSection.style.width = "100%";
firstSection.style.height = "58%";
firstSection.style.textAlign="left";
document.querySelector(".borderpad").append(firstSection);

//first image
let firstPic = document.createElement("img");
firstPic.className ="dualipa-img";
firstPic.style.position="absolute";
firstPic.style.top="0";
firstPic.style.width = "100%";
firstPic.style.right="0";
firstPic.zIndex = "8";
firstPic.src = "https://miro.medium.com/max/796/0*RvMsLpxkzR2_EQEV";
document.querySelector(".first-award").append(firstPic);

//first award
let firstTitle = document.createElement("h1");
firstTitle.className = "pop"
firstTitle.innerText = "BEST POP VOCAL ALBUM";
firstTitle.zIndex = "9";
firstTitle.style.color="white";
firstTitle.style.position= "absolute";
firstTitle.style.top ="0";
firstTitle.style.left = "0";
firstTitle.style.fontSize = "5rem";
firstTitle.style.marginTop = "0";
firstTitle.style.paddingTop = "0";
document.querySelector(".first-award").append(firstTitle);

//first hover
let firstSong = document.createElement("h2");
firstSong.className = "dualipa"
firstSong.innerText = "Future Nostalgia - Dua Lipa";
firstSong.zIndex = "-1";
firstSong.style.position="absolute";
firstSong.style.color="white";
firstSong.style.top="15%";
firstSong.style.right="30%";
firstSong.style.textAlign ="center";
firstSong.style.fontSize = "3rem";
firstSong.style.opacity="1";
document.querySelector(".first-award").append(firstSong);

// first gif
let firstGif = document.createElement("img")
firstGif.src="https://static.wixstatic.com/media/51ec99_64aef9f28d9c40e7977ce5ebb7306a20~mv2.gif"
firstGif.className = "dua-mv";
firstGif.style.width = "100%";
firstGif.style.position="absolute";
firstGif.style.top="0";
firstGif.style.paddingTop="0";
firstGif.style.right="0";
firstGif.style.display= "none"
firstGif.style.zIndex="0";
firstGif.style.opacity="0.9"
document.querySelector(".first-award").append(firstGif);



//first hover mv 
firstPic.addEventListener("mouseover", function(){
  firstGif.style.removeProperty("display");
  firstPic.style.display="none";
  firstSong.style.opacity="1";
  firstSong.style.zIndex="2";
  firstTitle.style.opacity="0";
})
firstPic.addEventListener("mouseout", function(){
  firstGif.style.display = "none";
  firstPic.style.removeProperty('display');
  firstSong.style.opacity="0";
  firstTitle.style.opacity="1";
})




//seperator

let separador = document.createElement("section");
separador.className = "middle";
separador.style.position = "absolute";
separador.style.textAlign="right";
separador.style.top = "50%";
separador.style.width = "100%";
separador.style.height = "53%";
separador.style.background = "rgba(15, 15, 15, 0.986)";
separador.style.transform = "skewY(4deg)";
document.querySelector(".first-award").append(separador);


//second image
let secondPic = document.createElement("img");
secondPic.className ="harry-img";
secondPic.style.width = "100%";
secondPic.style.left="40%";
secondPic.style.textAlign="right";
secondPic.zIndex = "8";
secondPic.padding ="0";
secondPic.margin = "0";
secondPic.src = "./assets/harrystyles.png";
document.querySelector(".middle").append(secondPic);



//second hover 
let secondSong = document.createElement("h2");
secondSong.className = "harrystyles"
secondSong.innerText = "Watermelon Sugar - Harry Styles";
secondSong.zIndex = "10";
secondSong.style.position="absolute";
secondSong.style.color="white";
secondSong.style.top="60%";
secondSong.style.left="30%";
secondSong.style.textAlign ="center";
secondSong.style.fontSize = "3rem";
secondSong.style.opacity="0";
secondSong.style.display= "flex";
secondSong.style.transform = "skewY(-3deg)";
secondSong.style.justifyContent="center";
secondSong.style.alignItems="center";
document.querySelector(".middle").append(secondSong);

// second Award Title
let secondTitle = document.createElement("h1");
secondTitle.className = "solo"
secondTitle.innerText = "BEST POP SOLO PERFORMANCE";

secondTitle.style.color="white";
secondTitle.style.position= "absolute";
secondTitle.style.top ="0";
secondTitle.style.right = "0";
secondTitle.style.fontSize = "5rem";
secondTitle.style.marginTop = "0";
secondTitle.style.paddingTop = "0";
document.querySelector(".middle").append(secondTitle);

// second gif
let secondGif = document.createElement("img")
secondGif.src="https://i.pinimg.com/originals/62/77/71/62777179b8cb400fc8616d8c492beb44.gif"
secondGif.className = "harry-mv";
secondGif.style.width = "100%";
secondGif.style.position="absolute";
secondGif.style.right="0";
secondGif.style.display= "none"
secondGif.style.zIndex="-1";
secondGif.style.opacity="0.9"
document.querySelector(".middle").append(secondGif);



//second hover mv 
secondPic.addEventListener("mouseover", function(){
  secondGif.style.removeProperty("display");
  secondPic.style.display="none";
  secondSong.style.opacity="1";
  secondTitle.style.opacity="0";
})
secondPic.addEventListener("mouseout", function(){
  secondGif.style.display = "none";
  secondPic.style.removeProperty('display');
  secondSong.style.opacity="0";
  secondTitle.style.opacity="1";
})









//third section


let bottom = document.createElement("div");
bottom.className = "last";
bottom.style.textAlign= "left";
bottom.style.position = "absolute";
bottom.style.top = "140%";
bottom.style.width = "100%";
bottom.style.height = "130%";
bottom.style.background = "#0f0f0ffb";
bottom.style.transform = "skewY(-7deg)";
document.querySelector(".middle").append(bottom);

//third Award Title
let thirdTitle = document.createElement("h1");
thirdTitle.className = "dance"
thirdTitle.innerText = "BEST DANCE ALBUM";
thirdTitle.zIndex = "99";
thirdTitle.style.color="white";
thirdTitle.style.position= "absolute";
thirdTitle.style.top ="0";
thirdTitle.style.left = "0";
thirdTitle.style.fontSize = "5rem";
thirdTitle.style.marginTop = "0";
thirdTitle.style.paddingTop = "0";
document.querySelector(".last").append(thirdTitle);

//third image
let thirdPic = document.createElement("img");
thirdPic.className ="harry-img";
thirdPic.style.width = "35%";
thirdPic.style.position="absolute";
thirdPic.style.right="0";

thirdPic.zIndex = "8";
thirdPic.padding ="0";
thirdPic.margin = "0";
thirdPic.src = "./assets/bubba.png";
document.querySelector(".last").append(thirdPic);

//third hover 
let thirdSong = document.createElement("h2");
thirdSong.className = "bubba"
thirdSong.innerText = "Bubba - Kaytranada";
thirdSong.zIndex = "11";
thirdSong.style.position="absolute";
thirdSong.style.color="white";
thirdSong.style.top="45%";
thirdSong.style.left="40%";
thirdSong.style.textAlign ="center";
thirdSong.style.fontSize = "3rem";
thirdSong.style.opacity = "0"
thirdSong.style.transform = "skewY(3.5deg)";
thirdSong.style.justifyContent="center";
thirdSong.style.alignItems="center";
document.querySelector(".last").append(thirdSong);



// third gif
let thirdGif = document.createElement("img")
thirdGif.src="https://s3-us-west-2.amazonaws.com/onestowatch-assets/blog_142432388655.gif"
thirdGif.className = "bubba-mv";
thirdGif.style.width = "100%";
thirdGif.style.position="absolute";
thirdGif.style.right="0";
thirdGif.style.display= "none"
thirdGif.style.zIndex="-1";
thirdGif.style.opacity="0.9"
document.querySelector(".last").append(thirdGif);



//third hover mv 
bottom.addEventListener("mouseover", function(){
  thirdGif.style.removeProperty("display");
  thirdPic.style.display="none";
  thirdSong.style.opacity="1";
  thirdTitle.style.opacity="0";
})
bottom.addEventListener("mouseout", function(){
  thirdGif.style.display = "none";
  thirdPic.style.removeProperty('display');
  thirdSong.style.opacity="0";
  thirdTitle.style.opacity="1";
})


