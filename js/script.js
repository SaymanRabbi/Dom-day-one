const tag = document.getElementsByTagName('h3');
for(const heading of tag){
 console.log(heading.innerHTML);
}
const third = document.getElementById('thard-title');
third.style.textAlign = 'center';
third.style.color = 'red';
third.style.fontSize = '30px';
third.innerHTML='Hello Dear I got Magaic';
// const blogs = document.getElementsByClassName('blog');
//   for (const loop of blogs){
//       loop.style.border = "2px solid red";
//       loop.style.margin = "10px";
//       loop.style.padding = "10px";
//       loop.style.borderRadius= "10px"

//   }
const blogs = document.querySelectorAll('.blogs');
console.log(blogs)
  for (const loop of blogs){
      loop.style.border = "2px solid red";
      loop.style.margin = "10px";
      loop.style.padding = "10px";
      loop.style.borderRadius= "10px"

  }

    
