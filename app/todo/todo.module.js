

angular.module('todo', []);

angular.module('todo')
  .controller('todoCtrl', todoCtrl)
  .config($stateProvider => {
      $stateProvider
        .state('todo', {
          url: '/todo',
          controller: 'todoCtrl',
          templateUrl: 'todo/todo.html',
          controllerAs: 'todo'
        });
  });
  function todoCtrl($scope){
        $scope.todolist = [];

        $scope.addItem = function(){
            console.log($scope.todo);
            if($scope.todo === undefined){
                return false ;
            }
            else{

                $scope.todoObj = {};
                $scope.todoObj["task"] = $scope.todo;
                $scope.todoObj["selected"] = false;
                $scope.todolist.push($scope.todoObj);
                $scope.todo = "";
            }

        };
        // $scope.checkbox = function($index){
        //
        // };

        $scope.deleteItem = function($index){
            var index =$index;
            $scope.todolist.splice(index,1);
        };


        $scope.edit = function($index){
            for(var i=0; i< $scope.todolist.length; i++)
                if($index == i){

                    $scope.todolist[i].selected = true;
                }
        };


        $scope.save = function($index){
            for(var i=0; i< $scope.todolist.length; i++){
                if($index == i){

                    $scope.todolist[i].selected = false;
                }
            }

        };


        $scope.cancel = function($index) {
                    for(var i=0; i< $scope.todolist.length; i++){
                    if ($scope.todolist[$index].selected !== false) {
                        $scope.todolist[$index].selected = false;
                }
            }

        };
    }

// function todoCtrl($scope) {
//   $scope.todos = [
//         {text: 'Item 1', done: false},
//         {text: 'Item 2', done: true},
//         {text: 'Item 3', done: false}
//     ];
// }
//     $scope.addTodo = function() {
//         $scope.todos.push({text: $scope.newTodo, done: false});
//         $scope.newTodo = '';
//     };
// });
  //$scope.message = '$scope';
  // pass in scope or add controller
  //this.message = 'hgmjg';
//}
