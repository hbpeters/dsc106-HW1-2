var enrollment = [
    {
      "year": 2018,
      "fulltime_men_applied": "45,636",
      "fulltime_women_applied": "52,265",
      "fulltime_men_admitted": "13,781",
      "fulltime_women_admitted": "15,821",
      "fulltime_men_enrolled": "3,220",
      "fulltime_women_enrolled": "3,484"
    },
    {
      "year": 2017,
      "fulltime_men_applied": "41,583",
      "fulltime_women_applied": "46,845",
      "fulltime_men_admitted": "13,981",
      "fulltime_women_admitted": "16,231",
      "fulltime_men_enrolled": "2,725",
      "fulltime_women_enrolled": "2,974"
    },
    {
      "year": 2016,
      "fulltime_men_applied": "39,779",
      "fulltime_women_applied": "44,430",
      "fulltime_men_admitted": "14,103",
      "fulltime_women_admitted": "16,170",
      "fulltime_men_enrolled": "2,669",
      "fulltime_women_enrolled": "3,077"
    },
    {
      "year": 2015,
      "fulltime_men_applied": "37,009",
      "fulltime_women_applied": "41,047",
      "fulltime_men_admitted": "12,748",
      "fulltime_women_admitted": "13,761",
      "fulltime_men_enrolled": "2,711",
      "fulltime_women_enrolled": "2,581"
    },
    {
      "year": 2014,
      "fulltime_men_applied": "34,618",
      "fulltime_women_applied": "38,822",
      "fulltime_men_admitted": "11,758",
      "fulltime_women_admitted": "12,837",
      "fulltime_men_enrolled": "2,538",
      "fulltime_women_enrolled": "2,383"
    },
    {
      "year": 2013,
      "fulltime_men_applied": "31,992",
      "fulltime_women_applied": "35,408",
      "fulltime_men_admitted": "11,866",
      "fulltime_women_admitted": "12,966",
      "fulltime_men_enrolled": "2,616",
      "fulltime_women_enrolled": "2,612"
    },
    {
      "year": 2012,
      "fulltime_men_applied": "28,758",
      "fulltime_women_applied": "32,049",
      "fulltime_men_admitted": "10,917",
      "fulltime_women_admitted": "12,046",
      "fulltime_men_enrolled": "2,328",
      "fulltime_women_enrolled": "2,245"
    },
    {
      "year": 2011,
      "fulltime_men_applied": "25,097",
      "fulltime_women_applied": "28,351",
      "fulltime_men_admitted": "8,707",
      "fulltime_women_admitted": "10,269",
      "fulltime_men_enrolled": "1,583",
      "fulltime_women_enrolled": "1,861"
    },
    {
      "year": 2010,
      "fulltime_men_applied": "22,332",
      "fulltime_women_applied": "25,761",
      "fulltime_men_admitted": "8,365",
      "fulltime_women_admitted": "9,991",
      "fulltime_men_enrolled": "1,858",
      "fulltime_women_enrolled": "2,089"
    },
    {
      "year": 2009,
      "fulltime_men_applied": "21,725",
      "fulltime_women_applied": "25,321",
      "fulltime_men_admitted": "7,816",
      "fulltime_women_admitted": "9,863",
      "fulltime_men_enrolled": "1,695",
      "fulltime_women_enrolled": "2,054"
    },
    {
      "year": 2008,
      "fulltime_men_applied": "21,590",
      "fulltime_women_applied": "25,775",
      "fulltime_men_admitted": "8,517",
      "fulltime_women_admitted": "11,200",
      "fulltime_men_enrolled": "1,893",
      "fulltime_women_enrolled": "2,399"
    },
    {
      "year": 2007,
      "fulltime_men_applied": "20,566",
      "fulltime_women_applied": "24,507",
      "fulltime_men_admitted": "8,419",
      "fulltime_women_admitted": "10,759",
      "fulltime_men_enrolled": "1,838",
      "fulltime_women_enrolled": "2,303"
    },
    {
      "year": 2006,
      "fulltime_men_applied": "19,838",
      "fulltime_women_applied": "23,748",
      "fulltime_men_admitted": "9,210",
      "fulltime_women_admitted": "12,135",
      "fulltime_men_enrolled": "2,031",
      "fulltime_women_enrolled": "2,558"
    },
    {
      "year": 2005,
      "fulltime_men_applied": "18,147",
      "fulltime_women_applied": "22,371",
      "fulltime_men_admitted": "7,580",
      "fulltime_women_admitted": "10,311",
      "fulltime_men_enrolled": "1,607",
      "fulltime_women_enrolled": "2,113"
    }
  ];
  
  // Get X and Y values
  var years = [];
  var men_enrolled = [];
  var i;
  for (i = 0; i < enrollment.length; i++) {
      var this_year = enrollment[i]["year"];
      years.push(this_year);
  
      var this_enrollment = parseFloat(enrollment[i]["fulltime_men_enrolled"].replace(/,/g, ''));
      men_enrolled.push(this_enrollment);
  }
  
  // Couple the chart data structure with the chartPlaceHolder div
  var someVar = document.getElementById("chartPlaceHolder");
  Highcharts.chart(someVar, {
      title: {
          text: 'UCSD Male Enrollment by Year'   
      },
      
      xAxis: {
          categories: years,
          title: {
              text: 'Year'
          }
      },
  
      yAxis: {
          min: 0,
          title: {
              text: '# Enrolled'
          }
      },
  
      series: [{
          name: 'men_enrolled',
          data: men_enrolled
      }]
  });