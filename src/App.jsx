import React, { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Play,
  Menu,
  X,
  Plus,
} from "lucide-react";

import "./App.css";

const model = {
  hero: "/model/01-hero.jpg",
  portrait: "/model/02-portrait.jpg",
  fitness: "/model/03-fitness.jpg",
  fashion: "/model/04-fashion-editorial.jpg",
  street: "/model/05-streetwear.jpg",
  lifestyle: "/model/06-lifestyle.jpg",
  travel: "/model/07-travel.jpg",
  film: "/model/08-film.jpg",
  campaign: "/model/09-brand-campaign.jpg",
  backstage: "/model/10-backstage.jpg",
  blackWhite: "/model/11-black-white.jpg",
  casual: "/model/12-casual.jpg",
};

const contextImages = {
  city:
    "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1800&q=90",

  hotel:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=90",

  camera:
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=90",

  architecture:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=90",
};

const work = [
  {
    number: "01",
    title: "NOIR",
    category: "FASHION",
    year: "SS26",
    image: model.fashion,
  },
  {
    number: "02",
    title: "AFTER DARK",
    category: "FILM",
    year: "2026",
    image: model.film,
  },
  {
    number: "03",
    title: "URBAN FORM",
    category: "CAMPAIGN",
    year: "2026",
    image: model.street,
  },
  {
    number: "04",
    title: "OFF DUTY",
    category: "LIFESTYLE",
    year: "2026",
    image: model.casual,
  },
];

const identities = {
  model: {
    label: "01 / MODEL",
    title: "THE\nFASHION\nSIDE.",
    text:
      "Editorials, campaigns and commercial work built around strong visual presence, movement and character.",
    image: model.fashion,
    tags: ["Editorial", "Commercial", "Runway"],
  },

  actor: {
    label: "02 / ACTOR",
    title: "THE\nSTORY\nSIDE.",
    text:
      "Character-driven work for films, music videos, branded content and visual storytelling.",
    image: model.film,
    tags: ["Film", "Character", "Music Video"],
  },

  creator: {
    label: "03 / CREATOR",
    title: "THE\nDIGITAL\nSIDE.",
    text:
      "Social-first content combining personality, lifestyle, fashion and brand storytelling.",
    image: model.lifestyle,
    tags: ["Instagram", "YouTube", "Brands"],
  },
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [identity, setIdentity] = useState("model");

  const activeIdentity = identities[identity];

  const scrollTo = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="site">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <nav className="topbar">

        <button
          className="logo"
          onClick={() => scrollTo("home")}
        >
          FA<span>/</span>
        </button>

        <div className="topbar-center">
          <span>MODEL</span>
          <span>ACTOR</span>
          <span>CREATOR</span>
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>{menuOpen ? "CLOSE" : "MENU"}</span>

          {menuOpen ? (
            <X size={17} />
          ) : (
            <Menu size={17} />
          )}
        </button>

      </nav>

      {/* =====================================================
          FULL MENU
      ===================================================== */}

      {menuOpen && (
        <div className="menu-overlay">

          <div className="menu-number">
            NAVIGATION / 00
          </div>

          <div className="menu-links">

            <button onClick={() => scrollTo("home")}>
              <span>01</span>
              HOME
            </button>

            <button onClick={() => scrollTo("about")}>
              <span>02</span>
              ABOUT
            </button>

            <button onClick={() => scrollTo("work")}>
              <span>03</span>
              WORK
            </button>

            <button onClick={() => scrollTo("social")}>
              <span>04</span>
              SOCIAL
            </button>

            <button onClick={() => scrollTo("contact")}>
              <span>05</span>
              CONTACT
            </button>

          </div>

          <div className="menu-footer">
            <span>INDIA</span>
            <span>AVAILABLE WORLDWIDE</span>
          </div>

        </div>
      )}

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero" id="home">

        <div className="hero-background">
          <img src={model.hero} alt="Faiz Alam fictional model" />
        </div>

        <div className="hero-grain" />

        <div className="hero-location">
          <span>IND / 30.37° N</span>
          <span>77.05° E</span>
        </div>

        <div className="hero-index">
          <span>PORTFOLIO</span>
          <strong>01</strong>
        </div>

        <div className="hero-social">

          <a href="#instagram">
            IG
          </a>

          <a href="#youtube">
            YT
          </a>

          <a href="#facebook">
            FB
          </a>

        </div>

        <div className="hero-content">

          <div className="hero-kicker">
            <span className="live-dot" />
            REPRESENTING A NEW GENERATION
          </div>

          <h1>
            FAIZ
            <br />
            <span>ALAM</span>
          </h1>

          <div className="hero-description">

            <p>
              Model / Actor / Digital Creator
            </p>

            <button
              onClick={() => scrollTo("work")}
            >
              VIEW SELECTED WORK
              <ArrowRight size={17} />
            </button>

          </div>

        </div>

        <div className="hero-bottom">

          <span>
            FASHION
          </span>

          <span>
            FILM
          </span>

          <span>
            CULTURE
          </span>

          <span>
            DIGITAL
          </span>

        </div>

        <button
          className="hero-scroll"
          onClick={() => scrollTo("about")}
        >
          <span>SCROLL</span>
          <ArrowRight size={15} />
        </button>

      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="intro" id="about">

        <div className="section-label">
          <span>02</span>
          <span>ABOUT / IDENTITY</span>
        </div>

        <div className="intro-layout">

          <div className="intro-title">

            <span className="small-label">
              NOT JUST A FACE.
            </span>

            <h2>
              Built for
              <br />
              <i>the frame.</i>
            </h2>

          </div>

          <div className="intro-copy">

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

          <div className="intro-image-main">
            <img
              src={model.portrait}
              alt="Portrait"
            />

            <span className="image-corner">
              ARCHIVE / 002
            </span>
          </div>

          <div className="intro-image-small">
            <img
              src={contextImages.architecture}
              alt="Modern architecture"
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

      {/* =====================================================
          IDENTITY SWITCHER
      ===================================================== */}

      <section className="identity-section">

        <div className="identity-top">

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

          {Object.keys(identities).map((key) => (

            <button
              key={key}
              className={identity === key ? "selected" : ""}
              onClick={() => setIdentity(key)}
            >
              <span>
                {identities[key].label}
              </span>

              <strong>
                {key}
              </strong>

              <ArrowUpRight size={18} />

            </button>

          ))}

        </div>

        <div className="identity-stage">

          <div className="identity-photo">

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

            <h2>
              {activeIdentity.title
                .split("\n")
                .map((line, index) => (
                  <React.Fragment key={line}>
                    {line}
                    {index !== 2 && <br />}
                  </React.Fragment>
                ))}
            </h2>

            <p>
              {activeIdentity.text}
            </p>

            <div className="identity-tags">

              {activeIdentity.tags.map((tag) => (
                <span key={tag}>
                  {tag}
                </span>
              ))}

            </div>

            <button className="circle-link">
              <ArrowUpRight size={20} />
            </button>

          </div>

        </div>

      </section>

      {/* =====================================================
          NUMBERS
      ===================================================== */}

      <section className="numbers">

        <div className="section-label">
          <span>04</span>
          <span>BY THE NUMBERS</span>
        </div>

        <div className="numbers-grid">

          <div className="number-item">
            <strong>24</strong>
            <span>CITIES</span>
            <p>Travel / Shoots / Events</p>
          </div>

          <div className="number-item">
            <strong>680K</strong>
            <span>YOUTUBE</span>
            <p>Digital audience</p>
          </div>

          <div className="number-item">
            <strong>2.4M</strong>
            <span>INSTAGRAM</span>
            <p>Social community</p>
          </div>

          <div className="number-item">
            <strong>03</strong>
            <span>DISCIPLINES</span>
            <p>Model / Actor / Creator</p>
          </div>

        </div>

      </section>

      {/* =====================================================
          SELECTED WORK
      ===================================================== */}

      <section className="work-section" id="work">

        <div className="work-header">

          <div className="section-label">
            <span>05</span>
            <span>SELECTED WORK</span>
          </div>

          <h2>
            RECENT
            <br />
            <i>PROJECTS.</i>
          </h2>

          <p>
            A fictional selection of campaigns,
            editorials and visual stories.
          </p>

        </div>

        <div className="work-list">

          {work.map((item) => (

            <article
              className="work-item"
              key={item.number}
            >

              <div className="work-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="work-image-overlay">

                  <span>
                    OPEN PROJECT
                  </span>

                  <ArrowUpRight size={18} />

                </div>

              </div>

              <div className="work-meta">

                <span>
                  {item.number}
                </span>

                <div>

                  <span>
                    {item.category}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                </div>

                <span>
                  {item.year}
                </span>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* =====================================================
          SOCIAL WORLD
      ===================================================== */}

      <section className="social-section" id="social">

        <div className="social-heading">

          <div className="section-label light-label">
            <span>06</span>
            <span>DIGITAL WORLD</span>
          </div>

          <h2>
            THE
            <br />
            <i>FEED.</i>
          </h2>

          <p>
            The portfolio lives on screen too.
          </p>

        </div>

        <div className="social-platforms">

          {/* INSTAGRAM */}

          <a
            className="platform-card instagram"
            id="instagram"
            href="#"
          >

            <div className="platform-top">

              <span className="platform-symbol">
                ◎
              </span>

              <span>
                INSTAGRAM
              </span>

              <ArrowUpRight size={18} />

            </div>

            <div className="platform-content">

              <strong>
                2.4M
              </strong>

              <span>
                FOLLOWERS
              </span>

            </div>

            <img
              src={model.lifestyle}
              alt="Instagram"
            />

            <div className="platform-handle">
              @faizalam
            </div>

          </a>

          {/* YOUTUBE */}

          <a
            className="platform-card youtube"
            id="youtube"
            href="#"
          >

            <div className="platform-top">

              <span className="platform-symbol">
                ▶
              </span>

              <span>
                YOUTUBE
              </span>

              <ArrowUpRight size={18} />

            </div>

            <div className="platform-content">

              <strong>
                680K
              </strong>

              <span>
                SUBSCRIBERS
              </span>

            </div>

            <img
              src={model.film}
              alt="YouTube"
            />

            <div className="play-button">
              <Play size={18} fill="currentColor" />
            </div>

          </a>

          {/* FACEBOOK */}

          <a
            className="platform-card facebook"
            id="facebook"
            href="#"
          >

            <div className="platform-top">

              <span className="platform-symbol">
                f
              </span>

              <span>
                FACEBOOK
              </span>

              <ArrowUpRight size={18} />

            </div>

            <div className="facebook-copy">

              <strong>
                410K
              </strong>

              <span>
                COMMUNITY
              </span>

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

        <div className="social-bottom">

          <span>
            FOLLOW THE PROCESS
          </span>

          <ArrowRight size={18} />

          <span>
            NOT JUST THE RESULT
          </span>

        </div>

      </section>

      {/* =====================================================
          VISUAL STORY
      ===================================================== */}

      <section className="story-section">

        <div className="story-heading">

          <div className="section-label">
            <span>07</span>
            <span>VISUAL DIARY</span>
          </div>

          <h2>
            LIFE
            <br />
            <i>OFF CAMERA.</i>
          </h2>

        </div>

        <div className="story-grid">

          <div className="story-large">

            <img
              src={model.travel}
              alt="Travel"
            />

            <div>
              <span>01</span>
              <strong>TRAVEL</strong>
            </div>

          </div>

          <div className="story-tall">

            <img
              src={contextImages.hotel}
              alt="Hotel"
            />

            <span>
              PLACES / PEOPLE / MOMENTS
            </span>

          </div>

          <div className="story-small">

            <img
              src={model.fitness}
              alt="Fitness"
            />

            <span>
              DISCIPLINE
            </span>

          </div>

          <div className="story-wide">

            <img
              src={model.backstage}
              alt="Backstage"
            />

            <div>
              <span>04</span>
              <strong>BEHIND THE SCENES</strong>
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="process-section">

        <div className="process-image">

          <img
            src={contextImages.camera}
            alt="Camera"
          />

          <div className="process-image-label">
            <span>SHOT / 001</span>
            <span>BEHIND THE LENS</span>
          </div>

        </div>

        <div className="process-copy">

          <div className="section-label">
            <span>08</span>
            <span>PROCESS</span>
          </div>

          <h2>
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

            <div>
              <span>01</span>
              <strong>CONCEPT</strong>
            </div>

            <div>
              <span>02</span>
              <strong>PREP</strong>
            </div>

            <div>
              <span>03</span>
              <strong>SHOOT</strong>
            </div>

            <div>
              <span>04</span>
              <strong>DELIVER</strong>
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BRANDS
      ===================================================== */}

      <section className="brands-section" id="collaborations">

        <div className="brands-topline">
          <span>09</span>
          <span>COLLABORATIONS</span>
          <span>2026</span>
        </div>

        <div className="brands-intro">

          <div className="brands-kicker">
            WHO WE WORK WITH
          </div>

          <h2>
            BUILT
            <br />
            <i>TOGETHER.</i>
          </h2>

          <p>
            Fashion, automotive, hospitality,
            lifestyle and technology.
          </p>

        </div>

        <div className="brand-showcase">

          <div className="brand-feature">
            <span>01</span>
            <strong>MONARCH</strong>
            <small>FASHION / CAMPAIGN</small>
          </div>

          <div className="brand-feature">
            <span>02</span>
            <strong>VANTAGE</strong>
            <small>AUTOMOTIVE / DIGITAL</small>
          </div>

          <div className="brand-feature">
            <span>03</span>
            <strong>NOVA</strong>
            <small>LIFESTYLE / SOCIAL</small>
          </div>

          <div className="brand-feature">
            <span>04</span>
            <strong>ATELIER 09</strong>
            <small>FASHION / EDITORIAL</small>
          </div>

        </div>

        <div className="brands-bottom">

          <div className="brands-note">
            <span>AVAILABLE FOR</span>
            <strong>SELECT COLLABORATIONS</strong>
          </div>

          <div className="brands-arrow">
            <ArrowUpRight size={20} />
          </div>

        </div>

      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section className="contact-section" id="contact">

        <img
          src={model.blackWhite}
          alt="Contact portrait"
        />

        <div className="contact-dark" />

        <div className="contact-number">
          10
        </div>

        <div className="contact-content">

          <span>
            AVAILABLE FOR SELECT PROJECTS
          </span>

          <h2>
            LET'S MAKE
            <br />
            SOMETHING
            <br />
            <i>WORTH REMEMBERING.</i>
          </h2>

          <a
            href="mailto:hello@faizalam.demo"
            className="contact-link"
          >
            <span>
              START A CONVERSATION
            </span>

            <ArrowUpRight size={20} />

          </a>

        </div>

        <div className="contact-footer">

          <div>
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