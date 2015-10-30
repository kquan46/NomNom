angular.module('NOMController', [])

.controller('AppController', function ($scope, $ionicModal, $timeout, yelp) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function () {
            $scope.closeLogin();
        }, 1000);
    };

    // Yelp search with following parameters
    yelp.search({
            location: 'Vancouver, BC',
            oauth_version: '1.0',
            term: 'food',
            limit: 1
        })
        .then(function (data) {
            // data returned from Yelp
            //            alert(JSON.stringify(data));
        });

})

.controller('HomeController', function ($scope) {
    $scope.quickpick = function () {
        alert("quickpick");
        // TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }

    $scope.advancepick = function () {
        alert("advancepick");
        // TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }

    $scope.createvote = function () {
        alert("createvote");
        // TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }
})

.controller('SearchController', function ($scope) {
    $scope.search = {
        restname: "",
        category: "",
        price: "",
        distance: ""
    };

    $scope.searchrestaurant = function () {
        if ($scope.search.restname !== "red") {
            alert("restname not red");
        } else
            alert("its RED");
        //alert("$scope.search.restname");
        // TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // name :$scope.search.restname, category: $scope.search.category, 
        //     price: $scope.search.price, distance: $scope.search.price
    }
})

.controller('VoteController', function ($scope, yelp) {
    yelp.search({
            location: 'Vancouver, BC',
            oauth_version: '1.0',
            term: 'food',
        })
        .then(function (data) {
            // data returned from Yelp
            $scope.restaurants = data.businesses;
            //            alert(data);
        });

})

.controller('PlaylistsController', function ($scope) {
    $scope.playlists = [
        {
            title: 'Reggae',
            id: 1
        },
        {
            title: 'Chill',
            id: 2
        },
        {
            title: 'Dubstep',
            id: 3
        },
        {
            title: 'Indie',
            id: 4
        },
        {
            title: 'Rap',
            id: 5
        },
        {
            title: 'Cowbell',
            id: 6
        }
  ];
})

.controller('PlaylistController', function ($scope, $stateParams) {});