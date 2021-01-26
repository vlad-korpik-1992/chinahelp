$(document).ready(function() {
    $('#send').click(function(e) {
        e.preventDefault();
        let x = document.getElementById('name').value;
        if (x === "") {
            document.getElementById('status').textContent = "Укажите Ваше имя";
            return false;
        }
        x =  document.getElementById('email').value;
        if (x === "") {
            document.getElementById('status').textContent = "Укажите Ваш E-mail";
            return false;
        } else {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(x)){
                document.getElementById('status').textContent = "Некорректный E-mail";
                return false;
            }
        }
        x =  document.getElementById('phone').value;
        if (x === "") {
            document.getElementById('status').textContent = "Укажите Ваш номер телефона";
            return false;
        } else {
            let re = /^\+375[0-9]{9}$/g;
            if(!re.test(x)){
                document.getElementById('status').textContent = "Укажите номер телефона в формате +375ХХХХХХХХХ";
                return false;
            }
        }
        x =  document.getElementById('message').value;
        if (x === "") {
            document.getElementById('status').textContent = "Вы не написали сообщение";
            return false;
        }

        document.getElementById('status').classList.remove('red-text');
        document.getElementById('status').textContent = "Отправка...";

        const formData = {
            'name': $('input[name=name]').val(),
            'email': $('input[name=email]').val(),
            'phone': $('input[name=phone]').val(),
            'message': $('textarea[name=message]').val(),
        };

        $.ajax({
            url: "form.php",
            type: "POST",
            data: formData,
            success: function() {
                $('#contact-form').trigger('reset');
                $('#status').text("Ваше сообщение отправлено!");
                setTimeout(function () {
                    $('#status').text("").addClass("red-text");
                }, 2000);
                ym(60183874, 'reachGoal', 'sendamessage');
            },
            error: function (jqXHR) {
                $('#status').text(jqXHR);
            }
        });
    });
});