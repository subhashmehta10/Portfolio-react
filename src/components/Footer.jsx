import { useEffect, useState } from "react";

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <div className="container flex center" style={{ gap: ".6rem", flexWrap: "wrap" }}>
        <span>© {year} Subhash Mehta</span> ·
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
