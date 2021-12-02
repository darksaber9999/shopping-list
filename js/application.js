$(document).ready(function () {
  var shoppingList = $('#shopping-list');
  var inputForm = $('#input-form');
  var itemInput = $('#item-input');
  var costInput = $('#cost-input');
  var quantityInput = $('#quantity-input');
  var addButton = $('#add-button');

  var addItem = function () {
    var itemCol = $('<div></div>');
    itemCol.attr('class', 'col-xs-12 item');

    var itemRow = $('<div></div>');
    itemRow.attr('class', 'row')

    var removeButton = $('<button>Remove</button>');
    removeButton.attr('class', 'btn btn-danger remove-button');
    removeButton.click(function () {
      var target = $(this).parent().parent();
      target.remove();
    });

    var h5 = $('<h5></h5>');
    h5.attr('class', 'col-xs-3');

    var itemName = h5.clone();
    var itemCost = h5.clone();
    var itemTotal = h5.clone();

    var quantity = $('<input>');
    quantity.attr('class', 'col-xs-1 quantity-field');

    var itemQuantity = quantity.clone();

    itemName.text(itemInput.val());
    itemCost.text(costInput.val());
    itemQuantity.val(quantityInput.val());

    var total = costInput.val() * quantityInput.val();
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
  };

  addButton.click(addItem);

  inputForm.keyup(function (event) {
    if (event.key === "Enter") {
      addItem();
    }
  });

  $(document).on('keyup', '.quantity-field', function () {
    $(this).next().text($(this).val() * $(this).prev().text());
  });
});