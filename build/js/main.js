$(document).ready(function () {

    $('input[type=text]').on('keyup', controlValueChanged);

    function controlValueChanged(e) {
        var labelId = '#lbl-' + $(this).attr('id');
        var $lbl = $(labelId);
        if ($(this).val()) {
            $lbl.addClass('input-has-text');
        } else {
            $lbl.removeClass('input-has-text');
        }
    }

        $('input').iCheck({
            checkboxClass: 'icheckbox_flat'
        });

        $('input').iCheck({
            checkboxClass: 'icheckbox_flat-blue'
        });

    var counterContainer = $('#counter');
    var maxCount = 1000;


    var angle = -35;
    var div = document.getElementById('div');
    function countNumberInterval() {
        var i = 900;
        var timerId = setInterval(function() {
            counterContainer.text(i);
            angle +=2;
            div.style.transform = 'rotate(' + angle + 'deg)';
            if (i == maxCount) clearInterval(timerId);
            i++;

        }, 100);
    }

    countNumberInterval();


});