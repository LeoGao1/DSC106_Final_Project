//block animation
AOS.init();
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

//word cloud
anychart.onDocumentReady(function() {
var data = [{'x': 'ford mustang', 'value': 1197},
 {'x': 'toyota camry', 'value': 767},
 {'x': 'acura rdx', 'value': 742},
 {'x': 'acura mdx', 'value': 599},
 {'x': 'acura ilx', 'value': 589},
 {'x': 'toyota tacoma', 'value': 562},
 {'x': 'cadillac escalade', 'value': 540},
 {'x': 'toyota rav4', 'value': 534},
 {'x': 'toyota highlander', 'value': 487},
 {'x': 'chevrolet trax', 'value': 479},
 {'x': 'scion tc', 'value': 442},
 {'x': 'lincoln mkz', 'value': 418},
 {'x': 'infiniti qx60', 'value': 395},
 {'x': 'toyota prius', 'value': 386},
 {'x': 'infiniti qx80', 'value': 362},
 {'x': 'cadillac xts', 'value': 361},
 {'x': 'kia soul', 'value': 349},
 {'x': 'scion fr-s', 'value': 348},
 {'x': 'scion xb', 'value': 348},
 {'x': 'buick lacrosse', 'value': 339},
 {'x': 'cadillac srx', 'value': 338},
 {'x': 'toyota fj cruiser', 'value': 331},
 {'x': 'lincoln mkx', 'value': 323},
 {'x': 'cadillac ats', 'value': 307},
 {'x': 'cadillac escalade esv', 'value': 293},
 {'x': 'cadillac cts', 'value': 291},
 {'x': 'cadillac xt5', 'value': 286},
 {'x': 'subaru impreza wrx', 'value': 283},
 {'x': 'toyota corolla', 'value': 282},
 {'x': 'chevrolet corvette', 'value': 280},
 {'x': 'toyota venza', 'value': 268},
 {'x': 'ford expedition', 'value': 264},
 {'x': 'bmw m3', 'value': 254},
 {'x': 'porsche macan', 'value': 254},
 {'x': 'subaru legacy', 'value': 249},
 {'x': 'gmc yukon xl', 'value': 247},
 {'x': 'gmc sierra 2500', 'value': 246},
 {'x': 'toyota tundra', 'value': 245},
 {'x': 'subaru impreza', 'value': 243},
 {'x': 'hummer h3', 'value': 242},
 {'x': 'buick verano', 'value': 241},
 {'x': 'porsche cayenne', 'value': 232},
 {'x': 'chevrolet volt', 'value': 230},
 {'x': 'lincoln navigator l', 'value': 226},
 {'x': 'mini cooper', 'value': 224},
 {'x': 'gmc canyon', 'value': 208},
 {'x': 'gmc sierra 1500', 'value': 205},
 {'x': 'subaru crosstrek', 'value': 201},
 {'x': 'honda accord', 'value': 197},
 {'x': 'toyota sienna', 'value': 195},
 {'x': 'infiniti qx56', 'value': 187},
 {'x': 'chevrolet sonic', 'value': 178},
 {'x': 'lincoln mkc', 'value': 176},
 {'x': 'hummer h2', 'value': 174},
 {'x': 'honda cr-v', 'value': 169},
 {'x': 'buick regal', 'value': 165},
 {'x': 'lexus ct 200h', 'value': 164},
 {'x': 'buick envision', 'value': 153},
 {'x': 'volkswagen jetta', 'value': 150},
 {'x': 'acura tl', 'value': 142},
 {'x': 'toyota 4runner', 'value': 142},
 {'x': 'infiniti q50', 'value': 140},
 {'x': 'acura tsx', 'value': 138},
 {'x': 'rolls-royce ghost', 'value': 133},
 {'x': 'chevrolet silverado 3500', 'value': 132},
 {'x': 'volkswagen cc', 'value': 126},
 {'x': 'bmw m5', 'value': 117},
 {'x': 'pontiac g6', 'value': 117},
 {'x': 'volkswagen tiguan', 'value': 116},
 {'x': 'tesla model 3', 'value': 104},
 {'x': 'lincoln mkt', 'value': 104},
 {'x': 'porsche 911', 'value': 103},
 {'x': 'lincoln mks', 'value': 102},
 {'x': 'toyota avalon', 'value': 102}];
 // create a tag (word) cloud chart
  var chart = anychart.tagCloud(data);

   // set a chart title
  chart.title('most popular cars')
  // set an array of angles at which the words will be laid out
  chart.angles([0])
  // enable a color range
  chart.colorRange(false);
  // set the color range length
  chart.colorRange().length('80%');

  // display the word cloud chart
  chart.container("c1");
  chart.draw();
});

var chart = Highcharts.chart('c2', {

    title: {
        text: 'Depreciation Rate of the Top 10 Most Popular Cars'
    },

    subtitle: {
        text: 'Source: www.cars.com'
    },

    xAxis: {
        categories: ['acura ilx', 'chevrolet trax', 'acura rdx', 'acura mdx', 'toyota camry',
       'ford mustang', 'toyota highlander', 'cadillac escalade', 'toyota rav4',
       'toyota tacoma']
    },

    series: [{
        type: 'column',
        title: 'rate per year per 100000 mile',
        colorByPoint: true,
        data: [6.16841293, 4.52347601, 2.51357711, 2.12083177, 1.93444082,
       1.63461753, 0.89953203, 0.81030356, 0.74975571, 0.59662113],
        showInLegend: false
    }]

});


$('#plain').click(function () {
    chart.update({
        chart: {
            inverted: false,
            polar: false
        },
        subtitle: {
            text: 'Plain'
        }
    });
});

$('#inverted').click(function () {
    chart.update({
        chart: {
            inverted: true,
            polar: false
        },
        subtitle: {
            text: 'Inverted'
        }
    });
});

$('#polar').click(function () {
    chart.update({
        chart: {
            inverted: false,
            polar: true
        },
        subtitle: {
            text: 'Polar'
        }
    });
});
chart.series[0].name="Percentage";
chart.redraw();



Highcharts.chart('c3', {

    title: {
        text: 'Car Price of the Top 10 Most Popular Cars'
    },

    subtitle: {
        text: 'Source: www.cars.com'
    },

    yAxis: {
        title: {
            text: 'Price in USD'
        }
    },
    xAxis: {
        title: {
            text: 'Year of use'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1
        },
    },

    series: [{
        name: 'ford mustang',
        data: [25180.222222222223,
  23597.512,
  23578.941176470587,
  23539.666666666668,
  15487.634854771784,
  14548.932126696833,
  12949.528,
  11306.41121495327,
  10487.5,
  10197.414746543778,
  10164.0,
  9198.5,
  8998.5,
  6122.0,
  4599.333333333333]
    }, {
        name: 'toyota camry',
        data: [20582.391304347828,
  16873.38197424893,
  16442.04761904762,
  14998.875,
  12569.6,
  11426.0,
  10993.0,
  9102.0,
  8825.4,
  7978.414746543779,
  6999.0,
  6420.0,
  3999.0]
    }, {
        name: 'acura rdx',
        data: [37996.0,
  32480.184210526317,
  27192.081967213115,
  24998.928571428572,
  22204.166666666668,
  20389.0,
  16690.0,
  13288.5,
  12497.25,
  11742.526315789473,
  10582.952380952382,
  10144.833333333334,
  7869.6]
    }, {
        name: 'acura mdx',
        data: [39489.72727272727,
  38488.0,
  28818.74,
  13692.489361702128,
  11223.512195121952,
  10614.833333333334,
  7017.571428571428,
  4260.0,
  4247.0]
    }, {
        name: 'acura ilx',
        data: [22276.777777777777, 21528.685483870966, 18334.363636363636]
    }, {
        name: 'toyota tacoma',
        data: [34834.0,
  30243.55172413793,
  29689.904761904763,
  29288.941176470587,
  24188.735632183907,
  23536.456140350878,
  20900.0,
  19397.0,
  15983.0,
  13100.377192982456,
  12530.0]
    }, {
        name: 'cadillac escalade',
        data: [72487.64,
  63696.08620689655,
  56795.8380952381,
  52648.84848484849,
  41990.0,
  18975.0,
  17391.375,
  15548.0,
  15137.975,
  10299.333333333334,
  8093.444444444444,
  7659.1578947368425]
    }, {
        name: 'toyota rav4',
        data: [22268.6875,
  20946.25,
  20240.0,
  19995.0,
  16995.0,
  16487.0,
  12898.917721518987,
  11065.944444444445,
  8819.555555555555,
  8294.5,
  8135.714285714285,
  8122.287581699346,
  4998.5]
    }, {
        name: 'toyota highlander',
        data: [33971.22727272727,
  31960.0,
  31135.51020408163,
  28363.928571428572,
  23159.5,
  17920.62962962963,
  14954.604790419162,
  14566.888888888889,
  11436.333333333334,
  10479.666666666666,
  10137.60759493671,
  9883.111111111111,
  7003.166666666667,
  6902.882352941177,
  6460.9]
    }, {
        name: 'chevrolet trax',
        data: [23982.166666666668,
  18073.41935483871,
  17086.702702702703,
  16446.494444444445,
  15672.583333333334]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
Highcharts.chart('c4', {

    title: {
        text: 'Car Price of the Top 10 Most Popular Cars'
    },

    subtitle: {
        text: 'Source: www.cars.com'
    },

    yAxis: {
        title: {
            text: 'Price in USD'
        }
    },
    xAxis: {
        title: {
            text: 'Per 5k miles used'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 0
        },
    },

    series: [{
        name: 'ford mustang',
        data: [25658.454545454544,
  25299.833333333332,
  23944.375,
  23471.963302752294,
  22759.625,
  22491.583333333332,
  17427.375,
  15938.2,
  15589.910714285714,
  15194.642857142857,
  15056.363636363636,
  14911.285714285714,
  13980.5,
  13899.333333333334,
  13426.061403508771,
  12385.301886792453,
  12299.75,
  11964.333333333334,
  11931.666666666666,
  10713.0,
  10519.722222222223,
  9998.0,
  9073.0,
  8991.37037037037,
  7675.666666666667,
  5127.5]
    }, {
        name: 'toyota camry',
        data: [22088.428571428572,
  21654.5,
  19796.333333333332,
  18559.166666666668,
  18395.545454545456,
  17925.40088105727,
  16522.875,
  15898.777272727273,
  14945.714285714286,
  14787.6,
  14321.4,
  13403.285714285714,
  12975.0,
  12737.0,
  11920.5,
  10747.5,
  9903.75,
  9498.0,
  9443.0,
  8744.75,
  8075.58904109589,
  6207.428571428572]
    }, {
        name: 'acura rdx',
        data: [32935.0,
  31088.571428571428,
  29891.63157894737,
  28624.65625,
  26349.333333333332,
  25761.51282051282,
  25260.183673469386,
  25101.087378640776,
  24617.072916666668,
  23993.3,
  22469.777777777777,
  18811.571428571428,
  16195.0,
  15744.142857142857,
  15603.0,
  14308.333333333334,
  13921.333333333334,
  13414.0,
  12497.142857142857,
  12406.0,
  11810.857142857143,
  11664.857142857143,
  10506.57142857143,
  9836.57142857143,
  9741.6,
  7518.083333333333]
    }, {
        name: 'acura mdx',
        data: [41888.0,
  41500.0,
  36328.916666666664,
  33119.444444444445,
  30771.666666666668,
  30095.79365079365,
  29349.01098901099,
  28674.183333333334,
  28437.69230769231,
  28416.8,
  27541.555555555555,
  27514.129032258064,
  26940.53086419753,
  25741.0,
  16589.0,
  16413.25,
  15495.0,
  15038.608695652174,
  14995.0,
  14096.0,
  13054.2,
  12209.0,
  11928.0,
  11685.857142857143,
  9402.5,
  8495.0]
    }, {
        name: 'acura ilx',
        data: [23831.909090909092,
  22560.61,
  19958.0,
  19255.634615384617,
  18644.9358974359,
  18475.0,
  18390.021739130436,
  18015.915094339623,
  17629.71052631579,
  17166.071428571428,
  16497.5,
  16169.0,
  15450.333333333334,
  13995.0]
    }, {
        name: 'toyota tacoma',
        data: [33300.0,
  32980.8,
  29680.153846153848,
  28555.38888888889,
  27704.571428571428,
  27162.0,
  26995.0,
  26820.882882882885,
  26803.0,
  26622.714285714286,
  26021.833333333332,
  25298.75,
  24618.35714285714,
  24579.5,
  23714.172727272726,
  22993.0,
  22319.666666666668,
  22300.0,
  21636.25,
  21552.168067226892,
  20900.0,
  19991.0,
  15966.0,
  12530.422018348623]
    }, {
        name: 'cadillac escalade',
        data: [72614.72222222222,
  69911.9,
  65885.80952380953,
  65585.4,
  63312.444444444445,
  59061.566666666666,
  58522.666666666664,
  55342.19047619047,
  54372.846153846156,
  51786.58823529412,
  47716.392857142855,
  47184.7,
  22999.0,
  20997.0,
  19402.0,
  18993.333333333332,
  18914.125,
  17462.714285714286,
  17439.88888888889,
  17076.333333333332,
  16936.333333333332,
  16218.066666666668,
  16152.333333333334,
  15578.444444444445,
  14554.391304347826,
  11874.763888888889]
    }, {
        name: 'toyota rav4',
        data: [22924.333333333332,
  22886.0,
  21961.625,
  21221.25,
  20935.5,
  19946.0,
  19695.0,
  18985.0,
  13496.666666666666,
  13443.0,
  13049.63870967742,
  12861.0,
  12104.6,
  11893.0,
  11712.8,
  11107.0,
  9853.4,
  9658.75,
  9344.666666666666,
  9140.064935064935,
  8912.0,
  8531.5,
  8500.0,
  7096.110429447853]
    }, {
        name: 'toyota highlander',
        data: [35995.0,
  35097.0,
  35053.4,
  34596.166666666664,
  31885.5,
  31445.5,
  31111.1375,
  30152.615384615383,
  29178.666666666668,
  27747.5,
  27417.636363636364,
  25850.5,
  19765.0,
  19239.0,
  18534.2,
  18145.166666666668,
  15882.333333333334,
  15045.26282051282,
  14895.333333333334,
  13103.333333333334,
  12726.833333333334,
  12008.888888888889,
  10821.820512820514,
  9573.57142857143,
  9296.333333333334,
  7504.294117647059]
    }, {
        name: 'chevrolet trax',
        data: [19728.677419354837,
  17287.837209302324,
  17193.32,
  17005.694444444445,
  16936.491228070176,
  16370.5,
  15898.333333333334,
  15897.758620689656,
  15684.666666666666,
  15679.5,
  15595.0,
  14788.8,
  13622.666666666666,
  13395.0,
  12451.333333333334]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.ajax({
    url: 'https://raw.githubusercontent.com/LeoGao1/DSC106_Final_Project/master/final.json',
    dataType: 'text',
    success: function (activity) {

        // transfer the data into different type
        activity = JSON.parse(activity);
        console.log(activity[0]);




  }});
