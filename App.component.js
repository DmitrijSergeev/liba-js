import {CounterComponent} from "./Counter.component.js";

export function AppComponent() {
    const element = document.createElement('div')
    return {
        element
    }
}

AppComponent.render = ({element, localState, props, liba}) => {
    const pageSelector = document.createElement('select')
    const counterPageOption = document.createElement('option')
    counterPageOption.append('TodoList App')
    counterPageOption.value = 'todoList'

    const todoListPageOption = document.createElement('option')
    todoListPageOption.append('Counter Page')
    todoListPageOption.value = 'counter'

    pageSelector.append(counterPageOption, todoListPageOption)

    element.append(pageSelector)

    const counterInstance = liba.create(CounterComponent)

    element.append('Hello from IT-Incubator')
    element.append(counterInstance.element)
}

