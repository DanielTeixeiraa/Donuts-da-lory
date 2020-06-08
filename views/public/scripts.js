const cards = document.getElementsByClassName("card-image");
const cart = document.getElementsByClassName("card");
console.log( "Cabin" );    
for (let card of cards) {
  card.addEventListener("click", function () {
    const cardID = card.getAttribute("id");
    window.location.href = `/donut?id=${cardID}`;
  }); 
}
 