angular.module('riseAndGrind').service('dbService'), function($q, $timeout, $firebaseAuth){
    var config = {
        apiKey: "AIzaSyBS1jITF_QnZBp3jGwy-cIV4s9eXRNHyPo",
        authDomain: "rise-and-grind.firebaseapp.com",
        databaseURL: "https://rise-and-grind.firebaseio.com",
        storageBucket: "rise-and-grind.appspot.com",
        messagingSenderId: "409869336075"
    };
    firebase.initializeApp(config);
    var dbs = this;
    dbs.userId = null;
    dbs.auth = $firebaseAuth();
    dbs.createUser = function (email, password){
        var defer = $q.defer();
        dbs.auth.$creationUserWithEmailAndPassword(email, password).then(function(user){
            dbs.userId = user.uId;
            defer.resolve(user);
        }).catch(function(error){
            defer.reject(error);
        });
        return defer.promise;
    };
    dbs.logout = function(){
        var defer = $q.defer();
        dbs.auth.$signout().then(function(){
            defer.resolve();
            dbs.userId = null;
        }).catch(function(error){
            defer.reject(error);
        });
        return defer.promise;
    };

    dbs.get = function(){
       var defer = $q.defer();
    }
    dbs.add = function(item){
        var defer = $q.defer();
        objective.dateAdded = new Date().getTime();
        objective.completed = false;
        objective.dateCompleted = null;
    }
    dbs.delete
}
