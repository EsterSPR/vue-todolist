const {createApp} = Vue;

createApp({
    data() {
        return{
            todo:
            [
                {
                    text: "fare la spesa",
                    done: false,
                },
                {
                    text: "andare in palestra",
                    done: true,
                },
                {
                    text: "fare un pisolino",
                    done: false,
                },
                {
                    text: "impacchettare i regali",
                    done: true,
                },
                {
                    text: "fare le nanne",
                    done: false,
                },
            ]
        }
    },
    methods: {
        addTask(){
            let newItem = {
                text: this.newTask,
                done: false
            }
            this.todo.push(newItem);
            this.newItem = "";
        },
        checkTask(index){
            let task = this.todo [index];
            if(task.done == true){
                task.done = false;
            }
            else {
                task.done = true;
            }
        }
    },
}).mount('#app')