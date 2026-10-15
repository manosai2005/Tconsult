import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Globe2,
  MapPin,
  Menu,
  X,
  Users,
  Rocket,
  TrendingUp,
  Handshake,
  Lightbulb,
} from "lucide-react";
import "./Home.css";

const slides = [
  {
    eyebrow: "PARTNERSHIP EVENT · 2026",
    title: (
      <>
        Connect with the <br />
        <span>Global Tech Ecosystem.</span>
      </>
    ),
    subtitle: "GITEX GLOBAL & Expand North Star · UAE",
    description:
      "Discover international business opportunities, connect with technology leaders, explore startup ecosystems, and build relationships with investors and industry partners through TConsult's global initiatives.",
    date: "7–11 DEC 2026",
    location: "Dubai, UAE",
    button: "Explore GITEX Global",
    href: "https://www.gitex.com/",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2200&q=85",
    stats: [
      { value: "Global", label: "Networking", icon: Users },
      { value: "Startup", label: "Ecosystems", icon: Rocket },
      { value: "Cross-border", label: "Opportunities", icon: Globe2 },
    ],
  },
  {
    eyebrow: "ROOTED IN TELANGANA · CONNECTED TO THE WORLD",
    title: (
      <>
        From local impact <br />
        to <span>global opportunities.</span>
      </>
    ),
    subtitle: "Hyderabad · A Global Gateway",
    description:
      "TConsult connects people, ideas and businesses beyond borders, bridging India and global markets through strategic partnerships, ecosystem initiatives and business facilitation.",
    date: "PEOPLE · IDEAS · OPPORTUNITIES",
    location: "Beyond Borders",
    button: "Discover Our Story",
    href: "/about",
    image:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=2200&q=85",
    stats: [
      { value: "Connect", label: "People & ideas", icon: Users },
      { value: "Innovate", label: "Build solutions", icon: Lightbulb },
      { value: "Expand", label: "Reach new markets", icon: TrendingUp },
    ],
  },
  {
    eyebrow: "PEOPLE · IDEAS · OPPORTUNITIES · BEYOND BORDERS",
    title: (
      <>
        Build partnerships. <br />
        <span>Create global impact.</span>
      </>
    ),
    subtitle: "A connected ecosystem for growth",
    description:
      "From international delegations to innovation and market access, TConsult helps organisations build meaningful cross-border relationships and explore new opportunities.",
    date: "CONNECT · INNOVATE · COMMERCIALISE",
    location: "EXPAND · BUILD",
    button: "Explore Our Initiatives",
    href: "/services",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2200&q=85",
    stats: [
      { value: "Connect", label: "Ecosystems", icon: Globe2 },
      { value: "Collaborate", label: "With partners", icon: Handshake },
      { value: "Grow", label: "Across borders", icon: Rocket },
    ],
  },
];

const articles = [
  {
    category: "STARTUP ECOSYSTEM",
    date: "JUL 2024",
    title:
      "T-Hub and TConsult join hands to connect startups with global markets",
    description:
      "A strategic collaboration to help startups access international opportunities and global networks.",
    source: "The Times of India",
    mark: "TOI",
    image:
      "https://static.toiimg.com/thumb/msid-111559146,imgsize-16724,width-800,height-450,resizemode-72/t-hub-tconsult-join-hands.jpg",
    url:
      "https://timesofindia.indiatimes.com/city/hyderabad/telangana-t-hub-tconsult-join-hands-to-link-global-markets-to-startups/articleshow/111559123.cms",
  },
  {
    category: "PARTNERSHIP",
    date: "OCT 2024",
    title: "Spryple and TConsult forge a strategic alliance",
    description:
      "A partnership focused on HR technology and opportunities for businesses across global markets.",
    source: "Republic World",
    mark: "R.",
    image:
      "https://img.republicworld.com/all_images/hr-solutions-globally-1730207295562-16_9.webp?format=webp&h=720&q=75&w=1280",
    url:
      "https://www.republicworld.com/initiatives/spryple-and-tconsult-forge-strategic-alliance-to-transform-hr-solutions-globally",
  },
  {
    category: "INTERNATIONAL BUSINESS",
    date: "RAKEZ · INDIA",
    title: "RAKEZ delegation engages business leaders across India",
    description:
      "Cross-border engagement supporting business connections between India and the UAE.",
    source: "RAKEZ",
    mark: "RAKEZ",
    image:
      "https://rakez.com/Portals/0/Images/blog/RAKEZ%20inks%20partnership%20with%20the%20World%20Telugu%20Information%20Technology%20Council.jpg",
    url:
      "https://rakez.com/en/media-centre/news-detail/articleid/1609/rakez-delegation-to-india-engages-business-leaders-across-three-major-cities",
  },
];

const navigation = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Our Impact", "/impact"],
  ["Insights", "/insights"],
  ["Contact", "/contact"],
];

function Brand({ footer = false }) {
  return (
    <a className={`brand ${footer ? "brand-footer" : ""}`} href="/">
      Tconsult<sup>®</sup>
    </a>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 10000);

    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <main className="tc-home">
      <header className="tc-header">
        <div className="tc-header-inner">
          <Brand />

          <button
            className="tc-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

          <nav className={`tc-nav ${mobileMenuOpen ? "tc-nav-open" : ""}`}>
            {navigation.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className={label === "Home" ? "tc-nav-active" : ""}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>

          <a className="tc-gradient-button tc-header-button" href="/contact">
            Let's Connect <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <section className="tc-hero" aria-label="Featured TConsult stories">
        {slides.map((item, index) => (
          <div
            key={item.eyebrow}
            className={`tc-hero-background ${
              activeSlide === index ? "tc-hero-visible" : ""
            }`}
            style={{ backgroundImage: `url("${item.image}")` }}
            aria-hidden="true"
          />
        ))}

        <div className="tc-hero-tint" />
        <div className="tc-hero-ribbon tc-ribbon-one" />
        <div className="tc-hero-ribbon tc-ribbon-two" />

        <button
          className="tc-carousel-arrow tc-carousel-prev"
          onClick={previousSlide}
          aria-label="Previous slide"
        >
          <ArrowRight className="tc-arrow-reverse" size={22} />
        </button>

        <button
          className="tc-carousel-arrow tc-carousel-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ArrowRight size={22} />
        </button>

        <div className="tc-hero-inner">
          <div className="tc-hero-copy" key={activeSlide}>
            <p className="tc-hero-eyebrow">{slide.eyebrow}</p>

            {activeSlide === 0 && (
              <div className="tc-event-logos">
                <div className="tc-gitex-wordmark">
                  GITEX
                  <small>
                    GLOBAL <b>2026</b>
                  </small>
                </div>

                <span className="tc-event-divider" />

                <div className="tc-northstar-wordmark">
                  EXPAND
                  <br />
                  NORTH STAR
                </div>
              </div>
            )}

            <h1>{slide.title}</h1>
            <p className="tc-hero-subtitle">{slide.subtitle}</p>

            <div className="tc-hero-details">
              <span>
                <CalendarDays size={18} />
                {slide.date}
              </span>

              <i />

              <span>
                <MapPin size={18} />
                {slide.location}
              </span>
            </div>

            <p className="tc-hero-description">{slide.description}</p>

            <div className="tc-hero-stats">
              {slide.stats.map(({ value, label, icon: Icon }) => (
                <div className="tc-stat" key={value}>
                  <Icon size={24} />

                  <span>
                    <strong>{value}</strong>
                    <small>{label}</small>
                  </span>
                </div>
              ))}
            </div>

            <a
              className="tc-gradient-button tc-hero-button"
              href={slide.href}
              target={activeSlide === 0 ? "_blank" : undefined}
              rel={activeSlide === 0 ? "noreferrer" : undefined}
            >
              {slide.button} <ArrowRight size={17} />
            </a>
          </div>

          {activeSlide === 0 && (
            <aside className="tc-hero-features">
              <div>
                <Users />
                <span>
                  <strong>Global Networking</strong>
                  <small>Meet industry leaders</small>
                </span>
              </div>

              <div>
                <Rocket />
                <span>
                  <strong>Startup Ecosystem</strong>
                  <small>Discover innovations</small>
                </span>
              </div>

              <div>
                <TrendingUp />
                <span>
                  <strong>Business Opportunities</strong>
                  <small>Explore new markets</small>
                </span>
              </div>
            </aside>
          )}
        </div>

        <div className="tc-carousel-dots">
          {slides.map((item, index) => (
            <button
              key={item.eyebrow}
              className={activeSlide === index ? "tc-dot-active" : ""}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-current={activeSlide === index ? "true" : undefined}
            />
          ))}
        </div>

        <div className="tc-slide-number">
          <strong>0{activeSlide + 1}</strong> / 0{slides.length}
        </div>
      </section>

      <section
        className="tc-event-resource"
        aria-label="Official GITEX Global and Expand North Star event resources"
      >
        <div className="tc-event-resource-copy">
          <span className="tc-kicker">OFFICIAL EVENT INFORMATION</span>

          <h2>GITEX GLOBAL × EXPAND NORTH STAR 2026</h2>

          <p>
            Explore the official event information for the December 2026
            editions in Dubai. GITEX GLOBAL Expo runs 8–11 December, while
            Expand North Star runs 8–10 December.
          </p>
        </div>

        <div className="tc-event-resource-actions">
          <a
            className="tc-gradient-button"
            href="https://www.gitex.com/pdf/gitex-global-2026-venue-map-08-10.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Official Event Map <ArrowRight size={16} />
          </a>

          <a
            className="tc-outline-button"
            href="https://expandnorthstar.com/"
            target="_blank"
            rel="noreferrer"
          >
            Expand North Star Website <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section className="tc-intro">
        <div className="tc-intro-inner">
          <div>
            <span className="tc-kicker">01 / ABOUT TCONSULT</span>

            <h2>
              From local impact
              <br />
              to <em>global opportunities.</em>
            </h2>
          </div>

          <div className="tc-intro-divider" />

          <p>
            TConsult connects people, ideas and businesses beyond borders. We
            bridge opportunities between India and global markets through
            strategic partnerships, ecosystem initiatives and business
            facilitation.
          </p>

          <a className="tc-outline-button" href="/about">
            Discover Our Story <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section className="tc-insights">
        <div className="tc-section-heading">
          <div>
            <span className="tc-kicker">02 / TCONSULT IN ACTION</span>

            <h2>
              Real Partnerships. <em>Real Opportunities.</em>
            </h2>

            <p>
              Real stories, partnerships and initiatives connecting businesses
              across borders.
            </p>
          </div>

          <a className="tc-gradient-button" href="/insights">
            View All Insights <ArrowRight size={16} />
          </a>
        </div>

        <div className="tc-article-grid">
          {articles.map((article) => (
            <article className="tc-article-card" key={article.category}>
              <a
                className="tc-article-image-link"
                href={article.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Read ${article.title}`}
              >
                <img
                  className="tc-article-image"
                  src={article.image}
                  alt={`${article.source} coverage related to ${article.title}`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget.parentElement.classList.add(
                      "tc-image-fallback"
                    );
                  }}
                />

                <span className="tc-image-fallback-label">
                  {article.source}
                </span>
              </a>

              <div className="tc-article-content">
                <div className="tc-article-meta">
                  <span>{article.category}</span>
                  <time>{article.date}</time>
                </div>

                <h3>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {article.title}
                  </a>
                </h3>

                <p>{article.description}</p>

                <div className="tc-article-bottom">
                  <span
                    className={`tc-source-mark tc-source-${article.mark
                      .toLowerCase()
                      .replace(".", "")}`}
                  >
                    {article.mark}
                  </span>

                  <span className="tc-source-name">{article.source}</span>

                  <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read Article <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tc-global-gateway">
        <div className="tc-gateway-art">
          <div className="tc-gateway-label">
            <span>HYDERABAD</span>
            <h2>A Global Gateway</h2>
            <p>Connecting Telangana to the world.</p>
          </div>
        </div>

        <div className="tc-gateway-copy">
          <span className="tc-kicker">03 / OUR APPROACH</span>

          <h2>
            Think Beyond
            <br />
            <em>Geography.</em>
          </h2>

          <p>
            TConsult helps businesses, entrepreneurs and ecosystems explore
            international opportunities through strategic partnerships and
            global connections.
          </p>

          <a className="tc-text-link" href="/services">
            Explore Our Initiatives <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section className="tc-leadership">
        <div className="tc-leadership-heading">
          <span className="tc-kicker">04 / LEADERSHIP</span>

          <h2>
            Vision. Connections.
            <br />
            <em>Global Growth.</em>
          </h2>
        </div>

        <div className="tc-leader-art tc-leader-photo-wrap">
          <img
            className="tc-leader-photo"
            src="https://bsmedia.business-standard.com/_media/bs/img/article/2024-09/25/full/20240925160835.jpg"
            alt="Sundeep Kumar Makthala at a TConsult international meeting in 2024"
            loading="lazy"
            referrerPolicy="no-referrer"
          />

          <a
            className="tc-photo-credit"
            href="https://www.business-standard.com/content/press-releases-ani/sundeep-makthala-meets-world-s-richest-carlos-slim-to-expand-tconsult-124092500841_1.html"
            target="_blank"
            rel="noreferrer"
          >
            View published photo source <ArrowRight size={13} />
          </a>
        </div>

        <div className="tc-leader-bio">
          <h3>Sundeep Kumar Makthala</h3>
          <span>CHAIRMAN, TCONSULT</span>

          <p>
            Sundeep Kumar Makthala leads TConsult's work to connect people,
            ideas, businesses and global ecosystems. Public reporting has
            covered TConsult's international expansion efforts and partnership
            activity, including a 2024 meeting in Mexico focused on global
            consultation and investment connections.
          </p>

          <div className="tc-leader-links">
            <a
              className="tc-gradient-button tc-small-button"
              href="/about"
            >
              Learn More <ArrowRight size={15} />
            </a>

            <a
              className="tc-outline-button tc-small-button"
              href="https://in.linkedin.com/in/sundeepmakthala"
              target="_blank"
              rel="noreferrer"
            >
              Professional Profile <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <blockquote className="tc-leader-quote">
          <span>“</span>

          <p>
            Our focus is on creating meaningful connections that empower
            businesses, people and communities to grow beyond borders.
          </p>

          <cite>— Sundeep Kumar Makthala</cite>
        </blockquote>
      </section>

      <footer className="tc-footer">
        <div className="tc-footer-inner">
          <div className="tc-footer-brand">
            <Brand footer />

            <p>
              People <b>|</b> Ideas <b>|</b> Opportunities <b>|</b> Beyond
              Borders
            </p>
          </div>

          <nav className="tc-footer-nav">
            {navigation.map(([label, href]) => (
              <a href={href} key={label}>
                {label}
              </a>
            ))}
          </nav>

          <div className="tc-social-links">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
            >
              𝕏
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              ▶
            </a>
          </div>
        </div>

        <div className="tc-footer-bottom">
          <span>
            © {new Date().getFullYear()} TConsult. All rights reserved.
          </span>

          <span>
            Connecting people, ideas and opportunities beyond borders.
          </span>
        </div>
      </footer>
    </main>
  );
}