$(document).ready( function () {
    $('#myTable').DataTable();
} );

$(document).ready(function() {
    var t = $('#myTable').DataTable();
 
    $('#addRow').on( 'click', function () {
        t.row.add( [
            $('#date-input').val(),
            $('#category-input option:selected').text(),
            $('#comment').val(),
            $('#number-input').val(),
            $("input[name='currency']:checked").val()
        ] ).draw( false );
    } );
} );

$('#addRow').click();


$(document).ready(function() {
  var table = $('#myTable').DataTable();

  $('#myTable tbody').on( 'click', 'tr', function () {
      if ( $(this).hasClass('selected') ) {
          $(this).removeClass('selected');
      }
      else {
          table.$('tr.selected').removeClass('selected');
          $(this).addClass('selected');
      }
  } );

  $('#deleteRow').click( function () {
      table.row('.selected').remove().draw( false );
  } );
} );


