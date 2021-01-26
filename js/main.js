document.addEventListener("DOMContentLoaded", function(){
  $('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
});
  $('.menu-btn-telefon').on('click', function(e) {
  e.preventDefault();
  $('.menu-telefon').toggleClass('menu_active');
});
  
  $( document ).ready(function() {
  new WOW().init();
});
  $('.clickme').on('click', function(e) {
        e.preventDefault();
        $('.list-services').removeClass("d-none-mobile");
        $('.list-services').addClass("list-services-block");
    })
  let question1Answer = [];
  $('.btn-question-forth12').on('click', function(e) {
        e.preventDefault();
        var checkboxes = document.getElementsByName("answer1[]");
        for (var i= 0; i<checkboxes.length; i++)
        {
          if (checkboxes[i].checked === true)
          {
            question1Answer[i] = checkboxes[i].value;
            $('#question1').modal('hide');
            $('#question2').modal('show');
          }
        }
    });
  $('.btn-question-back1').on('click', function(e) {
        e.preventDefault();
        $('#question2').modal('hide');
        $('#question1').modal('show');
    });
  let question2Answer = "";
  $('.btn-question-forth13').on('click', function(e) {
        e.preventDefault();
        var checkboxes = document.getElementsByName("answer2");
        for (var i= 0; i<checkboxes.length; i++)
        {
          if (checkboxes[i].checked === true)
          {
            question2Answer = checkboxes[i].value;
            $('#question2').modal('hide');
            $('#question3').modal('show');
          }
        }    
    });
    $('.btn-question-back2').on('click', function(e) {
        e.preventDefault();
        $('#question3').modal('hide');
        $('#question2').modal('show');
    });
    let question3Answer = "";
    $('.btn-question-forth14').on('click', function(e) {
        e.preventDefault();
        var checkboxes = document.getElementsByName("answer3");
        for (var i= 0; i<checkboxes.length; i++)
        {
          if (checkboxes[i].checked === true)
          {
            question3Answer = checkboxes[i].value;
            $('#question3').modal('hide');
            $('#question4').modal('show');
          }
        }
    });
    $('.btn-question-back3').on('click', function(e) {
        e.preventDefault();
        $('#question4').modal('hide');
        $('#question3').modal('show');
    });
    let question4Answer = "";
    $('.btn-sendQiuz').on('click', function(e) {
        e.preventDefault();
        var checkboxes = document.getElementsByName("answer4");
        for (var i= 0; i<checkboxes.length; i++)
        {
          if (checkboxes[i].checked === true)
          {
            question4Answer = checkboxes[i].value;
            $('#question4').modal('hide');
            $('#sendQiuz').modal('show');
          }
        }
    });
  let forms2 = $('.formSendQiuz');
    let validation2 = Array.prototype.filter.call(forms2, function(form) {
        form.addEventListener('submit', function(event) {
          let name = document.getElementById('SendQiuzUserName').value;
          let phone = document.getElementById('SendQiuzUserPhone').value;
            const formData = {
              'name': name,
              'phone': phone,
              'question1Answer': question1Answer,
              'question2Answer': question2Answer,
              'question3Answer': question3Answer,
              'question4Answer': question4Answer,
            };
            event.preventDefault();
            console.log(formData);
                $.ajax({
                    url: 'form3.php',
                    type: 'POST',
                    data: formData,
                    success: function() {
                        $('#sendQiuz').modal('hide');
                        $('#question1').trigger('reset');
                        $('#question2').trigger('reset');
                        $('#question3').trigger('reset');
                        $('#question4').trigger('reset');
                        $('#sendQiuz').trigger('reset');
                        $('#response').modal('show');
                    }
                });
            });
    });
  let forms = $('.needs-validation');
    let validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
                $.ajax({
                    url: 'form2.php',
                    type: 'POST',
                    data: $(this).serialize(),
                    success: function() {
                        $('#callBack').modal('hide');
                        $('#contactForm').trigger('reset');
                        $('#response').modal('show');
                    }
                });
            });
    });
});
$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i=0;i<4;i++) {
    next=next.next();
    if (!next.length) {
      next=$(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }
});
$('.scrollto a.nav-link').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,   
        easing: "linear" 
    });

    return false;
});