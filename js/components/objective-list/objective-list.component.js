function objectiveListController($log, dbService){
    var ctrl = this;
    ctrl.objectiveArray = [];

    ctrl.getList = function(uId){
        dbService.get(uId).then(function(resp){
            $log.info('object list response', resp);
            ctrl.objectiveArray = resp;
        });
    };
    ctrl.$onInit = function(){
        ctrl.getList();
    };

    ctrl.toggleComplete = function(item){
        var completed = !item.completed;
        var current = (completed) ? new Date().getTime() : null;

        dbService.update(item, 'completed', completed);
        dbService.update(item, 'date completed', current);
    };
    ctrl.itemDelete = function(item){
        dbService.delete(item);
    };
    ctrl.addItem = function(item){
        dbService.add(item).then(function(msg){
            console.info(msg);
        });
    }
}

angular.module('riseAndGrind').component('objectiveList', {
    templateUrl: './js/components/objective-list/objective-list.component.html',
    controller: objectiveListController,
    transclude: true
});