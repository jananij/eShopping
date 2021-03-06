Application.$controller("MainPageController", ['$rootScope', '$scope', 'Widgets', 'Variables', '$timeout', 'Utils', '$location',
    function($rootScope, $scope, Widgets, Variables, $timeout, Utils, $location) {
        "use strict";

        var views = ['promo-camera', 'promo-mobile', 'promo-peripheral'],
            viewName,
            index,
            bannerTimeout = 2000;

        var displayBannerImage = function(index) {
            for (var i = 0; i < views.length; i++) {
                var viewName = views[i];
                if (index == i) {
                    Widgets[viewName].show = true;
                } else {
                    Widgets[viewName].show = false;
                }
            }

            $timeout(function() {
                var n = index + 1;
                if (index == views.length) {
                    n = 0;
                }
                displayBannerImage(n);
            }, bannerTimeout);

        };

        $scope.onPageload = function() {
            displayBannerImage(0);
        }


    }
]);