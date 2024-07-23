import {Liba as liba} from "@it-incubator/libajs/liba/Liba";

export function TodolistComponent() {
    const element = document.createElement('div')

    const localState = {
        tasks: [
            {id: 1, title: 'JS', isDone: false},
            {id: 1, title: 'LibaJS', isDone: true},
        ],
        setIsDone(taskId, isDone){
            localState.tasks = localState.tasks.map(t => t.id !== taskId ? t : {...t, isDone})

            liba.refresh()
        }
    }

    return {
        element,
        localState,
        cleanup: ()=>{}
    }
}
TodolistComponent.render = ({element, localState}) => {
    element.append('Todolist')
}