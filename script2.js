const container = document.querySelector('.container');
const seats = document.querySelector('.row .seat:not(.occupied)');
const count=document.getElementById('count');
const total=document.getElementById('total');
const movieSelect=document.getElementById('movie');


let ticketPrice = +movieSelect.Value;
//save movie index and priice 
/*function setMovieData(movieIndex , moviePrice){
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice);
}*/

//function count
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    
    
    // copy selected seats into array
    /*const seatsIndex = [...selectedSeats].map(function(seat) {
         return [...seats].indexOf(seat)}); 
    
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));*/
    //map through array 
    //return new array indexes 

    const selectedSeatsCount= selectedSeats.length;

    count.innerText = selectedSeatsCount ;
    total.innerText = selectedSeatsCount * ticketPrice ;

}
//get data from localstorage and populate ui
/*function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats !== null && selectedSeats.length >0 ){
        seats.forEach((seat,index)=>{
            if(selectedSeats.indexOf(index) > -1) {
            seat.classList.add('selected');
        }
        
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null ){
        movieSelect.selectedIndex = selectedMovieIndex ;
    }

}*/

// movie select eveny
movieSelect.addEventListener('change' , e => {
    ticketPrice = +e.target.value ;
    setMovieData(e.target.selectedIndex , e.target.value);
    updateSelectedCount();
});

//  seat clickk event 
container.addEventListener('click', e => {
   
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
        {
   e.target.classList.toggle('selected');
    updateSelectedCount();
 
    }
});
//console.log(typeof ticketPrice);
//initail count
updateSelectedCount();