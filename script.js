let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  
  
    // Part 1
  const mainTit = document.getElementById('main-title');
  mainTit.innerHTML = 'The Real Dom Toretto'
  
    // Part 2
  const newBod = document.querySelector('body');
  newBod.style.backgroundColor = 'pink';
  
    // Part 3
  delLast = document.getElementById('favorite-things');
  delLast.lastElementChild.remove('lastElementChild')
  
    // Part 4
  const specTit = document.querySelectorAll('.special-title')
  console.log(specTit);
  specTit.forEach(obj => obj.style.fontSize ='2rem');
  // console.dir(obj)
    // Part 5
  const remRace = document.getElementById('past-races')
  console.log(remRace);
  // remRace.remove.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling
  remRace.children[3].remove()
    // Part 6
  const newLi = document.createElement('li')
  remRace.append('Paris') 
  
    // Part 7
  const blogPost = document.createElement('div')
  blogPost.className="blog-post";
  const h1 = document.createElement('h1')
  const text = document.createElement('p')
  h1.innerHTML='Paris'
  this.body.appendChild(blogPost);
  blogPost.appendChild(h1);
  text.innerHTML='I DROVE OFF THE EIFEL TOWER!'
  blogPost.appendChild(text)
  
    // Part 8
  const newEvLis = document.querySelector('#quote-title')
  newEvLis.addEventListener('click', randomQuote)
  
    // Part 9
  // query select all .blog-post class elements 
  const blogEvents = document.getElementsByClassName('blog-post')
  //Iterate through them using a for each
  blogEvents.forEach((obj) =>{
    obj.addEventListener('mouseout',function(event){
      event.target.classList.toggle('purple');
    })
  obj.addEventListener('mouseenter', function(event){
    event.target.classList.toggle('red');
  
  })
  })
  
  
  // Apply the two event listeners for mouseout and mouseenter events
  
  
  
  })