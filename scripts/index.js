// Cursor Animation

const cursor=document.getElementById("cursor");

window.addEventListener('mousemove',(e)=>{
    cursor.style.left=e.pageX+'px';
    cursor.style.top=e.pageY+'px';
})

// Cursor hover animation
const projects=document.querySelectorAll(".project");


Array.from(projects).forEach((hyperlink)=>{
  hyperlink.addEventListener("mouseenter",()=>{
    cursor.classList.replace("cursor","pointer");
    cursor.innerHTML=`<h1 class="pointer__text">Click-to-see-more-</h1>`;
   // splitting the letters into spans to make then circular

    const text=document.querySelector(".pointer__text");
    text.innerHTML=text.textContent.replace(/\S/g,"<span class='letter'>$&</span>");
    const letters=document.querySelectorAll(".letter");
    letters.forEach((letter,i)=>{
      letter.style.transform=`rotate(${i*20}deg)`
    })

  })

  hyperlink.addEventListener("mouseleave",()=>{
    cursor.classList.replace("pointer","cursor");
    cursor.innerHTML=``;
    
  })

})





// Animation of preloader
const preloader=document.getElementById("preloader");
window.addEventListener("load",()=>{
  preloader.style.display="none";
})

// Scrollbar Animation

const scrollbar=document.getElementById("scrollbar__thumb");
const totalHeight=document.body.scrollHeight-window.innerHeight;
window.addEventListener('scroll',()=>{
    const progressHeight=(window.pageYOffset/totalHeight)*100;
    scrollbar.style.top=progressHeight+"%";
})


/*Gsap animation Library*/

// Animation at about section
const containers = gsap.utils.toArray(".container");
containers.forEach((container) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      start:'top top',
      trigger: container,
      pin: true,
      pinSpacing: false,
      scrub: true,
      
    }
  });

  tl.to(container, {
    autoAlpha: 1
  }).to(
    container,
    {
      autoAlpha: 0
    },
    0.5
  );
});

// Animation on opening

// 58-57 animation of navbar
const opener= gsap.utils.toArray(".opener");
opener.forEach((item) => {
  const tl = gsap.timeline();

  tl.from(item, {
    scaleX:0,
    duration:1
  })
});
// 69-72 animation fof navbar texts
const hiders=gsap.utils.toArray(".hider");
hiders.forEach((hider) => {
 gsap.fromTo(hider, {y:'100%',x:0}, {y:'0%',x:0, delay:1,duration: 1,ease:'power1.out'});
});


