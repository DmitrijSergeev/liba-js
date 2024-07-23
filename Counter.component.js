export function CounterComponent (_, {liba}){
    const element = document.createElement('div')

    const localState = {
        value: 1
    }

    const interval = setInterval(()=>{
        localState.value++
        liba.refresh()
    }, 1000)

    return {
        element,
        localState,
        cleanup: ()=>{
            clearInterval(interval)
        }
    }
}

CounterComponent.render = ({element, localState})=>{
    element.append(localState.value)
}