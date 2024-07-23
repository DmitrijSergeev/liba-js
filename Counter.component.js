export function CounterComponent (_, {liba}){
    const element = document.createElement('div')

    const localState = {
        value: 1
    }

    setInterval(()=>{
        localState.value++
        liba.refresh()
    }, 1000)

    return {
        element,
        localState
    }
}

CounterComponent.render = ({element, localState})=>{
    element.append(localState.value)
}