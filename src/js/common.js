$(document).ready(function() {

    (function() {

        var select = $('.js-select');

        select.after('<div class="custom-select js-custom-select"></div>');
        select.after('<div class="current-option js-current-option">' + 'Placeholder' + '</div>');
        var customSelect = $('.js-custom-select'),
            currentOption = $('.js-current-option');

        select.children().each(function() {
            customSelect.append('<div class="">' + $(this).val() + '</div>');
        });

        currentOption.on('click', function() {
            $(this).next().fadeToggle();
        });

        customSelect.children().on('click', function() {
            $(this).addClass('is-active').siblings().removeClass('is-active');
            select.children().eq($(this).index()).attr('selected', true).siblings().removeAttr('selected');
            currentOption.text($(this).text());
            $(this).parent().fadeOut();
        });

        $(document).mouseup(function(e) {
            var container = $("YOUR CONTAINER SELECTOR");

            if (!container.is(e.target) // if the target of the click isn't the container...
                &&
                container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                container.hide();
            }
        });
    })();

});
