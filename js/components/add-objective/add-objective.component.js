function addObjectiveController(){
    var ctrl = this;
    ctrl.objective_form = {};
    ctrl.addItem = function(){
        ctrl.onAdd({objective: ctrl.objective_form});
        ctrl.clearForm();
    };
    ctrl.clearForm = function(){
        ctrl.objective_form = {};
    };
}

angular.module('riseAndGrind').component('addObjective', {
    templateUrl: './js/components/add-objective/add-objective.component.html',
    controller: addObjectiveController,
    bindings: {
        onAdd: '&'
    }
});