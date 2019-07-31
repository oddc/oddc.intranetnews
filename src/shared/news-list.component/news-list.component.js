(function(){
    'use strict';

    angular.module('oddc.intranetnews')
        .component('newsList', {
            templateUrl : 'src/shared/news-list.component/news-list.component.html',
            bindings: {
                newsList: '<'
            },
            controllerAs : 'ctrl',
            controller : ['$window', 'widgetbuilderConfiguration', function($window, widgetbuilderConfiguration) {
                var self = this;


                self.openNewsArticle =  function(news) {
                    $window.open(widgetbuilderConfiguration.PORTAL_URL + '/#/app/intranet-news/' + news.category.value + '/' + news.id, '_parent');
                };


            }]
        });

})();