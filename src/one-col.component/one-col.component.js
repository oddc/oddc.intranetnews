(function(){
    'use strict';
    
    angular.module('oddc.intranetnews')
        .component('oneCol', {
            templateUrl : 'src/one-col.component/one-col.component.html',
            controller : ['newsService', '$window', 'widgetbuilderConfiguration', function(newsService, $window, widgetbuilderConfiguration) {
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
                });
            }],
            controllerAs : 'oneColController'
        });
    
})();