$(document).ready(function() {

	(function() {

		var select = $('.js-select');

		select.wrap("<div class='select-style'></div>");
		select.after('<div class="custom-select js-custom-select"></div>');
		select.after('<div class="current-option js-current-option">' + 'Город*' + '</div>');
		select.children().each(function() {
			$('.js-custom-select').append('<div class="custom-select__option">' + $(this).val() + '</div>');
		});

		select.each(function() {
			var currentOption = $(this).next(),
				customSelect = currentOption.next();

			currentOption.on('click', function() {
				customSelect.slideToggle();
				$(this).toggleClass('is-active');
			});

			customSelect.children().on('click', function() {
				var index = $(this).index(),
				text = $(this).text();

				$(this).addClass('is-active').siblings().removeClass('is-active');
				$(this).parents('select').children().remove();
				currentOption.text(text).addClass('is-selected');
				$(this).parent().slideUp();
			});
// $(this).parent(select).children().eq(index).attr('selected', true).siblings().removeAttr('selected');
			// $(document).click(function(e) {
			// 	if (!currentOption.is(e.target) && currentOption.has(e.target).length === 0) {
			// 		currentOption.removeClass('is-active');
			// 		customSelect.slideUp();
			// 	}
			// });
		});
	})();
});
