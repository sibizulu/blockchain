angular.module('starter.services', [])

.directive('aniMojs', function () {
  return {
      restrict: 'AE',
      link: function(scope, elem, attrs) {
        console.log(attrs);
          var el = document.getElementById(attrs.id);
          var scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
          elSpan = el.querySelector('span'),
          timeline = new mojs.Timeline(),
          tween1 = new mojs.Burst({
              parent: el,
              duration: 1500,
              shape : 'circle',
              fill : 'white',
              x: '50%',
              y: '50%',
              childOptions: {
                radius: {12:0},
                type: 'line',
                stroke: '#988ADE',
                strokeWidth: 2
              },
              radius: {40:110},
              count: 20,
              isRunLess: true,
              easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
          }),
          tween2 = new mojs.Transit({
              parent: el,
              duration: 800,
              type: 'circle',
              radius: {10: 60},
              fill: 'transparent',
              stroke: '#988ADE',
              strokeWidth: {30:0},
              x: '50%',
              y: '50%',
              isRunLess: true,
              easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
            }),
          tween3 = new mojs.Tween({
              duration : 800,
              easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
              onUpdate: function(progress) {
                var scaleProgress = scaleCurve(progress);
                elSpan.style.WebkitTransform = elSpan.style.transform = 'scale3d(' + progress + ',' + progress + ',1)';
              }
            });

        elem.bind("DOMSubtreeModified", function(event) {
          timeline.add(tween1, tween2, tween3);
          timeline.start();
        });
      }
    };
});
