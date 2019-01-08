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
        ] ).draw( false );
    } );
} );

$('#addRow').click();

