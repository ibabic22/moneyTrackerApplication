$(document).ready( function () {
    $('#myTable').DataTable();
} );

// Add

$(document).ready(function() {
    let table = $('#myTable').DataTable();
    
    $('#addRow').on( 'click', function () {
        
        let main_date = $('#main_date').val();
        let main_cat = $('#main_cat').val();
        let main_sum = $('#main_sum').val();
        let main_com = $('#main_com').val();

        fetch('/add', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                main_date: main_date,
                main_cat: main_cat,
                main_sum: main_sum,
                main_com: main_com
            })
        }).then(function(res){
            if(res.ok) {
                table.row.add([
                    main_date,
                    main_cat,
                    main_sum,
                    main_com
                ]).draw( false );
            }
        })
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
    //     $.ajax({
    //     type: 'Delete',
    //     url: '/delete',
    //     success:function(){
    //     console.log('Uspesno ste obrisali')
    //     }
    //     });
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