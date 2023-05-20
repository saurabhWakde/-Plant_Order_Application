import {navbar,footer} from "./components/footer_navbar.js"

var nav = document.getElementById("navbar");
nav.innerHTML = navbar();

var foot = document.getElementById("footer");
foot.innerHTML = footer();


let cart_list = JSON.parse(localStorage.getItem("cartlist")) || [];
let favlistarr = JSON.parse(localStorage.getItem("favlist")) || [];
window.onload = () => {
  let addToCart = (elem) => {
    let item = cart_list.filter((ele) => {
      return ele.id == elem.id;
    });

    if (item.length == 0) {
      cart_list.push(elem);
      localStorage.setItem("cartlist", JSON.stringify(cart_list));
      alert("Success!Item added to your cart");
    } else {
      alert("This item is already in your cart");
    }

    window.location.href = "personalinfo.html";
  };

  let addToFav = (elem, fav_button) => {
    let item = favlistarr.filter((ele) => {
      return elem.id == ele.id;
    });
    console.log("addtofav item check", item);

    if (item.length == 0) {
      favlistarr.push(elem);
      localStorage.setItem("favlist", JSON.stringify(favlistarr));
    } else {
      let index = favlistarr.indexOf(elem);
      // console.log(index)
      favlistarr = favlistarr.filter((ele) => {
        return elem.id != ele.id;
      });
      localStorage.setItem("favlist", JSON.stringify(favlistarr));
      fav_button.innerHTML = `<i class="fa fa-heart-o" style="font-size:25px;color:#486d00"></i>`;
    }
  };

  let product = JSON.parse(localStorage.getItem("productToDisplay"));
  let products_mainContainer = document.getElementById(
    "products_mainContainer"
  );

  let product_image_div = document.createElement("div");
  product_image_div.setAttribute("class", "product_image_div");

  let product_image = document.createElement("img");
  product_image.setAttribute("class", "product_image");
  product_image.src = product.image_url;

  let product_image_text = document.createElement("div");
  product_image_text.setAttribute("class", "product_image_text");

  let image_text = document.createElement("p");
  image_text.innerHTML = `Type :${product.type}<hr>
      Family/Scientific Name:${product.scientific_name}<hr>
      Height:${product.height}<hr>
      Light Requirement🌤️:${product.light_requirement}<hr>
      Water Requirement💧:${product.water_requirement}`;
  product_image_text.append(image_text);
  product_image_div.append(product_image, product_image_text);

  let product_des_div = document.createElement("div");
  product_des_div.setAttribute("class", "product_des_div");

  let pro_head_div = document.createElement("div");
  pro_head_div.setAttribute("class", "pro_head_div");

  let name_image_div = document.createElement("div");
  name_image_div.setAttribute("class", "name_image_div");

  let name_h1 = document.createElement("h1");
  name_h1.setAttribute("class", "name_h1");
  name_h1.innerHTML = product.name;

  let name_underline = document.createElement("img");
  name_underline.setAttribute("class", "name_underline");
  name_underline.src = "./productpageimages/underlineshort.png";

  let stock_status = document.createElement("p");
  stock_status.setAttribute("class", "stock_status");
  if (product.in_stock) {
    stock_status.innerHTML = "In stock";
    stock_status.style.color = "green";
  } else {
    stock_status.innerHTML = "Out of stock";
    stock_status.style.color = "red";
  }

  name_image_div.append(name_h1, name_underline);
  pro_head_div.append(name_image_div, stock_status);

  let pro_des_div = document.createElement("div");
  pro_des_div.setAttribute("class", "pro_des_div");

  let product_description = document.createElement("p");
  product_description.setAttribute("class", "product_description");
  product_description.innerHTML = product.description;

  let product_price = document.createElement("h3");
  product_price.setAttribute("class", "product_price");
  product_price.innerHTML = "PRICE: Rs:" + Math.round(product.price * 30);

  pro_des_div.append(product_description);

  let pro_button_div = document.createElement("div");
  pro_button_div.setAttribute("class", "pro_button_div");

  let addToCartbutton = document.createElement("button");
  addToCartbutton.setAttribute("class", "addToCartbutton");
  addToCartbutton.innerHTML = "Add To Cart";
  addToCartbutton.addEventListener("click", () => {
    addToCart(product);
  });

  let addTofavbutton = document.createElement("button");
  addTofavbutton.setAttribute("class", "addTofavbutton");
  addTofavbutton.innerHTML = "Add To Cart";
  addTofavbutton.addEventListener("click", () => {
    addTofavbutton.innerHTML = `<i class="fa fa-heart" style="font-size:25px;color:#486d00"></i>`;
    addToFav(product, addTofavbutton);
  });

  let favcheck = favlistarr.filter((ele) => {
    return product.id == ele.id;
  });
  if (favcheck.length == 0) {
    addTofavbutton.innerHTML =
      '<i class="fa fa-heart-o" style="font-size:25px;"></i>';
  } else {
    addTofavbutton.innerHTML = `<i class="fa fa-heart" style="font-size:25px;color:#486d00"></i>`;
  }

  pro_button_div.append(addToCartbutton, addTofavbutton);

  let pro_care_div = document.createElement("div");
  pro_care_div.setAttribute("class", "pro_care_div ");

  let care_head = document.createElement("h3");
  care_head.setAttribute("class", "care_head");
  care_head.innerHTML = "CARE";

  let care_des = document.createElement("p");
  care_des.setAttribute("class", "care_des");
  care_des.innerHTML = product.care_instruction;

  pro_care_div.append(care_head, care_des, product_price);

  product_des_div.append(
    pro_head_div,
    pro_des_div,
    pro_care_div,
    pro_button_div
  );

  products_mainContainer.append(product_image_div, product_des_div);
};
