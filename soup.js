var app = new Vue({
  el: '#app',
  data: {
    //Jêshua Meza Reyes
      Open: [],
      Peli: [],
      Titu: "green",
      Result: null,
  },
    
mounted(){
  this.BuscarPel();  
},
    methods: {
        BuscarPel: async function() {
            var Url = "http://www.omdbapi.com/?t="+this.Titu+"&apikey=9d86fa5c";
            const response = await fetch(Url);
            this.Peli= await response.json();
            console.log(this.Peli);
        },
                 
         
   
} 
    
})
