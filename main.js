
//instancier un modele de vue
const vm = Vue.createApp({
    //fonction data ==> returne un objet qui contient des données + les données quand on va manipuler
    data(){
        return{
            pizzaNom:["Regina", "Napolitaine","Spicy"]
        }
    },
    methods:{
        inverser(){
            this.pizzaNom.reverse();
        },
        ajoute(pizza){
            this.pizzaNom.push(pizza);
            // this.message = '';
        }
    }

})
vm.component('note', {
    props: ['content'],
    template: `<p> {{ content }} </p>`
    
});

vm.component('ajout',{
    props: [],
    emits:['nvpizza'],
    data(){
        return{
            interne:''
        }
    },
    methods:{
        ajoute1(){
            this.$emit('nvpizza', this.interne);
            this.interne='';
        }
    },
    template: ` <input type="text" v-model="interne">
                <br>
                <button  @click="ajoute1" v-if="interne != ''">Ajouter</button>
                `
});
vm.mount('#app');
