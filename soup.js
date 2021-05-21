var app = new Vue({
  el: '#app',
  data: {
    //Jêshua Meza Reyes
   apiPoke: "https://pokeapi.co/api/v2/pokemon",
      pokes: [],
      UrlImg: [],
  },
    
    mounted() {
    this.Pokemones();
},    
    
    methods: {
        Pokemones: async function() {
            const response = await fetch(this.apiPoke);
            this.pokes= await response.json();
            this.pokes=this.pokes.results;
            this.Imag('https://pokeapi.co/api/v2/pokemon/1');
        },
                 
      Imag: async function(url) {
          const response = await fetch(url);
          this.UrlImg = await response.json();
          this.UrlImg = this.UrlImg.sprites.other;
          console.log(this.UrlImg.dream_world.front_default);
      }
    
   
} 
    
})
