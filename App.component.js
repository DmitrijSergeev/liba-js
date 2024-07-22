export function AppComponent() {
    const element = document.createElement('div')
    return {
        element
    }
}

AppComponent.render = ({element, localState, props, liba}) => {
    element.append('Hello from IT-Incubator')
}