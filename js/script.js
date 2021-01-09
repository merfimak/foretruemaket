window.onload = function() {


$('.flowing_scroll').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
            scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 500 // скорость прокрутки// offset() - возвращает координаты
        );
    }
    return false;
});

//бургер
const header__burger = document.querySelector('.header__burger');
const menu__nav = document.querySelector('.menu__nav');
const menu__link = document.querySelectorAll('.menu__link');
header__burger.addEventListener('click', (event) => { 
  header__burger.classList.toggle('active');
  menu__nav.classList.toggle('active');
})
for (i = 0; i < menu__link.length; i++) {
  menu__link[i].addEventListener('click', (event) => { 
  header__burger.classList.toggle('active');
  menu__nav.classList.toggle('active');
})
}

//слайдер
var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  centerdSlides: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

//табы ingredients
function tabs(){
  const tabs__item = document.querySelectorAll('.tabs__item');//достаем все кнопки для табов и на каждый цепляем событие клик

  for (i = 0; i < tabs__item.length; i++) {

    tabs__item[i].addEventListener('click', (event) => { 
      tabs__item_active = document.querySelectorAll('.tabs__item.active');// при клике выбераем все элементы с класом active и убираем его
       tabs__block_active = document.querySelectorAll('.tabs__block.active');// у блоков тоже убираем active
       targen_tabs_item = event.currentTarget.getAttribute("data-tab");//берем атрибут из выбранного айтема
       targen_tabs_block = document.querySelector('#' + targen_tabs_item);// достаем нужный таб по Id
        tabs__item_active.forEach(element => {
          element.classList.remove("active");
        });
         tabs__block_active.forEach(element => {
          element.classList.remove("active");// убераем active у всех блоков кроме выбранного
        });
        event.currentTarget.classList.add("active");   // добавляем к active к тому на который клацнули
        targen_tabs_block.classList.add("active");//добавляем к active к нужному  блоку 
    })
  }
}
tabs()





$(".block_six_form").validate({
 errorPlacement: function(error, element) {
            //Custom position: first name
            if (element.attr("name") == "email" ) {
                error.insertBefore('.block_six_form');
            }
        },
             rules:{
                
                email:{
                  required: true,
                },
             },
             messages:{
               email:{
                 required: "Это поле обязательно для заполнения",
             },        
    }
        
          });



$(".block_seven_form").validate({
 errorPlacement: function(error, element) {
            if (element.attr("name") == "name" ) {
                error.insertBefore(element);
            }else if (element.attr("name") == "email" ) {
               error.insertBefore(element);
            }else if (element.attr("name") == "subject" ) {
               error.insertBefore(element);
            }
        }, rules:{
                name:{
                  required: true,
                  minlength: 4,
                  maxlength: 16,
                },
                 email:{
                  required: true,
                  email: true
                },
                subject:{
                   required: true,
                  minlength: 4,
                  maxlength: 16,
                },
             },
             messages:{
               name:{
                 required: "Это поле обязательно для заполнения",
                 minlength: "Логин должен быть минимум 4 символа",
                 maxlength: "Максимальное число символов - 16",
             },
               email:{
               required: "это поле обязательно для заполнения",
               email: "это поле обязательно для заполнения",
               },    
               subject:{
               required: "Это поле обязательно для заполнения",
               minlength: "Пароль должен быть минимум 6 символа",
               maxlength: "Пароль должен быть максимум 16 символов",
               },
               
    }
        
          });



}


