$(document).ready(function() {
$('.deleteAction').click(function() {
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