var app = new Vue({
  el: '#app',
  data: { //Variables para Vue
    //Jêshua Meza Reyes
      Open: [],
      Peli: [],
      Titu: null,
      Result: null,
      Img: null,
  },
    

    methods: {
        BuscarPel: async function() {
            var Url = "http://www.omdbapi.com/?t="+this.Titu+"&apikey=9d86fa5c"; //Dirección de la pagian de la api+El Título de la película+La llave de la api
            const response = await fetch(Url);
            this.Peli= await response.json(); //la información de la pelicula es transformada en un array
            console.log(this.Peli);
        },
                 
         
   
} 
    
})
