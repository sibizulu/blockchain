angular.module('starter.directives', [])

.directive('aniMojs', function () {
  return {
      restrict: 'AE',
      link: function(scope, elem, attrs) {
          var el8 = document.getElementById(attrs.id);
          var scaleCurve8 = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
          el8span = el8.querySelector('span'),
          timeline = new mojs.Timeline(),
          tween1 = new mojs.Burst({
              parent: el8,
              duration: 1600,
              shape : 'circle',
              fill: '#988ADE',
              x: '50%',
              y: '50%',
              opacity: 0.6,
              childOptions: { radius: {'rand(20,5)':0} },
              radius: {50:110},
              count: 28,
              isSwirl: true,
              swirlSize: 15,
              isRunLess: true,
              easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
          }),
          tween2 = new mojs.Burst({
              parent: el8,
              duration: 1800,
              delay: 300,
              shape : 'circle',
              fill: '#988ADE',
              x: '50%',
              y: '50%',
              opacity: 0.6,
              childOptions: {
                radius: {'rand(20,5)':0},
                type: 'line',
                stroke: '#988ADE',
                strokeWidth: 2
              },
              angle: {0:10},
              radius: {140:200},
              count: 18,
              isRunLess: true,
              easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
          }),
          tween3 = new mojs.Burst({
              parent: el8,
              duration: 2000,
              delay: 500,
              shape : 'circle',
              fill: '#988ADE',
              x: '50%',
              y: '50%',
              opacity: 0.6,
              childOptions: { radius: {'rand(20,5)':0} },
              radius: {40:80},
              count: 18,
              isSwirl: true,
              swirlSize: 15,
              isRunLess: true,
              easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
          }),
          tween4 = new mojs.Burst({
              parent: el8,
              duration: 3000,
              delay: 750,
              shape : 'circle',
              fill: '#988ADE',
              x: '50%',
              y: '50%',
              opacity: 0.6,
              childOptions: {
                radius: {'rand(20,10)':0}
              },
              angle: {0:-10},
              radius: {90:130},
              count: 20,
              isRunLess: true,
              easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
          }),
          tween5 = new mojs.Tween({
              duration : 400,
              easing: mojs.easing.back.out,
              onUpdate: function(progress) {
                var scaleProgress = scaleCurve8(progress);
                el8span.style.WebkitTransform = el8span.style.transform = 'scale3d(' + progress + ',' + progress + ',1)';
              }
            });

        elem.bind("DOMSubtreeModified", function(event) {
          timeline.add(tween4, tween5);
          timeline.start();
        });
      }
    };
});
