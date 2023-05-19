// https://plant-application-data.onrender.com/plants

const url = `https://plant-application-data.onrender.com/`;
let favlistarr = JSON.parse(localStorage.getItem("favlist")) || [];
let cart_list = JSON.parse(localStorage.getItem("cartlist")) || [];

let getData = async (param) => {
  try {
    let res = await fetch(`${url}${param}?_limit=9`);
    let data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

let init = async (param) => {
  let data = await getData(param);
  displayData(data);
};

let product_container = document.getElementById("product-container");
function displayData(data) {
  console.log("checking");
  product_container.innerHTML = "";

  data.map((elem, index) => {
    let product_cart = document.createElement("div");
    product_cart.setAttribute("class", "product_cart");

    let card_img = document.createElement("div");
    card_img.setAttribute("class", "card_img");

    let pro_image = document.createElement("img");
    pro_image.setAttribute("class", "pro_image");
    pro_image.src = elem.image_url;
    pro_image.addEventListener("click", () => {
      goToProductDetails(elem);
    });

    let fav_button = document.createElement("button");
    fav_button.setAttribute("class", "fav_button");
    let favcheck = favlistarr.filter((ele) => {
      return elem.id == ele.id;
    });
    if (favcheck.length == 0) {
      fav_button.innerHTML =
        '<i class="fa fa-heart-o" style="font-size:25px;"></i>';
    } else {
      fav_button.innerHTML = `<i class="fa fa-heart" style="font-size:25px;color:#486d00"></i>`;
    }

    fav_button.addEventListener("click", () => {
      fav_button.innerHTML = `<i class="fa fa-heart" style="font-size:25px;color:#486d00"></i>`;
      addToFav(elem, fav_button);
    });

    card_img.append(pro_image, fav_button);

    let pro_details = document.createElement("div");
    pro_details.setAttribute("class", "pro_details");

    let title_price_div = document.createElement("div");
    title_price_div.setAttribute("class", "title_price_div");

    let p_name = document.createElement("p");
    p_name.setAttribute("class", "p_name");
    p_name.innerHTML = elem.name.toUpperCase();

    let p_price = document.createElement("p");
    p_price.setAttribute("class", "p_price");
    p_price.innerHTML = "Rs: " + Math.round(elem.price * 30);

    title_price_div.append(p_name, p_price);

    let cart_button = document.createElement("button");
    cart_button.setAttribute("class", "cart_button");
    cart_button.innerHTML =
      '<i class="fa fa-shopping-basket" style="font-size:25px;"></i>';
    cart_button.addEventListener("click", () => {
      addToCart(elem);
    });

    pro_details.append(title_price_div, cart_button);

    product_cart.append(card_img, pro_details);

    product_container.append(product_cart);
  });

  let paginationdiv = document.getElementById("paginationdiv");
  paginationdiv.innerHTML = "";

  let btn1 = document.createElement("button");
  let btn2 = document.createElement("button");
  let btn3 = document.createElement("button");
  let btn4 = document.createElement("button");
  let btn5 = document.createElement("button");
  let btn6 = document.createElement("button");

  btn1.setAttribute("class", "btn1 btnpage");
  btn1.innerHTML = "1";
  //  btn1.style.backgroundColor="#ddd401"
  btn1.addEventListener("click", () => {
    init(`plants?_page=1&_limit=9`);
    window.location.href = "#";
    btn1.style.backgroundColor = "#ddd401";
    btn2.style.backgroundColor = "#486d00";
    btn3.style.backgroundColor = "#486d00";
    btn4.style.backgroundColor = "#486d00";
    btn5.style.backgroundColor = "#486d00";
    btn6.style.backgroundColor = "#486d00";
  });

  btn2.setAttribute("class", "btn2 btnpage");
  btn2.innerHTML = "2";
  btn2.addEventListener("click", () => {
    init(`plants?_page=2&_limit=9`);
    window.location.href = "#";
    btn2.style.backgroundColor = "#ddd401";
    btn1.style.backgroundColor = "#486d00";
    btn3.style.backgroundColor = "#486d00";
    btn4.style.backgroundColor = "#486d00";
    btn5.style.backgroundColor = "#486d00";
    btn6.style.backgroundColor = "#486d00";
  });

  btn3.setAttribute("class", "btn3 btnpage");
  btn3.innerHTML = "3";
  btn3.addEventListener("click", () => {
    init(`plants?_page=3&_limit=9`);
    window.location.href = "#";
    btn3.style.backgroundColor = "#ddd401";
    btn1.style.backgroundColor = "#486d00";
    btn2.style.backgroundColor = "#486d00";
    btn4.style.backgroundColor = "#486d00";
    btn5.style.backgroundColor = "#486d00";
    btn6.style.backgroundColor = "#486d00";
  });

  btn4.setAttribute("class", "btn4 btnpage");
  btn4.innerHTML = "4";
  btn4.addEventListener("click", () => {
    init(`plants?_page=4&_limit=9`);
    window.location.href = "#";
    btn4.style.backgroundColor = "#ddd401";
    btn1.style.backgroundColor = "#486d00";
    btn2.style.backgroundColor = "#486d00";
    btn3.style.backgroundColor = "#486d00";
    btn5.style.backgroundColor = "#486d00";
    btn6.style.backgroundColor = "#486d00";
  });

  btn5.setAttribute("class", "btn5 btnpage");
  btn5.innerHTML = "5";
  btn5.addEventListener("click", () => {
    init(`plants?_page=5&_limit=9`);
    window.location.href = "#";
    btn5.style.backgroundColor = "#ddd401";
    btn1.style.backgroundColor = "#486d00";
    btn2.style.backgroundColor = "#486d00";
    btn3.style.backgroundColor = "#486d00";
    btn4.style.backgroundColor = "#486d00";
    btn6.style.backgroundColor = "#486d00";
  });

  btn6.setAttribute("class", "btn1 btnpage");
  btn6.innerHTML = "6";
  btn6.addEventListener("click", () => {
    init(`plants?_page=6&_limit=9`);
    window.location.href = "#";
    btn6.style.backgroundColor = "#ddd401";
    btn1.style.backgroundColor = "#486d00";
    btn2.style.backgroundColor = "#486d00";
    btn3.style.backgroundColor = "#486d00";
    btn4.style.backgroundColor = "#486d00";
    btn5.style.backgroundColor = "#486d00";
  });

  paginationdiv.append(btn1, btn2, btn3, btn4, btn4, btn5, btn6);

  if (data.length != 0) {
    document.getElementById("product-display").appendChild(paginationdiv);
  }
}

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

let goToProductDetails = (elem) => {
  localStorage.setItem("productToDisplay", JSON.stringify(elem));
  window.location.href = "productDetails.html";
};

const checkboxes = document.querySelectorAll(
  '#filtercats input[type="checkbox"]'
);

// Add event listener to each checkbox
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    // Uncheck all checkboxes except the one that was just clicked
    checkboxes.forEach(function (checkbox) {
      if (checkbox !== this) {
        checkbox.checked = false;
      }
    }, this);
  });
});

const checkboxes2 = document.querySelectorAll(
  '#filterprice input[type="checkbox"]'
);

// Add event listener to each checkbox
checkboxes2.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    // Uncheck all checkboxes except the one that was just clicked
    checkboxes2.forEach(function (checkbox) {
      if (checkbox !== this) {
        checkbox.checked = false;
      }
    }, this);
  });
});

init("plants");
// initpricesort()




