


var plantJSON=localStorage.getItem("itemData");
var plant=JSON.parse(plantJSON);
var itemDataJSON = localStorage.getItem("itemData");
var itemData = JSON.parse(itemDataJSON);

let container=document.getElementById("items");

plant.map((elem, index)=> 
{
  let scroll = document.createElement("div");
  scroll.classList.add("scroll-item");

  let imgdiv=document.createElement("div");

  let img=document.createElement("img");
  img.src=elem.img;

  imgdiv.append(img);

  let datadiv=document.createElement("div");

  let p=document.createElement("p");
  p.textContent=elem.name;

  let p1=document.createElement("p");
  p1.textContent="₹: "+Math.floor(elem.price*20*elem.quantity);

  let input=document.createElement("p");

  input.textContent="Qnty: "+elem.quantity
  


  datadiv.append(p,p1,input);

  scroll.append(imgdiv,datadiv);
  container.appendChild(scroll);
});


const totalPrice=plant.reduce((total, item) => total + item.price * item.quantity, 0);

const totalcharge=plant.reduce((total, item) => total + item.quantity*10, 0);

console.log(totalPrice*20);
console.log(totalcharge)

const Total=totalPrice*20+totalcharge;
console.log(Total)

let total=document.createElement("div")
total.id="total"

let p1=document.createElement("p")
p1.textContent="Paid"

let p2=document.createElement("p")
p2.textContent="₹ "+Math.floor(totalPrice*20)

let p3=document.createElement("p")
p3.textContent="Delivery:"

let p4=document.createElement("p")
p4.textContent="₹ "+Math.floor(totalcharge)

let p5=document.createElement("p")
p5.textContent="Total"

let p6=document.createElement("p")
p6.textContent="₹ "+Math.floor(Total)


let totaldiv1=document.createElement("div");
totaldiv1.append(p1,p2)

let totaldiv2=document.createElement("div");
totaldiv2.append(p3,p4)

let totaldiv3=document.createElement("div");
totaldiv3.append(p5,p6)

total.append(totaldiv1,totaldiv2,totaldiv3)


container.append(total)



let del=()=>
{
    localStorage.removeItem("cartlist")
    localStorage.removeItem("itemData")
    window.location.href="index.html";
   
}


document.getElementById("Next2").addEventListener("click",del)