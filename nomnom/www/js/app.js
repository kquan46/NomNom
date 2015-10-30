// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('NOMApp', ['ionic', 'NOMController', 'achan.cordova.yelp'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})


.config(function ($stateProvider, $urlRouterProvider, yelpProvider) {
    
    //parameters for yelp api
    yelpProvider.identify({
        consumerKey: '9QfHhPQ1wFpv9F34ci35VQ',
        consumerSecret: 'B4uuK3IZaufDJ6d8jFq2HUYakeA',
        token: 'TZZV1JNorppSoNC2w5AA8qX0l4nN5-1e',
        tokenSecret: 'x5ek9LCenl_nz7akhUbfLCxNjFo'
    });


    $stateProvider

        .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppController'
    })

    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            }
        }
    })

    .state('app.search', {
        url: '/search',
        views: {
            'menuContent': {
                templateUrl: 'templates/search.html',
                controller: 'SearchController'
            }
        }
    })

    .state('app.list', {
            url: '/list',
            views: {
                'menuContent': {
                    templateUrl: 'templates/list.html'
                }
            }
        })
        .state('app.vote', {
            url: '/vote',
            views: {
                'menuContent': {
                    templateUrl: 'templates/vote.html'
                }
            }
        })

    .state('app.user', {
            url: '/user',
            views: {
                'menuContent': {
                    templateUrl: 'templates/user.html'
                }
            }
        })
        .state('app.playlists', {
            url: '/playlists',
            views: {
                'menuContent': {
                    templateUrl: 'templates/playlists.html',
                    controller: 'PlaylistsController'
                }
            }
        })

    .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
            'menuContent': {
                templateUrl: 'templates/playlist.html',
                controller: 'PlaylistController'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});