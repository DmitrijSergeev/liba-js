export function CounterComponent (){
    const element = document.createElement('div')
    return element
}

CounterComponent.render = ({element})=>{
    element.append(1)
}