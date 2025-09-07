import { useEffect } from "react";

function Header() {
  useEffect(() => {
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector("#menu");

    menuBtn?.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });

    const links = Array.from(document.querySelectorAll('nav a[href^="#"]'));
    const sections = links
      .map((a) => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);

    const onScroll = () => {
      const pos = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s.offsetTop <= pos) {
          links.forEach((l) => l.classList.remove("active"));
          const active = links.find(
            (l) => l.getAttribute("href") === `#${s.id}`
          );
          active?.classList.add("active");
          break;
        }
      }
    };

    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }, []);

  return (
    <header aria-label="Primary">
      <div className="container nav">
        <a className="brand" href="#top" aria-label="Homepage">
          <span className="logo" aria-hidden="true"></span>
          <span>My Portfolio</span>
        </a>
        <button className="menu-btn" aria-expanded="false" aria-controls="menu">
          ☰ Menu
        </button>
        <nav>
          <ul id="menu" role="menubar">
            <li><a href="#top">Home</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
