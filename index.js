import {navbar,footer} from "./components/footer_navbar.js"

var nav = document.getElementById("navbar");
nav.innerHTML = navbar();

var foot = document.getElementById("footer");
foot.innerHTML = footer();

var lan = document.getElementById("sel1");
lan.addEventListener("change",lang);

var sel2 = document.getElementById("sel2");
sel2.addEventListener("change",call)

var search = document.getElementById("search");
search.addEventListener("click",input);

document.getElementById("cate").addEventListener("click",tocatalog)

document.getElementById("cate2").addEventListener("click",tocatalog)

function tocatalog(){
    window.location.href = "productPage.html"
}



function input(){
    var inpu = document.createElement("input");
    inpu.placeholder= "search..."
    search.innerHTML = "";
    inpu.style = "margin-left:-70px; border:2px solid green; border-radius:5px; width:120px; height:20px"
    search.append(inpu);
}

function call(){
    if(sel2.value ==="logout"){
        alert("You want to Logout")
        window.location.href = "signin.html";
    }
    else if(sel2.value==="login"){
        window.location.href = "signin.html";
    }
    else if(sel2.value ==="order"){
        window.location.href = "#";
    }
    else{
        window.location.href = "index.html"
    }
}



function lang(){
    if(lan.value==="hindi"){
        var cat = document.getElementById("cat");
        cat.textContent = "सूची";
        var sal = document.getElementById("sale");
        sal.textContent = "बिक्री";
        var del = document.getElementById("delpay");
        del.textContent = "वितरण और भुगतान";
        var con = document.getElementById("con");
        con.textContent = "संपर्क";
        var log = document.getElementById("log");
        log.textContent = "लॉग आउट";
        var ord = document.getElementById("ord");
        ord.textContent = "आदेश";
        var pr = document.querySelector("pre");
        pr.textContent = `बनाएं
एक हरा स्वर्ग
घर पर ही।`
        var xx = document.getElementById("xx");
        xx.textContent = `लाभ का 20% भारतीय सशस्त्र बलों की मदद के लिए जाता है`
        var cate = document.getElementById("cate");
        cate.textContent = `सूची`
        var ty = document.getElementById("ty");
        ty.textContent = "हमारे स्टॉक में पौधों के प्रकार"
        var ab = document.getElementById("abus");
        ab.textContent = "हमारे बारे में";
        var ab = document.getElementById("abus2");
        ab.textContent = `हम कीव में विभिन्न प्रकार के इनडोर पौधों का भंडार हैं।
        फिकस से लेकर फोर्न्स तक सैकड़ों विभिन्न प्रकार के पौधे।
        हम अपने पौधों को उनके "जन्म" से ही प्यार और संजोते हैं,
        इसलिए वे निश्चित रूप से आपके घर में खुशी, खुशी, प्यार और आराम लाएंगे।`;
        var pp = document.getElementById("pp");
        pp.textContent = `लोकप्रिय उत्पाद`
        var pr1 = document.getElementById("pr1");
        pr1.textContent = "सविएरिया"
        var pr2 = document.getElementById("pr2");
        pr2.textContent = "मॉन्स्टेरा";
        var pr3 = document.getElementById("pr3");
        pr3.textContent = "कॉर्डीलाइन"
        var re = document.getElementById("re");
        re.textContent = "समीक्षा";
        var wha = document.getElementById("wha");
        wha.textContent = "हमारे ग्राहक क्या सोचते हैं"
        var wh = document.getElementById("wh");
        wh.textContent = "हमारे पास नए और नियमित ग्राहकों से कई प्रशंसापत्र हैं। आप हम पर भरोसा कर सकते हैं, क्योंकि हम अपने काम से प्यार करते हैं और आपको केवल ईमानदार समीक्षा प्रदान करते हैं।"
        var cat2 = document.getElementById("cat2");
        cat2.textContent = "श्रेणियाँ";
        var cate2 = document.getElementById("cate2");
        cate2.textContent = "सूची";
        var t1 = document.getElementById("t1");
        t1.textContent = "घर के पौधे";
        var t2 = document.getElementById("t2");
        t2.textContent = "हाउस सेट";
        var t3 = document.getElementById("t3");
        t3.textContent = "फूलदान";
        var t4 = document.getElementById("t4");
        t4.textContent = "उर्वरक";
        var del1 = document.getElementById("delpay2");
        del1.textContent = "वितरण और भुगतान";
        var p1 = document.getElementById("p1");
        p1.textContent = `हम अपने संयंत्रों को बक्सों, कागज़ आदि का पुन: उपयोग करके सघन रूप से फिर भी टिकाऊ रूप से पैकेज करते हैं। भारत के सभी शहरों में डिलीवरी की जाती है, सिवाय कब्जे वाले शहरों के।`
        var p2 = document.getElementById("p2");
        p2.textContent = `आपको पूरी तरह से सुरक्षित महसूस कराने के लिए हमारे पास कार्ड द्वारा पूर्ण और आंशिक पूर्व भुगतान और कैश ऑन डिलीवरी है। हमारे पास नए और नियमित ग्राहकों से कई प्रशंसापत्र हैं।`
        var p3 = document.getElementById("p3");
        p3.textContent = `हमें आपके पौधों की सुरक्षित और सुरक्षित डिलीवरी पर गर्व है। हमारे पैकेजिंग को पारगमन के दौरान अधिकतम सुरक्षा प्रदान करने के लिए सावधानीपूर्वक डिज़ाइन किया गया है, यह सुनिश्चित करते हुए कि आपके पौधे सही स्थिति में आते हैं। इसके अतिरिक्त, हम आपके नए पौधों के पोषण और स्वास्थ्य को बनाए रखने में आपकी मदद करने के लिए विस्तृत पौधों की देखभाल के निर्देश शामिल करते हैं। आपकी संतुष्टि और आपके पौधों की भलाई हमारी सर्वोच्च प्राथमिकता है।`

    }
    else{
        var cat = document.getElementById("cat");
        cat.textContent = "Catalog";
        var sal = document.getElementById("sale");
        sal.textContent = "Sale";
        var del = document.getElementById("delpay");
        del.textContent = "Delivery & Payment";
        var con = document.getElementById("con");
        con.textContent = "Contact";
        var log = document.getElementById("log");
        log.textContent = "Log Out";
        var ord = document.getElementById("ord");
        ord.textContent = "Order";
        var pr = document.querySelector("pre");
        pr.textContent = `Create 
a Green Paradise
right at home.
        `
        var xx = document.getElementById("xx");
        xx.textContent = `20% of the profit goes to help the Armed Forces of India`
        var cate = document.getElementById("cate");
        cate.textContent = `Catalog`
        var ty = document.getElementById("ty");
        ty.textContent = "Types of plants in our stock"
        var ab = document.getElementById("abus");
        ab.textContent = "About us";
        var ab = document.getElementById("abus2");
        ab.textContent = `We are a store of indoor plants of various types in Kyiv. Hundreds of different types of plants from ficuses to forns. We love and cherish our plants from their very "birth", so they will definitely bring happiness, joy, love and comfort to your home.`;
        var pp = document.getElementById("pp");
        pp.textContent = `Popular products`
        var pr1 = document.getElementById("pr1");
        pr1.textContent = "Savieria"
        var pr2 = document.getElementById("pr2");
        pr2.textContent = "Savieria";
        var pr3 = document.getElementById("pr3");
        pr3.textContent = "Cordyline"
        var re = document.getElementById("re");
        re.textContent = "Reviews";
        var wha = document.getElementById("wha");
        wha.textContent = "What our customers think"
        var wh = document.getElementById("wh");
        wh.textContent = "We have many testimonials from new and regular customers. You can trust us, because we love our work and provide you with only honest reviews."
        var cat2 = document.getElementById("cat2");
        cat2.textContent = "Categories";
        var cate2 = document.getElementById("cate2");
        cate2.textContent = "Catalog";
        var t1 = document.getElementById("t1");
        t1.textContent = "House Plants";
        var t2 = document.getElementById("t2");
        t2.textContent = "House Sets";
        var t3 = document.getElementById("t3");
        t3.textContent = "Flower Pot";
        var t4 = document.getElementById("t4");
        t4.textContent = "Fertilizer";
        var del1 = document.getElementById("delpay2");
        del1.textContent = "Delivery & Payment";
        var p1 = document.getElementById("p1");
        p1.textContent = `We package our plants securly yet sustainably by reusing boxes, paper, etc. Delivery is carried out to all cities of India except for the occupied ones.`
        var p2 = document.getElementById("p2");
        p2.textContent = `We have full & partial prepayment by card and cash on delivery to make you feel completely secure. We have many testimonals from new and regular customers.`
        var p3 = document.getElementById("p3");
        p3.textContent = `We pride ourselves on the safe and secure delivery of your plants. Our packaging is meticulously designed to provide maximum protection during transit, ensuring your plants arrive in perfect condition. Additionally, we include detailed plant care instructions to help you nurture and maintain the health of your new plants. Your satisfaction and the well-being of your plants are our top priorities.`
        
    }
}

// //pagination          




// const baseServerURL = `https://plant-application-data.onrender.com/plants`;
// let currentPage = 1;
// const itemsPerPage = 3;

// const fetchPlants = async (page) => {
//   try {
//     // const res = await fetch(`${baseServerURL}/posts?_page=${page}&_limit=${itemsPerPage}`);
//     const res = await fetch(`https://plant-application-data.onrender.com/plants?page=${page}&_limit=${itemsPerPage}`);
//     const data = await res.json();
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// };

// const getPlants = async (page) => {
//   try {
//     const data = await fetchPlants(page);
//     console.log(data);
//     displayData(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const displayData = (data) => {
//   const block4 = document.getElementById("block4");
//   block4.innerHTML = "";
//   data.map((ele) => {
//     const mdiv = document.createElement("div");
//     const idiv = document.createElement("div");
//     const cdiv = document.createElement("div");
//     const img = document.createElement("img");
//     img.src = ele.image_url;
//     const c1 = document.createElement("div");
//     c1.setAttribute("id", "xyz");
//     const c2 = document.createElement("div");
//     const p1 = document.createElement("p");
//     p1.textContent = ele.name;
//     const p2 = document.createElement("p");
//     p2.textContent = `₹ `+ Math.round(ele.price*30);
//     const img2 = document.createElement("img");
//     img2.src = "https://www.pngitem.com/pimgs/m/45-459393_cart-shopping-cart-icon-png-white-transparent-png.png";
//     var a = document.createElement("a");
//     a.href = "productPage.html";
//     a.append(img2)
//     idiv.append(img);
//     c1.append(p1, p2);
//     c2.append(a);
//     cdiv.append(c1, c2);
//     mdiv.append(idiv, cdiv);
//     block4.append(mdiv);
//   });
// };

// // Initial fetch and display of data
// getPlants(currentPage);

// // Pagination event handler
// document.getElementById("nextButton").addEventListener("click", () => {
//   currentPage++;
//   getPlants(currentPage);
// });


