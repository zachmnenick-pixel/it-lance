document.addEventListener("DOMContentLoaded", () => {

  gsap.defaults({ ease: "power2.out", duration: 0.4 });


  const headerTl = gsap.timeline({ delay: 0.2 });

  headerTl
    .from(".header", {
      y: -30,
      opacity: 0,
      duration: 0.4,
    }, 0)
    .from(".logo img", {
      opacity: 0,
      x: -15,
      duration: 0.3,
    }, "<0.1")
    .from("nav li", {
      opacity: 0,
      y: -10,
      stagger: 0.07,
      duration: 0.25,
    }, "<0.1")
    .from(".btnsh button", {
      opacity: 1,
      duration: 0.35,
      stagger: 0.1,
    }, "<0.05")
    .to(".header", {
      boxShadow: "0 2px 8px rgba(0,197,222,0.25)",
      duration: 0.3,
      ease: "power2.inOut",
    }, "+=0.05");


  const diagramTl = gsap.timeline({ delay: 0.2 }); 
  diagramTl
    .from(".center-logo", {
      opacity: 0,
      scale: 0.5,
      rotate: 90,
      duration: 0.4,
    }, 0)
    .from(".center-lines", {
      opacity: 0,
      scale: 0.8,
      duration: 0.35,
    }, "<0.05");

  document.querySelectorAll(".item-line").forEach((line) => {
    const w = line.offsetWidth;
    const h = line.offsetHeight;
    const vertical = h > w;
    gsap.set(line, {
      transformOrigin: vertical ? "center top" : "left center",
      scaleY: vertical ? 0 : 1,
      scaleX: vertical ? 1 : 0,
      opacity: 1,
    });
  });


  diagramTl
    .to(".left .item-line", {
      scaleY: 1,
      scaleX: 1,
      duration: 0.3,
      stagger: 0.1,
      ease: "power2.inOut",
    }, "+=0.1")
    .to(".right .item-line", {
      scaleY: 1,
      scaleX: 1,
      duration: 0.3,
      stagger: 0.1,
      ease: "power2.inOut",
    }, "+=0.05")
    .to(".bottom .item-line", {
      scaleY: 1,
      scaleX: 1,
      duration: 0.25,
      ease: "power2.inOut",
    }, "+=0.05");

  diagramTl.from(".item .hex", {
    opacity: 0,
    scale: 0.7,
    duration: 0.2,
    stagger: 0.04,
    ease: "back.out(1.7)",
  }, "+=0.2");

  diagramTl.from(".item-text", {
    opacity: 0,
    y: 12,
    duration: 0.2,
    stagger: 0.02,
  }, "<0.15");

  diagramTl.from(".center-to-title", {
    opacity: 0,
    height: 0,
    duration: 0.2,
  }, "+=0.1");
});

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.error("GSAP или ScrollTrigger не загружены");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const items = document.querySelectorAll(".for-item");
  if (!items.length) return;


  gsap.set(items, { opacity: 0, y: 80, scale: 0.95 });

  gsap.to(items, {
    opacity: 1,
    y: 0,
    scale: 1,
    ease: "power3.out",
    stagger: 1.6,
    scrollTrigger: {
      trigger: ".for-whom",
      start: "top 40%",
      end: "top 10%",
      scrub: true,
    },
  });

 
  items.forEach((item) => {
    gsap.to(item, {
      y: -30,
      ease: "none",
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".audit-form");

  function isValidKZPhone(phone) {
    const cleaned = phone.replace(/\s|-/g, "");
    return /^(\+77|87)\d{9}$/.test(cleaned);
  }

  forms.forEach((form) => {
    const input = form.querySelector('input[type="tel"]');
    const btn = form.querySelector(".audit-btn");

    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;
    btn.style.width = `${btnWidth}px`;
    btn.style.height = `${btnHeight}px`;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const phone = input.value.trim();

      if (isValidKZPhone(phone)) {
        btn.disabled = true;
        btn.style.pointerEvents = "none";
        btn.innerHTML = `<div class="spinner"></div> Отправка...`;

        gsap.fromTo(btn, { opacity: 0.7 }, { opacity: 1, duration: 0.3 });

        setTimeout(() => {
          gsap.to(btn, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
              btn.innerHTML = "Заявка отправлена ✅";
              btn.style.background = "#28a745";
              gsap.fromTo(btn, { opacity: 0 }, { opacity: 1, duration: 0.4 });
            },
          });

      
          setTimeout(() => {
            gsap.to(btn, {
              opacity: 0,
              duration: 0.2,
              onComplete: () => {
                btn.innerHTML = "Получить аудит IT-системы";
                btn.style.background = "#00c5de";
                gsap.to(btn, { opacity: 1, duration: 0.3 });
                input.value = "";
                btn.disabled = false;
                btn.style.pointerEvents = "auto";
              },
            });
          }, 3000);
        }, 2000);
      } else {
const tl = gsap.timeline({
  onStart: () => (btn.style.background = "#ff4d4d"),
  onComplete: () => (btn.style.background = "#00c5de"),
});

tl.to(btn, { x: -10, rotation: -3, duration: 0.15 })
  .to(btn, { x: 10, rotation: 3, duration: 0.15 })
  .to(btn, { x: -8, rotation: -2, duration: 0.15 })
  .to(btn, { x: 8, rotation: 2, duration: 0.15 })
  .to(btn, { x: 0, rotation: 0, duration: 0.15 });
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".consultant-banner", {
    scrollTrigger: {
      trigger: ".consultant-banner",
      start: "top 80%", 
      toggleActions: "play none none reverse",
    },
    x: 150,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".audit-section:not(.consultant-banner)", {
    scrollTrigger: {
      trigger: ".audit-section:not(.consultant-banner)",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    x: -150,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
});

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.error("GSAP или ScrollTrigger не загружены");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // === 1. Появление секции ===
  const contactTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  contactTl
    .from(".contact-title", { opacity: 0, y: 40, duration: 0.6, ease: "power2.out" })
    .from(".contact-subtitle", { opacity: 0, y: 30, duration: 0.4 }, "-=0.2")
    .from(".contact-field, .contact-textarea-wrap", {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.5,
      ease: "power3.out",
    }, "-=0.1")
    .from(".contact-btn", {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "back.out(1.7)",
    }, "-=0.1");

  // === 2. Плавающие точки ===
  const leftDots = document.querySelector(".contact-dots--left img");
  const rightDots = document.querySelector(".contact-dots--right img");

  if (leftDots && rightDots) {
    gsap.to(leftDots, {
      y: 15,
      x: 10,
      rotation: 10,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "sine.inOut",
    });

    gsap.to(rightDots, {
      y: -10,
      x: -12,
      rotation: -8,
      repeat: -1,
      yoyo: true,
      duration: 4.5,
      ease: "sine.inOut",
    });
  }

  // === 3. Эффект кнопки при ховере ===
  const btn = document.querySelector(".contact-btn");
  if (btn) {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        scale: 1.07,
        boxShadow: "0 0 25px rgba(0,197,222,0.5)",
        duration: 0.3,
        ease: "power2.out",
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        scale: 1,
        boxShadow: "0 0 0 rgba(0,197,222,0)",
        duration: 0.3,
        ease: "power2.inOut",
      });
    });
  }

  // === 4. Валидация и поведение при отправке ===
  const form = document.querySelector(".contact-form");
  if (form && btn) {
    // функция проверки KZ-номера
    function isValidKZPhone(phone) {
      const cleaned = phone.replace(/\s|-/g, "");
      return /^(\+77|87)\d{9}$/.test(cleaned);
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector('input[type="text"]');
      const phone = form.querySelector('input[type="tel"]');
      const message = form.querySelector('textarea');

      const isEmpty =
        !name.value.trim() || !phone.value.trim() || !message.value.trim();
      const invalidPhone = !isValidKZPhone(phone.value.trim());

      // === Ошибка ===
      if (isEmpty || invalidPhone) {
        const tl = gsap.timeline({
          onStart: () => (btn.style.background = "#ff4d4d"),
          onComplete: () => (btn.style.background = "#00c5de"),
        });

        tl.to(btn, { x: -12, rotation: -5, duration: 0.1 })
          .to(btn, { x: 12, rotation: 5, duration: 0.1 })
          .to(btn, { x: -8, rotation: -3, duration: 0.1 })
          .to(btn, { x: 8, rotation: 3, duration: 0.1 })
          .to(btn, { x: 0, rotation: 0, duration: 0.1 });

        // подсветка полей
        [name, phone, message].forEach((el) => {
          if (!el.value.trim() || (el === phone && invalidPhone)) {
            gsap.fromTo(el, 
              { boxShadow: "0 0 0 rgba(255,77,77,0)" },
              {
                boxShadow: "0 0 12px rgba(255,77,77,0.6)",
                duration: 0.25,
                yoyo: true,
                repeat: 2,
                onComplete: () => (el.style.boxShadow = ""),
              }
            );
          }
        });

        return;
      }

      // === Успешная отправка ===
      btn.disabled = true;
      btn.innerHTML = `<div class="spinner"></div> Отправка...`;

      gsap.fromTo(btn, { opacity: 0.7 }, { opacity: 1, duration: 0.3 });

      setTimeout(() => {
        gsap.to(btn, {
          opacity: 0,
          duration: 0.2,
          onComplete: () => {
            btn.innerHTML = "Отправлено ✅";
            btn.style.background = "#28a745";
            gsap.fromTo(btn, { opacity: 0 }, { opacity: 1, duration: 0.4 });
          },
        });

        setTimeout(() => {
          gsap.to(btn, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
              btn.innerHTML = "Отправить";
              btn.style.background = "#00c5de";
              gsap.to(btn, { opacity: 1, duration: 0.3 });
              name.value = "";
              phone.value = "";
              message.value = "";
              btn.disabled = false;
            },
          });
        }, 2500);
      }, 1500);
    });
  }
});
