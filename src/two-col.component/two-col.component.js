(function(){
    'use strict';

    angular.module('oddc.intranetnews')
        .component('twoCol', {
            templateUrl : 'src/two-col.component/two-col.component.html',
            controller : ['newsService', '$window', 'widgetbuilderConfiguration', function(newsService, $window,widgetbuilderConfiguration) {
                var self = this;

                self.lastNews = [];
                self.isList = false;


                self.openNewsArticle =  function(news) {
                    $window.open(widgetbuilderConfiguration.PORTAL_URL+'/#/app/intranet-news/'+news.category.value+'/'+news.id,'_parent');
                };


                self.switch = function () {
                    self.isList = !self.isList;
                };


                newsService.getLastNews(9999).then(function success(response) {
                    self.lastNews = response;

                    angular.forEach(self.lastNews, function(obj) {
                        newsService.getNofComments(obj.id).then(function (nofComments) {
                            obj['nofComments'] = nofComments;
                        });

                        newsService.getLikes(obj.id).then(function (likes) {
                            obj['likes'] = likes;
                        });
                    });
                });
            }],
            controllerAs : 'twoColController'
        });

})();