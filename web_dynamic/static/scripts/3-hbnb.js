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
$.ajax({
    url: 'http://localhost:5001/api/v1/places_search',
    type: "POST",
    dataType : "json",
    contentType: "application/json",
    data : JSON.stringify({}),
    success : function(result) {
        for (const place of result) {
          $('SECTION.places').append(
            '<article>' +
            '<div class="title">' +
              '<h2>' + place.name + '</h2>' +
              '<div class="price_by_night">' + place.price_by_night + '</div>' +
            '</div>' +
            '<div class="information">' +
              '<div class="max_guest">' +
                '<i class="fa fa-users fa-3x" aria-hidden="true"></i>' +
                '<br />' + place.max_guest + ' Guests' +
              '</div>' +
              '<div class="number_rooms">' +
                '<i class="fa fa-bed fa-3x" aria-hidden="true"></i>' +
                '<br />' + place.number_rooms + ' Bedrooms' +
              '</div>' +
              '<div class="number_bathrooms">' +
                '<i class="fa fa-bath fa-3x" aria-hidden="true"></i>' +
                '<br />' + place.number_bathrooms + ' Bathroom' +
              '</div>' +
            '</div>' +
            '<div class="description">' +
              place.description +
            '</div>' +
          '</article>'
          );
        }
    }
});
