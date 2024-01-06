gsap.from(".logo img ,.nav select , .bt p", {
    y:-50,
    duration: 0.5,
    delay:3,
    stagger: 0.1,
    opacity: 0,
  });
  
  gsap.from(".head h1 , .head p", {
      y:-20,
      duration: 0.4,
      stagger: 0.2,
      opacity: 0,
      delay:4,
      
    });
    
  
  gsap.from(".op button", {
      scale:0,
      duration: 0.5,
      stagger: 0.1,
      opacity: 0,
      delay:5
      
      
    });
    gsap.from(".ol button", {
       scale:0,
      duration:0.5,
      stagger: 0.1,
      opacity: 0,
      delay:5
      
    });
  
    gsap.from(".para1 h2 , .para1 p,.para2 h2 , .para2 p", {
      x:-50,
     duration: 1,
     stagger: 0.3,
     opacity: 0,
     color:"#f00" ,
     scrollTrigger:{
      trigger:".para1 h2 , .para1 p,.para2 h2 , .para2 p",
      scroller:"body"
     }
     
   });
   gsap.from(".shar img", {
      scale:0,
     duration: 2,
     stagger: 0.2,
     opacity: 0,
     scrollTrigger:{
      trigger:".shar img",
      scroller:"body"
     }
     
   });
   
   gsap.from(".mobile img", {
      scale:0,
     duration:2,
     opacity: 0,
     scrollTrigger:{
      trigger:".mobile img",
      scroller:"body"
     }
     
   });
   gsap.from(".pa h2", {
      x:200,
     duration: 1,
     stagger: 0.2,
     opacity: 0,
     scrollTrigger:{
      trigger:".pa h2",
      scroller:"body"
     }
     
   });
   gsap.from(".pa p", {
      x:200,
     duration: 1,
     stagger: 0.2,
     opacity: 0,
     scrollTrigger:{
      trigger:".pa p",
      scroller:"body"
     }
     
   });
  
  
   gsap.from(".shar1 img", {
      scale:0,
     duration:2,
     opacity: 0,
     scrollTrigger:{
      trigger:".shar1 img",
      scroller:"body"
     }
     
   });
   gsap.from(".para3 h2, .para4 h2", {
      x:200,
     duration: 1,
     stagger: 0.2,
     opacity: 0,
     scrollTrigger:{
      trigger:".para3 h2 ,.para4 h2",
      scroller:"body"
     }
     
   });
   gsap.from(".para3 p, .para4 p", {
      x:200,
     duration: 1,
     stagger: 0.2,
     opacity: 0,
     scrollTrigger:{
      trigger:".para3 p , .para4 p",
      scroller:"body"
     }
     
   });
  
  //  gsap.from(".main5", {
  //     scale:0,
  //    duration: 1,
  //    stagger: 0.2,
  //    opacity: 0,
  //    scrollTrigger:{
  //     trigger:".main5",
  //     scroller:"body",
  //     backgroundColor: "red"
  //    }
     
  //  });
  
   var tl = gsap.timeline()
  
  
  function time(){
    var a =0;
      setInterval(function(){
       a= a + Math.floor(Math.random()*10)
  
       if(a<=100){
        document.querySelector(".loader h1").innerHTML = a+"%"
       }//  }else{
      //   a=100;
      //   document.getElementById(".loader h1").innerHTML = a+"%"
      //  }
     
      },100)
  }
  
  
   tl.to(".loader h1",{
    top:"-100vh",
    delay:0.5,
    duration:1,
    
   })
  
   tl.to(".loader",{
    top:"-100vh",
    delay:0.9,
    duration:0.5,
    onStart: time()
   
   })
  