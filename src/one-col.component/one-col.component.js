(function(){
    'use strict';
    
    angular.module('oddc.intranetnews')
        .component('oneCol', {
            templateUrl : 'src/one-col.component/one-col.component.html',
            controller : ['newsService', '$window', 'widgetbuilderConfiguration', function(newsService, $window, widgetbuilderConfiguration) {
                var self = this;
                self.lastNews = {};
                self.openNewsArticle =  function(news) {
                    $window.open(widgetbuilderConfiguration.PORTAL_URL+'/#/app/intranet-news/'+news.category.value+'/'+news.id,'_parent');
                };

                newsService.getLastNews(3).then(function success(response) {
                    self.lastNews = response;
                }, function error(response) {

                })
            }],
            controllerAs : 'oneColController'
        });
    
})();