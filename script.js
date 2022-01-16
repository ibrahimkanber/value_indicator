const wrapper=document.querySelector(".wrapper")
const state={}
const keys=["VT","V15","Weight","SumVT","SumV15","SumWght","BatchQuantity","AvgDensityX","AvgTemp1","FlowRate","ProductNo","AdditivType","AddVT","SumAddVT","TargetAddRate","DateTime"]


const updateTable=()=>{
    keys.forEach(k=>{
        const valueContainer=document.createElement("div")
        valueContainer.setAttribute("class","valueContainer")
        const key=document.createElement("div")
        key.setAttribute("class","key")
        key.innerText=k
        const value=document.createElement("div")
        value.setAttribute("class","value")
        value.innerText=state[k]||"-"
        valueContainer.appendChild(key)
        valueContainer.appendChild(value)
        wrapper.appendChild(valueContainer)
    })
}

updateTable()

