function objectiveDetailController(){
    var ctrl = this;

    ctrl.toggle = function(){
        ctrl.onToggle();
    }
}

angular.module('riseAndGrind').component('objectiveDetail', {
    templateUrl: './js/components/objectiveDetail/objective-detail.component.html',
    controller: objectiveDetailController,
    bindings: {
        objective: '<',
        onToggle: '&',
        onDelete: '&'
    }
});