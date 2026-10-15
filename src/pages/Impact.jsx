
import React, { useEffect, useRef } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Globe2, Handshake,
  Users, Building2, TrendingUp, ExternalLink, CheckCircle2,
  BriefcaseBusiness, HeartPulse, GraduationCap, Network
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Impact.css";

const stories = [
  {
    no: "01",
    year: "DEC 2024",
    tag: "ECOSYSTEM COLLABORATION",
    title: "117 agreements. One platform for progress.",
    intro:
      "The T-Consult Collaborative Summit 2024 brought together innovators, investors, policymakers and industry leaders in Hyderabad.",
    impact:
      "Published coverage reported 117 agreements at the two-day summit. The event created a shared platform for organisations and professionals to explore collaboration across industries.",
    bullets: [
      "117 agreements reported by Telangana Tribune",
      "Investor and innovator networking",
      "Sessions on MSME policy and business collaboration",
      "Talent Connect, T-Consult Health and Doctors’ Pool featured"
    ],
    image:
      "https://www.telanganatribune.com/wp-content/uploads/2024/12/117-agreements-finalized-at-t-consult-summit.webp",
    imageAlt: "Photograph published with coverage of the T-Consult Collaborative Summit 2024",
    imageCredit: "Telangana Tribune · Summit coverage",
    source:
      "https://www.telanganatribune.com/117-agreements-finalized-at-t-consult-summit/",
    sourceLabel: "Read the summit report",
    icon: Handshake,
    style: "pink"
  },
  {
    no: "02",
    year: "OCT 2024",
    tag: "GLOBAL INNOVATION & INVESTMENT",
    title: "A new alliance for innovation with global ambition.",
    intro:
      "TConsult announced the Royal Alliance for Global Innovation & Investment in partnership with Queen Maria Leonora Torres of the Philippines.",
    impact:
      "The announced MoU set out a framework for connecting international networks, governments and investors with initiatives in healthcare, education, sustainability and technology.",
    bullets: [
      "Royal Alliance announced in October 2024",
      "MoU signed by TConsult Chairman Sundeep Kumar Makthala and Queen Maria Leonora Torres",
      "Healthcare, education, sustainability and technology identified as focus areas",
      "Long-term international collaboration stated as the ambition"
    ],
    image:
      "https://www.deccanchronicle.com/h-upload/2024/10/09/1850611-img-20241009-wa0041.webp",
    imageAlt: "Published Deccan Chronicle photograph accompanying coverage of the TConsult Royal Alliance launch",
    imageCredit: "Deccan Chronicle · Royal Alliance coverage",
    source:
      "https://www.deccanchronicle.com/southern-states/telangana/tconsult-launches-royal-alliance-to-promote-global-innovation-and-investment-1829345",
    sourceLabel: "Read the original coverage",
    icon: Globe2,
    style: "purple"
  },
  {
    no: "03",
    year: "JUL 2024",
    tag: "INVESTOR CONNECT",
    title: "Connecting businesses with an international investor network.",
    intro:
      "TConsult announced that Bu Abdullah Group of Companies had joined the TConsult Global Investor Pool (TGIP) as its first investment agency partner.",
    impact:
      "The initiative was presented as a way to connect businesses seeking international growth with investors and potential cross-border opportunities. The announcement describes the network's purpose; it does not confirm a total value of investments completed.",
    bullets: [
      "Bu Abdullah Group announced as TGIP's first investment agency partner",
      "Cross-border business expansion identified as a goal",
      "International investor and business connections at the centre of the initiative",
      "Publicly reported in July 2024"
    ],
    image:
      "https://therahnuma.com/wp-content/uploads/2024/07/tconsult-launches-tgip-to-connect-innovators-with-global-investors.jpg",
    imageAlt: "Published article image associated with the launch of TConsult Global Investor Pool",
    imageCredit: "The Rahnuma Daily · TGIP announcement",
    source:
      "https://therahnuma.com/tconsult-launches-tgip-to-connect-innovators-with-global-investors/",
    sourceLabel: "Read the TGIP announcement",
    fallbackImage:
      "https://telanganatoday.com/wp-content/uploads/2024/07/TConsult-Bu-Abdullah-Group.jpg",
    icon: TrendingUp,
    style: "pink"
  }
];

const capabilities = [
  {
    icon: BriefcaseBusiness,
    title: "Investor & business connections",
    text:
      "Creating a platform for investors, entrepreneurs and organisations to explore potential business relationships."
  },
  {
    icon: Network,
    title: "Talent & industry connections",
    text:
      "The 2024 summit coverage described Talent Connect and an effort to connect IT talent with organisations across 63 countries."
  },
  {
    icon: HeartPulse,
    title: "Health-focused collaboration",
    text:
      "T-Consult Health and Doctors’ Pool were listed among the programmes discussed at the Collaborative Summit."
  },
  {
    icon: GraduationCap,
    title: "Future-facing opportunities",
    text:
      "Student exchange programmes with Malaysia and Australia were reported as plans under consideration—not completed programmes."
  }
];

function Reveal({ children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      element.classList.add("impact-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("impact-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`impact-reveal ${className}`}>
      {children}
    </div>
  );
}

function ConnectionMap() {
  return (
    <div className="impact-map">
      <div className="impact-map-top">
        <span>THE CONNECTION LANDSCAPE</span>
        <span className="impact-map-status"><i /> ECOSYSTEM VIEW</span>
      </div>

      <svg viewBox="0 0 600 350" role="img"
        aria-label="Conceptual illustration connecting Hyderabad to international business networks">
        <defs>
          <linearGradient id="impactPath" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ed6cac" />
            <stop offset="100%" stopColor="#9b83f2" />
          </linearGradient>
          <radialGradient id="impactAura">
            <stop offset="0%" stopColor="#d95aa9" stopOpacity=".22" />
            <stop offset="100%" stopColor="#d95aa9" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="300" cy="175" r="165" fill="url(#impactAura)" />

        <g className="impact-map-grid">
          {Array.from({ length: 12 }, (_, i) =>
            <line key={`v${i}`} x1={40 + i * 47} y1="20" x2={40 + i * 47} y2="330" />
          )}
          {Array.from({ length: 7 }, (_, i) =>
            <line key={`h${i}`} x1="25" y1={30 + i * 48} x2="575" y2={30 + i * 48} />
          )}
        </g>

        <g className="impact-map-orbits">
          <ellipse cx="300" cy="175" rx="235" ry="80" />
          <ellipse cx="300" cy="175" rx="185" ry="125" />
          <ellipse cx="300" cy="175" rx="115" ry="155" />
        </g>

        <path className="impact-route" d="M135 195 Q245 45 405 115" />
        <path className="impact-route impact-route-two" d="M135 195 Q310 310 475 225" />
        <path className="impact-route impact-route-three" d="M405 115 Q445 175 475 225" />

        {[
          { x: 135, y: 195, label: "HYDERABAD", tx: 135, ty: 233 },
          { x: 405, y: 115, label: "INVESTORS", tx: 405, ty: 82 },
          { x: 475, y: 225, label: "GLOBAL NETWORKS", tx: 455, ty: 263 }
        ].map((node) => (
          <g className="impact-map-node" key={node.label}>
            <circle cx={node.x} cy={node.y} r="18" />
            <circle cx={node.x} cy={node.y} r="6" />
            <text x={node.tx} y={node.ty} textAnchor="middle">{node.label}</text>
          </g>
        ))}
        <text className="impact-map-small" x="28" y="27">INDIA</text>
        <text className="impact-map-small" x="455" y="325">BEYOND BORDERS</text>
      </svg>

      <div className="impact-map-legend">
        <span><i /> People</span><ArrowRight size={14} />
        <span><i /> Partnerships</span><ArrowRight size={14} />
        <span><i /> Possibilities</span>
      </div>
      <p className="impact-map-note">
        Conceptual visualisation of the initiative themes, not a measured route map.
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section className="impact-hero">
      <div className="impact-hero-orb impact-orb-a" />
      <div className="impact-hero-orb impact-orb-b" />
      <div className="impact-hero-inner">
        <Reveal className="impact-hero-copy">
          <span className="impact-kicker"><i /> OUR IMPACT · PROGRESS IN ACTION</span>
          <h1>
            Turning
            <br />
            <span>connections into</span>
            <br />
            possibilities.
          </h1>
          <p>
            From bringing innovators and investors together to building new
            international alliances, TConsult works to make meaningful
            connections possible. Explore the milestones reported publicly
            and the initiatives behind them.
          </p>
          <div className="impact-hero-buttons">
            <a href="#impact-stories" className="impact-primary-button">
              Explore our milestones <ArrowDown size={16} />
            </a>
            <Link to="/contact" className="impact-text-link">
              Start a conversation <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="impact-hero-proof">
            <CheckCircle2 size={17} />
            <span>Publicly reported milestones. Linked source for every story.</span>
          </div>
        </Reveal>
        <Reveal className="impact-hero-visual">
          <ConnectionMap />
        </Reveal>
      </div>
      <div className="impact-hero-foot">
        <span>PEOPLE</span><b />
        <span>IDEAS</span><b />
        <span>OPPORTUNITIES</span><b />
        <span>BEYOND BORDERS</span>
      </div>
    </section>
  );
}

function StatBand() {
  const stats = [
    {
      value: "117",
      label: "AGREEMENTS REPORTED",
      detail: "T-Consult Collaborative Summit 2024",
      url: "https://www.telanganatribune.com/117-agreements-finalized-at-t-consult-summit/"
    },
    {
      value: "63",
      label: "COUNTRIES REFERENCED",
      detail: "IT talent connections cited in summit coverage",
      url: "https://www.telanganatribune.com/117-agreements-finalized-at-t-consult-summit/"
    },
    {
      value: "4",
      label: "FOCUS AREAS",
      detail: "Royal Alliance: health, education, sustainability, technology",
      url: "https://www.deccanchronicle.com/southern-states/telangana/tconsult-launches-royal-alliance-to-promote-global-innovation-and-investment-1829345"
    }
  ];

  return (
    <section className="impact-stat-section">
      <Reveal className="impact-section-intro">
        <span className="impact-kicker"><i /> THE MILESTONES AT A GLANCE</span>
        <h2>Numbers with a story.<br /><span>Milestones with context.</span></h2>
        <p>
          These figures refer to specific published reports, not cumulative
          company-wide totals. The 63-country figure describes a reported
          talent-connection initiative, not offices in 63 countries.
        </p>
      </Reveal>
      <div className="impact-stat-grid">
        {stats.map((stat, i) => (
          <Reveal key={stat.label}>
            <a href={stat.url} target="_blank" rel="noreferrer"
              className={`impact-stat-card impact-stat-${i + 1}`}>
              <span className="impact-stat-number">0{i + 1}</span>
              <strong>{stat.value}</strong>
              <span className="impact-stat-label">{stat.label}</span>
              <p>{stat.detail}</p>
              <span className="impact-stat-source">View evidence <ExternalLink size={13} /></span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Story({ story, index }) {
  const Icon = story.icon;
  const [imageSrc, setImageSrc] = React.useState(story.image);

  return (
    <Reveal className="impact-story-reveal">
      <article className={`impact-story impact-story-${story.style} ${index % 2 ? "impact-story-reverse" : ""}`}>
        <div className="impact-story-photo-wrap">
          <div className="impact-story-photo">
            <img
              src={imageSrc}
              alt={story.imageAlt}
              loading="lazy"
              onError={() => {
                if (story.fallbackImage && imageSrc !== story.fallbackImage) {
                  setImageSrc(story.fallbackImage);
                }
              }}
            />
            <div className="impact-photo-overlay" />
            <div className="impact-photo-meta">
              <span>IMPACT {story.no}</span><span>{story.year}</span>
            </div>
            <div className="impact-photo-credit">
              <span>{story.imageCredit}</span>
              <a href={story.source} target="_blank" rel="noreferrer" aria-label={story.sourceLabel}>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="impact-photo-corner" />
        </div>

        <div className="impact-story-content">
          <div className="impact-story-tag">
            <span><Icon size={19} /></span>{story.tag}
          </div>
          <h3>{story.title}</h3>
          <p className="impact-story-intro">{story.intro}</p>

          <div className="impact-story-meaning">
            <span>THE SIGNIFICANCE</span>
            <p>{story.impact}</p>
          </div>

          <div className="impact-story-evidence">
            <span className="impact-evidence-heading">DOCUMENTED HIGHLIGHTS</span>
            {story.bullets.map((bullet) => (
              <div className="impact-evidence-item" key={bullet}>
                <CheckCircle2 size={15} /><span>{bullet}</span>
              </div>
            ))}
          </div>

          <a className="impact-source-link" href={story.source} target="_blank" rel="noreferrer">
            {story.sourceLabel} <ArrowUpRight size={17} />
          </a>
        </div>
      </article>
    </Reveal>
  );
}

function Timeline() {
  return (
    <section className="impact-timeline-section" id="impact-stories">
      <div className="impact-timeline-header">
        <Reveal>
          <span className="impact-kicker impact-kicker-light"><i /> OUR IMPACT TIMELINE</span>
          <h2>Different initiatives.<br /><span>A connected purpose.</span></h2>
          <p>
            A look at selected milestones documented by news publications.
            Each story links to its source so visitors can explore the details.
          </p>
        </Reveal>
      </div>
      <div className="impact-timeline">
        <div className="impact-timeline-line" />
        {stories.map((story, i) => (
          <div className="impact-timeline-row" key={story.no}>
            <div className="impact-timeline-index">{story.no}</div>
            <Story story={story} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}

function ProgramAreas() {
  return (
    <section className="impact-programs">
      <Reveal className="impact-section-intro">
        <span className="impact-kicker"><i /> BEYOND A SINGLE EVENT</span>
        <h2>Building connections<br /><span>across multiple needs.</span></h2>
        <p>
          The 2024 summit coverage also named these programme areas. This
          section describes the areas reported, not independently verified
          long-term results.
        </p>
      </Reveal>
      <div className="impact-program-grid">
        {capabilities.map((item) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title}>
              <article className="impact-program-card">
                <span className="impact-program-icon"><Icon size={23} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
      <a
        className="impact-program-source"
        href="https://www.telanganatribune.com/117-agreements-finalized-at-t-consult-summit/"
        target="_blank"
        rel="noreferrer"
      >
        Verify programme details in the summit report <ArrowUpRight size={16} />
      </a>
    </section>
  );
}

function ImpactCTA() {
  return (
    <section className="impact-cta">
      <div className="impact-cta-orbit impact-cta-orbit-a" />
      <div className="impact-cta-orbit impact-cta-orbit-b" />
      <Reveal className="impact-cta-inner">
        <span className="impact-kicker impact-kicker-light">THE NEXT MILESTONE STARTS WITH A CONVERSATION</span>
        <h2>What could we<br /><span>build together?</span></h2>
        <p>
          Bring us a business idea, a market opportunity or a collaboration
          to explore. Let’s start with the right connection.
        </p>
        <Link to="/contact" className="impact-primary-button">
          Connect with TConsult <ArrowUpRight size={18} />
        </Link>
      </Reveal>
    </section>
  );
}

export default function Impact() {
  useEffect(() => {
    document.title = "Our Impact | TConsult";
    return () => { document.title = "TConsult"; };
  }, []);

  return (
    <main className="impact-page">
      <Hero />
      <StatBand />
      <Timeline />
      <ProgramAreas />
      <ImpactCTA />
    </main>
  );
}
