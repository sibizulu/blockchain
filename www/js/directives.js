angular.module('starter.directives', [])

.directive('aniMojs', function () {
  return {
      restrict: 'AE',
      link: function(scope, elem, attrs) {
          var el13 = document.getElementById(attrs.id);
          var scaleCurve8 = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
          el13span = el13.querySelector('span'),
          timeline = new mojs.Timeline(),
          tween1 = new mojs.Burst({
    					parent: el13,
    					duration: 600,
    					shape : 'circle',
    					fill: '#C0C1C3',
    					x: '0%',
    					y: '0%',
    					childOptions: {
    						radius: {60:0},
    						type: 'line',
    						stroke: '#988ADE',
    						strokeWidth: 1
    					},
    					radius: {80:250},
    					angle: -90,
    					count: 1,
    					isRunLess: true,
    					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
          tween2 = new mojs.Burst({
  					parent: el13,
  					duration: 600,
  					shape : 'circle',
  					fill: '#C0C1C3',
  					x: '0%',
  					y: '50%',
  					childOptions: {
  						radius: {60:0},
  						type: 'line',
  						stroke: '#988ADE',
  						strokeWidth: 1
  					},
  					radius: {80:200},
  					angle: -90,
  					count: 1,
  					isRunLess: true,
  					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
          tween3 = new mojs.Burst({
  					parent: el13,
  					duration: 600,
  					shape : 'circle',
  					fill: '#C0C1C3',
  					x: '0%',
  					y: '100%',
  					childOptions: {
  						radius: {60:0},
  						type: 'line',
  						stroke: '#988ADE',
  						strokeWidth: 1
  					},
  					radius: {80:250},
  					angle: -90,
  					count: 1,
  					isRunLess: true,
  					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
          tween4 = new mojs.Burst({
  					parent: el13,
  					duration: 600,
  					delay: 150,
  					shape : 'circle',
  					fill: '#C0C1C3',
  					x: '50%',
  					y: '50%',
  					childOptions: {
  						radius: {30:0},
  						type: 'line',
  						stroke: '#988ADE',
  						strokeWidth: {2:1}
  					},
  					radius: {60:90},
  					degree: -90,
  					angle: 135,
  					count: 6,
  					isRunLess: true,
  					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
          tween5 = new mojs.Tween({
					duration : 1000,
					onUpdate: function(progress) {
						var elasticOutProgress = mojs.easing.elastic.out(progress);
						el13span.style.WebkitTransform = el13span.style.transform = 'translate3d(' + -50*(1-elasticOutProgress) + '%,0,0)';
					}
				});


        var el16 = document.getElementById(attrs.id), el16span = el16.querySelector('span');
      		var opacityCurve16 = mojs.easing.path('M0,0 L25.333,0 L75.333,100 L100,0');
      		var translationCurve16 = mojs.easing.path('M0,100h25.3c0,0,6.5-37.3,15-56c12.3-27,35-44,35-44v150c0,0-1.1-12.2,9.7-33.3c9.7-19,15-22.9,15-22.9');
      		var squashCurve16 = mojs.easing.path('M0,100.004963 C0,100.004963 25,147.596355 25,100.004961 C25,70.7741867 32.2461944,85.3230873 58.484375,94.8579105 C68.9280825,98.6531013 83.2611815,99.9999999 100,100');

         tween6 = new mojs.Burst({
      					parent: el16,
      					duration: 1700,
      					delay: 350,
      					shape : 'circle',
      					fill: '#FF6767',
      					x: '50%',
      					y: '50%',
      					opacity: 0.3,
      					childOptions: { radius: {'rand(15,5)':0} },
      					radius: {0:150},
      					degree: 50,
      					angle: -25,
      					count: 6,
      					isRunLess: true,
      					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
      				}),

      			tween7 = new mojs.Burst({
      					parent: el16,
      					duration: 600,
      					delay: 200,
      					shape : 'circle',
      					fill: '#C0C1C3',
      					x: '20%',
      					y: '100%',
      					childOptions: {
      						radius: {60:0},
      						type: 'line',
      						stroke: '#FF6767',
      						strokeWidth: 2,
      						strokeLinecap: 'round'
      					},
      					radius: {50:180},
      					angle: 180,
      					count: 1,
      					opacity: 0.4,
      					isRunLess: true,
      					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
      				}),

      			tween8 = new mojs.Burst({
      					parent: el16,
      					duration: 600,
      					delay: 200,
      					shape : 'circle',
      					fill: '#C0C1C3',
      					x: '50%',
      					y: '100%',
      					childOptions: {
      						radius: {60:0},
      						type: 'line',
      						stroke: '#FF6767',
      						strokeWidth: 2,
      						strokeLinecap: 'round'
      					},
      					radius: {50:220},
      					angle: 180,
      					count: 1,
      					opacity: 0.4,
      					isRunLess: true,
      					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
      				}),
      				// burst animation (line3)
      			tween9 = new mojs.Burst({
      					parent: el16,
      					duration: 600,
      					delay: 200,
      					shape : 'circle',
      					fill: '#C0C1C3',
      					x: '80%',
      					y: '100%',
      					childOptions: {
      						radius: {60:0},
      						type: 'line',
      						stroke: '#FF6767',
      						strokeWidth: 2,
      						strokeLinecap: 'round'
      					},
      					radius: {50:180},
      					angle: 180,
      					count: 1,
      					opacity: 0.4,
      					isRunLess: true,
      					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
      				}),
      				// icon scale animation
      			tween10 = new mojs.Tween({
      					duration : 500,
      					onUpdate: function(progress) {
      						var translateProgress = translationCurve16(progress),
      							squashProgress = squashCurve16(progress),
      							scaleX = 1 - 2*squashProgress,
      							scaleY = 1 + 2*squashProgress;

      						el16span.style.WebkitTransform = el16span.style.transform = 'translate3d(0,' + -180*translateProgress + 'px,0) scale3d(' + scaleX + ',' + scaleY + ',1)';

      						var opacityProgress = opacityCurve16(progress);
      						el16span.style.opacity = opacityProgress;

      						el16.style.color = progress >= 0.75 ? '#000000' : '#666666';
      					}
      				});


        elem.bind("DOMSubtreeModified", function(event) {
          timeline.add(tween6,tween7,tween8,tween9,tween10);
          timeline.start();
        });
      }
    };
});
