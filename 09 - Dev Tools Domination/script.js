 const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
     console.log('this is a regular message')
    // Interpolated
     console.log('this is a %s message', '👉🏾interpolated');
    // Style
    console.log('%cthis is a styled message', 'font-size: 20px; color: blue; text-shadow: 0 0 5px #000');
    

    // warning!
    console.warn('this is a warning');
    
    // Error :|
    console.error('this is an error');
    
    // Info
     console.info('this is an info');
    // Testing
    console.assert(12 > 20, 'this is incorrect');
    // clearing
    //console.clear();
    // Viewing DOM Elements
    const p = document.querySelector('p');
    console.dir(p);
    console.log(p);
    
       
    // Grouping together
    dogs.forEach(dog => {
        console.group(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is a good boy`);
        console.groupEnd(`${dog.name}`);
    })
    // counting
    console.count('hello');
    console.count('hello');
    console.count('world');
    console.count('hello');
    console.count('world');




    // timing
    console.time('fetching data')
    fetch('https://api.github.com/users/johnabrham438')
      .then(response => response.json())
      .then(data => {
         console.timeEnd('fetching data');
         console.log(data);
         
      })
    