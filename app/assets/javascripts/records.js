$(document).ready(function() {
  $('.checkbox input[type=checkbox').click(function (){
    var current_record = $(this).parents('tr');
    $(current_record).children('.text').toggleClass('text_decor', 'text')
  });
  $('.deleteAction').hover( function (){
    $(this).css('opacity', '1');
  }, function (){
    $(this).css('opacity', '0.5');
  }
  ).click(function() {
    var current_record = $(this).parents('tr');
      $.ajax({
        url: '/records/' + $(current_record).attr('data-record_id'),
        type: 'POST',
        data: { _method: 'DELETE' },
        success: function() {
          $(current_record).fadeOut(200);
        }
      });
    });
});