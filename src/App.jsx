import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Play,
  Menu,
  X,
} from "lucide-react";
import "./App.css";

/* =====================================================
   HIGH QUALITY WEB IMAGES
   ===================================================== */

const images = {
  hero:
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=2400&q=95",

  portrait:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1800&q=95",

  fashion:
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=2000&q=95",

  street:
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2000&q=95",

  fitness:
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=95",

  lifestyle:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1800&q=95",

  film:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=1800&q=95",

  travel:
    "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=2000&q=95",

  backstage:
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=2000&q=95",

  blackWhite:
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=2000&q=95",

  hotel:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=95",

  architecture:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=95",

  camera:
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1800&q=95",
};

const work = [
  {
    number: "01",
    title: "NOIR",
    category: "FASHION",
    year: "SS26",
    image: images.fashion,
  },
  {
    number: "02",
    title: "AFTER DARK",
    category: "FILM",
    year: "2026",
    image: images.film,
  },
  {
    number: "03",
    title: "URBAN FORM",
    category: "CAMPAIGN",
    year: "2026",
    image: images.street,
  },
  {
    number: "04",
    title: "OFF DUTY",
    category: "LIFESTYLE",
    year: "2026",
    image: images.lifestyle,
  },
];

const identities = {
  model: {
    label: "01 / MODEL",
    title: "THE\nFASHION\nSIDE.",
    text:
      "Editorials, campaigns and commercial work built around strong visual presence, movement and character.",
    image: images.fashion,
    tags: ["Editorial", "Commercial", "Runway"],
  },

  actor: {
    label: "02 / ACTOR",
    title: "THE\nSTORY\nSIDE.",
    text:
      "Character-driven work for films, music videos, branded content and visual storytelling.",
    image: images.film,
    tags: ["Film", "Character", "Music Video"],
  },

  creator: {
    label: "03 / CREATOR",
    title: "THE\nDIGITAL\nSIDE.",
    text:
      "Social-first content combining personality, lifestyle, fashion and brand storytelling.",
    image: images.lifestyle,
    tags: ["Instagram", "YouTube", "Brands"],
  },
};

function AnimatedCounter({
  end,
  suffix = "",
  decimals = 0,
  duration = 1800,
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const counterRef = useRef(null);

  useEffect(() => {
    const element = counterRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Smooth ease-out
      const eased =
        1 - Math.pow(1 - progress, 4);

      const value = eased * end;

      setCount(value);

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [started, end, duration]);

  return (
    <strong ref={counterRef}>
      {count.toFixed(decimals)}
      {suffix}
    </strong>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [identity, setIdentity] = useState("model");

  const cursor = useRef(null);
  const cursorRing = useRef(null);

  const activeIdentity = identities[identity];

  /* =====================================================
     LOADER + SCROLL REVEALS
     ===================================================== */

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);

    const revealItems = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .image-reveal"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  /* =====================================================
     CUSTOM CURSOR
     ===================================================== */

  useEffect(() => {
    if (window.innerWidth <= 900) return;

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursor.current) {
        cursor.current.style.transform = `
          translate3d(${mouseX}px, ${mouseY}px, 0)
        `;
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (cursorRing.current) {
        cursorRing.current.style.transform = `
          translate3d(${ringX}px, ${ringY}px, 0)
        `;
      }

      requestAnimationFrame(animateRing);
    };

    const enter = (e) => {
      const type = e.currentTarget.dataset.cursor;

      cursor.current?.classList.add("cursor-hover");
      cursorRing.current?.classList.add("cursor-ring-hover");

      if (cursor.current) {
        cursor.current.dataset.label = type || "VIEW";
      }
    };

    const leave = () => {
      cursor.current?.classList.remove("cursor-hover");
      cursorRing.current?.classList.remove("cursor-ring-hover");

      if (cursor.current) {
        cursor.current.dataset.label = "";
      }
    };

    document.addEventListener("mousemove", move);

    const interactive = document.querySelectorAll(
      "a, button, .work-item, .platform-card, .story-grid > div, .brand-feature"
    );

    interactive.forEach((item) => {
      item.addEventListener("mouseenter", enter);
      item.addEventListener("mouseleave", leave);
    });

    animateRing();

    return () => {
      document.removeEventListener("mousemove", move);

      interactive.forEach((item) => {
        item.removeEventListener("mouseenter", enter);
        item.removeEventListener("mouseleave", leave);
      });
    };
  }, [loading]);

  /* =====================================================
     SCROLL PARALLAX
     ===================================================== */

  useEffect(() => {
    const progress = document.querySelector(".scroll-progress");

    const update = () => {
      const scrollTop = window.scrollY;
      const total =
        document.documentElement.scrollHeight - window.innerHeight;

      if (progress && total > 0) {
        progress.style.width = `${(scrollTop / total) * 100}%`;
      }

      const heroImage = document.querySelector(".hero-background img");

      if (heroImage && window.innerWidth > 700) {
        heroImage.style.transform = `
          scale(1.06)
          translateY(${scrollTop * 0.045}px)
        `;
      }
    };

    window.addEventListener("scroll", update, {
      passive: true,
    });

    update();

    return () =>
      window.removeEventListener("scroll", update);
  }, []);

  /* =====================================================
     MOUSE IMAGE PARALLAX
     ===================================================== */

  useEffect(() => {
    const items = document.querySelectorAll("[data-parallax]");

    const move = (e) => {
      if (window.innerWidth < 900) return;

      const x =
        (e.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (e.clientY / window.innerHeight - 0.5) * 2;

      items.forEach((item) => {
        const amount =
          Number(item.dataset.parallax) || 8;

        item.style.transform = `
          translate3d(
            ${x * amount}px,
            ${y * amount}px,
            0
          )
        `;
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  /* =====================================================
     IMAGE TILT
     ===================================================== */

  useEffect(() => {
    const cards =
      document.querySelectorAll(".tilt-card");

    cards.forEach((card) => {
      const move = (e) => {
        if (window.innerWidth < 900) return;

        const rect =
          card.getBoundingClientRect();

        const x =
          (e.clientX - rect.left) /
          rect.width -
          0.5;

        const y =
          (e.clientY - rect.top) /
          rect.height -
          0.5;

        card.style.transform = `
          perspective(900px)
          rotateX(${y * -3}deg)
          rotateY(${x * 3}deg)
          translateY(-6px)
        `;
      };

      const leave = () => {
        card.style.transform = "";
      };

      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
    });
  }, [loading]);

  const scrollTo = (id) => {
    setMenuOpen(false);

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <main className="site">

      {/* =================================================
          LOADER
      ================================================= */}

      <div
        className={`page-loader ${loading ? "loading" : "loaded"
          }`}
      >
        <div className="loader-top">
          <span>FA / 26</span>
          <span>CREATIVE ARCHIVE</span>
        </div>

        <div className="loader-center">
          <strong>FAIZ</strong>
          <span>ALAM</span>
        </div>

        <div className="loader-bottom">
          <span>LOADING VISUAL SYSTEM</span>
          <span>00 — 100</span>
        </div>
      </div>

      {/* =================================================
          SCROLL PROGRESS
      ================================================= */}

      <div className="scroll-progress" />

      {/* =================================================
          CUSTOM CURSOR
      ================================================= */}

      <div ref={cursorRing} className="cursor-ring" />

      <div
        ref={cursor}
        className="custom-cursor"
        data-label=""
      >
        <span />
      </div>

      {/* =================================================
          NAVBAR
      ================================================= */}

      <nav className="topbar">

        <button
          className="brand-mark"
          data-cursor="HOME"
          onClick={() => scrollTo("home")}
        >
          <div className="brand-box">
            <span>F</span>
            <span>A</span>
            <i />
          </div>

          <div className="brand-word">
            <strong>FAIZ ALAM</strong>
            <small>MODEL / ACTOR / CREATOR</small>
          </div>
        </button>

        <div className="topbar-center">
          <span>MODEL</span>
          <span>ACTOR</span>
          <span>CREATOR</span>
        </div>

        <button
          className="menu-button"
          data-cursor="MENU"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          <span>
            {menuOpen ? "CLOSE" : "MENU"}
          </span>

          {menuOpen ? (
            <X size={17} />
          ) : (
            <Menu size={17} />
          )}
        </button>
      </nav>

      {/* =================================================
          MENU
      ================================================= */}

      <div
        className={`menu-overlay ${menuOpen ? "menu-open" : ""
          }`}
      >
        <div className="menu-number">
          NAVIGATION / 00
        </div>

        <div className="menu-links">
          {[
            ["01", "HOME", "home"],
            ["02", "ABOUT", "about"],
            ["03", "WORK", "work"],
            ["04", "SOCIAL", "social"],
            ["05", "CONTACT", "contact"],
          ].map(([number, label, id], index) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                "--menu-delay": `${index * 70}ms`,
              }}
            >
              <span>{number}</span>
              {label}
              <ArrowUpRight size={24} />
            </button>
          ))}
        </div>

        <div className="menu-footer">
          <span>INDIA</span>
          <span>AVAILABLE WORLDWIDE</span>
        </div>
      </div>

      {/* =================================================
          HERO
      ================================================= */}

      <section className="hero" id="home">

        <div className="hero-background">
          <img
            src={images.hero}
            alt="Fashion editorial"
          />
        </div>

        <div className="hero-glow" />
        <div className="hero-grain" />
        <div className="hero-grid" />

        <div className="hero-location reveal">
          <span>IND / 30.37° N</span>
          <span>77.05° E</span>
        </div>

        <div className="hero-index reveal">
          <span>PORTFOLIO</span>
          <strong>01</strong>
        </div>

        <div className="hero-social reveal-right">
          <a href="#instagram" data-cursor="IG">
            IG
          </a>

          <a href="#youtube" data-cursor="YT">
            YT
          </a>

          <a href="#facebook" data-cursor="FB">
            FB
          </a>
        </div>

        <div className="hero-content">

          <div className="hero-kicker">
            <span className="live-dot" />
            REPRESENTING A NEW GENERATION
          </div>

          <h1 className="hero-title">
            <span className="hero-line">
              FAIZ
            </span>

            <span className="hero-line outline-line">
              ALAM
            </span>
          </h1>

          <div className="hero-description">

            <p>
              Model / Actor / Digital Creator
              <br />
              Fashion / Film / Culture
            </p>

            <button
              className="primary-button"
              data-cursor="OPEN"
              onClick={() =>
                scrollTo("work")
              }
            >
              VIEW SELECTED WORK
              <ArrowRight size={17} />
            </button>

          </div>
        </div>

        <div className="hero-bottom">
          <span>FASHION</span>
          <span>FILM</span>
          <span>CULTURE</span>
          <span>DIGITAL</span>
        </div>

      </section>

      {/* =================================================
          ABOUT
      ================================================= */}

      <section className="intro" id="about">

        <div className="section-label reveal">
          <span>02</span>
          <span>ABOUT / IDENTITY</span>
        </div>

        <div className="intro-layout">

          <div className="intro-title reveal-left">
            <span className="small-label">
              NOT JUST A FACE.
            </span>

            <h2>
              Built for
              <br />
              <i>the frame.</i>
            </h2>

            <div className="title-line" />
          </div>

          <div className="intro-copy reveal-right">

            <p className="intro-lead">
              A contemporary model and digital
              personality working across fashion,
              film and culture.
            </p>

            <p>
              The strongest campaigns don't just
              need someone in front of the camera.
              They need someone who can carry an
              idea, understand the frame and bring
              personality into the story.
            </p>

            <div className="intro-details">

              <div>
                <span>BASED</span>
                <strong>INDIA</strong>
              </div>

              <div>
                <span>HEIGHT</span>
                <strong>185 CM</strong>
              </div>

              <div>
                <span>LANGUAGES</span>
                <strong>EN / HI / UR</strong>
              </div>

            </div>

          </div>

        </div>

        <div className="intro-visual">

          <div
            className="intro-image-main image-reveal tilt-card"
            data-parallax="7"
          >
            <img
              src={images.portrait}
              alt="Portrait"
            />

            <span className="image-corner">
              ARCHIVE / 002
            </span>

            <div className="image-scan" />
          </div>

          <div
            className="intro-image-small image-reveal"
            data-parallax="-10"
          >
            <img
              src={images.architecture}
              alt="Architecture"
            />

            <span>
              VISUAL LANGUAGE
            </span>
          </div>

          <div className="intro-stamp">
            FA
            <br />
            26
          </div>

        </div>

      </section>

      {/* =================================================
          IDENTITY
      ================================================= */}

      <section className="identity-section">

        <div className="identity-top reveal">

          <div className="section-label light-label">
            <span>03</span>
            <span>WHAT I DO</span>
          </div>

          <p>
            One identity.
            <br />
            Three creative directions.
          </p>

        </div>

        <div className="identity-selector">

          {Object.keys(identities).map(
            (key) => (
              <button
                key={key}
                className={`identity-tab ${identity === key
                  ? "selected"
                  : ""
                  }`}
                onClick={() =>
                  setIdentity(key)
                }
              >
                <span>
                  {identities[key].label}
                </span>

                <strong>{key}</strong>

                <ArrowUpRight size={18} />

                <i />
              </button>
            )
          )}

        </div>

        <div className="identity-stage">

          <div className="identity-photo image-reveal">

            <img
              key={activeIdentity.image}
              src={activeIdentity.image}
              alt={activeIdentity.label}
            />

            <div className="photo-number">
              {activeIdentity.label}
            </div>

          </div>

          <div className="identity-copy">

            <span className="identity-label">
              {activeIdentity.label}
            </span>

            <h2 key={activeIdentity.title}>
              {activeIdentity.title
                .split("\n")
                .map((line, index) => (
                  <React.Fragment
                    key={`${line}-${index}`}
                  >
                    <span
                      className="identity-line"
                      style={{
                        "--line-delay": `${index * 90
                          }ms`,
                      }}
                    >
                      {line}
                    </span>

                    {index !== 2 && <br />}
                  </React.Fragment>
                ))}
            </h2>

            <p className="identity-description">
              {activeIdentity.text}
            </p>

            <div className="identity-tags">

              {activeIdentity.tags.map(
                (tag, index) => (
                  <span
                    key={tag}
                    style={{
                      "--tag-delay": `${index * 70
                        }ms`,
                    }}
                  >
                    {tag}
                  </span>
                )
              )}

            </div>

            <button
              className="circle-link"
              data-cursor="OPEN"
            >
              <ArrowUpRight size={20} />
            </button>

          </div>

        </div>

      </section>

      {/* =================================================
          NUMBERS
      ================================================= */}

      <section className="numbers">

        <div className="section-label reveal">
          <span>04</span>
          <span>BY THE NUMBERS</span>
        </div>

        <div className="numbers-grid">

          {/* 24 CITIES */}
          <div className="number-item reveal">
            <AnimatedCounter
              end={24}
              duration={1400}
            />

            <span>CITIES</span>

            <p>
              Travel / Shoots / Events
            </p>
          </div>


          {/* 680K YOUTUBE */}
          <div className="number-item reveal">
            <AnimatedCounter
              end={680}
              suffix="K"
              duration={1800}
            />

            <span>YOUTUBE</span>

            <p>
              Digital audience
            </p>
          </div>


          {/* 2.4M INSTAGRAM */}
          <div className="number-item reveal">
            <AnimatedCounter
              end={2.4}
              suffix="M"
              decimals={1}
              duration={2000}
            />

            <span>INSTAGRAM</span>

            <p>
              Social community
            </p>
          </div>


          {/* 03 DISCIPLINES */}
          <div className="number-item reveal">
            <AnimatedCounter
              end={3}
              duration={1200}
            />

            <span>DISCIPLINES</span>

            <p>
              Model / Actor / Creator
            </p>
          </div>

        </div>

      </section>

      {/* =================================================
          COMPACT RECENT PROJECTS
      ================================================= */}

      <section className="work-section" id="work">

        <div className="work-header">

          <div className="section-label reveal">
            <span>05</span>
            <span>SELECTED WORK</span>
          </div>

          <h2 className="reveal-left">
            RECENT
            <br />
            <i>PROJECTS.</i>
          </h2>

          <p className="reveal-right">
            Campaigns, editorials and visual
            stories.
          </p>

        </div>

        <div className="work-grid">

          {work.map((item, index) => (
            <article
              className="work-item tilt-card image-reveal"
              key={item.number}
              data-cursor="VIEW"
            >

              <div className="work-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="work-overlay">
                  <span>
                    {item.category}
                  </span>

                  <div>
                    <ArrowUpRight size={17} />
                  </div>
                </div>

                <span className="work-number">
                  {item.number}
                </span>

              </div>

              <div className="work-meta">

                <div>
                  <small>
                    {item.category}
                  </small>

                  <h3>{item.title}</h3>
                </div>

                <span>{item.year}</span>

              </div>

            </article>
          ))}

        </div>

        <div className="work-more reveal">
          <span>MORE PROJECTS</span>
          <ArrowRight size={17} />
        </div>

      </section>

      {/* =================================================
          SOCIAL
      ================================================= */}

      <section className="social-section" id="social">

        <div className="social-heading">

          <div className="section-label light-label reveal">
            <span>06</span>
            <span>DIGITAL WORLD</span>
          </div>

          <h2 className="reveal-left">
            THE
            <br />
            <i>FEED.</i>
          </h2>

          <p className="reveal-right">
            The portfolio
            <br />
            lives on screen too.
          </p>

        </div>

        <div className="social-platforms">

          <a
            className="platform-card instagram image-reveal"
            id="instagram"
            href="#"
            data-cursor="INSTAGRAM"
          >
            <div className="platform-top">
              <span className="platform-symbol">
                ◎
              </span>
              <span>INSTAGRAM</span>
              <ArrowUpRight size={18} />
            </div>

            <div className="platform-content">
              <strong>2.4M</strong>
              <span>FOLLOWERS</span>
            </div>

            <img
              src={images.lifestyle}
              alt="Instagram"
            />

            <div className="platform-handle">
              @faizalam
            </div>
          </a>

          <a
            className="platform-card youtube image-reveal"
            id="youtube"
            href="#"
            data-cursor="YOUTUBE"
          >
            <div className="platform-top">
              <span className="platform-symbol">
                ▶
              </span>

              <span>YOUTUBE</span>

              <ArrowUpRight size={18} />
            </div>

            <div className="platform-content">
              <strong>680K</strong>
              <span>SUBSCRIBERS</span>
            </div>

            <img
              src={images.film}
              alt="YouTube"
            />

            <div className="play-button">
              <Play
                size={18}
                fill="currentColor"
              />
            </div>
          </a>

          <a
            className="platform-card facebook image-reveal"
            id="facebook"
            href="#"
            data-cursor="FACEBOOK"
          >
            <div className="platform-top">
              <span className="platform-symbol">
                f
              </span>

              <span>FACEBOOK</span>

              <ArrowUpRight size={18} />
            </div>

            <div className="facebook-copy">
              <strong>410K</strong>

              <span>COMMUNITY</span>

              <div />

              <p>
                STORIES
                <br />
                UPDATES
                <br />
                EVENTS
              </p>
            </div>
          </a>

        </div>

      </section>

      {/* =================================================
          VISUAL DIARY
      ================================================= */}

      <section className="story-section">

        <div className="story-heading">

          <div className="section-label reveal">
            <span>07</span>
            <span>VISUAL DIARY</span>
          </div>

          <h2 className="reveal-left">
            LIFE
            <br />
            <i>OFF CAMERA.</i>
          </h2>

        </div>

        <div className="story-grid">

          <div
            className="story-large image-reveal"
            data-cursor="VIEW"
          >
            <img
              src={images.travel}
              alt="Travel"
            />

            <div>
              <span>01</span>
              <strong>TRAVEL</strong>
            </div>
          </div>

          <div
            className="story-tall image-reveal"
            data-cursor="VIEW"
          >
            <img
              src={images.hotel}
              alt="Hotel"
            />

            <span>
              PLACES / PEOPLE / MOMENTS
            </span>
          </div>

          <div
            className="story-small image-reveal"
            data-cursor="VIEW"
          >
            <img
              src={images.fitness}
              alt="Fitness"
            />

            <span>DISCIPLINE</span>
          </div>

        </div>

      </section>

      {/* =================================================
          PROCESS
      ================================================= */}

      <section className="process-section">

        <div className="process-image image-reveal">

          <img
            src={images.camera}
            alt="Camera"
          />

          <div className="process-image-label">
            <span>SHOT / 001</span>
            <span>BEHIND THE LENS</span>
          </div>

        </div>

        <div className="process-copy">

          <div className="section-label reveal">
            <span>08</span>
            <span>PROCESS</span>
          </div>

          <h2 className="reveal-left">
            GOOD
            <br />
            WORK
            <br />
            <i>STARTS</i>
            <br />
            BEFORE
            <br />
            THE
            <br />
            CAMERA.
          </h2>

          <div className="process-steps">

            {[
              ["01", "CONCEPT"],
              ["02", "PREP"],
              ["03", "SHOOT"],
              ["04", "DELIVER"],
            ].map(
              ([number, title]) => (
                <div
                  className="reveal"
                  key={number}
                >
                  <span>{number}</span>
                  <strong>{title}</strong>
                  <ArrowRight size={14} />
                </div>
              )
            )}

          </div>

        </div>

      </section>

      {/* =================================================
          COLLABORATIONS
      ================================================= */}

      <section
        className="brands-section"
        id="collaborations"
      >

        <div className="brands-topline reveal">
          <span>09</span>
          <span>COLLABORATIONS</span>
          <span>2026</span>
        </div>

        <div className="brands-intro">

          <div className="brands-kicker reveal">
            WHO WE WORK WITH
          </div>

          <h2 className="reveal-left">
            BUILT
            <br />
            <i>TOGETHER.</i>
          </h2>

          <p className="reveal">
            Fashion, automotive, hospitality,
            lifestyle and technology.
          </p>

        </div>

        <div className="brand-showcase">

          {[
            [
              "01",
              "MONARCH",
              "FASHION / CAMPAIGN",
            ],
            [
              "02",
              "VANTAGE",
              "AUTOMOTIVE / DIGITAL",
            ],
            [
              "03",
              "NOVA",
              "LIFESTYLE / SOCIAL",
            ],
            [
              "04",
              "ATELIER 09",
              "FASHION / EDITORIAL",
            ],
          ].map(
            ([number, brand, category]) => (
              <div
                className="brand-feature reveal"
                key={number}
              >
                <span>{number}</span>
                <strong>{brand}</strong>
                <small>{category}</small>
                <ArrowUpRight size={17} />
              </div>
            )
          )}

        </div>

      </section>

      {/* =================================================
          CONTACT
      ================================================= */}

      <section
        className="contact-section"
        id="contact"
      >

        <img
          src={images.blackWhite}
          alt="Portrait"
        />

        <div className="contact-dark" />
        <div className="contact-grid" />

        <div className="contact-number">
          10
        </div>

        <div className="contact-content">

          <span className="reveal">
            AVAILABLE FOR SELECT PROJECTS
          </span>

          <h2 className="reveal-left">
            LET'S MAKE
            <br />
            SOMETHING
            <br />
            <i>
              WORTH REMEMBERING.
            </i>
          </h2>

          <a
            href="mailto:hello@faizalam.demo"
            className="contact-link reveal"
            data-cursor="MAIL"
          >
            <span>
              START A CONVERSATION
            </span>

            <ArrowUpRight size={20} />
          </a>

        </div>

        <div className="contact-footer">

          <div className="footer-brand">
            FA<span>/</span>
          </div>

          <span>
            INDIA / WORLDWIDE
          </span>

          <span>
            FAIZ ALAM © 2026
          </span>

        </div>

      </section>

    </main>
  );
}

export default App;