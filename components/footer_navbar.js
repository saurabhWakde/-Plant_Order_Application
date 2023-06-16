function navbar(){
    return `
    <div id="box1">
    <a href = "index.html"><img src="https://www.green-paradise.id/Support/img/logo.jpg" alt="Green Paradise"></a>        
</div>
<div id="box2">
    <a href="productPage.html">
        <p id="cat">Catalog</p>
    </a>
    <a href="">
        <p id="sale">Sales</p>
    </a>
    <a href="personalinfo.html">
        <p id="delpay">Delivery & Payment</p>
    </a>
    <a href="">
        <p id="con">Contact</p>
    </a>
</div>
<div id="box3">
    <div>
        <button id="search"><img src="search.png" id="ipu-img"></button>
    </div>
    <div>
        <a href = "personalinfo.html">
            <img src= "https://www.pngitem.com/pimgs/m/45-459393_cart-shopping-cart-icon-png-white-transparent-png.png" id="cart-img">
        </a>
    </div>
    <div>
        <select id="sel1">
            <option value="eng">Eng</option>
            <option value="hindi">Hindi</option>
        </select>
    </div>
    <div>
    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AfgMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAABQYBAwQC/8QANhAAAgIBAgIGBwYHAAAAAAAAAAECAwQFESExEiJBUXHBEyMyUoGRoQZDYXKx4RQzQmKi0fD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AvoAAAAAAAAAAAAAAAAAAAAAAAAAAHRi4d+W9qo9Xtk+SOjS9OeU/SW7qlf5FhhCNcVGEVGK4JLsAjKNEqj/PslN90eCOuOm4ceVEX47s6gByT0zDl9wl+VtHFkaHFrfHtcX7s+KJgAVHIxrcafQug4t8u5/E1FwuqhdW67YqUX2Mreo4MsOzg3KqXsy8mBxgAAAAAAAG/Dx3k5EKlyb4vuXaaCb+z1PVtua4t9Ffq/ICWrhGuEYQW0YrZI9AyBgGQBgGQBg1ZNEMimVVnKS+T7zcAKdbXKm2dc1tKL2Z4JXX6VDIhal7cePiiKAAAAAABZNEjtp8Pxbf1K2WPQ59LAS92TXn5gSBkwZAAAAAAAAAiftEl/DVPtVnkyBJ37RT9TTDtcm/kv3IIAAAAAAEtoF6jdOmT4TW8fFf99CJPVc5VzjOD2lF7pgXEyc2FlQy6I2R4PlKPczpAAAAAAABxanmxxKHs/Wy4RXmBEa1f6bNcY+zWuj8e0jzLe73fFmAAAAAAAAAN+JlWYlqnU/zRfJoseFnU5ceo9p9sHzRVTKezTT2a7UBcwVqjVsupbOSsX964/M6o669utj/ACn+wE2CElrsv6MdfGX7HHkanlXppz6EX2Q4fUCZz9SqxU4p9O33U+XiV2+6y+12Wy6UmawAAAAAAAAAO3B067L6y6lXvtc/DvNuk6f/ABEvTXL1UXwXvP8A0WFJJbJbLuA48bS8Wjbqekl70+P0PWTp2NkcZ19GXvR4M6wBBW6HNP1N0Wu6a2/Q0S0fMXKEX4SLIAK3HR8x84wj4yOmnQ3uvT3fCC8ybAHNj4ONRHaFUePNy4tmjJ0nGu3dcXVLvjy+RIACqZmFdhy9Yt4PlOPI5i5WQjZCUJpSi1s0ytangvDt3ju6pey+78AOIAADdiUSyciFUeHSfF9y7TSTP2eqW9tz5rqr9QJmuEa64wgtoxWyRkADIAAAAAAAAAAGrKojk0Tqnykufc+82gCm2QlXZKE1tKL2aPJJ69UoZcbF95HivxRGAf/Z" alt="" id="prof">
        <select id="sel2">
            <option></option>
            <option id="login" value ="login"><a href="signin.html">Login</a><option>
            <option id="log" value="logout"><a href="signin.html">Logout</a></option>
            <option id="ord" value="order"><a href="#">Orders</a></option>
        </select>
    </div>
</div>
    `
}


function footer (){
    return `
    <div id="f-box1">
    <div>
        <img src="https://www.green-paradise.id/Support/img/logo.jpg" alt="Green Paradise" id="logo">
    </div>
    <div>
        <img src="instalogo.png" alt="Instgram" id="logo2">
        <img src="telelogo.png" alt="TeleGram" id="logo2">
    </div>
    <div>
        <p>email: greenparadise@gmail.com</p>
    </div>
</div>
<div>
    <h5 class="colo">Catalog</h5>
    <h5>Solo</h5>
    <h5>HousePlants</h5>
    <h5>Houseplant sets</h5>
    <h5>Flower pot</h5>
    <h5>Soil & Fertilizer</h5>
</div>
<div>
    <h5 class="colo">Information</h5>
    <h5>Plant care</h5>
    <h5 >Delivery & Payment</h5>
    <h5>Privacy Policy</h5>
</div>
<div>
    <h5 class="colo">About Us</h5>
    <h5>Our Story</h5>
    <h5>Our Partners</h5>
    <h5>Work process</h5>
    <h5>Contacts</h5>
</div>
<div>
    <button><a href="#xxy">^</a></button>
</div>
    `
}

export {navbar,footer};