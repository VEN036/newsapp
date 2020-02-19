angular.module('starter.controllers', [])

    .controller('AppCtrl', function($scope, $ionicModal, $timeout) {


    })

    .controller('NewsCtrl', function($scope, $http, $ionicModal) {
       $scope.News = [
            { id: 1, title: 'something', category: 'something', body: 'something' },
            { id: 2, title: 'something', category: 'something', body: 'something' },
            { id: 3, title: 'something', category: 'something', body: 'something' },
            { id: 4, title: 'something', category: 'something', body: 'something' },
            { id: 5, title: 'something', category: 'something', body: 'something' }
       ]; 
        
        $scope.News = [];
        limit = 5;
        offset = 0;

        $http.get('http://127.0.0.1:8000/api/news' + limit +'%20offset%20' + offset + '&format=json&diagnostics=true&callback=').success(function(data) {
            $scope.News = data.query.results.item;
            console.log(data.query.results.item);
        })

        $scope.loadMore = function() {
            offset = offset + 5;

            $http.get('http://127.0.0.1:8000/api/news' + limit +'%20offset%20' + offset + '&format=json&diagnostics=true&callback=').success(function(data) {
                $scope.News = $scope.News.concat(data.query.results.item);
                console.log(data.query.results.item);
            })
        }

        $ionicModal.fromTemplateUrl('templates/modal.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.openDetails = function(index) {
            $scope.currentNews = $scope.News[index];
            $scope.modal.show();
        };

        $scope.closeModal = function() {
            $scope.modal.hide();
        }

        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            //Execute action
            //$scope.currentPlaylist = {};
            $ionicModal.fromTemplateUrl('templates/modal.html', {
            scope: $scope
            }).then(function(modal) {
                $scope.modal = modal;
            });
        });
    })

    .controller('NewsCtrl', function($scope, $stateParams) {      
    })

    .controller('NewsCtrl', function($scope, $stateParams, $rootScope, $http, $ionicPopup, $timeout) {
        // $scope.News = [
        //    { id: 1, title: 'something', category: 'something', body: 'something' },
        //    { id: 2, title: 'something', category: 'something', body: 'something' },
        //    { id: 3, title: 'something', category: 'something', body: 'something' },
        //    { id: 4, title: 'something', category: 'something', body: 'something' },
        //    { id: 5, title: 'something', category: 'something', body: 'something' }
        // ];

        // console.log($rootScope.currentUser);

        $scope.news = [];
        $scope.error;
        $scope.news;

        $scope.listCanSwipe = true;

        // update popup
        $scope.updatePopup = function(news, label) {
            console.log(news, label);
        $scope.data = news;


        var myPopup = $ionicPopup.show({
            template: '<input type="text" ng-model="data.news">',
            title: 'Update News',
            // subTitle: 'Please use normal things',
            scope: $scope,
            swipe: [
                // { text: 'Cancel' },
                {
                    text: '<b>'+label+'</b>',
                    type: 'swipe-positive',
                    onTap: function(e) {
                        if (!$scope.data.news) {
                            e.preventDefault();
                        } else {
                            return $scope.data;
                        }
                    }
                }
            ]
        });

        myPopup.then(function(res) {
          $scope.updateNews(res);
          console.log(res);  
        });
        };

        $scope.lastpage = 1;
        $scope.init = function() {
                      $scope.lastpage = 1;
                      $http({
                          url: 'http://127.0.0.1:8000/api/news',
                          method: "GET",
                          params: {page: $scope.lastpage}
                      }).success(function(news, status, headers, config) {
                          $scope.news = news.data;
                          $scope.currentPage = news.current_page;
                      });
        };

        $scope.noMoreItemsAvailable = false;
        $scope.loadMore = function(limit) {
            console.log("Load More Called");
                if(!limit) {
                    limit = 5;
                }

                $scope.lastpage +=1;
                $http({
                    url: 'http://127.0.0.1:8000/api/news',
                    method: "GET",
                    params: {limit: limit, page: $scope.lastpage}
                }).success(function (news, status, headers, config) {
                    console.log(news);

                    if(news.next_page_url == null){
                        $scope.noMoreItemsAvailable = true;
                    }
                    $scope.news = $scope.news.concat(news.data);
                });
                $scope.$broadcast('scroll.infiniteScrollComplete');
        };

        $scope.doRefresh = function() {
            $scope.init();
            $scope.loadMore();
            $scope.broadcast('scroll.refreshComplete');
        }

        $scope.addNews = function(news) {
            console.log("add news: ", news);

                $http.post('http://127.0.0.1:8000/api/news', {
                    body: news
                }).success(function(response) {
                    // console.log($scope.news);
                    // console.news.push(response.data);
                    $scope.news.unshift(response.data);
                    console.log($scope.news);
                    $scope.news = '';
                    // alert(data.message);
                    // alert(" News Created Successfully ");
                }).error(function() {
                    console.log("error");
                });
        };

        $scope.updateNews = function(news){
            console.log(news);
            $http.put('http://127.0.0.1:8000/api/news' + news.news_id, {
                  body: news.news
              }).success(function(response) {
                  // alert("News Updated Successfully");
              }).error(function(){
                console.log("error");
              });
          }

          $scope.deleteNews = function(index, newsId){
            console.log(index, newsId);
      
              $http.delete('http://127.0.0.1:8000/api/news' + newsId)
                  .success(function() {
                      $scope.news.splice(index, 1);
                  });;
          }
      
          $scope.init();

    })