(function () {
    'use strict';

    angular.module('widgetbuilder')
        .factory('newsService', ['widgetServices', '$http', '$rootScope', '$q', function (widgetServices, $http, $rootScope, $q) {

            return {
                getLastNews: getLastNews,
                getNofComments: getNofComments,
                getLikes: getLikes
            };

            /*
             * get the last [count] news
             */
            function getLastNews(count) {
                count = (typeof count == 'undefined' )?3:count;
                return widgetServices.callService('getNews').then(function success(response) {
                    if (response.length > count) {
                        return response.slice(0,count);
                    } else {
                        return response;
                    }
                }, function error(response) {
                    return $q.reject(response);
                });
            }
            
            
            function getNofComments(newsId) {
                return $http.get('http://wildfly.optadata.com:8080/odone.widgetservices/news/comments/all/' + newsId)
                    .then(function (response) {
                        return response.data.comments;
                    },
                    function (error) {
                        return $q.reject(error);
                    });


                /*
                return widgetServices.callService('getComments', {id: newsId}).then(function success(response) {

                   console.log('$$$', response);

                }, function error(response) {
                    return $q.reject(response);
                });
                */
            }


            function getLikes(newsId) {
                return $http.get('http://wildfly.optadata.com:8080/odone.widgetservices/news/likes/' + newsId)
                    .then(function (response) {
                        return response.data.likes;
                    },
                    function (error) {
                        return $q.reject(error);
                    });
            }


            /*
            * get the last [count] news
            */
            /*
            function getLastNews(count) {
                count = (typeof count == 'undefined' )?-3:(-1*count);
                return widgetServices.callService('getNews', note).then(function success(response) {
                    if (response.data.length < 3) {
                        return response.data.slice(-3);
                    } else {
                        return response.data;
                    }
                }, function error(response) {
                    return $q.reject(response);
                });
            }
            */

        }]);

})();