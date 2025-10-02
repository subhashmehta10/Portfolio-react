import { useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {

  // Ensure header scrolled class toggles regardless of menu presence
  useEffect(() => {
    const header = document.querySelector("header[aria-label='Primary']");
    if (!header) return;
    const onScrollOnly = () => {
      if (window.scrollY > 10) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    document.addEventListener("scroll", onScrollOnly, { passive: true });
    onScrollOnly();
    return () => document.removeEventListener("scroll", onScrollOnly);
  }, []);

  // Theme switcher removed; defaulting to dark theme

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
      // Toggle scrolled class for header margin/background behavior
      if (header) {
        if (window.scrollY > 10) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
      }
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
          <span>Portfolio</span>
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
            <li className="profile-icon-item">
              <Link to="/login" className="profile-icon interactive-element" aria-label="Profile">
                👤
              </Link>
            </li>
            <li className="nav-spacer" aria-hidden="true"></li>
            <li className="social-item">
              <a href="https://github.com/subhashmehta10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </li>
            <li className="social-item">
              <a href="https://www.linkedin.com/in/mehta-subhash10/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
