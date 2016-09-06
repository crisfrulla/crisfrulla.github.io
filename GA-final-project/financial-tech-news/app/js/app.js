'use strict';

$(document).ready(function() {
    $("body").hide().fadeIn("fast");
});
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
//Nav
app.controller('navCtrl', function($scope, $location) {
  $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
  };
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
  $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDEUR%22%2C%22USDCHF%22%2C%22USDCNY%22%2C%22USDBRL%22%2C%22USDAUD%22%2C%22USDGBP%22%2C%22USDCAD%22%2C%22USDJPY%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=")
  .then(function (response) {
      $scope.rate = response.data.query.results.rate;
      $scope.loading = false;
      $scope.xchangeFilter = "USD/EUR";
      $scope.create = response.data.query.created;
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
app.controller("LineCtrlApple", function ($scope, $http) {
  $scope.loading = true;
  $http.get("https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20yahoo.finance.historicaldata%20WHERE%20symbol%3D%22AAPL%22%20and%20startDate%3D%222016-08-29%22%20and%20endDate%3D%222016-09-01%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
  .then(function (response) {
      var quoteArr = response.data.query.results.quote;
      $scope.loading = false;
      var dateArr = [];
      var dataArr = [];
      var openDataArr = [];
      var closeDataArr = [];
      var symbolArr = [];
      quoteArr.forEach(function(quote){
        dateArr.push(quote.Date)
        //dataArr.push(Math.round(quote.Close))
        dataArr.push(quote.Close)
        closeDataArr.push(quote.Close)
        openDataArr.push(quote.Open)
        symbolArr.push(quote.Symbol)
      });
      $scope.openData = openDataArr;
      $scope.closeData = closeDataArr;
      $scope.labels = dateArr.reverse();
      $scope.series = symbolArr;
      $scope.data = [dataArr];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
      $scope.colours = ['#08c'];
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
});
app.controller("LineCtrlGoogle", function ($scope, $http) {
  $scope.loading = true;
  $http.get("https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20yahoo.finance.historicaldata%20WHERE%20symbol%3D%22GOOGL%22%20and%20startDate%3D%222016-08-29%22%20and%20endDate%3D%222016-09-01%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=")
  .then(function (response) {
      var quoteArr = response.data.query.results.quote;
      $scope.loading = false;
      var dateArr = [];
      var dataArr = [];
      var openDataArr = [];
      var closeDataArr = [];
      var symbolArr = [];
      quoteArr.forEach(function(quote){
        dateArr.push(quote.Date)
        //dataArr.push(Math.round(quote.Close))
        dataArr.push(quote.Close)
        closeDataArr.push(quote.Close)
        openDataArr.push(quote.Open)
        symbolArr.push(quote.Symbol)
      });
      $scope.openData = openDataArr;
      $scope.closeData = closeDataArr;
      $scope.labels = dateArr.reverse();
      $scope.series = symbolArr;
      $scope.data = [dataArr];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
      $scope.colours = ['#ff0000'];
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
});
app.controller("LineCtrlYahoo", function ($scope, $http) {
  $scope.loading = true;
  $http.get("https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20yahoo.finance.historicaldata%20WHERE%20symbol%3D%22YHOO%22%20and%20startDate%3D%222016-08-29%22%20and%20endDate%3D%222016-09-01%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=")
  .then(function (response) {
      var quoteArr = response.data.query.results.quote;
      $scope.loading = false;
      var dateArr = [];
      var dataArr = [];
      var openDataArr = [];
      var closeDataArr = [];
      var symbolArr = [];
      quoteArr.forEach(function(quote){
        dateArr.push(quote.Date)
        //dataArr.push(Math.round(quote.Close))
        dataArr.push(quote.Close)
        closeDataArr.push(quote.Close)
        openDataArr.push(quote.Open)
        symbolArr.push(quote.Symbol)
      });
      $scope.openData = openDataArr;
      $scope.closeData = closeDataArr;
      ;
      $scope.labels = dateArr.reverse();
      $scope.series = symbolArr;
      $scope.data = [dataArr];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
      $scope.colours = ['#020e65'];
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
});
app.controller("LineCtrlAmazon", function ($scope, $http) {
  $scope.loading = true;
  $http.get("https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20yahoo.finance.historicaldata%20WHERE%20symbol%3D%22AMZN%22%20and%20startDate%3D%222016-08-29%22%20and%20endDate%3D%222016-09-01%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=")
  .then(function (response) {
      var quoteArr = response.data.query.results.quote;
      $scope.loading = false;
      var dateArr = [];
      var dataArr = [];
      var openDataArr = [];
      var closeDataArr = [];
      var symbolArr = [];
      quoteArr.forEach(function(quote){
        dateArr.push(quote.Date)
        //dataArr.push(Math.round(quote.Close))
        dataArr.push(quote.Close)
        closeDataArr.push(quote.Close)
        openDataArr.push(quote.Open)
        symbolArr.push(quote.Symbol)
      });
      $scope.openData = openDataArr;
      $scope.closeData = closeDataArr;
      ;
      $scope.labels = dateArr.reverse();
      $scope.series = symbolArr;
      $scope.data = [dataArr];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
      $scope.colours = ['#f08804'];
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
  // Slick
  $('.stock-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true
  });
});
// Typed
$("h1").typed({
    strings: ["ANALYZE", "STRATEGIZE", "CAPITALIZE",  "FIN / TECH "],
    typeSpeed: 0,
    showCursor: false
});
$("#tagline").typed({
    strings: ["Get the trading platform you need to understand past trends and foresee profitable trading opportunities"],
    typeSpeed: 0,
    startDelay: 5900,
    showCursor: false
});
