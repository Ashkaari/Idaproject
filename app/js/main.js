$( document ).ready(function() {
    $('.send').on('click', function() {
        if(validateInputs()) {
            $(document).find('.send').text('Платеж выполняется...').addClass('disabled');
        }
    });

    var $cardnums = $(document).find('.payment__card-number');
    var $cardname = $(document).find('.payment__card-name');
    var $cvv      = $(document).find('.payment__card-cvv');

    function validateInputs() {
        var flag = true;
        //Проверка номера карты
        $cardnums.each(function() {
            var item = $(this);
            item.removeClass('error');

            if(!item[0].value || !item[0].value.match(/^\d+$/i)) {
                item.addClass('error');
                flag = false;
            }
        });

        //Проверка имени карты
        if(!$cardname[0].value.match(/^[a-zA-Z\s]*$/i) || $cardname[0].value.length < 4) {
            $cardname.addClass('error');
            flag = false;
        } else {
            $cardname.removeClass('error');
        }

        //Проверка CVV
        if(!$cvv[1].value || !$cvv[1].value.match(/^[0-9]{3}$/i)) {
            $cvv.addClass('error');
            flag = false;
        } else {
            $cvv.removeClass('error');
        }

        return flag;

    }


});
