// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'starter.controllers', 'satellizer', 'permission'])

.run(function($ionicPlatform) {
    
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
        if (window.cordova && window.cordova.plugins.keyboard) {
            cordova.plugins.keyboard.hidekeyboardAccessoryBar(true);
            cordova.plugins.keyboard.disableScroll(true);
        }

        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider

        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/news.page.html',
            controller: 'AppCtrl'
        })
    
        .state('app.news', {
            url: '/news',
            data: {
                permissions: {
                    except: ['anonymous'],
                    redirectTo: 'app.news'
                }
            },
            views: {
                'newsdata': {
                    templateUrl: 'templates/news.page.html',
                    controller: 'NewsCtrl'
                }
            }
        })
    $urlRouterProvider.otherwise('/app/news');
});