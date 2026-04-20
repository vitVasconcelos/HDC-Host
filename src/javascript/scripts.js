const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#nav a");

window.addEventListener("scroll", () => {
    let current = "";
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove("ativo");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("ativo");
      }
    });
  });

  console.log("testando");
  