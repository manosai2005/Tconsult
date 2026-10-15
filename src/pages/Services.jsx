
import React, { useEffect, useRef } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Handshake,
  Lightbulb,
  Network,
  Rocket,
  TrendingUp,
  BriefcaseBusiness,
  Building2,
  Users,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Services.css";

const pressImages = {
  // Published photograph of the T-Hub–TConsult partnership
  thub:
    "https://static.toiimg.com/thumb/msid-111559146,imgsize-16724,width-1200,height-675,resizemode-72/t-hub-tconsult-join-hands.jpg",

  // Published coverage of the TConsult–Spryple alliance
  spryple:
    "https://img.republicworld.com/all_images/hr-solutions-globally-1730207295562-16_9.webp?format=webp&h=720&q=85&w=1280",

  // Published RAKEZ–WTITC partnership photograph
  rakez:
    "https://rakez.com/Portals/0/Images/blog/RAKEZ%20inks%20partnership%20with%20the%20World%20Telugu%20Information%20Technology%20Council.jpg",
};

const services = [
  {
    number: "01",
    label: "GLOBAL EXPANSION",
    title: "Take your business beyond borders.",
    description:
      "Entering another country takes more than ambition. Businesses need market understanding, the right introductions, local context, and a practical expansion plan. TConsult’s international business focus connects companies with opportunities and ecosystems beyond their home markets.",
    points: [
      "International market exploration",
      "Cross-border business introductions",
      "Expansion planning and strategic guidance",
      "Connections with overseas business ecosystems",
    ],
    icon: Globe2,
    image: pressImages.rakez,
    imageAlt:
      "Published photograph of the RAKEZ and WTITC partnership",
    imageCaption: "Cross-border ecosystem collaboration",
    source:
      "https://rakez.com/en/media-centre/news-detail/articleid/1609/rakez-delegation-to-india-engages-business-leaders-across-three-major-cities",
    sourceLabel: "RAKEZ official coverage",
    reverse: false,
  },
  {
    number: "02",
    label: "STARTUP GROWTH",
    title: "Help innovation reach new markets.",
    description:
      "Startups often need more than a strong product to grow internationally. TConsult’s publicly reported collaboration with T-Hub was designed to help Telangana startups explore overseas markets, develop strategic connections, and navigate expansion opportunities.",
    points: [
      "Startup growth and expansion guidance",
      "International networking opportunities",
      "Market access and business introductions",
      "Exposure through international business platforms",
    ],
    icon: Rocket,
    image: pressImages.thub,
    imageAlt:
      "Published news photograph of the T-Hub and TConsult partnership",
    imageCaption: "T-Hub × TConsult partnership coverage",
    source:
      "https://timesofindia.indiatimes.com/city/hyderabad/telangana-t-hub-tconsult-join-hands-to-link-global-markets-to-startups/articleshow/111559123.cms",
    sourceLabel: "Read published coverage",
    reverse: true,
  },
  {
    number: "03",
    label: "STRATEGIC PARTNERSHIPS",
    title: "Turn introductions into collaboration.",
    description:
      "The right partnership can create routes to new customers, markets, technology, and business opportunities. TConsult works around the development of strategic relationships that bring businesses and ecosystem stakeholders together.",
    points: [
      "Business-to-business introductions",
      "Strategic alliance development",
      "Cross-border collaboration opportunities",
      "Partnership and joint-venture discussions",
    ],
    icon: Handshake,
    image: pressImages.rakez,
    imageAlt:
      "Published photograph associated with the RAKEZ and WTITC partnership",
    imageCaption: "A documented international partnership",
    source:
      "https://www.business-standard.com/content/press-releases-ani/rakez-wtitc-pact-at-expandme-hyderabad-125071400898_1.html",
    sourceLabel: "Read event coverage",
    reverse: false,
  },
  {
    number: "04",
    label: "INVESTOR & BUSINESS CONNECT",
    title: "Bring the right people to the table.",
    description:
      "Growth depends on meaningful conversations between founders, investors, business leaders, and potential partners. TConsult’s reported ecosystem activities include connecting businesses with people and organisations that can help explore commercial opportunities.",
    points: [
      "Business networking and introductions",
      "Investor and entrepreneur engagement",
      "Commercial opportunity discussions",
      "Connections with industry stakeholders",
    ],
    icon: Network,
    image: pressImages.thub,
    imageAlt:
      "Published coverage of TConsult's startup ecosystem partnership",
    imageCaption: "Startup ecosystem and market-access collaboration",
    source:
      "https://timesofindia.indiatimes.com/city/hyderabad/telangana-t-hub-tconsult-join-hands-to-link-global-markets-to-startups/articleshow/111559123.cms",
    sourceLabel: "Read published coverage",
    reverse: true,
  },
  {
    number: "05",
    label: "EVENTS & MARKET ACCESS",
    title: "Create rooms where opportunities happen.",
    description:
      "Business events can bring companies, institutions, and international markets into the same conversation. TConsult hosted the ExpandME Hyderabad event, which brought together business leaders exploring opportunities to expand into the UAE.",
    points: [
      "Business networking events",
      "International market-focused engagements",
      "Industry and ecosystem introductions",
      "Platforms for cross-border conversations",
    ],
    icon: CalendarDays,
    image: pressImages.rakez,
    imageAlt:
      "Published coverage connected with the ExpandME and RAKEZ–WTITC engagement",
    imageCaption: "ExpandME Hyderabad and international engagement",
    source:
      "https://www.business-standard.com/content/press-releases-ani/rakez-wtitc-pact-at-expandme-hyderabad-125071400898_1.html",
    sourceLabel: "Read published coverage",
    reverse: false,
  },
  {
    number: "06",
    label: "TECHNOLOGY & COMMERCIALISATION",
    title: "Connect technology with business needs.",
    description:
      "Technology creates greater value when it solves real operational challenges and reaches the right customers. TConsult's publicly reported alliance with Spryple is an example of collaboration around HR technology and international business opportunities.",
    points: [
      "Technology-focused strategic partnerships",
      "Business collaboration around digital solutions",
      "Commercialisation and market-development discussions",
      "Connections between solution providers and businesses",
    ],
    icon: Lightbulb,
    image: pressImages.spryple,
    imageAlt:
      "Published photograph associated with the TConsult and Spryple HR technology alliance",
    imageCaption: "TConsult × Spryple alliance coverage",
    source:
      "https://www.republicworld.com/initiatives/spryple-and-tconsult-forge-strategic-alliance-to-transform-hr-solutions-globally",
    sourceLabel: "Read published coverage",
    reverse: true,
  },
];

const deliveredInitiatives = [
  {
    tag: "STARTUP ECOSYSTEM",
    year: "2024",
    title: "T-Hub × TConsult",
    description:
      "A reported MoU focused on connecting Telangana startups with international markets. Published coverage describes strategic advisory, overseas expansion opportunities, networking, and international trade-fair exposure.",
    image: pressImages.thub,
    imageAlt: "Published T-Hub and TConsult partnership photograph",
    source:
      "https://timesofindia.indiatimes.com/city/hyderabad/telangana-t-hub-tconsult-join-hands-to-link-global-markets-to-startups/articleshow/111559123.cms",
    sourceLabel: "Times of India",
  },
  {
    tag: "HR TECHNOLOGY",
    year: "2024",
    title: "TConsult × Spryple",
    description:
      "A joint-venture agreement announced in October 2024 to pursue HR technology opportunities globally, including solutions related to employee attendance and payroll for small and mid-sized businesses.",
    image: pressImages.spryple,
    imageAlt: "Published TConsult and Spryple alliance coverage",
    source:
      "https://www.republicworld.com/initiatives/spryple-and-tconsult-forge-strategic-alliance-to-transform-hr-solutions-globally",
    sourceLabel: "Republic World",
  },
  {
    tag: "INTERNATIONAL BUSINESS",
    year: "2025",
    title: "ExpandME Hyderabad",
    description:
      "TConsult hosted an ExpandME event at the Trident Hotel in Hyderabad. Published coverage reported more than 150 business leaders and a strategic MoU between RAKEZ and WTITC supporting cross-border business collaboration.",
    image: pressImages.rakez,
    imageAlt: "Published photograph of the RAKEZ and WTITC partnership",
    source:
      "https://www.business-standard.com/content/press-releases-ani/rakez-wtitc-pact-at-expandme-hyderabad-125071400898_1.html",
    sourceLabel: "Business Standard",
  },
];

function Reveal({ children, className = "" }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      element.classList.add("service-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("service-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elementRef} className={`service-reveal ${className}`}>
      {children}
    </div>
  );
}

function ServiceHero() {
  return (
    <section className="services-hero">
      <div className="services-hero-grid" aria-hidden="true" />
      <div className="services-orb services-orb-one" aria-hidden="true" />
      <div className="services-orb services-orb-two" aria-hidden="true" />

      <div className="services-hero-inner">
        <Reveal className="services-hero-copy">
          <span className="services-eyebrow services-eyebrow-light">
            <span className="services-pulse" />
            OUR SERVICES · GLOBAL POSSIBILITIES
          </span>

          <h1>
            Local ambition.
            <br />
            <span>Global opportunity.</span>
          </h1>

          <p className="services-hero-description">
            We connect businesses, ideas, technology and people to help
            opportunities move across borders. From startup market access
            to international partnerships, we help turn conversations
            into pathways for growth.
          </p>

          <div className="services-hero-actions">
            <Link to="/contact" className="services-button services-button-primary">
              Discuss your goals <ArrowUpRight size={18} />
            </Link>
            <a href="#our-services" className="services-text-link">
              Explore our services <ArrowDown size={17} />
            </a>
          </div>
        </Reveal>

        <Reveal className="services-hero-visual">
          <div className="services-visual-frame">
            <img
              src={pressImages.rakez}
              alt="Published coverage of international business collaboration involving RAKEZ and WTITC"
              fetchPriority="high"
            />
            <div className="services-visual-shade" />
            <div className="services-visual-label">
              <span className="services-visual-dot" />
              CONNECTING MARKETS & PEOPLE
            </div>
            <div className="services-visual-caption">
              <span>Cross-border collaboration</span>
              <a
                href="https://rakez.com/en/media-centre/news-detail/articleid/1609/rakez-delegation-to-india-engages-business-leaders-across-three-major-cities"
                target="_blank"
                rel="noreferrer"
                aria-label="Read RAKEZ's published coverage"
              >
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
          <div className="services-floating-note">
            <Globe2 size={21} />
            <div>
              <strong>Beyond borders</strong>
              <span>Built on relationships</span>
            </div>
          </div>
        </Reveal>
      </div>

      <a href="#our-services" className="services-scroll-cue">
        SCROLL TO EXPLORE <span />
      </a>
    </section>
  );
}

function ServicesIntroduction() {
  return (
    <section className="services-intro section-pad" id="our-services">
      <Reveal>
        <span className="services-eyebrow">
          <span className="services-eyebrow-line" />
          WHAT WE DO
        </span>
        <h2 className="services-section-heading">
          More than advice.
          <br />
          <span>A bridge to opportunity.</span>
        </h2>
        <p className="services-intro-text">
          Every business has a different next step. Our work brings
          together strategic thinking, international connections and
          practical opportunities—so businesses can explore new markets,
          develop partnerships and find the right people to move forward.
        </p>
      </Reveal>

      <div className="services-capability-strip">
        <div><Globe2 /><span>Connect globally</span></div>
        <div><TrendingUp /><span>Explore growth</span></div>
        <div><Handshake /><span>Build partnerships</span></div>
        <div><Building2 /><span>Expand business</span></div>
      </div>
    </section>
  );
}

function ServiceRow({ service }) {
  const Icon = service.icon;

  return (
    <Reveal className="service-row-reveal">
      <article
        className={`service-detail ${
          service.reverse ? "service-detail-reverse" : ""
        }`}
      >
        <div className="service-detail-image-wrap">
          <div className="service-image-number">{service.number}</div>
          <img
            className="service-detail-image"
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
          />
          <div className="service-image-caption">
            <span>{service.imageCaption}</span>
            <a
              href={service.source}
              target="_blank"
              rel="noreferrer"
              aria-label={`View source for ${service.title}`}
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <div className="service-detail-copy">
          <div className="service-detail-topline">
            <span className="service-detail-icon"><Icon size={23} /></span>
            <span>{service.label}</span>
          </div>

          <h3>{service.title}</h3>
          <p className="service-detail-description">{service.description}</p>

          <ul className="service-feature-list">
            {service.points.map((point) => (
              <li key={point}>
                <CheckCircle2 size={17} />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <a
            href={service.source}
            className="service-source-link"
            target="_blank"
            rel="noreferrer"
          >
            {service.sourceLabel} <ArrowUpRight size={17} />
          </a>
        </div>
      </article>
    </Reveal>
  );
}

function DeliveredSection() {
  return (
    <section className="delivered-section">
      <div className="delivered-background-glow" aria-hidden="true" />
      <div className="delivered-container">
        <Reveal className="delivered-heading">
          <span className="services-eyebrow services-eyebrow-light">
            <span className="services-eyebrow-line" />
            DOCUMENTED INITIATIVES
          </span>
          <h2>
            Our work,
            <br />
            <span>in action.</span>
          </h2>
          <p>
            A selection of publicly reported partnerships and business
            engagements associated with TConsult. Open each source to
            read the original coverage.
          </p>
        </Reveal>

        <div className="delivered-grid">
          {deliveredInitiatives.map((item, index) => (
            <Reveal key={item.title} className="delivered-card-reveal">
              <article className="delivered-card">
                <a
                  href={item.source}
                  target="_blank"
                  rel="noreferrer"
                  className="delivered-image-link"
                  aria-label={`Read coverage of ${item.title}`}
                >
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                  />
                  <span className="delivered-card-arrow">
                    <ArrowUpRight size={20} />
                  </span>
                </a>

                <div className="delivered-card-content">
                  <div className="delivered-card-meta">
                    <span>{item.tag}</span>
                    <span>{item.year}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a
                    href={item.source}
                    target="_blank"
                    rel="noreferrer"
                    className="delivered-source"
                  >
                    Source: {item.sourceLabel} <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="delivered-note">
          These examples reflect published reporting, not a complete
          client list or a claim that every listed capability has been
          delivered for every client.
        </p>
      </div>
    </section>
  );
}

function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      text: "We start with your business, objectives and target markets.",
    },
    {
      number: "02",
      title: "Connect",
      text: "We identify relevant people, organisations and opportunities.",
    },
    {
      number: "03",
      title: "Collaborate",
      text: "We help open conversations and explore practical pathways.",
    },
    {
      number: "04",
      title: "Move forward",
      text: "We focus on clear next steps aligned with your goals.",
    },
  ];

  return (
    <section className="services-process section-pad">
      <Reveal>
        <span className="services-eyebrow">
          <span className="services-eyebrow-line" />
          OUR APPROACH
        </span>
        <h2 className="services-section-heading">
          From first conversation
          <br />
          <span>to the next opportunity.</span>
        </h2>
      </Reveal>

      <div className="services-process-grid">
        {steps.map((step) => (
          <Reveal key={step.number} className="services-process-reveal">
            <article className="services-process-step">
              <span className="services-process-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ServicesCTA() {
  return (
    <section className="services-cta">
      <div className="services-cta-glow" aria-hidden="true" />
      <Reveal className="services-cta-content">
        <span className="services-eyebrow services-eyebrow-light">
          YOUR NEXT CHAPTER STARTS HERE
        </span>
        <h2>
          Have a vision?
          <br />
          <span>Let’s explore what’s possible.</span>
        </h2>
        <p>
          Tell us where you want to go, who you want to reach, or what
          you want to build. Let’s start a conversation.
        </p>
        <Link to="/contact" className="services-button services-button-primary">
          Connect with TConsult <ArrowUpRight size={18} />
        </Link>
      </Reveal>
    </section>
  );
}

export default function Services() {
  useEffect(() => {
    document.title = "Services | TConsult Global";

    return () => {
      document.title = "TConsult";
    };
  }, []);

  return (
    <main className="services-page">
      <ServiceHero />
      <ServicesIntroduction />

      <section className="services-list section-pad">
        {services.map((service) => (
          <ServiceRow key={service.number} service={service} />
        ))}
      </section>

      <DeliveredSection />
      <HowWeWork />
      <ServicesCTA />
    </main>
  );
}
