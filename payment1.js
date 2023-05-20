
// let next=document.getElementById("Next2")

// const Next2=()=>
// {
//     window.location.href="done.html"
// }
// next.addEventListener("click",Next2)

let prev =document.getElementById("Prev2")

const Prev2=()=>
{
    window.location.href="payment.html"
}
prev.addEventListener("click",Prev2)



function formatCardNumber(event) {
    const input = event.target;
const inputValue = input.value.replace(/\D/g, '');
const formattedValue = inputValue.slice(0, 16).replace(/(.{4})/g, '$1 ');
input.value = formattedValue;
}

document.getElementById("Next2").addEventListener("click", validateForm);



function validateForm() {
var cardNumber = document.getElementById("card-number").value.replace(/\s/g, '');
var expirationMonth = document.getElementById("expiration-month").value;
var expirationYear = document.getElementById("expiration-year").value;
var cvv = document.getElementById("cvv").value;










if(cardNumber === ''  && expirationMonth === '' && expirationYear === '' && cvv === '')
{
    alert("Please Enter All Details");
   
}else if(cardNumber === '' )
{
    alert('please Enter Card Number');
}else if(expirationMonth === '')
{
    alert('please Enter Expiration Month');
}else if(expirationYear === '')
{
    alert('please Enter The Year');
}else if(cvv === '')
{
    alert('please Enter The cvv');
} else if(cardNumber.length !== 16 || !/^\d+$/.test(cardNumber))
{
    alert('please enter 16 digit number')

}else if(expirationMonth.length !== 2 || expirationYear.length !== 2 || !/^\d+$/.test(expirationMonth) || !/^\d+$/.test(expirationYear))
{
    alert('please enter 2 digit number of MM/YY')
}else if(cvv.length !== 3 || !/^\d+$/.test(cvv))
{
    alert('please enter 3 digit number of cvv');
}
else {

    
var person = prompt("Please enter your OTP", "");
const totalPrice=plant.reduce((total, item) => total + item.price * item.quantity, 0);

const totalcharge=plant.reduce((total, item) => total + item.quantity*10, 0);



const Total=totalPrice*20+totalcharge;


if (person === "1234") {
alert("We are processing your payment of ₹ "+Total);
window.location.href = "paymentsuccessful.html";
} else {
alert("Wrong OTP, Try Again");
}

}
}


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
p1.textContent="Sales:"

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