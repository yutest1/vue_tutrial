const app = Vue.createApp({
    data: () => ({
      hours:8,
      selected:'',
      tasks:[],
      total:0
    }),
    methods:{
      addItem: function(event){
        var task ={
          item: this.selected,
          subhours:this.hours
        
        }
        this.tasks.push(task)
        this.total = Number(task.subhours) + Number(this.total)
      },
      delItem: function(index){
       
        this.total =Number(this.total)- Number(this.tasks[index].subhours)
        this.tasks.splice(index,1)

      }

    },
    computed: {
      minutes: {
        get: function() {
          return this.hours *60
        },
        set: function(value) {
          this.hours =value/60
        }
      }
    }
  })
  app.mount('#app')