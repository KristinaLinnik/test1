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


    var angle = 0;
    var direction = 'right';
    var div = document.getElementById('div');
    setInterval(function() {
        if (direction == 'right') {
            angle++;
            if (angle === 100) {
                direction = 'left';
            }
        } else {
            angle--;
            if (angle === 0) {
                direction = 'right';
            }
        }
        div.style.webkitTransform = 'rotate(' + angle + 'deg)';
        div.style.mozTransform = 'rotate(' + angle + 'deg)';
        div.style.msTransform = 'rotate(' + angle + 'deg)';
        div.style.oTransform = 'rotate(' + angle + 'deg)';
        div.style.transform = 'rotate(' + angle + 'deg)';
        // counterContainer.text(Math.round(angle/100*100));
    }, 30);

    function countNumberInterval() {
        var i = 900;
        var timerId = setInterval(function() {
            counterContainer.text(i);
            if (i == maxCount) clearInterval(timerId);
            i++;

        }, 100);
    }

    countNumberInterval();


});

//
// $(document).ready(function () {
//     var angle = 0;
//     var direction = 'right';
//     var div = $('#div');
//     var mark = $('#mark');
//     setInterval(function() {
//         if (direction == 'right') {
//             angle++;
//             if (angle === 180) {
//                 direction = 'left';
//             }
//         } else {
//             angle--;
//             if (angle === 0) {
//                 direction = 'right';
//             }
//             }
//             // div.style.webkitTransform = 'rotate(' + angle + 'deg)';
//             // div.style.mozTransform = 'rotate(' + angle + 'deg)';
//             // div.style.msTransform = 'rotate(' + angle + 'deg)';
//             // div.style.oTransform = 'rotate(' + angle + 'deg)';
//             div.style.transform = 'rotate(' + angle + 'deg)';
//             mark.text(Math.round(angle / 180 * 100));
//         },
//         30);
//
// });