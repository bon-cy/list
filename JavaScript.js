const todoList = {
    items: [{
            text: 'Завершить текущий челлендж',
            completed: false,
        },
        {
            text: 'Отдохнуть во время перерыва',
            completed: false,
        },
        {
            text: 'Помочь напарнику понять код',
            completed: false,
        },
        {
            text: 'Выиграть в мафию',
            completed: true,
        },
    ],

    printAll: function() {
        for (let i = 0; i < this.items.length; i++) {
            this.print(i)
        }
    },

    add: function(text) {
        this.items.unshift({
            text: text,
            completed: false

        })
    },

    remove: function(index) {
        this.items.splice(index, 1)
    },

    print: function(index) {
        const doneOrNot = this.items[index].completed === false ? "[ ]" : "[x]"

        console.log(`${doneOrNot} ${this.items[index].text}`)
    },

    complete: function(index) {
        this.items[index].completed = true
    },
};

console.log(todoList.printAll())