// 传入todo的内容，添加到html中
// 增加一个参数status，当获取的状态包含‘done’，就生成带done的模板字符串，否则生成不带done的模板字符串
const addTodo = function(value, status = "") {
    let content = ''
    if (status.includes('done')) {
        content = `<div class="todo-cell">
            <input class="complete" type="checkbox">
            <span class="todo-content done">${value}</span>
            <button class="delete">x</button>
            </div>`
    } else {
        content = `<div class="todo-cell">
            <input class="complete" type="checkbox">
            <span class="todo-content">${value}</span>
            <button class="delete">x</button>
            </div>`
    }
    // 把格式字符串添加到container的最后
    let container = document.querySelector("#id-div-container")
    container.insertAdjacentHTML('beforeend', content)
}

// 将input中的value作为todo添加并保存
// 它将被绑定在add这个button上
const addContent = function() {
    // 获取input中的value
    let input = document.querySelector("#id-input-add")
    let value = input.value
    // 用input中的value生成todo的格式字符串
    addTodo(value)
    saveTodo()
}


// 传入一个元素节点，根据它的子元素的class给其子元素添加或删除class
// 给complete添加函数，通过事件委托，把事件绑定在父节点上
// 它将被绑定在complete这个button上
const complete = function(element) {
    // 还是要根据click来修改状态，添加className：complete
    // 获取父节点中被响应的元素
    let x = element.target
    // 获取x的下一个元素的class
    // 如果不含done，则添加，反之删除
    if (x.classList.contains("complete")) {
        let y = x.nextElementSibling.classList
        if (!y.contains("done")) {
            y.add("done")
        } else {
            y.remove("done")
        }
    }
    saveTodo()
}



// 传入一个元素节点，移除其子元素
// 它将被绑定在delete这个button上
const deleteTodo = function(e) {
    let x = e.target
    if (x.className === "delete") {
        x.parentElement.remove()
    }
    // 在这里没有用是因为localStorage里没有保存class的信息
    saveTodo()
}



// 使用localStorage保存已有的todo
// localStorage的机制：只能存储为string类型
// 序列化：把一个array转换成字符串,JSON.stringify(array)
// 反序列化：把字符串转换成array,JSON.parse(str)
// 要保存什么：保存通过JavaScript生成的HTML内容，然后在每次加载网页的时候自动load

// 这个函数传入一个array，将其序列化，并保存在localStorage中
const save = function(array) {
    let s = JSON.stringify(array)
    localStorage.todos = s
}


// 定义一个函数选中所有的todo，返回一个数组
// 然后再把这个数组传入save函数
const saveTodo = function() {
    // 选中 todo 的 span
    let content = document.querySelectorAll(".todo-content")
    let todos = []
    for (var i = 0; i < content.length; i++) {
        let c = content[i]
        // 将todo的内容和class生成一个object
        let todo = {
            'status': c.classList.value,
            'todo': c.innerHTML
        }
        // 将todo的内容组合成一个array
        todos.push(todo)
    }
    save(todos)
}


// load函数，在读取页面时后将localStorage的内容取出来
const load = function() {
    let s = localStorage.todos
    return JSON.parse(s)
}


const loadTodo = function() {
    let todo_array = load()
    for (var i = 0; i < todo_array.length; i++) {
        addTodo(todo_array[i].todo, todo_array[i].status)
    }
}


const main = function() {
    // 选中add button
    let e = document.querySelector("#id-button-add")
    // 给add Button添加事件监听，当click时插入内容
    e.addEventListener('click', addContent)
    // 选中 todo-container
    let container = document.querySelector("#id-div-container")
    // 当click时执行完成，给开关todo的class
    container.addEventListener('click', complete)
    let todo = document.querySelector("#id-div-container")
    todo.addEventListener('click', deleteTodo)
}



main()
loadTodo()