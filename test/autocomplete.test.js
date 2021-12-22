beforeEach(()=>{      //hook provided by mocha globally
    document.querySelector('#target').innerHTML='';
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

it('Dropdown starts close',()=>{
   //dropdown
   const dropdown=document.querySelector('.dropdown');
   
   expect(dropdown.className).not.to.include('is-active')  //chai-assert or expect for not having is-active class here
   

});

it('After searching dropdown opens up',()=>{
  const input = document.querySelector('input');
  input.value='avengers';
  input.dispatchEvent(new Event ('input'))

  const dropdown=document.querySelector('.dropdown');
   
   expect(dropdown.className).to.include('is-active') 

})