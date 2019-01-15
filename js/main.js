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

/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

chart.data = [{
  "country": "Jan",
  "value": 3025
}, {
  "country": "Feb",
  "value": 1882
}, {
  "country": "Mar",
  "value": 1809
}, {
  "country": "Apr",
  "value": 1322
}, {
  "country": "May",
  "value": 1122
}, {
  "country": "Jun",
  "value": -1114
}, {
  "country": "Jul",
  "value": -984
}, {
  "country": "Aug",
  "value": 711
}, {
  "country": "Sep",
  "value": 665
}, {
  "country": "Oct",
  "value": -580
}, {
  "country": "Nov",
  "value": 443
}, {
  "country": "Dec",
  "value": 441
}];


var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.minGridDistance = 40;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

var series = chart.series.push(new am4charts.CurvedColumnSeries());
series.dataFields.categoryX = "country";
series.dataFields.valueY = "value";
series.tooltipText = "{valueY.value}"
series.columns.template.strokeOpacity = 0;

series.columns.template.fillOpacity = 0.75;

var hoverState = series.columns.template.states.create("hover");
hoverState.properties.fillOpacity = 1;
hoverState.properties.tension = 0.4;

chart.cursor = new am4charts.XYCursor();

// Add distinctive colors for each column using adapter
series.columns.template.adapter.add("fill", (fill, target) => {
  return chart.colors.getIndex(target.dataItem.index);
});

chart.scrollbarX = new am4core.Scrollbar();
