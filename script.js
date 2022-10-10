var tomato = 1;
var carrot = 1;
var cabbage = 1;
var total=450;

var tomato_neg = document.getElementById("tomato-neg");
var tomato_pos = document.getElementById("tomato-pos");
var tomato_count = document.getElementById("tomato-count");
var tomato_price = document.getElementById("tomato-price");
var carrot_neg = document.getElementById("carrot-neg");
var carrot_pos = document.getElementById("carrot-pos");
var carrot_count = document.getElementById("carrot-count");
var carrot_price = document.getElementById("carrot-price");
var cabbage_neg = document.getElementById("cabbage-neg");
var cabbage_pos = document.getElementById("cabbage-pos");
var cabbage_count = document.getElementById("cabbage-count");
var cabbage_price = document.getElementById("cabbage-price");
var total_price = document.getElementById("total");
var delivery_price = document.getElementById("delivery");
var pay=document.getElementById("pay");

function decreaseCount(id) {
  if (id === "tomato-neg") {
    tomato = tomato - 1;
    if (tomato < 0) alert("Error!!! tomato cannot be less than 0.");
    else {
      tomato_count.innerText = tomato;
      tomato_price.innerHTML = "₹" + tomato*200;
      total-=200;
      total_price.innerText="₹"+total;
    }
  } else if (id === "carrot-neg") {
    carrot = carrot - 1;
    if (carrot < 0) alert("Error!!! carrot cannot be less than 0.");
    else {
      carrot_count.innerText = carrot;
      carrot_price.innerHTML = "₹" + carrot * 150;
      total-=150;
      total_price.innerText="₹"+total;
    }
  } else if (id === "cabbage-neg") {
    cabbage = cabbage - 1;
    if (cabbage < 0) alert("Error!!! cabbage cannot be less than 0.");
    else {
      cabbage_count.innerText = cabbage;
      cabbage_price.innerHTML = "₹" + cabbage * 100;
      total-=100;
      total_price.innerText="₹"+total;
    }
  }
  if(total>1000)
    delivery_price.innerText=0;
  else if(total<1000)
    delivery_price.innerText=50;
  pay.innerText="₹"+(total+parseInt(delivery_price.innerHTML));

}

function increaseCount(id) {
  if (id === "tomato-pos") {
    tomato = tomato + 1;
    tomato_count.innerText = tomato;
    tomato_price.innerHTML = "₹" + tomato*200;
    total+=200;
    total_price.innerText="₹"+total;
  } else if (id === "carrot-pos") {
    carrot = carrot + 1;
    carrot_count.innerText = carrot;
    carrot_price.innerHTML = "₹" + carrot * 150;
    total+=150;
    total_price.innerText="₹"+total;
  } else if (id === "cabbage-pos") {
    cabbage = cabbage + 1;
    cabbage_count.innerText = cabbage;
    cabbage_price.innerHTML = "₹" + cabbage * 100;
    total+=100;
    total_price.innerText="₹"+total;
  }
  if(total>1000)
    delivery_price.innerText=0;
  else
    delivery_price.innerText=50;
  pay.innerText="₹"+(total+ parseInt(delivery_price.innerText));

}
