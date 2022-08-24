// SPDX-License-Identifier:MIT
pragma solidity ^0.8.9;

contract TodoList {

    struct Todo{
        string task;
        bool status;
    }

    // with this array marked as public no need to create a read function
    Todo[] public todo; 

    function create (string calldata _task) external {
        // shorter method
        todo.push(Todo(_task, false));


        // readable way
        // todo.push(Todo ({
        //     task: _task,
        //     status: false
        // }));

    }

    function update (uint _index, string calldata _task) external{
        Todo storage _todo = todo[_index];
        _todo.task = _task;
    }

    function toggleTask(uint _index) external{
        todo[_index].status = !todo[_index].status;
    }
    
}