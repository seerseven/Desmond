function up() {
	document.querySelector('input[type=number]').stepUp();
}
function dn() {
	document.querySelector('input[type=number]').stepDown();
}

function globo() {
	const globe = $('.globo-swatch-product-detail');
	$(globe).attr('id', 'globo-gym');
	$('#varient-section').append($(globe));
}

function sizey() {
	const color = $('.g-variant-color-detail');
	const value = document.querySelectorAll('.value');
	const qty = $('.quantity-wrap-round');
	const datasize = $('[data-name="Size"]');
	$(value).addClass('size-detail');
	$(color).removeClass('size-detail');
	const size = $('.size-detail');
	$(size).wrap("<div id='size-wrap' class='d-flex'></div>");
	$('#size-wrap').append($(qty));
	$('.product-form__input').addClass('dunset');
	$(datasize).text('Size & Quantity');
	$(qty).addClass('live');
}

setTimeout(globo, 300);
setTimeout(sizey, 400);
