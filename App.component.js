import {CounterComponent} from "./Counter.component.js";
import {TodolistComponent} from "./Todolist.Component.js";

export function AppComponent() {
    const element = document.createElement('div')

    const localState = {
        page: 'todolist'
    }

    return {
        element,
        localState,
        cleanup: ()=>{}
    }
}

AppComponent.render = ({element, localState, props, liba}) => {
    const pageSelector = document.createElement('select')

    const counterPageOption = document.createElement('option')
    counterPageOption.append('Counter Page')
    counterPageOption.value = 'counter'

    const todoListPageOption = document.createElement('option')
    todoListPageOption.append('TodoList App')
    todoListPageOption.value = 'todolist'

    pageSelector.append(counterPageOption, todoListPageOption)

    pageSelector.value = localState.page

    element.append(pageSelector)

    pageSelector.addEventListener('change', ()=>{
        localState.page = pageSelector.value
        liba.refresh()
    })

    switch (localState.page){
        case 'counter': {
            const counterInstance = liba.create(CounterComponent)
            element.append(counterInstance.element)
            break
        }
        case 'todolist': {
            const todolistInstance = liba.create(TodolistComponent)
            element.append(todolistInstance.element)
            break
        }
    }

    const counterInstance = liba.create(CounterComponent)

    //element.append('Hello from IT-Incubator')
    element.append(counterInstance.element)
}

