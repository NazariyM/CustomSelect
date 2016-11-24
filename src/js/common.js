$(document).ready(function() {

    (function() {

        var select = $('.js-select');

        select.wrap("<div class='select-style'></div>");
        select.after('<div class="custom-select js-custom-select"></div>');
        select.after('<div class="current-option js-current-option">' + 'Город*' + '</div>');


        select.each(function() {
			  $(this).children().each(function() {
	            $(this).parent().siblings('.js-custom-select').append('<div class="custom-select__option">' + $(this).val() + '</div>');
	        });

            var currentOption = $(this).next(),
                customSelect = currentOption.next();

            currentOption.on('click', function() {
					if ($(this).parent().hasClass('is-active')) {
						customSelect.slideUp(function() {
							$(this).parent().removeClass('is-active');
						});
					} else {
						$(this).parent().addClass('is-active');
						customSelect.slideDown();
					}
                $(this).toggleClass('is-active');
            });

            customSelect.children().on('click', function() {
                var _this = $(this),
                    index = _this.index(),
                    text = _this.text();

                _this.addClass('is-active').siblings().removeClass('is-active');
                _this.parent().siblings(select).children().eq(index).attr('selected', true).siblings().removeAttr('selected');
                currentOption.text(text).addClass('is-selected');
                _this.parent().slideUp(function () {
                	currentOption.parent().removeClass('is-active');
                });
            });
				$(document).click(function(e) {
				if (!currentOption.is(e.target) && currentOption.has(e.target).length === 0) {
					currentOption.removeClass('is-active');
					customSelect.slideUp(function () {
						currentOption.parent().removeClass('is-active');
					});

				}
			});
        });
    })();
});
