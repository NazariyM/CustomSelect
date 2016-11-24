$(document).ready(function() {

	(function() {

		var selectDefault = $('.js-select-default'),
			select = $('.js-select');

		selectDefault.after('<div class="custom-select js-custom-select"></div>');
		selectDefault.after('<div class="current-option js-current-option">' + 'Город*' + '</div>');
		var customSelect = $('.js-custom-select'),
			currentOption = $('.js-current-option');

		selectDefault.children().each(function() {
			customSelect.append('<div class="custom-select__option">' + $(this).val() + '</div>');
		});

		currentOption.on('click', function() {
			$(this).next().slideToggle();
			$(this).toggleClass('is-active');
		});

		customSelect.children().on('click', function() {
			$(this).addClass('is-active').siblings().removeClass('is-active');
			selectDefault.children().eq($(this).index()).attr('selected', true).siblings().removeAttr('selected');
			currentOption.text($(this).text()).addClass('is-selected');
			$(this).parent().slideUp();
		});

		$(document).mouseup(function(e) {
			if (!select.is(e.target)
				&&
				select.has(e.target).length === 0)
			{
				customSelect.slideUp();
			}
		});
	})();

});
