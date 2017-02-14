(function(){
    'use strict';

    angular.module('oddc.intranetnews')
        .component('twoCol', {
            templateUrl : 'src/two-col.component/two-col.component.html',
            controller : ['newsService', '$window', 'widgetbuilderConfiguration', function(newsService, $window,widgetbuilderConfiguration) {
                var self = this;
                self.lastNews = {};
                self.openNewsArticle =  function(news) {
                    $window.open(widgetbuilderConfiguration.PORTAL_URL+'/#/app/intranet-news/'+news.category.value+'/'+news.id,'_parent');
                };

                newsService.getLastNews(5).then(function success(response) {
                    self.lastNews = response;
                }, function error(response) {

                })
            }],
            controllerAs : 'twoColController'
        });

})();