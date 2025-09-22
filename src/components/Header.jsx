import { useEffect } from "react";

function Header() {
  useEffect(() => {
    const header = document.querySelector("header[aria-label='Primary']");
    const menuBtn = header?.querySelector(".menu-btn");
    const menu = header?.querySelector("#menu");

    if (!menuBtn || !menu) return;

    const toggle = () => {
      const open = menu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    };
    const close = () => {
      menu.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    };

    const onBtnClick = () => toggle();
    const onLinkClick = (e) => {
      const target = e.target;
      if (target.tagName === "A") close();
    };
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    const onClickOutside = (e) => {
      if (!header.contains(e.target)) close();
    };

    menuBtn.addEventListener("click", onBtnClick);
    menu.addEventListener("click", onLinkClick);
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClickOutside);
    const onResize = () => { if (window.innerWidth > 680) close(); };
    window.addEventListener("resize", onResize);

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

    return () => {
      menuBtn.removeEventListener("click", onBtnClick);
      menu.removeEventListener("click", onLinkClick);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClickOutside);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header aria-label="Primary">
      <div className="container nav">
        <a className="brand" href="#top" aria-label="Homepage">
          <span>Portfolio.</span>
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
