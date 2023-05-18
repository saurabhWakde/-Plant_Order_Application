// https://plant-application-data.onrender.com/plants

const url = `https://plant-application-data.onrender.com/`;
let favlistarr = JSON.parse(localStorage.getItem("favlist")) ||[];
let cart_list = JSON.parse(localStorage.getItem("cartlist")) ||[];

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
        product_cart.setAttribute("class","product_cart");
       

        let card_img = document.createElement("div")
        card_img.setAttribute("class","card_img")
        
        let pro_image = document.createElement("img");
        pro_image.setAttribute("class","pro_image")
        pro_image.src=elem.image_url;
        pro_image.addEventListener("click",()=>{
          goToProductDetails(elem);
        
        });

        let fav_button = document.createElement("button");
        fav_button.setAttribute("class","fav_button");
        let favcheck = favlistarr.filter((ele)=>{
          return elem.id == ele.id;
        })
        if(favcheck.length==0){
          fav_button.innerHTML='<i class="fa fa-heart-o" style="font-size:25px;"></i>'
          
        }else{
          fav_button.innerHTML=`<i class="fa fa-heart" style="font-size:25px;color:#486d00"></i>`
        }
       
        fav_button.addEventListener("click",()=>{
          fav_button.innerHTML=`<i class="fa fa-heart" style="font-size:25px;color:#486d00"></i>`
            addToFav(elem,fav_button);
          });

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
        p_price.innerHTML = "Rs: "+Math.round(elem.price*30);

        title_price_div.append(p_name,p_price)

        let cart_button = document.createElement("button");
        cart_button.setAttribute("class","cart_button");
        cart_button.innerHTML='<i class="fa fa-shopping-basket" style="font-size:25px;"></i>';
        cart_button.addEventListener("click",()=>{
            addToCart(elem)
          });

        pro_details.append(title_price_div,cart_button);

        product_cart.append(card_img,pro_details);

        product_container.append(product_cart)
        
     })
}



let addToCart = (elem)=>{
let item = cart_list.filter((ele)=>{
  return ele.id == elem.id;
});

if(item.length == 0){
  cart_list.push(elem);
  localStorage.setItem("cartlist",JSON.stringify(cart_list));
  alert("Success!Item added to your cart")
}
else{
  alert("This item is already in your cart")
}
}


let addToFav = (elem,fav_button)=>{
  let item = favlistarr.filter((ele)=>{
    return elem.id == ele.id;
  })
  console.log("addtofav item check", item)

  if(item.length==0){
    favlistarr.push(elem);
    localStorage.setItem("favlist",JSON.stringify(favlistarr));
  }else{
    let index = favlistarr.indexOf(elem);
    // console.log(index)
    favlistarr= favlistarr.filter((ele)=>{
      return elem.id != ele.id;
    })
    localStorage.setItem("favlist",JSON.stringify(favlistarr));
    fav_button.innerHTML=`<i class="fa fa-heart-o" style="font-size:25px;color:#486d00"></i>`
  }
}

let goToProductDetails = (elem)=>{
localStorage.setItem("productToDisplay",elem);
window.location.href='productDetails.html'
}

const checkboxes = document.querySelectorAll('#filtercats input[type="checkbox"]');

// Add event listener to each checkbox
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    // Uncheck all checkboxes except the one that was just clicked
    checkboxes.forEach(function(checkbox) {
      if (checkbox !== this) {
        checkbox.checked = false;
      }
    }, this);
  });
});

const checkboxes2 = document.querySelectorAll('#filterprice input[type="checkbox"]');

// Add event listener to each checkbox
checkboxes2.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    // Uncheck all checkboxes except the one that was just clicked
    checkboxes2.forEach(function(checkbox) {
      if (checkbox !== this) {
        checkbox.checked = false;
      }
    }, this);
  });
})

init("plants");


