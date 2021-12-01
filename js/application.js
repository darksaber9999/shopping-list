$(document).ready(function () {
  var shoppingList = $('#shopping-list');
  var itemInput = $('#item-input');
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
    h5.attr('class', 'col-xs-6');
    h5.text(itemInput.val());

    itemRow.append(h5);
    itemRow.append(removeButton);

    itemCol.append(itemRow);

    shoppingList.append(itemCol);

    itemInput.val('');
  };

  addButton.click(addItem);
});