
// data belum urut
var produk = [{
  nama: "Indomie",
  harga: "3000",
  rating: "5",
  likes: "150"}, {
  nama: "Laptop",
  harga: "4000000",
  rating: "4.5",
  likes: "123"}, 
  {
  nama: "Aqua",
  harga: "3000",
  rating: "4",
  likes: "350"},
  {
   nama: "Smart TV", 
   harga: "4000000", 
   rating: "4.5", 
   likes :"42"}, 
 {
   nama: "Headphone", 
   harga: "4000000", 
   rating: "3.5", 
   likes:"9"},
 {
    nama: "Very Smart TV", 
    harga: "4000000", 
    rating: "3.5", 
    likes: "87"},
]

// jika mau input data baru
/* var obj = {}; 
var nama = "nama";
var harga = "harga";
var rating = "rating";
var likes = "likes";
{
  obj['nama'] = prompt("masukan nama...");
  obj["harga"] = prompt("masukan harga...");
  obj['rating'] = prompt("masukan rating...");
  obj['likes'] = prompt("masukan likes...");
  produk.push(obj);
} */




/* mengurutkan dengan prioritas harga terendah, rating tertinggi, like terbanyak */

produk.sort(
  function(a, b) {
    if (a.harga === b.harga){
        if (a.rating === b.rating) {
        return (b.likes - a.likes);}
        else {
        return(b.rating - a.rating);}
     } else {
      return (a.harga - b.harga);
    }
  })
    console.log(produk);




