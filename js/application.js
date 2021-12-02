$(document).ready(function () {
  var shoppingList = $('#shopping-list');
  var inputForm = $('#input-form');
  var itemInput = $('#item-input');
  var costInput = $('#cost-input');
  var quantityInput = $('#quantity-input');
  var addButton = $('#add-button');
  var cartTotal = $('#cart-total');

  var updateCartTotal = function () {
    var itemTotals = $('.item-total');
    var runningTotal = 0;

    itemTotals.each(function (i, ele) {
      runningTotal += Number($(ele).text());
    });

    cartTotal.html(runningTotal.toFixed(2));
  };

  var addItem = function () {
    var itemCol = $('<div></div>');
    itemCol.attr('class', 'col-xs-12 item');

    var itemRow = $('<div></div>');
    itemRow.attr('class', 'row')

    var removeButton = $('<button>Remove</button>');
    removeButton.attr('class', 'btn btn-danger remove-button col-xs-2');
    removeButton.click(function () {
      var target = $(this).parent().parent();
      target.remove();
      updateCartTotal();
    });

    var h5 = $('<h5></h5>');
    h5.attr('class', 'col-xs-3');

    var itemName = h5.clone();
    var itemCost = h5.clone();
    var itemTotal = h5.clone();
    itemTotal.addClass('item-total');

    var quantity = $('<input>');
    quantity.attr('class', 'col-xs-1 quantity-field');

    var itemQuantity = quantity.clone();

    itemName.text(itemInput.val());
    itemCost.text(Number(costInput.val()).toFixed(2));
    itemQuantity.val(quantityInput.val());

    var total = (costInput.val() * quantityInput.val()).toFixed(2);
    itemTotal.text(total);

    itemRow.append(itemName);
    itemRow.append(itemCost);
    itemRow.append(itemQuantity);
    itemRow.append(itemTotal);
    itemRow.append(removeButton);

    itemCol.append(itemRow);

    shoppingList.append(itemCol);

    itemInput.val('');
    costInput.val('');
    quantityInput.val('');

    updateCartTotal();
  };

  addButton.click(addItem);

  inputForm.keyup(function (event) {
    if (event.key === "Enter") {
      addItem();
    }
  });

  $(document).on('keyup', '.quantity-field', function () {
    var newTotal = $(this).val() * $(this).prev().text();
    $(this).next().text(newTotal.toFixed(2));
    updateCartTotal();
  });
});