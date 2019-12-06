


Highcharts.ajax({
    url: 'https://raw.githubusercontent.com/LeoGao1/DSC106_Final_Project/master/final.csv',
    dataType: 'text',
    success: function (activity) {

        // transfer the data into different type
        activity = JSON.parse(activity);


  }});
