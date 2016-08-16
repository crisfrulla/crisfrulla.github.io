/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	
	$(document).ready(function () {

	  let isotopeFilter = function () {

	    var customContainer = $('.iso-container');
	    customContainer.isotope({
	      filter: '*',
	      transitionDuration: '0.2s',
	      animationOptions: {
	        duration: 500,
	        queue: false
	      },

	      layoutMode: 'fitRows',
	      fitRows: {
	        gutter: 0
	      }

	    });

	    $('#custom-filter li:first-child > a').addClass('is-checked');

	    $('#custom-filter a').click(function () {
	      $('#custom-filter .is-checked').removeClass('is-checked');
	      $(this).addClass('is-checked');

	      var customSelector = $(this).attr('data-filter');
	      customContainer.isotope({
	        filter: customSelector,
	        transitionDuration: '0.2s',
	        animationOptions: {
	          duration: 7500,
	          queue: false
	        },
	        layoutMode: 'fitRows',
	        fitRows: {
	          gutter: 0
	        }
	      });
	      return false;
	    });
	  };

	  var newsSources = ['DIGG', 'Mashable'];
	  $.each(newsSources, function (i, el) {
	    $('#newsFeed').append('<li><a id="' + el + '">' + el + '</a></li>');
	  });

	  function Article(title, description, source, image, tag, link) {
	    this.title = title;
	    this.description = description;
	    this.source = source;
	    this.image = image;
	    this.tag = tag;
	    this.link = link;
	  }
	  $(document).ajaxStart(function () {
	    $("#loading").css("display", "block");
	  });
	  $(document).ajaxComplete(function () {
	    $("#loading").css("display", "none");
	  });

	  $.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", function (results) {
	    for (var i in results.data.feed) {
	      const diggFeed = new Article(results.data.feed[i].content.title, results.data.feed[i].content.description.substr(0, 80), results.data.feed[i].content.domain, results.data.feed[i].content.media.images[0].url, results.data.feed[i].content.tags[0].display, results.data.feed[i].content.original_url);

	      var { title, description, source, image, tag, link } = diggFeed;
	      $('#news').append(`
	          <div class="col-xs-12 col-sm-4 col-md-3 isotope-item item1">
	            <div class="thumbnail ">
	              <img src="${ image }">
	              <div class="caption">
	                <span class="text-uppercase small">${ tag }</span>
	                <h3 class="h4">${ title }</h3>
	                <p>${ description } ...</p>
	                <p><a target="_blank" href="${ link }">Read More</a></p>
	                <hr>
	                <p class="small">Source: ${ source }</p>
	              </div>
	            </div>
	          </div>
	        `);
	      isotopeFilter();
	    }
	  });

	  $('#Mashable').click(function () {
	    $.get("https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json", function (results) {
	      for (var i in results.new) {
	        const mashable = new Article(results.new[i].title, results.new[i].content.plain.substr(0, 80), results.new[i].author, results.new[i].image, results.new[i].channel, results.new[i].channel_link);

	        var { title, description, source, image, tag, link } = mashable;
	        $('#news').append(`
	            <div class="col-xs-12 col-sm-4 col-md-3 isotope-item item2">
	              <div class="thumbnail">
	                <img src="${ image }">
	                <div class="caption">
	                  <span class="text-uppercase small">${ tag }</span>
	                  <h3 class="h4">${ title }</h3>
	                  <p>${ description } ...</p>
	                  <p><a target="_blank" href="${ link }">Read More</a></p>
	                  <hr>
	                  <p class="small">Source: ${ source }</p>
	                </div>
	              </div>
	            </div>
	          `);
	        isotopeFilter();
	      }
	    });
	  });
	});

/***/ }
/******/ ]);