'use strict';

// Routes
var app = angular.module("App", ["ngRoute", "ui.bootstrap", "chart.js"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
      templateUrl : "./templates/stocks.html"
  })
  .when("/news", {
      templateUrl : "./templates/news.html"
  })
});

//HTTP News
app.controller('newsCtrl', function($scope, $http) {
  $scope.loading = true;
  $http.get("https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/tech.json")
  .then(function (response) {
      $scope.techNewsNew = response.data.new;
      $scope.techNewsRising = response.data.rising;
      $scope.techNewsHot = response.data.hot;
      $scope.techNewsFilter = 1;
      $scope.loading = false;
  });
});


//exchange
app.controller('xchangeCtrl', function($scope, $http) {
  $scope.loading = true;
  $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDEUR%22%2C%22USDGBP%22%2C%22USDCAD%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=")
  .then(function (response) {
      $scope.rate = response.data.query.results.rate;
      $scope.loading = false;
      $scope.xchangeFilter = "USD/EUR";
  });
});

//Finance News
app.controller('financeNewsCtrl', function($scope, $http) {
  $scope.loading = true;
  $http.get("https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/business.json")
  .then(function (response) {
      $scope.financeNews = response.data.new;
      $scope.loading = false;
  });
});

// chartjs
app.controller("LineCtrl", function ($scope) {

  $scope.loading = true;
  //
  // $http.get("https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20yahoo.finance.historicaldata%20WHERE%20symbol%3D%22AAPL%22%20and%20startDate%3D%222016-08-01%22%20and%20endDate%3D%222016-08-26%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=")
  // .then(function (response) {
  //     $scope.rate = query.results.quote.close;
  //     $scope.loading = false;
  // });



  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };
});
