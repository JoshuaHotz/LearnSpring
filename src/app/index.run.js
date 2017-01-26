(function() {
  'use strict';

  angular
    .module('learnSpring')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
