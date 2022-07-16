// 資料庫
var shopList = {};
shopList.name = 'MyBuyList 購物清單';
shopList.time = '2016/9/10';
shopList.list = [
  { name: '連帽上衣', price: 1180 },
  { name: '工作褲', price: 980 },
  { name: '丹寧外套', price: 1580 },
];

// 要印出的html
var item_html = `<li id={{id}} class="buy_item_list">
    <img src="./assets/image/1-side.png" alt="" />
    <div class="name_price_container">
      <div class="name">{{num}}.{{name}}</div>
      <div class="price">
        <span>{{price}}</span>
      </div>
    </div>
    <div class="amount">
      <span id="{{negative_id}}">－</span>
      <p>1</p>
      <span id="{{plus_id}}">＋</span>
    </div>
    <div class="total">
      <span>{{itemTotal}}</span>
    </div>
    <div class="del_btn" id="{{del_item_id}}">
      <span id={{id}}>✕</span>
    </div>
  </li>`;

var sum_html = `<li class="sum">
    總價
    <div class="price">{{sum}}</div>
  </li>`;

// 印出商品
function showList() {
  // ↓刪掉裡面全部的商品，再印出新的全部資料（避免資料一直重複印出）
  $('#items_list').html('');
  var sum_price = 0;
  for (var i = 0; i < shopList.list.length; i++) {
    var item = shopList.list[i];
    var negative_id = 'negative_' + i;
    var plus_id = 'plus_' + i;
    var del_item_id = 'del_buyItem_' + i;
    sum_price += parseInt(item.price);
    var current_item_html = item_html
      .replaceAll('{{id}}', i)
      .replace('{{num}}', i + 1)
      .replace('{{name}}', item.name)
      .replace('{{price}}', item.price)
      .replace('{{negative_id}}', negative_id)
      .replace('{{plus_id}}', plus_id)
      .replace('{{itemTotal}}', item.price)
      .replace('{{del_item_id}}', del_item_id);
    $('#items_list').append(current_item_html);

    $('#' + del_item_id + '> span').click(function () {
      remove_item($(this).attr('id'));
    });

    $('#' + negative_id).click(function () {
      var amountText = $(this).parent().find('p');
      negativeAmount(amountText);
    });

    $('#' + plus_id).click(function () {
      var amountText = $(this).parent().find('p');
      plusAmount(amountText);
    });
  }
  var current_sum_html = sum_html.replace('{{sum}}', sum_price);
  $('#items_list').append(current_sum_html);
}

showList();

// 按addBtn加入input內的資料
$('.addBtn').click(function () {
  if (
    $('#input__name').val() !== '' &&
    $('#input__price').val() !== '' &&
    isNaN($('#input__price').val()) == false
  ) {
    shopList.list.push({
      name: $('#input__name').val(),
      price: $('#input__price').val(),
    });
    // 資料送出後，清除input內的資料
    $('#input__name').val('');
    $('#input__price').val('');
    $('#input__name').removeClass('active');
    $('#input__price').removeClass('active');
    $('#alert_data').css('display', 'none');
    $('#alert_number').css('display', 'none');
  } else if ($('#input__name').val() == '' && $('#input__price').val() !== '') {
    $('#input__name').addClass('active');
    $('#input__price').removeClass('active');
    $('#alert_data').css('display', 'block');
    $('#alert_number').css('display', 'none');
  } else if ($('#input__name').val() !== '' && $('#input__price').val() == '') {
    $('#input__name').removeClass('active');
    $('#input__price').addClass('active');
    $('#alert_data').css('display', 'block');
    $('#alert_number').css('display', 'none');
  } else if (isNaN($('#input__price').val()) == true) {
    $('#input__name').removeClass('active');
    $('#input__price').addClass('active');
    $('#alert_data').css('display', 'none');
    $('#alert_number').css('display', 'block');
  } else {
    $('#input__name').addClass('active');
    $('#input__price').addClass('active');
    $('#alert_data').css('display', 'block');
    $('#alert_number').css('display', 'none');
  }
  showList();
});

// 按刪除刪掉整個商品明細
function remove_item(id) {
  shopList.list.splice(id, 1);
  showList();
}

// 按減號數量減1
function negativeAmount(amountText) {
  if (amountText.html() > 0) {
    var newAmount = parseInt(amountText.html()) - 1;
    amountText.html('');
    $(amountText).append(newAmount);
    calculate(amountText, newAmount);
  } else {
    return;
  }
}

// 按加號數量加1
function plusAmount(amountText) {
  var newAmount = parseInt(amountText.html()) + 1;
  amountText.html('');
  $(amountText).append(newAmount);
  calculate(amountText, newAmount);
}

// 數量改變時小計、總價連動改變
function calculate(amountText, newAmount) {
  var priceText = amountText
    .parent()
    .parent()
    .find('.price')
    .find('span')
    .html();
  var newTotal = priceText * newAmount;

  var totalText = amountText.parent().parent().find('.total').find('span');
  totalText.html('');
  $(totalText).append(newTotal);

  var current_sum = 0;
  for (i = 0; i < $('.total').length; i++) {
    total = $('.total')[i];
    current_sum += parseInt($(total).find('span').html());
  }

  var sumText = amountText
    .parent()
    .parent()
    .parent()
    .find('.sum')
    .find('.price');
  sumText.html('');
  $(sumText).append(current_sum);
}
