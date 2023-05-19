let button=document.getElementById("Btn");

button.addEventListener('click', myFun);

function myFun() {
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;
    let input3 = document.getElementById('input3').value;
    let input4 = document.getElementById('input4').value;

    if (input1 == '' && input2 == '' && input3 == '' && input4 == '') {
        alert('Please enter all the details');
    }else if(input1 === ''){
        alert('please enter the first name')
    }
     else if (!/^[a-zA-Z]+$/.test(input1)) {
        alert('Firstname should only contain letters');
    }else if(input2 === ''){
        alert('please enter last name')
    }else if (!/^[a-zA-Z]+$/.test(input2)) {
        alert('Lastname should only contain letters');
    }else if(input3 === ''){
        alert('please enter mobile number')
    }
     else if (!/^\d{10}$/.test(input3)) {
        alert('Mobile number should be a 10-digit number');
    } else if(input4 === ''){
        alert('please enter the email')
    }
    else if (!/\S+@\S+\.\S+/.test(input4)) {
        alert('Please enter a valid email address');
    } else {
        window.location.href = "delivery.html";
    }
}

let arr=[];

var plantJSON = localStorage.getItem("cartlist");
var plant = JSON.parse(plantJSON);

let container = document.getElementById("items");

plant.map((elem, index)=> 
{
  let scroll = document.createElement("div");
  scroll.classList.add("scroll-item");

  let imgdiv=document.createElement("div");

  let img=document.createElement("img");
  img.src=elem.image_url;

  imgdiv.append(img);

  let datadiv=document.createElement("div");

  let p=document.createElement("p");
  p.textContent=elem.name;

  let p1=document.createElement("p");
  p1.textContent="₹ "+Math.floor(elem.price*20)

  let input = document.createElement("input");
  input.id="Qnt";
  input.type="number";
  input.placeholder="Enter quantity";
  input.defaultValue = 1

  let Btn=document.createElement("button");
  Btn.id="Remove";

  let icon=document.createElement("i");
  icon.classList.add("fa", "fa-trash", "fa-2x");
  icon.style.color = "rgb(53, 94, 0)";

  Btn.appendChild(icon);
  Btn.addEventListener("click", () => {
    plant.splice(index, 1);
    localStorage.setItem("cartlist", JSON.stringify(plant)); // Update localStorage
    container.removeChild(scroll);
  });

  input.addEventListener("input", () => {
    const img=elem.image_url;
    const name =elem.name;
    const quantity = input.value;
    const price = elem.price;
    const itemData = { quantity,price,name,img};
    const existingIndex = arr.findIndex((item) => item.name === name)
    if (existingIndex!==-1) {
      // If item with the same name already exists
      arr[existingIndex] = itemData; // Update the quantity for the existing item
    } else {
      arr.push(itemData); // Add the new item to the array
    }
    localStorage.setItem("itemData",JSON.stringify(arr));

  });

  datadiv.append(p,p1,input,Btn);

  scroll.append(imgdiv,datadiv);
  container.appendChild(scroll);
});

console.log(arr);



// let value=document.getElementById("Qnt").value

// let totalPrice = plant.reduce((acc, elem) => acc + elem.price, 0);

// console.log(totalPrice)
// console.log(value)

// let total=document.createElement("div")
// total.id="total"

// let p1=document.createElement("p")
// p1.textContent="Sales"

// let p2=document.createElement("p")
// p2.textContent=totalPrice*value

// let p3=document.createElement("p")
// p3.textContent="Delivery"

// let p4=document.createElement("p")
// p4.textContent="150"

// let p5=document.createElement("p")
// p5.textContent="Total"

// let p6=document.createElement("p")
// p6.textContent="350"


// let totaldiv1=document.createElement("div");
// totaldiv1.append(p1,p2)

// let totaldiv2=document.createElement("div");
// totaldiv2.append(p3,p4)

// let totaldiv3=document.createElement("div");
// totaldiv3.append(p5,p6)

// total.append(totaldiv1,totaldiv2,totaldiv3)


// container.append(total)









// let button = document.getElementById("Btn");

// const dis = () => {
//   window.location.href = "delivery.html";
// };

// button.addEventListener("click", dis);

// // Define the plant object
// var plant = [
//   {
//     name: "Sunflower",
//     image: "path/to/sunflower.jpg",
//   },
//   {
//     name: "Rose",
//     image: "path/to/rose.jpg",
//   },
// ];

// var plantJSON = JSON.stringify(plant);

// localStorage.setItem("plant", plantJSON);

// var plantJSON = localStorage.getItem("plant");
// var plant = JSON.parse(plantJSON);

// let container = document.getElementById("items");
// plant.map((elem, index) => {
//   let scroll = document.createElement("div");
//   scroll.classList.add("scroll-item");

//   let imgdiv = document.createElement("div");

//   let img = document.createElement("img");
//   img.src = elem.image;

//   imgdiv.append(img);

//   let datadiv = document.createElement("div");

//   let p = document.createElement("p");
//   p.textContent = elem.name;

//   let p1 = document.createElement("p");
//   p1.textContent = elem.name;

//   let p2 = document.createElement("p");
//   p2.textContent = "QNTY:";

//   let input = document.createElement("input");

//   let Btn = document.createElement("button");
//  Btn.id="Remove"
  //Btn.textContent="Remove";

//   datadiv.append(p, p1, p2, input, Btn);

//   scroll.append(imgdiv, datadiv);

//   container.appendChild(scroll);
// });






