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

    $(document).ready(function(){
        $('input').iCheck({
            checkboxClass: 'icheckbox_flat',
            radioClass: 'iradio_flat'
        });
    });

    $(document).ready(function(){
        $('input').iCheck({
            checkboxClass: 'icheckbox_flat-blue',
            radioClass: 'iradio_flat-blue'
        });
    });


});