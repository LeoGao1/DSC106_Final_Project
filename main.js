


Highcharts.ajax({
    url: 'https://raw.githubusercontent.com/LeoGao1/DSC106_Final_Project/master/final.json',
    dataType: 'text',
    success: function (activity) {

        // transfer the data into different type
        activity = JSON.parse(activity);
        console.log(activity[0]);


  }});
