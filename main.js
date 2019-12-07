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
  chart.container("b2");
  chart.draw();
});




Highcharts.ajax({
    url: 'https://raw.githubusercontent.com/LeoGao1/DSC106_Final_Project/master/final.json',
    dataType: 'text',
    success: function (activity) {

        // transfer the data into different type
        activity = JSON.parse(activity);
        console.log(activity[0]);




  }});
