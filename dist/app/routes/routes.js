App.config(function ($routeProvider, ngMetaProvider) {
  ngMetaProvider.setDefaultTag('title', 'Promo Magic - Marketing Solution For Makers');
  ngMetaProvider.setDefaultTag('description', 'We deliver new customers for makers. Zero up front cost. No Risk. Only pay us a flat fee or a percentage of each new product sold.');
  $routeProvider
  .when('/', 
  {
    controller: 'HomepageController',
    templateUrl: 'app/templates/homepage.html',
    data: { 
      meta: {
        'title': '',
        'description': '',
        
      }
    }
  })
  .when('/contact', 
  {
    controller: 'ContactController',
    templateUrl: 'app/templates/contact.html'
  }
  )
  .when('/partners', 
  {
    controller: 'PartnersController',
    templateUrl: 'app/templates/partners.html',
    data:{
      meta: {
        'title': '',
        'description': ''
      }
    }
  }
  )
  .when('/wordpress', 
  {
    templateUrl: 'app/templates/wordpress.html',
    data: {
      meta: {
        'title': '',
        'description': ''
      }
    }
  }
  )
  .when('/guide', 
  {
    templateUrl: 'app/templates/guide.html',
    data: {
      meta: {
        'title': '',
        'description': ''
      }
    }
  }
  )
  .when('/step-1', 
  {
    controller: 'StepOneController',
    templateUrl: 'app/templates/step1.html',
  })
  .when('/step-2', 
  {
    controller: 'StepTwoController',
    templateUrl: 'app/templates/step2.html',
  }
  )
  .when('/reset-password', 
  {
    controller: 'ResetpasswordController',
    templateUrl: 'app/templates/reset.html',
  }
  )
  .when('/password_reset',
  {
    controller: 'NewPasswordController',
    templateUrl: 'app/templates/newpassword.html',
  }
  )
  .when('/email-sent', 
  {
    controller: 'EmailSentController',
    templateUrl: 'app/templates/emailsent.html',
  }
  )
  .when('/password-changed', 
  {
    controller: 'PasswordChangedController',
    templateUrl: 'app/templates/changed.html',
  }
  )
  .when('/completed', 
  {
    controller: 'receivedController',
    templateUrl: 'app/templates/received.html'
  }
  )
  .when('/contact', 
  {
    templateUrl: 'app/templates/contact.html'
  }
  )
  .when('/about', 
  {
    templateUrl: 'app/templates/about.html'
  }
  )
  .when('/faq', 
  {
    templateUrl: 'app/templates/faq.html'
  }
  )
  .when('/terms', 
  {
    templateUrl: 'app/templates/terms.html'
  }
  )
  .when('/privacy', 
  {
    templateUrl: 'app/templates/privacy.html'
  }
  )
  .when('/help', 
  {
    templateUrl: 'app/templates/help.html'
  }
  )
  .otherwise( { redirectTo: '/' } );
});