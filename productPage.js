// https://plant-application-data.onrender.com/plants

const url = `https://plant-application-data.onrender.com/`;

let getData = async (param) => {
  try {
    let res = await fetch(`${url}${param}?_limit=9`);
    let data = await res.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
};

let init = async(param)=>{
    let data = await getData(param);
    displayData(data);
}




let product_container = document.getElementById("product-container");
function displayData(data){
    console.log("checking")
    product_container.innerHTML="";

    data.map((elem,index)=>{
        let product_cart = document.createElement("div");
        product_cart.setAttribute("class","product_cart")

        let card_img = document.createElement("div")
        card_img.setAttribute("class","card_img")
        
        let pro_image = document.createElement("img");
        pro_image.setAttribute("class","pro_image")
        pro_image.src=elem.image_url;

        let fav_button = document.createElement("button");
        fav_button.setAttribute("class","fav_button");
        fav_button.innerHTML='<i class="fa fa-heart-o" style="font-size:25px;"></i>'

        card_img.append(pro_image,fav_button);

        let pro_details = document.createElement("div");
        pro_details.setAttribute("class","pro_details")

        let title_price_div = document.createElement("div");
        title_price_div.setAttribute("class","title_price_div")

        let p_name = document.createElement("p");
        p_name.setAttribute("class","p_name");
        p_name.innerHTML = (elem.name).toUpperCase();

        let p_price = document.createElement("p");
        p_price.setAttribute("class","p_price");
        p_price.innerHTML = elem.price;

        title_price_div.append(p_name,p_price)

        let cart_button = document.createElement("button");
        cart_button.setAttribute("class","cart_button");
        cart_button.innerHTML='<i class="fa fa-shopping-basket" style="font-size:25px;"></i>';

        pro_details.append(title_price_div,cart_button);

        product_cart.append(card_img,pro_details);

        product_container.append(product_cart)
        
     })
}


init("plants");


