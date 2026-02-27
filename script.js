
window.addEventListener("load", () => {

  document.fonts.ready.then(() => {

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);

    ScrollTrigger.normalizeScroll(true);

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true
    });

    /* ================= HERO ================= */

    gsap.from(".fundo", { opacity: 0, duration: 2 });
    gsap.from(".fundo1", { y: 100, duration: 1 });
    gsap.from(".nuvem", { y: -100, duration: 1 });
    gsap.from(".logo", { y: -50, opacity: 0, duration: 1 });

    /* Split Hero */

    const splitPalavra = new SplitText(".palavra", { type: "lines" });

    gsap.from(splitPalavra.lines, {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 1
    });

    const splitConvite = new SplitText(".convite", { type: "words" });

    gsap.from(splitConvite.words, {
      y: -20,
      opacity: 0,
      stagger: 0.1,
      duration: 1
    });

    /* ================= DATA ================= */

    const splitDez = new SplitText(".dez", { type: "chars" });

    gsap.from(splitDez.chars, {
      y: 50,
      opacity: 0,
      stagger: 0.08,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#data",
        start: "top 70%"
      }
    });

    gsap.from(".imgdata", {
      y: -50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#data",
        start: "top 70%"
      }
    });

    const splitNomes = new SplitText(".nomes", { type: "chars" });

    gsap.from(splitNomes.chars, {
      y: 50,
      opacity: 0,
      stagger: 0.05,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#data",
        start: "top 70%"
      }
    });

    /* ================= FINAL ================= */

    const splitEndereco = new SplitText(".endereco", { type: "lines" });

    gsap.from(splitEndereco.lines, {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: "#final",
        start: "top 70%"
      }
    });

    gsap.from(".cards", {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#final",
        start: "top 70%"
      }
    });

    gsap.from(".qr", {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#final",
        start: "top 70%"
      }
    });

    gsap.from(".confirmar", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#final",
        start: "top 70%"
      }
    });

    ScrollTrigger.refresh();

  });

});