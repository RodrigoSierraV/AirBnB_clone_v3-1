let amen_Checked = {};
$(function () {
  $('input[type=checkbox]').click(function () {
    if (this.checked) {
      amen_Checked[this.dataset.id] = this.dataset.name;
    } else {
      delete amen_Checked[this.dataset.id];
    }
    $('.amenities h4').text(Object.values(amen_Checked).join(', '));
  });
});
$.ajax({
  url: 'http://localhost:5001/api/v1/status/',
  type: 'GET',
  dataType: 'json', // added data type
  success: function (available) {
    $('DIV#api_status').addClass(available);
  }
});
