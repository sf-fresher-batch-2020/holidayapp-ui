// main row element to show the hotel list
let mainRow=document.getElementById("HotelList");

// to copy the hotels once my page is loaded
let allHotelsDataCopy = [];
// getting data using fetch form API folder
let getData=()=>fetch("hotels.json").then(data=>data.json());
// returns single hotel card
let getHotelCard=singleHotelData=>{
    return `<div class="col-md-3">
    <div class="card">
    <img class="card-img-top" src="`
}
