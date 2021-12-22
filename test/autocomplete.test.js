it('It shows an autocomplete',()=>{
   createAutoComplete({
       root:document.querySelector('#target'),
       fetchData(){
           return [
               {Title:'Avengers'},
               {Title:'Not Avengers'},
               {Title:'Some other Movie'},
           ];
       },
       renderOption(movie){
           return movie.Title;
       }
   })
});