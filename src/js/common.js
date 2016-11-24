$(document).ready(function() {

	(function() {

		var select = $('.js-select');

		select.wrap("<div class='select-style'></div>");
		select.after('<div class="custom-select js-custom-select"></div>');
		select.after('<div class="current-option js-current-option">' + 'Город*' + '</div>');

		var customSelect = $('.js-custom-select'),
			currentOption = $('.js-current-option');

		select.children().each(function() {
			customSelect.append('<div class="custom-select__option">' + $(this).val() + '</div>');
		});

		currentOption.on('click', function() {
			$(this).next().slideToggle();
			$(this).toggleClass('is-active');
		});

		customSelect.children().on('click', function() {
			$(this).addClass('is-active').siblings().removeClass('is-active');
			select.children().eq($(this).index()).attr('selected', true).siblings().removeAttr('selected');
			currentOption.text($(this).text()).addClass('is-selected');
			$(this).parent().slideUp();
		});

		$(document).mouseup(function(e) {
			if (!currentOption.is(e.target)
				&&
				currentOption.has(e.target).length === 0)
			{
				customSelect.slideUp();
			}
		});
	})();
});
