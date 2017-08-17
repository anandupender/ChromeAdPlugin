var replacementAd = `
      <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
    <link rel="stylesheet" href="main.css">
    <style>
        h1 {
            font-family:helvetica; 
            font-size:24px;
            opacity: 0.2;
        }
        .container {
            border: 2px solid #FF7D75; 
            display: inline-flex; 
            width:100%; 
            height: 210px; 
            background-color:#EEEEEE; 
            padding:10px; 
            font-family:helvetica;
        }
        .product { 
            text-align:center; 
            margin: auto 5px 10px; 
            width:25%; 
            background-color: #FFFFFF; 
            display:inline-block;
            margin:20px;
            padding:10px;
            box-shadow: 0 3px 7px rgba(0,0,0,0.15);
            transition: 0.3s ease-in-out;
        }
        .product:hover { 
            box-shadow: 0 22px 43px rgba(0,0,0,0.95);
            -webkit-box-shadow: 0 22px 43px rgba(0,0,0,0.15);
            -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
            -moz-transform: none;
        }
        img {
            height:100px;
        }
        button {
            border-radius: 5px;
            border: none;
            color: white;
            padding: 10px;
            margin:8px;
            text-align: center;
            display: inline-block;
            font-size: 14px;
            box-shadow: 0 3px 7px rgba(0,0,0,0.15);

        }
        button:hover {
            box-shadow: 0 22px 43px rgba(0,0,0,0.95);
            -webkit-box-shadow: 0 22px 43px rgba(0,0,0,0.15);            
        }
        #p1Pos, #p2Pos, #p3Pos{
            font-family: 'Lobster', cursive;
            transform: translateY(-10px);
            background-color: #2FDAB8;
            transition: 0.3s ease-in-out;
        }
        #p1Pos:hover, #p2Pos:hover, #p3Pos:hover{
            font-family: 'Lobster', cursive;
            transform: translateY(-10px);
            background-color: white;
            color: #2FDAB8;
        }
        #p1Neg, #p2Neg, #P3Neg{
            font-family: 'Lobster', cursive;
            transform: translateY(-10px);
            background-color: #FF7D75;
            transition: 0.3s ease-in-out;
        }
        #p1Neg:hover, #p2Neg:hover, #P3Neg:hover{
            font-family: 'Lobster', cursive;
            transform: translateY(-10px);
            background-color: white;
            color: #FF7D75;
        }
        #p1Pos:active, #p2Pos:active, #p3Pos:active {
            transition: 0.1s ease-in-out;
            background-color: #2FDAB8;
            color: white;
        }
        #p1Neg:active, #p2Neg:active, #P3Neg:active {
            transition: 0.1s ease-in-out;
            background-color: #FF7D75;
            color: white;
        }
    </style>
    <div class = 'container'>
        <h1 id="adTitle"><b>[me.ai]</b></h1>
        <div class = "product">
            <img id="product1" alt="Sorry, that's all the products for now" src = 'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/laptop%20-%20mac.jpg?alt=media&token=1bea4c7e-47e8-4ff6-8f22-5050268bf082'>
            <br><br>
            <button id="p1Pos"> OOH! </button>
            <button id="p1Neg"> EEW! </button>
        </div>
        <div class = "product">
            <img id="product2" alt="Sorry, that's all the products for now" src = 'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/bike-cheap.jpg?alt=media&token=b7725808-fc86-4095-83a6-70025ec23b23'>
            <br><br>
            <button id="p2Pos"> OOH! </button>
            <button id="p2Neg"> EEW! </button>
        </div>
        <div class = "product">
            <img id="product3" alt="Sorry, that's all the products for now" src = 'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/backpack%20-%20herschel.jpg?alt=media&token=563bf47e-666a-4905-8946-c2c372fcdf8d'>
            <br><br>
            <button id="p3Pos"> OOH! </button>
            <button id="P3Neg"> EEW! </button>
        </div>
    </div>
`;

//yahoo, yahoo, sfgate, sfgate, amazon, 
var siteIDs = ['sb_rel_my-adsMAST-iframe','Billboard-ad', 'google_ads_iframe_/36117602/hnp-sfgate.com/Homepage_1__container__', 'google_ads_iframe_/36117602/hnp-sfgate.com/Sports_1__container__','gw-desktop-herotator', 'container', 'google_ads_iframe_/29390238/NYT/homepage/us_0__container__']

for(var i = 0; i < siteIDs.length; i++){
    if(document.getElementById(siteIDs[i]) !== null){
        document.getElementById(siteIDs[i]).innerHTML = replacementAd; //Yahoo
    }
}

//ADD ALL EVENT LISTENERS FOR 6 BUTTONS 

var images = ['https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/Air%20jordan.jpeg?alt=media&token=e548c17f-2b8d-4d34-8314-90019e1569e7',
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/analog%20watch.jpg?alt=media&token=72c1b514-182c-43c2-97c1-0cb5a5d29cba',
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/Apple%20ear%20buds.jpg?alt=media&token=3cfe84d7-a955-4a55-8fd9-8e05eabee7cf',
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/Aviators.jpg?alt=media&token=76e0ea5c-213b-41a8-ab36-682e5e110545', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/bike%20-%20cheapest.jpg?alt=media&token=fd98482a-806c-4fa8-a0ff-38ae08b5d4e3', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/black%20couch.jpg?alt=media&token=dfa8a15c-9d63-447b-ab4b-c72862470764', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/BMW.jpg?alt=media&token=51e98011-aaac-4bb9-b111-272dbb302c58', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/Bose%20ear%20buds.jpg?alt=media&token=3fa9dad0-8825-4dd5-a627-6a9bd3c2dafa', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/bowl%20-%20pattern.jpg?alt=media&token=5750191e-3271-409e-bf60-0301b2f6ae8d', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/bacjpack%20-%20camelback.jpg?alt=media&token=9bbe43f3-29ef-46a0-8344-1d9700c58562', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/calculator%20-%20iphone.jpg?alt=media&token=b57766a1-5c21-40ec-af62-a89bcab95974', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/calculator%20-simple.png?alt=media&token=714214f6-58a0-4166-bec2-a1333bb39722', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/camera%20-%20canon%20dlsr.jpg?alt=media&token=38757df6-87be-45f1-92cd-88f08460cadc', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/Digital%20watch.jpg?alt=media&token=b9b144cf-00c8-4ff8-8af4-95df2c8b20e4', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/flashlight%20-%20maglight.jpg?alt=media&token=2dc2c26f-a12d-47a5-8d60-aa588c411946', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/backpack%20-%20northface.jpg?alt=media&token=ea3f0927-b00e-489f-84a4-706c01fd03a7', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/iphone.jpg?alt=media&token=9aacc564-bf14-44bd-82f4-b670b4dc7bc8', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/flashlight%20-%20headlamp.jpg?alt=media&token=30f3166c-3197-4122-916d-7f8d07e299eb', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/laptop%20-%20surface.jpg?alt=media&token=f13f9e26-bf5e-456a-80fd-968ba7a999fe', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/camera%20-%20point%20and%20shoot%20.jpg?alt=media&token=804d3cca-0df7-4f55-b9c8-152152df40dc', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/bowl%20-%20simple%20white.jpg?alt=media&token=688f6ddc-acfd-4d52-a637-43b3f02df2eb',  
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/bike%20-%20road.jpg?alt=media&token=1126709e-d130-4a02-9c67-1785951540e2', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/bowl%20-%20rustic.jpg?alt=media&token=e88e675b-ead5-440e-8c34-d9e46dc14ee4', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/fan%20-%20box%20fan.jpg?alt=media&token=fbf8ec4d-ee3a-42d3-b147-4608ff28aaa1', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/camera%20-%20film.jpg?alt=media&token=13e4800f-19da-4159-a8dc-f679a8c96db7', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/calulator%20-%20TI84.jpg?alt=media&token=f6b6a6f2-0300-465f-8857-4f84e2043675', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/pen%20-%20mont%20blanc.jpg?alt=media&token=45040497-2f11-499a-a815-91b9b744bac1', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/Beats%20ear%20buds.jpg?alt=media&token=e59238f7-2415-4dba-aa4b-eec99e5cf71d',
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/Nalgene%20bottle.jpg?alt=media&token=95d1f87a-9125-407d-8ab0-b6228f66ae65', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/pen%20-%20ink.jpg?alt=media&token=6e26572f-588a-4acf-a408-d19e779f99a3', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/samsung.jpg?alt=media&token=50957883-b434-4cfb-9a42-f6a2d12beab9', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/laptop%20-%20surface.jpg?alt=media&token=f13f9e26-bf5e-456a-80fd-968ba7a999fe', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/notebook%20-%20baron%20fig.jpg?alt=media&token=1170f25f-59aa-4d1c-a77a-1a815b91d29a', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/Smart%20watch.jpeg?alt=media&token=c8b24f6a-af3b-4bdb-a8f2-e53376ef5063', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/couch.jpeg?alt=media&token=3e12f848-1405-4589-ad10-f49c58011879', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/notebook-moleskin.jpg?alt=media&token=0dd0bf28-efc9-4278-a460-83a145bc4d7f', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/Swell%20bottle.jpg?alt=media&token=c3d62429-59e2-425b-bb08-97bcbd0a2766', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/shoes%20-%20running.jpg?alt=media&token=8a5f7c4d-4405-42c3-87d1-2bf26bc0d88f', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/speaker%20-%20beats%20pill.jpg?alt=media&token=0b5f72d8-0fea-49e0-908d-08d58d6fc8ea', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/Flip%20phone.jpg?alt=media&token=0d1f3b67-a997-49fe-867c-54645bfaceb3', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/fan%20-%20dyson.jpg?alt=media&token=82dd8a7a-652d-4c7d-bbfe-9f1ebcc4a629', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/fan%20-%20clip%20fan.jpg?alt=media&token=ff2f555c-dc6a-4066-b3f1-da1d58bc4c81', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/Nike%20bottle.jpg?alt=media&token=a82b95c9-fc91-4200-be3f-1bc831458ab3', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/speaker%20-%20qsc%20pa.jpg?alt=media&token=fff026e1-1ecd-47e9-9fc6-3af66e8179d6', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/couch%20-%20leather.jpg?alt=media&token=21d5a47a-5d62-49f9-9088-a8b1b79e36ef', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/notebook%20-%20composition.jpg?alt=media&token=74a9c7ee-00bf-4a13-ac4e-b17552d60f12', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/sunglasses%20-%20generic.jpg?alt=media&token=df953d38-b957-4889-b3a5-830b3ec0f23c', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/Sketchers.jpeg?alt=media&token=d0d8ac83-af20-4af8-ac8b-4893b9966bca', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/keychain%20flashlight.jpg?alt=media&token=20ad4bac-117d-4e62-9dc8-cdcf38489255', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/pen%20-%20ballpoint.jpg?alt=media&token=f70b500c-2508-446e-bc75-971a37520de6', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/Oakley.jpeg?alt=media&token=5ce0d48f-1198-4ee5-be1e-0873462b6ef9',
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/Tesla.jpg?alt=media&token=39ba1f1a-d19e-40d7-96b5-a8f08e436bb1', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/toothbrush%20-%20design.jpg?alt=media&token=a1239bfa-cc46-481e-99c5-13b2f060e891', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/toothbrush%20-%20sonicare.jpg?alt=media&token=d721a5c8-b742-4fc5-8b4e-2686d0e68ba3', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/Toyota%20.jpg?alt=media&token=5b5b7ba6-a864-465e-ba0d-f8f34e024886',
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/toothbrush%20-%20normal.jpg?alt=media&token=f402326d-4d59-4045-94bd-89e1ac1693c6', 
'https://firebasestorage.googleapis.com/v0/b/meai-midpoint.appspot.com/o/speaker%20-%20cheap.jpg?alt=media&token=c4024228-bf8d-4ac0-9015-d876ae80bdc5'
]
imageCounter = 0;


//ADD ALL EVENT LISTENERS FOR 6 BUTTONS 

var temp = document.getElementById('p1Pos');
temp.addEventListener('click', function() {
    console.log(images[imageCounter]);
    document.getElementById('product1').src = images[imageCounter];
    imageCounter++;
    console.log("clicked");
}, false);

temp = document.getElementById('p1Neg');
temp.addEventListener('click', function() {
    console.log(images[imageCounter]);
    document.getElementById('product1').src = images[imageCounter];
    imageCounter++;
    console.log("clicked");
}, false);

temp = document.getElementById('p2Pos');
temp.addEventListener('click', function() {
    console.log(images[imageCounter]);
    document.getElementById('product2').src = images[imageCounter];
    imageCounter++;
    console.log("clicked");
}, false);

temp = document.getElementById('p2Neg');
temp.addEventListener('click', function() {
    document.getElementById('product2').src = images[imageCounter];
    imageCounter++;
    console.log("clicked");
}, false);

temp = document.getElementById('p3Pos');
temp.addEventListener('click', function() {
    console.log(images[imageCounter]);
    document.getElementById('product3').src = images[imageCounter];
    imageCounter++;
    console.log("clicked");
}, false);

temp = document.getElementById('P3Neg');
temp.addEventListener('click', function() {
    console.log(images[imageCounter]);
    document.getElementById('product3').src = images[imageCounter];
    imageCounter++;
    console.log("clicked");
}, false);

