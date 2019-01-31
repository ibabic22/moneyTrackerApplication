$(document).ready( function () {
    $('#myTable').DataTable();
} );

// Add

$(document).ready(function() {
    let table = $('#myTable').DataTable();
 
    $('#addRow').on( 'click', function () {
        table.row.add( [
            $('#main_date').val(),
            $('#main_cat option:selected').text(),
            $('#main_sum').val(),
            $('#main_com').val()
        ] ).draw( false );
    } );
} );

$('#addRow').click();


// Delete

$(document).ready(function() {
  let table = $('#myTable').DataTable();

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

// Edit

// $(document).ready(function() {
//     let table = $('#myTable').DataTable();

//     $('#myTable tbody').on( 'click', 'tr', function () {
//         if ( $(this).hasClass('selected') ) {
//             $(this).removeClass('selected');
//             $('#editRow').prop('disabled', false);
//         }
//         else {
//             table.$('tr.selected').removeClass('selected');
//             $(this).addClass('selected');
            
//         }
//     });

// });