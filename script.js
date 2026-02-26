gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.5,
    effects: true
});

const repeatable = {
  start: "top 30%",
  toggleActions: "play reverse play reverse",
  invalidateOnRefresh: true
};

gsap.from(".fundo", {
    opacity:0,
    duration:4,
    
})
gsap.from(".fundo1", { 
  y: 100,
  duration: 1,
  filter: "blur(20px)"
});
gsap.from(".nuvem", { 
  y: -100,
  duration: 1,
  filter: "blur(40px)"
});

gsap.from(".logo", { 
  y: -50,
  duration: 1,
  filter: "blur(40px)",

});
const splitDeus = new SplitText(".palavra", {
  type: "chars, words, lines"
});
gsap.from(splitDeus.lines, {
  y: 20,
  opacity: 0,
  stagger: 0.1,
  duration: 1,

});
const splitConvidam = new SplitText(".convite", {
  type: "chars, words, lines"
});
gsap.from(splitConvidam.words, {
  y: -20,
  opacity: 0,
  stagger: 0.3,
  duration: 1,

});

const splitdez = new SplitText(".dez", {
  type: "chars, words, lines"
});
gsap.from(splitdez.chars, {
  y: 50,
  opacity: 0,
  stagger: 0.08,
  duration: 3,
  ease: "power2.out",
  scrollTrigger: {
      trigger: "#data",
      start: "top 30%",

  }
});
gsap.from(".imgdata", { 
  y: -50,
  duration: 2,
  filter: "blur(40px)",
   scrollTrigger: {
      trigger: "#data",
      start: "top 30%",
    
  }
});
const splitnomes = new SplitText(".nomes", {
  type: "chars, words, lines"
});
gsap.from(splitnomes.chars, {
  y: 50,
  opacity: 0,
  stagger: 0.08,
  duration: 3,
  ease: "power2.out",
  scrollTrigger: {
      trigger: "#data",
      start: "top 30%",
     
  }
});

const splitendereço = new SplitText(".endereco", {
  type: "chars, words, lines"
});
gsap.from(splitendereço.lines, {
  y: 50,
  opacity: 0,
  stagger: 0.3,
  duration: 3,
  ease: "power2.out",
  scrollTrigger: {
      trigger: "#final",
      start: "top 30%",
      
  }
});

gsap.from(".cards", { 
  x: -100,
  duration: 1,
  filter: "blur(20px)",
    opacity:0,
   scrollTrigger: {
      trigger: "#final",
      start: "top 30%",
      
  }
});

gsap.from(".qr", { 
  x: 100,
  duration: 1,
  filter: "blur(20px)",
  opacity:0,
   scrollTrigger: {
      trigger: "#final",
      start: "top 30%",
      
  }
});

gsap.from(".botao", { 
  y: 100,
  duration: 3,
  filter: "blur(20px)",
  opacity:0,
   scrollTrigger: {
      trigger: "#final",
      start: "top 30%",
      
  }
});
gsap.from(".confirmar", {
  y:100,
  duration:1,
  opacity:0,
  filter: "blur(20px)"
}

)