var App = angular.module('promo-selfserve', ['ngRoute', 'ngResource', 'ngCookies', 'ngFileUpload', 'ngMeta', 'duScroll'])
.value('duScrollDuration', 1500)
.value('duScrollOffset', 30);

App.directive('menuList', function() {
 return {
   restrict: 'E',
   link: function(scope, element, attrs) {
     scope.withBase = attrs.withoutBase ? false : true;
     scope.getContentUrl = function() {
      return 'app/templates/partials/_menu.html';
    }
  },
  template: '<div ng-include="getContentUrl()"></div>'
}
});

App.directive('applicantHeader', function() {
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {
      scope.getHeaderUrl = function() {
        return 'app/templates/partials/_applicant_header.html'
      }
    },
    template: '<div ng-include="getHeaderUrl()"></div>'
  }
})

App.directive('cssInjector', function(){
  return {
    restrict: 'E',
    link: function(scope, element, attrs){
      if(attrs.linkRef){
        var head = angular.element(document.querySelector('head'));
        head.append("<link href='"+attrs.linkRef+"' rel='stylesheet' />");
      }
    }
  }
})

App.directive('elementAccordion', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      $('.ui.accordion').accordion({
        onOpen: function(){
          $('.item .icon').removeClass('up').addClass('down')
          $('.item').removeClass('active_')
          $('.active .icon').removeClass('down').addClass('up')
          $('.active').parent().addClass('active_')
        },
        onClose: function(e){
          $('.item').removeClass('active_')
          $('.item .icon').removeClass('up').addClass('down')
        }
      });
    }
  }
})

App.directive('menuToggle', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){      
      var container = $("html, body")
      var menucon = $('.mobile .vertical.menu')
      // MOBILE MENU
      $(element).on('click', function (e) {
        e.preventDefault()
        e.stopPropagation()
        menucon.toggleClass('active')
      })

      container.on('click', function () {
        menucon.removeClass('active')
      });
    }
  }
})

App.directive('scrollHandle', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      var scroll_start = 0;
      var offset = 80;
      var currentPos = 0;
      $(document).scroll(function () {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset) {
          $('.navbar-inverse').addClass('active')
        } else {
          $('.navbar-inverse').removeClass('active')
        }
     });
      
    }
  }
})

App.directive('menuClose', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      $(element).click(function(){
        $(".mobile .vertical.menu").removeClass('active');
      })
    }
  }
})

App.directive('stateLoadingIndicator', function($rootScope, $timeout) {
  return {
    restrict: 'E',
    replace: true,
    link: function(scope, elem, attrs) {
      $rootScope.$on('$viewContentLoaded', function(){
        //wait 500ms to make sure content are loaded
        $timeout(function(){
          $("body").addClass('page-loaded').removeClass('page-loading');
        }, 500);
      });
    }
  };
});