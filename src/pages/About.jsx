
import React, { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Handshake,
  Lightbulb,
  Network,
  Rocket,
  Target,
  TrendingUp,
  Building2,
  Users,
  BriefcaseBusiness,
  Newspaper,
  ExternalLink,
  Sparkles,
  Compass,
  CalendarDays,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./About.css";

const images = {
  thub:
    "https://static.toiimg.com/thumb/msid-111559146,imgsize-16724,width-1200,height-675,resizemode-72/t-hub-tconsult-join-hands.jpg",
  spryple:
    "https://img.republicworld.com/all_images/hr-solutions-globally-1730207295562-16_9.webp?format=webp&h=720&q=85&w=1280",
  rakez:
    "https://rakez.com/Portals/0/Images/blog/RAKEZ%20inks%20partnership%20with%20the%20World%20Telugu%20Information%20Technology%20Council.jpg",
};

const stories = [
  {
    id: "01",
    date: "07 JULY 2024",
    category: "STARTUP ECOSYSTEM",
    title: "T-Hub and TConsult look towards global markets",
    summary:
      "The Times of India reported an MoU between T-Hub and TConsult focused on helping Telangana startups explore international markets. The reported areas included strategic advisory, overseas expansion tours, networking and international trade fairs.",
    image: images.thub,
    imageAlt: "Published photograph accompanying coverage of the T-Hub and TConsult collaboration",
    publisher: "The Times of India",
    source:
      "https://timesofindia.indiatimes.com/city/hyderabad/telangana-t-hub-tconsult-join-hands-to-link-global-markets-to-startups/articleshow/111559123.cms",
  },
  {
    id: "02",
    date: "16 JULY 2024",
    category: "INVESTMENT & GROWTH",
    title: "Bu Abdullah Group joins the TConsult Global Investor Pool",
    summary:
      "Telangana Today reported that Bu Abdullah Group joined the TConsult Global Investor Pool. The article describes the initiative as a way to connect international investors with businesses looking for growth and cross-border opportunities.",
    image: images.thub,
    imageAlt: "T-Hub and TConsult published collaboration photograph used as related coverage",
    publisher: "Telangana Today",
    source:
      "https://telanganatoday.com/telangana-bu-abdullah-group-signs-investor-agreement-with-tconsult",
  },
  {
    id: "03",
    date: "29 OCTOBER 2024",
    category: "HR TECHNOLOGY",
    title: "TConsult and Spryple announce a strategic alliance",
    summary:
      "Republic World reported a joint venture agreement between TConsult and Spryple. The announced focus was on HR technology for small and medium-sized businesses, including attendance and payroll processes.",
    image: images.spryple,
    imageAlt: "Published image accompanying the TConsult and Spryple HR solutions announcement",
    publisher: "Republic World",
    source:
      "https://www.republicworld.com/initiatives/spryple-and-tconsult-forge-strategic-alliance-to-transform-hr-solutions-globally",
  },
  {
    id: "04",
    date: "01 DECEMBER 2024",
    category: "ECOSYSTEM COLLABORATION",
    title: "TConsult Collaborative Summit",
    summary:
      "Telangana Tribune reported that the summit took place at T-Hub and included agreements intended to connect innovators, investors and industry stakeholders. Its coverage described 117 agreements as a key outcome of the event.",
    image: images.thub,
    imageAlt: "Published T-Hub and TConsult collaboration photograph used as related coverage",
    publisher: "Telangana Tribune",
    source:
      "https://www.telanganatribune.com/117-agreements-finalized-at-t-consult-summit/",
  },
  {
    id: "05",
    date: "14 JULY 2025",
    category: "CROSS-BORDER BUSINESS",
    title: "ExpandME Hyderabad and the RAKEZ–WTITC MoU",
    summary:
      "The Tribune reported on ExpandME Hyderabad, hosted by TConsult, and an MoU between Ras Al Khaimah Economic Zone (RAKEZ) and the World Telugu Information Technology Council (WTITC), focused on cross-border business collaboration.",
    image: images.rakez,
    imageAlt: "Published photograph accompanying the RAKEZ and WTITC partnership coverage",
    publisher: "The Tribune",
    source:
      "https://www.tribuneindia.com/news/business/rakez-wtitc-pact-at-expandme-hyderabad/",
  },
];

const principles = [
  {
    number: "01",
    title: "Connect",
    text: "Bring people, businesses and ecosystem stakeholders into meaningful conversations.",
    icon: Network,
  },
  {
    number: "02",
    title: "Innovate",
    text: "Encourage fresh ideas, collaboration and practical approaches to business challenges.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Commercialise",
    text: "Help promising ideas explore pathways towards business value and market opportunity.",
    icon: TrendingUp,
  },
  {
    number: "04",
    title: "Expand",
    text: "Help organisations explore international markets and cross-border relationships.",
    icon: Globe2,
  },
  {
    number: "05",
    title: "Build",
    text: "Develop partnerships and initiatives designed to create lasting business value.",
    icon: Building2,
  },
];

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`about-reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-photo" />
      <div className="about-hero-shade" />
      <div className="about-hero-grid" />

      <div className="about-hero-content">
        <span className="about-eyebrow">
          <span className="about-eyebrow-line" />
          PEOPLE · IDEAS · OPPORTUNITIES
        </span>

        <h1>
          Connecting
          <br />
          <span>possibilities</span>
          <br />
          beyond borders.
        </h1>

        <p>
          TConsult works across business, entrepreneurship and international
          collaboration, bringing people and opportunities closer together.
          Our published initiatives reflect a focus on startup market access,
          investment connections and cross-border business engagement.
        </p>

        <div className="about-hero-actions">
          <a href="#our-story" className="about-button-primary">
            Discover TConsult <ArrowRight size={18} />
          </a>

          <a href="#documented-work" className="about-button-text">
            Explore published work <ArrowDown size={17} />
          </a>
        </div>

        <div className="about-hero-bottom">
          <span>HYDERABAD, INDIA</span>
          <span className="about-hero-dot" />
          <span>INTERNATIONAL COLLABORATION</span>
        </div>
      </div>

      <a
        href="#our-story"
        className="about-scroll-cue"
        aria-label="Scroll to explore"
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={15} />
      </a>
    </section>
  );
}

function StorySection() {
  return (
    <section className="about-story section-pad" id="our-story">
      <Reveal className="about-section-heading">
        <span className="about-kicker">WHO WE ARE</span>
        <h2>
          Different worlds.
          <br />
          <span>One connected future.</span>
        </h2>
        <p>
          A business ecosystem is stronger when the right people, knowledge
          and opportunities can find each other.
        </p>
      </Reveal>

      <div className="about-story-layout">
        <Reveal className="about-story-image-wrap">
          <a
            href={stories[0].source}
            target="_blank"
            rel="noreferrer"
            aria-label="Read the Times of India article about T-Hub and TConsult"
          >
            <img
              src={images.thub}
              alt="Published news photograph of the T-Hub and TConsult collaboration"
              loading="lazy"
            />
          </a>

          <div className="about-image-label">
            <Newspaper size={17} />
            <span>DOCUMENTED COLLABORATION</span>
          </div>
        </Reveal>

        <Reveal className="about-story-copy">
          <span className="about-mini-label">THE TCONSULT APPROACH</span>
          <h3>
            Turning connections into opportunities for collaboration.
          </h3>

          <p>
            TConsult's public-facing work includes initiatives around startup
            ecosystems, investor connections, business relationships and
            international market exploration. These themes are reflected in
            published reporting on its collaborations and events.
          </p>

          <p>
            In July 2024, The Times of India reported on an MoU between
            T-Hub and TConsult intended to help Telangana startups explore
            international markets. Later reports covered investor-pool
            activity, an HR technology alliance and cross-border business
            engagement.
          </p>

          <p>
            This page highlights selected, publicly reported activities.
            It is not intended to be a complete corporate history or a claim
            that every organisation mentioned is a current client.
          </p>

          <a
            href={stories[0].source}
            className="about-inline-link"
            target="_blank"
            rel="noreferrer"
          >
            Read the original report <ExternalLink size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function PurposeSection() {
  return (
    <section className="about-purpose">
      <div className="about-purpose-glow" />

      <div className="about-purpose-inner section-pad">
        <Reveal className="about-purpose-heading">
          <span className="about-kicker">OUR PURPOSE</span>
          <h2>
            Make connections
            <br />
            <span>mean something.</span>
          </h2>

          <p>
            We believe that meaningful business progress can begin with
            the right introduction, a shared ambition or an opportunity
            to collaborate across markets.
          </p>

          <p>
            Our positioning centres on connecting people, ideas, businesses
            and global ecosystems so they can explore what is possible
            together.
          </p>
        </Reveal>

        <Reveal className="about-purpose-card">
          <div className="about-purpose-icon">
            <Target size={29} />
          </div>

          <span className="about-mini-label">OUR GUIDING IDEA</span>
          <h3>Connect local strengths with global opportunity.</h3>

          <p>
            Encourage collaboration between entrepreneurs, organisations,
            investors and international business networks.
          </p>

          <div className="about-purpose-card-line" />

          <span className="about-purpose-card-foot">
            CONNECT <span>+</span> INNOVATE <span>+</span> EXPAND
          </span>
        </Reveal>
      </div>
    </section>
  );
}

function PrinciplesSection() {
  return (
    <section className="about-principles section-pad">
      <Reveal className="about-section-heading">
        <span className="about-kicker">OUR FRAMEWORK</span>
        <h2>
          Five connected ideas.
          <br />
          <span>One bigger picture.</span>
        </h2>
        <p>
          These five themes describe the TConsult brand framework and the
          direction represented across this website.
        </p>
      </Reveal>

      <div className="about-principle-grid">
        {principles.map((item) => {
          const Icon = item.icon;

          return (
            <Reveal key={item.number}>
              <article className="about-principle-card">
                <div className="about-principle-top">
                  <span>{item.number}</span>
                  <Icon size={25} strokeWidth={1.7} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <div className="about-principle-bottom">
                  <span>BEYOND BORDERS</span>
                  <ArrowUpRight size={17} />
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function JourneySection() {
  const milestones = [
    {
      date: "JULY 2024",
      title: "Startup market access",
      text: "The Times of India reported on the T-Hub and TConsult MoU, with an emphasis on connecting Telangana startups to international markets.",
      image: images.thub,
      source: stories[0].source,
      publisher: "The Times of India",
    },
    {
      date: "JULY 2024",
      title: "Investor connections",
      text: "Telangana Today reported that Bu Abdullah Group joined the TConsult Global Investor Pool, an initiative described as connecting international investors with businesses seeking growth.",
      image: images.thub,
      source: stories[1].source,
      publisher: "Telangana Today",
    },
    {
      date: "OCTOBER 2024",
      title: "HR technology alliance",
      text: "Republic World reported a TConsult and Spryple joint venture agreement focused on HR solutions for small and medium-sized businesses.",
      image: images.spryple,
      source: stories[2].source,
      publisher: "Republic World",
    },
    {
      date: "DECEMBER 2024",
      title: "Collaborative summit",
      text: "Telangana Tribune reported on a TConsult summit at T-Hub and 117 agreements as a key outcome of the event.",
      image: images.thub,
      source: stories[3].source,
      publisher: "Telangana Tribune",
    },
    {
      date: "JULY 2025",
      title: "ExpandME Hyderabad",
      text: "The Tribune covered the TConsult-hosted ExpandME event and an MoU between RAKEZ and WTITC aimed at supporting cross-border business collaboration.",
      image: images.rakez,
      source: stories[4].source,
      publisher: "The Tribune",
    },
  ];

  return (
    <section className="about-journey section-pad" id="our-journey">
      <Reveal className="about-section-heading">
        <span className="about-kicker">SELECTED PUBLIC RECORD</span>
        <h2>
          A timeline of
          <br />
          <span>reported activities.</span>
        </h2>
        <p>
          A selection of milestones reported by third-party publications.
          Follow the source links to read the original coverage.
        </p>
      </Reveal>

      <div className="about-timeline">
        {milestones.map((item, index) => (
          <Reveal
            key={`${item.date}-${item.title}`}
            className={`about-timeline-item ${
              index % 2 === 1 ? "timeline-reverse" : ""
            }`}
          >
            <div className="about-timeline-image">
              <a href={item.source} target="_blank" rel="noreferrer">
                <img src={item.image} alt={item.title} loading="lazy" />
              </a>
            </div>

            <div className="about-timeline-marker">
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>

            <div className="about-timeline-copy">
              <span className="about-mini-label">
                <CalendarDays size={14} /> {item.date}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>

              <a
                href={item.source}
                target="_blank"
                rel="noreferrer"
                className="about-inline-link"
              >
                Read at {item.publisher} <ExternalLink size={15} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="about-source-note">
        This timeline reflects selected published reports, not a complete
        list of TConsult activities. The descriptions are summaries of the
        linked coverage.
      </p>
    </section>
  );
}

function CollaborationSection() {
  return (
    <section className="about-collaborations section-pad" id="documented-work">
      <Reveal className="about-section-heading">
        <span className="about-kicker">TCONSULT IN THE NEWS</span>
        <h2>
          Real stories.
          <br />
          <span>Original sources.</span>
        </h2>
        <p>
          Explore published coverage relating to startup market access,
          investment connections, HR technology and cross-border business.
        </p>
      </Reveal>

      <div className="about-collaboration-grid">
        {stories.map((item) => (
          <Reveal key={item.id}>
            <article className="about-collaboration-card">
              <a
                href={item.source}
                target="_blank"
                rel="noreferrer"
                className="about-collaboration-image"
                aria-label={`Read ${item.title} at ${item.publisher}`}
              >
                <img src={item.image} alt={item.imageAlt} loading="lazy" />
                <span className="about-collaboration-number">{item.id}</span>
                <span className="about-collaboration-open">
                  <ArrowUpRight size={21} />
                </span>
              </a>

              <div className="about-collaboration-body">
                <span className="about-mini-label">{item.category}</span>
                <span className="about-story-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>

                <div className="about-card-footer">
                  <span>{item.publisher}</span>
                  <a
                    href={item.source}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open source article: ${item.title}`}
                  >
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="about-source-note">
        Photographs are loaded from the linked publishers where available.
        Publisher pages may change their image URLs or restrict external
        embedding. Third-party names and logos remain the property of
        their respective owners.
      </p>
    </section>
  );
}

function GlobalSection() {
  return (
    <section className="about-global">
      <div className="about-global-image" />
      <div className="about-global-shade" />

      <div className="about-global-content section-pad">
        <Reveal>
          <span className="about-kicker about-kicker-light">
            INDIA · UAE · GLOBAL OPPORTUNITY
          </span>

          <h2>
            Think beyond
            <br />
            <span>geographical borders.</span>
          </h2>

          <p>
            Published coverage of TConsult's activities includes international
            market access, investor connections and the ExpandME Hyderabad
            event. These are examples of the cross-border business themes
            highlighted on this page.
          </p>

          <a
            href={stories[4].source}
            className="about-button-light"
            target="_blank"
            rel="noreferrer"
          >
            Explore ExpandME coverage <ArrowRight size={18} />
          </a>
        </Reveal>

        <div className="about-global-stamp">
          <Globe2 size={29} />
          <span>BEYOND</span>
          <strong>BORDERS</strong>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const gallery = [
    {
      image: images.thub,
      title: "Startup ecosystem",
      subtitle: "T-Hub & TConsult",
      source: stories[0].source,
    },
    {
      image: images.spryple,
      title: "HR technology",
      subtitle: "TConsult & Spryple",
      source: stories[2].source,
    },
    {
      image: images.rakez,
      title: "Cross-border collaboration",
      subtitle: "RAKEZ & WTITC",
      source: stories[4].source,
    },
  ];

  return (
    <section className="about-gallery section-pad">
      <Reveal className="about-gallery-heading">
        <div>
          <span className="about-kicker">FROM PUBLISHED COVERAGE</span>
          <h2>
            A closer look at
            <br />
            <span>documented work.</span>
          </h2>
        </div>

        <p>
          Open each source to see the original report and its accompanying
          published photograph.
        </p>
      </Reveal>

      <div className="about-gallery-grid">
        {gallery.map((item, index) => (
          <Reveal
            key={item.title}
            className={`about-gallery-item about-gallery-item-${index + 1}`}
          >
            <a href={item.source} target="_blank" rel="noreferrer">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="about-gallery-overlay">
                <span>0{index + 1} / 03</span>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
                <span className="about-gallery-link">
                  Open original report <ArrowUpRight size={16} />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="about-cta section-pad">
      <Reveal className="about-cta-inner">
        <div className="about-cta-glow" />

        <div className="about-cta-copy">
          <span className="about-kicker">START A CONVERSATION</span>
          <h2>
            The next opportunity
            <br />
            <span>could start here.</span>
          </h2>

          <p>
            Interested in startup ecosystems, international market
            exploration or business collaboration? Connect with TConsult
            to start a conversation.
          </p>

          <Link to="/contact" className="about-button-primary">
            Contact TConsult <ArrowRight size={18} />
          </Link>
        </div>

        <div className="about-cta-art" aria-hidden="true">
          <div className="about-cta-ring ring-one" />
          <div className="about-cta-ring ring-two" />
          <div className="about-cta-ring ring-three" />
          <div className="about-cta-center">
            <Compass size={43} strokeWidth={1.4} />
          </div>
          <span className="about-cta-orbit orbit-one">CONNECT</span>
          <span className="about-cta-orbit orbit-two">COLLABORATE</span>
          <span className="about-cta-orbit orbit-three">EXPAND</span>
        </div>
      </Reveal>
    </section>
  );
}

export default function About() {
  useEffect(() => {
    document.title = "About TConsult | People, Ideas & Opportunities";
  }, []);

  return (
    <main className="about-page">
      <AboutHero />
      <StorySection />
      <PurposeSection />
      <JourneySection />
      <PrinciplesSection />
      <CollaborationSection />
      <GlobalSection />
      <GallerySection />
      <AboutCTA />
    </main>
  );
}
