let button=document.getElementById("Btn")

const dis=()=>
{
window.location.href="delivery.html"
}

button.addEventListener("click",dis)

button.addEventListener("click", dis);

// Define the plant object
var plant =[
  {
    name: "Xyz",
    price:"500",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxM4ZnIXUXXXUF83dODxux2ucWPwn8HzsoOWkz-RoKg&s",
  },
  {
    name: "Xyz",
    price:"700",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-mijo902Gp4utGBZCh0oWGqqUbbedMF6IVDCNe-t0g&s",
  },
  {
    name: "Xyz",
    price:"700",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-mijo902Gp4utGBZCh0oWGqqUbbedMF6IVDCNe-t0g&s",
  }
  ,
  {
    name: "Xyz",
    price:"700",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-mijo902Gp4utGBZCh0oWGqqUbbedMF6IVDCNe-t0g&s",
  }
];

var plantJSON = JSON.stringify(plant);

localStorage.setItem("plant", plantJSON);

var plantJSON=localStorage.getItem("plant");
var plant=JSON.parse(plantJSON);


let container=document.getElementById("items");



plant.map((elem, index)=> 
{
  let scroll=document.createElement("div")
  scroll.classList.add("scroll-item")

  let imgdiv=document.createElement("div")

  let img=document.createElement("img")
   img.src=elem.image;

   imgdiv.append(img);


  let datadiv=document.createElement("div")


  let p=document.createElement("p")
  p.textContent=elem.name

  let p1=document.createElement("p")
  p1.textContent=elem.name


  let input=document.createElement("input")
  input.id="Qnt"
  input.type="number"
  input.placeholder="Enter quantity"

  let Btn=document.createElement("button");
  Btn.id="Remove";

  let icon = document.createElement("i");
  icon.classList.add("fa", "fa-trash", "fa-2x");
  icon.style.color = "rgb(53, 94, 0)";
  
  Btn.appendChild(icon);
  Btn.addEventListener("click",()=>
  {
  
    plant.splice(index,1);
    localStorage.setItem("plant", JSON.stringify(plant));
    container.removeChild(scroll);
  });

  datadiv.append(p,p1,input,Btn)

  scroll.append(imgdiv,datadiv);
  container.appendChild(scroll)

});




let total=document.createElement("div")
total.id="total"

let p1=document.createElement("p")
p1.textContent="Sales"

let p2=document.createElement("p")
p2.textContent="200"

let p3=document.createElement("p")
p3.textContent="Delivery"

let p4=document.createElement("p")
p4.textContent="150"

let p5=document.createElement("p")
p5.textContent="Total"

let p6=document.createElement("p")
p6.textContent="350"


let totaldiv1=document.createElement("div");
totaldiv1.append(p1,p2)

let totaldiv2=document.createElement("div");
totaldiv2.append(p3,p4)

let totaldiv3=document.createElement("div");
totaldiv3.append(p5,p6)

total.append(totaldiv1,totaldiv2,totaldiv3)


container.append(total)









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




