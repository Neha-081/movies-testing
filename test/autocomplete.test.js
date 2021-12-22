const waitFor=(selector)=>{
    return new Promise((resolve,reject)=>{
    const interval=setInterval(()=>{
    if(document.querySelector(selector)){
        clearInterval(interval)
        clearTimeout(timeout)
        resolve();
    }
    },30);

    const timeout=setTimeout(()=>{  //only one time in declaring time
     clearInterval(interval)
        reject();
    },2000)
    })

}


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

it('After searching dropdown opens up',async()=>{
  const input = document.querySelector('input');
  input.value='avengers';
  input.dispatchEvent(new Event ('input'))

  //delaying expectation
 await waitFor('.dropdown-item')


  const dropdown=document.querySelector('.dropdown');
   
   expect(dropdown.className).to.include('is-active') 

});

it('After searching,displays some results',async()=>{
    const input = document.querySelector('input');
    input.value='avengers';
    input.dispatchEvent(new Event ('input'))
  
   await waitFor('.dropdown-item')
   const items=document.querySelectorAll('.dropdown-item');
   expect(items.length).to.equal(3);
})