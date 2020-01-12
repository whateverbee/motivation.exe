function randomItem() {
  var x = list[Math.floor(Math.random() * list.length)];
  document.getElementById("message").innerHTML = x;
};

var list = [
  "You are capable, you are resilient, you are a fucking delight.", 
  "Hey, you've got this!", 
  "You are worthy of kindness and care.",
  "You are a work of art.",
  "Be nicer to yourself.",
  "Today is a better day because you are in it.",
  "You are already wonderful.",
  "It's okay if today isn't your day. There's always tomorrow.",
  "Celebrate a small win."
];

window.onload = randomItem;