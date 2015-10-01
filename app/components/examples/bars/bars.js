/* jshint -W003 */
/* global d3 */

'use strict';

import BarChart from './bars-chart';

export default class Ctrl {
  /*@ngInject*/
  constructor($scope, dataPackage){

    var bars = new BarChart();

    $scope.dataPackage = dataPackage;
    $scope.change = draw;

    draw();

    function draw() {

      var data = dataPackage.resources
        .filter(function(d) { return !!d.data; })
        .map(function(d) { return d.data; });

      var divs = d3.select('#_examples_bars__chart')
        .selectAll('div').data(data);

      divs.enter().append('div');

      divs.exit().remove();

      divs.call(bars);
    }

  }
}

Ctrl.$inject = ['$scope', 'dataPackage'];
