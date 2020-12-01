// /* Set rates + misc */
var shippingRate = 15000;
var fadeTime = 300;


/* Assign actions */
$('.product-quantity input').change(function() {
    updateQuantity(this);
});

$('.product-removal button').click(function() {
    removeItem(this);
});


/* Recalculate cart */
function recalculateCart() {
    var subtotal = 0;

    /* Sum up row totals */
    $('.product').each(function() {
        subtotal += parseFloat($(this).children('.product-line-price').text());
    });

    /* Calculate totals */
    var shipping = (subtotal > 0 ? shippingRate : 0);
    var total = subtotal + shipping;

    /* Update totals display */
    $('.totals-value').fadeOut(fadeTime, function() {
        $('#cart-subtotal').html(subtotal.toFixed(0));
        $('#cart-shipping').html(shipping.toFixed(0));
        $('#cart-total').html(total.toFixed(0));
        if (total == 0) {
            $('.checkout').fadeOut(fadeTime);
        } else {
            $('.checkout').fadeIn(fadeTime);
        }
        $('.totals-value').fadeIn(fadeTime);
    });
}


/* Update quantity */
function updateQuantity(quantityInput) {
    /* Calculate line price */
    var productRow = $(quantityInput).parent().parent();
    var price = parseFloat(productRow.children('.product-price').text());
    var quantity = $(quantityInput).val();
    var linePrice = price * quantity;

    /* Update line price display and recalc cart totals */
    productRow.children('.product-line-price').each(function() {
        $(this).fadeOut(fadeTime, function() {
            $(this).text(linePrice.toFixed(0));
            recalculateCart();
            $(this).fadeIn(fadeTime);
        });
    });
}


/* Remove item from cart */
function removeItem(removeButton) {
    /* Remove row from DOM and recalc cart total */
    var productRow = $(removeButton).parent().parent();
    productRow.slideUp(fadeTime, function() {
        productRow.remove();
        recalculateCart();
    });
}