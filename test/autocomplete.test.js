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
   });

   //dropdown
   const dropdown=document.querySelector('.dropdown');
   
   expect(dropdown.className).not.to.include('is-active')  //chai-assert or expect for not having is-active class here
   

});