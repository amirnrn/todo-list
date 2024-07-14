const addTodo = document.getElementById('add-todo')
const submit = document.getElementById('submit')
const todoSection = document.querySelector('.bottom-section')
const doneDiv = document.getElementById('done')
const dot = document.getElementById('dot')
const banner = document.getElementById('banner')

class firework{
    func = function(){
        const top = document.createElement('div')
        top.classList.add('top','fire')

        const topLeft = document.createElement('div')
        topLeft.classList.add('topleft','fire')

        const left = document.createElement('div')
        left.classList.add('left','fire')

        const bottomLeft = document.createElement('div')
        bottomLeft.classList.add('bottomleft','fire')

        const bottom = document.createElement('bottom')
        bottom.classList.add('bottom','fire')

        const bottomRight = document.createElement('bottomright')
        bottomRight.classList.add('bottomright','fire')

        const right = document.createElement('div')
        right.classList.add('right','fire')

        const topRight = document.createElement('div')
        topRight.classList.add('topright','fire')


        let j = 0        
        const interval2 = setInterval(() => {
            j -= 1
            top.style.top = j + 'px'  
    
            topLeft.style.top = j + 'px'  
            topLeft.style.left = j + 'px'  

            left.style.left = j + 'px'

            bottomLeft.style.left = j + 'px'
            bottomLeft.style.bottom = j + 'px'

            bottom.style.bottom = j + 'px'

            bottomRight.style.bottom = j + 'px'
            bottomRight.style.right = j + 'px'
            
            right.style.right = j + 'px'

            topRight.style.top = j + 'px' 
            topRight.style.right = j + 'px'

            if(j < -100){
                clearInterval(interval2)
            }
        },5)
        
        banner.style.display = 'block'

        dot.append(top,topLeft,left,bottomLeft,bottom,bottomRight,right,topRight)
    }
}

function add_todo(input){
    let todoParent = document.createElement('div')
    todoParent.classList.add('todo-parent')

    let todotext = document.createElement('input')
    todotext.type = 'text'
    todotext.classList.add('todotext')
    todotext.value = input
    todotext.setAttribute('readonly','readonly')

    let edit = document.createElement('div')
    edit.classList.add('edit')
    edit.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>'

    let check = document.createElement('div')
    check.classList.add('check')
    check.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'

    let deleteItem = document.createElement('div')
    deleteItem.classList.add('delete')
    deleteItem.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'

    addTodo.value = ''


    todoParent.append(todotext,edit,check,deleteItem)
    todoSection.append(todoParent)

    edit.addEventListener('click',() => {
        todotext.removeAttribute('readonly')
        check.style.opacity = '1'
        edit.style.opacity = '0.3'
    })
    check.addEventListener('click',() => {
        edit.style.opacity = '1'
        check.style.opacity = '0.3'
        todotext.setAttribute('readonly','readonly')
    })
    deleteItem.addEventListener('click',() => {
        todoSection.removeChild(todoParent)
    })
}

submit.addEventListener('click', () => {
    add_todo(addTodo.value)
})

doneDiv.addEventListener('click' , () => {
    while(dot.hasChildNodes()){
        dot.firstChild.remove()
    }
    while(todoSection.hasChildNodes()){
        todoSection.firstChild.remove()
    }

    dot.style.display = 'block'
    let i = 750        

    const interval = setInterval(() => {
        i -= 5
        dot.style.top = i + 'px'  

        if(i < 300){
            clearInterval(interval)
            Continue()
        }
    },10)

})

function Continue(){
    const fire = new firework
    fire.func()
}