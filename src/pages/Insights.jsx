
import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Globe2,
  HeartPulse,
  Lightbulb,
  Mail,
  Search,
  Sparkles,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Insights.css";

const articles = [
  {
    id: 1,
    category: "Global Investment",
    title: "Why cross-border connections matter to the next generation of business",
    excerpt:
      "Markets rarely grow in isolation. Strong partnerships can help businesses discover new capital, expertise, customers and routes to expansion.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    read: "6 min read",
    kind: "TConsult Perspective",
    date: "Perspective",
    icon: BriefcaseBusiness,
    featured: true,
    body: [
      "Growth opportunities increasingly sit across borders. A business may have a strong product in one market while its next customer, strategic partner or investor is based somewhere else.",
      "Cross-border collaboration starts with more than an introduction. It requires a shared understanding of the opportunity, clear objectives, reliable communication and partners who can navigate different business environments.",
      "For founders, the practical starting point is to identify the markets where their offer solves a real problem, understand the local landscape, and build relationships before expansion becomes urgent.",
      "The central idea is simple: meaningful connections become valuable when they lead to informed decisions, trusted partnerships and measurable progress.",
    ],
  },
  {
    id: 2,
    category: "Innovation",
    title: "From a promising idea to a market-ready opportunity",
    excerpt:
      "Innovation creates value when research, customer needs, execution and commercial thinking move in the same direction.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=85",
    read: "5 min read",
    kind: "TConsult Perspective",
    date: "Perspective",
    icon: Lightbulb,
    featured: false,
    body: [
      "A compelling idea is a beginning, not a business model. Turning innovation into a sustainable opportunity means understanding who needs the solution, what problem it addresses and why the market would adopt it.",
      "Start with discovery. Speak with potential customers, map existing alternatives and test the assumptions that could make or break the concept.",
      "Then build a focused pilot. A small, measurable experiment can reveal adoption barriers, operational needs and willingness to pay before a team commits to a larger launch.",
      "Commercialisation works best when product development, partnerships, distribution and funding are treated as connected parts of the same journey.",
    ],
  },
  {
    id: 3,
    category: "Healthcare",
    title: "Building bridges between healthcare traditions and modern innovation",
    excerpt:
      "Healthcare collaboration can bring practitioners, institutions and complementary approaches into a more connected conversation.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",
    read: "7 min read",
    kind: "TConsult Perspective",
    date: "Perspective",
    icon: HeartPulse,
    featured: false,
    body: [
      "Healthcare challenges often cross professional and geographical boundaries. Collaboration can help people exchange knowledge, discover shared priorities and identify opportunities to improve access and coordination.",
      "Any integrated healthcare initiative needs clear standards for patient safety, practitioner credentials, evidence, privacy and regulatory compliance. Different treatment approaches should not be assumed to have the same evidence base.",
      "Partnerships are most useful when their goals are specific: better coordination, responsible knowledge exchange, improved service access or carefully evaluated innovation.",
      "The opportunity lies in combining openness to collaboration with strong safeguards and a commitment to patient wellbeing.",
    ],
  },
  {
    id: 4,
    category: "Leadership",
    title: "The partnership mindset: leading beyond organisational boundaries",
    excerpt:
      "Today's complex challenges call for leaders who can align people, incentives and expertise across different organisations.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
    read: "5 min read",
    kind: "TConsult Perspective",
    date: "Perspective",
    icon: Users,
    featured: false,
    body: [
      "Partnership-led leadership begins by recognising that no single organisation has every capability required to solve a complex problem.",
      "Effective collaboration needs a common purpose, clearly defined responsibilities and a practical way to make decisions when priorities differ.",
      "Leaders can build trust by communicating expectations early, following through on commitments and making progress visible to all participants.",
      "The strongest partnerships are not measured only by the number of people in a room. They are measured by what the participants can accomplish together.",
    ],
  },
  {
    id: 5,
    category: "Regional Growth",
    title: "How regional ecosystems can create new pathways for enterprise",
    excerpt:
      "Talent, infrastructure, institutions and investment can reinforce one another when regional growth is planned around real opportunities.",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=85",
    read: "6 min read",
    kind: "TConsult Perspective",
    date: "Perspective",
    icon: TrendingUp,
    featured: false,
    body: [
      "Regional growth becomes more durable when opportunity reaches beyond a single city or industry. Local talent, businesses, educational institutions and investors can each contribute to a stronger ecosystem.",
      "The first step is to identify existing strengths and genuine demand rather than simply replicate a model from another location.",
      "Infrastructure, workforce development, access to finance and a predictable business environment can help businesses turn local potential into sustained activity.",
      "Progress should be evaluated through transparent measures such as business participation, investment realised, jobs created and long-term business performance.",
    ],
  },
  {
    id: 6,
    category: "Global Collaboration",
    title: "A practical framework for building partnerships that last",
    excerpt:
      "The best collaborations move from a shared ambition to specific commitments, accountable owners and measurable outcomes.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=85",
    read: "4 min read",
    kind: "TConsult Perspective",
    date: "Perspective",
    icon: Globe2,
    featured: false,
    body: [
      "Partnerships often begin with a shared ambition. They become productive when that ambition is translated into a defined problem, a realistic scope and a clear plan.",
      "Before work begins, participants should agree on responsibilities, timelines, decision-making, confidentiality and how success will be measured.",
      "A short pilot or initial workstream can test whether the relationship works in practice. Regular reviews help participants adapt when circumstances change.",
      "A partnership is more likely to last when each organisation understands the value it contributes and the outcomes it is working towards.",
    ],
  },
];

const publishedStories = [
  {
    id: 101,
    category: "Healthcare",
    title: "Baba Ramdev joins hands with TConsult on global healthcare collaboration",
    excerpt:
      "Business Standard reported on support for TConsult's Integrated Health Network and its focus on bringing healthcare approaches into a wider collaborative framework.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1000&q=85",
    date: "18 February 2025",
    publisher: "Business Standard",
    url: "https://www.business-standard.com/content/press-releases-ani/baba-ramdev-joins-hands-with-tconsult-to-revolutionize-global-healthcare-125021800586_1.html",
  },
  {
    id: 102,
    category: "Investment",
    title: "TConsult and Telangana's next investment wave",
    excerpt:
      "Coverage of Sundeep Makthala's meeting with Jayesh Ranjan and TConsult's stated focus on investor connections and innovation partnerships.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
    date: "9 May 2025",
    publisher: "The CEO / Republic World",
    url: "https://www.republicworld.com/amp/initiatives/sundeep-makthala-aligns-tconsult-with-telanganas-next-investment-wave",
  },
  {
    id: 103,
    category: "Global Collaboration",
    title: "Royal Alliance launched to promote global innovation and investment",
    excerpt:
      "Deccan Chronicle covered TConsult's announcement of a Royal Alliance initiative focused on global innovation and investment collaboration.",
    image:
      "https://www.deccanchronicle.com/h-upload/2024/10/09/1850611-img-20241009-wa0041.webp",
    date: "10 October 2024",
    publisher: "Deccan Chronicle",
    url: "https://www.deccanchronicle.com/southern-states/telangana/tconsult-launches-royal-alliance-to-promote-global-innovation-and-investment-1829345",
  },
  {
    id: 104,
    category: "Business Ecosystems",
    title: "Bu Abdullah Group signs investor agreement with TConsult",
    excerpt:
      "Telangana Today reported on Bu Abdullah Group joining TConsult Global Investor Pool as an investor partner.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    date: "16 July 2024",
    publisher: "Telangana Today",
    url: "https://telanganatoday.com/telangana-bu-abdullah-group-signs-investor-agreement-with-tconsult",
  },
];

const categories = [
  "All Insights",
  "Global Investment",
  "Innovation",
  "Healthcare",
  "Leadership",
  "Regional Growth",
  "Global Collaboration",
  "Business Ecosystems",
];

function InsightModal({ article, onClose }) {
  useEffect(() => {
    if (!article) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      className="insight-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <article
        className="insight-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="insight-modal-title"
      >
        <button
          type="button"
          className="insight-modal-close"
          onClick={onClose}
          aria-label="Close article"
        >
          <X size={21} />
        </button>

        <img
          className="insight-modal-image"
          src={article.image}
          alt=""
        />

        <div className="insight-modal-content">
          <span className="insight-eyebrow">
            {article.kind || article.publisher || "TConsult Insights"}
          </span>
          <h2 id="insight-modal-title">{article.title}</h2>
          <p className="insight-modal-intro">{article.excerpt}</p>

          {article.body ? (
            article.body.map((paragraph) => (
              <p className="insight-body-copy" key={paragraph}>
                {paragraph}
              </p>
            ))
          ) : (
            <p className="insight-body-copy">
              This story is provided as an editorial summary. Read the
              original publication for its full reporting, context and
              attribution.
            </p>
          )}

          {article.url && (
            <a
              className="insight-primary-button"
              href={article.url}
              target="_blank"
              rel="noreferrer"
            >
              Read original publication <ArrowUpRight size={17} />
            </a>
          )}
        </div>
      </article>
    </div>
  );
}

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("All Insights");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showPublished, setShowPublished] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    document.title = "Insights & Perspectives | TConsult";

    const elements = document.querySelectorAll(".insight-reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [showPublished, activeCategory, searchQuery]);

  const allArticles = useMemo(
    () => (showPublished ? [...articles, ...publishedStories] : articles),
    [showPublished]
  );

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return allArticles.filter((article) => {
      const matchesCategory =
        activeCategory === "All Insights" ||
        article.category === activeCategory;

      const matchesSearch =
        !query ||
        `${article.title} ${article.excerpt} ${article.category} ${
          article.publisher || ""
        }`
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, allArticles, searchQuery]);

  const featuredArticle = articles[0];

  function handleSubscribe(event) {
    event.preventDefault();
    setEmailError("");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // No mailing-list backend is connected yet.
    setSubscribed(true);
  }

  return (
    <main className="insights-page">
      <section className="insights-hero">
        <div className="insights-hero-image" aria-hidden="true" />
        <div className="insights-hero-orb insights-hero-orb-one" />
        <div className="insights-hero-orb insights-hero-orb-two" />
        <div className="insights-hero-grid" aria-hidden="true" />

        <div className="insights-container insights-hero-inner">
          <div className="insights-hero-copy">
            <div className="insights-kicker">
              <span className="insights-kicker-dot" />
              IDEAS · PERSPECTIVES · POSSIBILITIES
            </div>

            <h1>
              The ideas shaping
              <br />
              <span>what comes next.</span>
            </h1>

            <p className="insights-hero-description">
              Explore perspectives on innovation, global investment,
              leadership and the connections that help turn possibilities
              into progress.
            </p>

            <div className="insights-hero-actions">
              <a href="#insights-library" className="insight-primary-button">
                Explore insights <ArrowRight size={18} />
              </a>
              <a href="#editorial-note" className="insight-text-link">
                Our point of view <ArrowDown size={16} />
              </a>
            </div>

            <div className="insights-hero-proof">
              <span><Sparkles size={16} /> Ideas for a connected world</span>
              <span><Globe2 size={16} /> A global outlook</span>
            </div>
          </div>

          <div className="insights-hero-side-label">
            <span>01 / KNOWLEDGE</span>
            <span>THINK · CONNECT · GROW</span>
          </div>
        </div>

        <div className="insights-hero-bottom">
          <span>INSIGHTS BY TCONSULT</span>
          <span>STRATEGY / INNOVATION / ECOSYSTEMS</span>
        </div>
      </section>

      <section className="insights-manifesto" id="editorial-note">
        <div className="insights-container manifesto-grid">
          <div className="manifesto-label insight-reveal">
            <span className="insights-section-index">01 — OUR PERSPECTIVE</span>
            <span className="manifesto-line" />
            <span>Knowledge creates momentum.</span>
          </div>

          <div className="manifesto-copy insight-reveal">
            <h2>
              Better questions.
              <br />
              <span>Clearer possibilities.</span>
            </h2>
            <p>
              Progress begins with understanding. We explore the relationships
              between ideas, people, capital and opportunity — sharing
              practical perspectives that help leaders think clearly about
              what they build next.
            </p>
            <p>
              This is a space for considered viewpoints, ecosystem thinking
              and useful questions. It brings together original editorial
              perspectives and selected reporting about TConsult.
            </p>
          </div>

          <div className="manifesto-decoration insight-reveal" aria-hidden="true">
            <div className="manifesto-ring ring-one" />
            <div className="manifesto-ring ring-two" />
            <div className="manifesto-ring ring-three" />
            <span className="manifesto-center">T.</span>
          </div>
        </div>
      </section>

      <section className="insights-featured-section">
        <div className="insights-container">
          <div className="insights-section-heading insight-reveal">
            <div>
              <span className="insights-section-index">02 — EDITOR'S PICK</span>
              <h2>Worth thinking about.</h2>
            </div>
            <span className="insights-heading-note">
              A starting point for your next big idea.
            </span>
          </div>

          <article className="insights-featured-card insight-reveal">
            <div className="featured-image-wrap">
              <img
                src={featuredArticle.image}
                alt="Modern city buildings representing global business"
                loading="lazy"
              />
              <span className="featured-image-tag">FEATURED PERSPECTIVE</span>
            </div>

            <div className="featured-content">
              <div className="insight-card-meta">
                <span>{featuredArticle.category}</span>
                <span>{featuredArticle.read}</span>
              </div>
              <h3>{featuredArticle.title}</h3>
              <p>{featuredArticle.excerpt}</p>
              <button
                className="insight-read-link"
                type="button"
                onClick={() => setSelectedArticle(featuredArticle)}
              >
                Read perspective <ArrowRight size={17} />
              </button>
              <div className="featured-number" aria-hidden="true">01</div>
            </div>
          </article>
        </div>
      </section>

      <section className="insights-library-section" id="insights-library">
        <div className="insights-container">
          <div className="insights-section-heading insight-reveal">
            <div>
              <span className="insights-section-index">03 — THE LIBRARY</span>
              <h2>Explore the thinking.</h2>
              <p className="insights-section-description">
                Perspectives on the forces, relationships and decisions that
                shape sustainable growth.
              </p>
            </div>
            <div className="insight-library-count">
              <span>{filteredArticles.length.toString().padStart(2, "0")}</span>
              <small>ARTICLES SHOWN</small>
            </div>
          </div>

          <div className="insights-library-controls insight-reveal">
            <div className="insight-search">
              <Search size={18} />
              <input
                type="search"
                placeholder="Search ideas, themes, topics..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                aria-label="Search insights"
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearchQuery("")}
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <button
              className={`insight-source-toggle ${showPublished ? "active" : ""}`}
              type="button"
              onClick={() => setShowPublished((current) => !current)}
              aria-pressed={showPublished}
            >
              {showPublished ? "Showing press coverage" : "Include press coverage"}
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="insights-filter-list" aria-label="Filter by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`insight-filter-chip ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="insights-article-grid">
            {filteredArticles.map((article, index) => {
              const ArticleIcon = article.icon || BookOpen;

              return (
                <article
                  className="insight-article-card insight-reveal"
                  key={article.id}
                  style={{ "--insight-delay": `${(index % 3) * 90}ms` }}
                >
                  <button
                    type="button"
                    className="insight-card-image-button"
                    onClick={() => setSelectedArticle(article)}
                    aria-label={`Read ${article.title}`}
                  >
                    <img
                      src={article.image}
                      alt=""
                      loading="lazy"
                    />
                    <span className="insight-image-category">
                      {article.category}
                    </span>
                    <span className="insight-card-arrow">
                      <ArrowUpRight size={19} />
                    </span>
                  </button>

                  <div className="insight-article-content">
                    <div className="insight-card-meta">
                      <span>{article.kind || article.publisher}</span>
                      <span>{article.read || article.date}</span>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>

                    <div className="insight-card-footer">
                      <span className="insight-card-topic">
                        <ArticleIcon size={15} />
                        {article.category}
                      </span>
                      <button
                        type="button"
                        className="insight-small-read"
                        onClick={() => setSelectedArticle(article)}
                      >
                        Read <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredArticles.length === 0 && (
            <div className="insights-empty-state">
              <Search size={28} />
              <h3>No matching insights yet</h3>
              <p>Try another search term or choose a different category.</p>
              <button
                type="button"
                className="insight-primary-button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All Insights");
                }}
              >
                Reset filters <ArrowRight size={16} />
              </button>
            </div>
          )}

          <div className="insights-library-note">
            <BookOpen size={18} />
            <p>
              Editorial perspectives are original website content. Press
              coverage is shown separately when enabled, with links to the
              original publishers.
            </p>
          </div>
        </div>
      </section>

      <section className="insights-themes-section">
        <div className="insights-container">
          <div className="insights-section-heading insight-reveal">
            <div>
              <span className="insights-section-index">04 — AREAS OF INTEREST</span>
              <h2>Ideas don't live in silos.</h2>
            </div>
            <p className="insights-heading-note">
              Follow the connections between the themes.
            </p>
          </div>

          <div className="insight-theme-grid">
            {[
              {
                number: "01",
                title: "Capital & opportunity",
                text: "How investors, founders and businesses can find common ground.",
                icon: BriefcaseBusiness,
                category: "Global Investment",
              },
              {
                number: "02",
                title: "Innovation & enterprise",
                text: "The journey from promising ideas to meaningful commercial outcomes.",
                icon: Lightbulb,
                category: "Innovation",
              },
              {
                number: "03",
                title: "People & partnerships",
                text: "The relationships and leadership practices that make collaboration work.",
                icon: Users,
                category: "Leadership",
              },
              {
                number: "04",
                title: "Connected ecosystems",
                text: "How regions, institutions and industries can create new pathways to growth.",
                icon: Globe2,
                category: "Regional Growth",
              },
            ].map((theme) => {
              const ThemeIcon = theme.icon;

              return (
                <button
                  type="button"
                  className="insight-theme-card insight-reveal"
                  key={theme.number}
                  onClick={() => {
                    setActiveCategory(theme.category);
                    setShowPublished(false);
                    document
                      .getElementById("insights-library")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <div className="insight-theme-top">
                    <span>{theme.number}</span>
                    <ThemeIcon size={22} />
                  </div>
                  <h3>{theme.title}</h3>
                  <p>{theme.text}</p>
                  <span className="insight-theme-link">
                    Explore topic <ArrowRight size={16} />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="insights-press-section">
        <div className="insights-container insights-press-inner">
          <div className="insights-press-copy insight-reveal">
            <span className="insights-section-index">05 — TCONSULT IN THE NEWS</span>
            <h2>
              The conversation,
              <br />
              beyond our pages.
            </h2>
            <p>
              Explore selected external coverage of TConsult's initiatives,
              collaborations and ecosystem activity.
            </p>
            <button
              type="button"
              className="insight-primary-button"
              onClick={() => {
                setShowPublished(true);
                setActiveCategory("All Insights");
                document
                  .getElementById("insights-library")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore press coverage <ArrowRight size={17} />
            </button>
          </div>

          <div className="insights-press-list insight-reveal">
            {publishedStories.slice(0, 3).map((story, index) => (
              <a
                className="insights-press-row"
                href={story.url}
                target="_blank"
                rel="noreferrer"
                key={story.id}
              >
                <span className="insights-press-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="insights-press-text">
                  <small>{story.publisher} · {story.date}</small>
                  <strong>{story.title}</strong>
                </span>
                <ArrowUpRight size={19} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="insights-newsletter-section">
        <div className="insights-container">
          <div className="insights-newsletter insight-reveal">
            <div className="newsletter-glow" aria-hidden="true" />
            <div className="newsletter-copy">
              <span className="insights-section-index">06 — STAY CURIOUS</span>
              <h2>
                Keep your mind
                <br />
                <span>open to what's next.</span>
              </h2>
              <p>
                Be the first to discover new perspectives, ideas and updates
                from TConsult.
              </p>
            </div>

            <div className="newsletter-form-wrap">
              {subscribed ? (
                <div className="newsletter-success" role="status">
                  <CheckCircle2 size={26} />
                  <div>
                    <strong>Thanks for your interest.</strong>
                    <p>
                      The form is working locally. Connect a mailing-list
                      service to start collecting subscriptions.
                    </p>
                  </div>
                </div>
              ) : (
                <form className="insight-newsletter-form" onSubmit={handleSubscribe}>
                  <label htmlFor="insights-email">Your email address</label>
                  <div className="newsletter-input-row">
                    <Mail size={18} />
                    <input
                      id="insights-email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="you@company.com"
                      autoComplete="email"
                      required
                    />
                    <button type="submit" aria-label="Submit email">
                      <ArrowRight size={19} />
                    </button>
                  </div>
                  {emailError && (
                    <p className="newsletter-error" role="alert">
                      {emailError}
                    </p>
                  )}
                  <small>
                    No mailing service is connected yet. Your address will
                    not be sent to a server by this form.
                  </small>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="insights-closing-section">
        <div className="insights-container insight-reveal">
          <span className="insights-section-index">07 — CONTINUE THE CONVERSATION</span>
          <h2>
            An idea is a beginning.
            <br />
            <span>Let's explore what follows.</span>
          </h2>
          <p>
            Have a perspective, a partnership idea or a question about
            working together? Start a conversation with TConsult.
          </p>
          <Link to="/contact" className="insight-primary-button">
            Connect with TConsult <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <InsightModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </main>
  );
}
