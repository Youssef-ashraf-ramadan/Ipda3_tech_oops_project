
// pagination 


let buttons = document.querySelectorAll('.page-item');
let carditem = document.querySelectorAll('.cards-item');

let entercode = document.querySelector('.entercode');
let loginbutton = document.querySelector('.login-link');
let carselect = document.querySelector('.car-select')
for(let i = 0; i < buttons.length; i++){
buttons[i].addEventListener('click' , function(){
    for(let j = 0;  j < carditem.length; j++){
        carditem[j].classList.add('delete')
    }
    carditem[i].classList.remove('delete')
})

}

$('.fa-star').click(function() {
    $(this).toggleClass('far fas');
  })
  var data;
  $('.car-select').change(function() {
    if(carselect.value != "عربيات"){
        data = $('.information-select').html();
        $('.information-select').empty();
    }else{
        $('.information-select').html(data);
    }
})
// prevent default from login if input is empty 
loginbutton.addEventListener('click' , function(e){
    if(entercode.value == ""){
        e.preventDefault()
        alert('empty data')
    }
})



	
