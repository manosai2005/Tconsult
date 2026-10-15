import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Globe2,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  UserRound,
} from "lucide-react";

import "./Contact.css";

const WHATSAPP_NUMBER = "918019577575";
const PHONE_NUMBER = "+91 80195 77575";

const createWhatsAppLink = (message) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

const leadership = [
  {
    name: "Sundeep Kumar Makthala",
    role: "Chairman",
    description:
      "Technology entrepreneur and global ecosystem builder associated with TConsult.",
    profile:
      "https://in.linkedin.com/in/sundeepmakthala",
  },
  {
    name: "Vakiti Bhagya Lakshmi",
    role: "Director",
    description:
      "Listed as a director of TConsult Global Private Limited in public company records.",
    profile:
      "https://www.zaubacorp.com/TCONSULT-GLOBAL-PRIVATE-LIMITED-U62020TS2024PTC187173",
  },
];

const events = [
  {
    title: "TConsult Collaborative Summit",
    date: "December 2024",
    publisher: "Telangana Tribune",
    description:
      "Published coverage of the TConsult summit and agreements announced at the event.",
    image:
      "https://www.telanganatribune.com/wp-content/uploads/2024/12/117-agreements-finalized-at-t-consult-summit.webp",
    link:
      "https://www.telanganatribune.com/117-agreements-finalized-at-t-consult-summit/",
  },
  {
    title: "Royal Alliance Announcement",
    date: "October 2024",
    publisher: "Deccan Chronicle",
    description:
      "Coverage of TConsult's Royal Alliance initiative for international innovation and investment.",
    image:
      "https://www.deccanchronicle.com/h-upload/2024/10/09/1850611-img-20241009-wa0041.webp",
    link:
      "https://www.deccanchronicle.com/southern-states/telangana/tconsult-launches-royal-alliance-to-promote-global-innovation-and-investment-1829345",
  },
  {
    title: "Bu Abdullah Group Agreement",
    date: "July 2024",
    publisher: "Telangana Today",
    description:
      "Published coverage of the investor agreement between TConsult and Bu Abdullah Group.",
    image: null,
    link:
      "https://telanganatoday.com/telangana-bu-abdullah-group-signs-investor-agreement-with-tconsult",
  },
];

const publicParticipants = [
  {
    name: "Eswar Kota",
    description:
      "Named in published reporting about a TConsult–Spryple partnership.",
  },
  {
    name: "Rajeev Ravulapati",
    description:
      "Named in published reporting about a TConsult–Spryple partnership.",
  },
  {
    name: "Challa Narender",
    description:
      "Named in published reporting associated with TConsult's healthcare network.",
  },
  {
    name: "Vamshi Tirunarahari",
    description:
      "Named in published reporting associated with TConsult's healthcare network.",
  },
];

function EventImage({ event }) {
  const [imageError, setImageError] = useState(false);

  if (!event.image || imageError) {
    return (
      <a
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        className="tc-event-image tc-event-image-fallback"
      >
        <Globe2 size={38} />

        <span className="tc-fallback-title">
          {event.publisher}
        </span>

        <span className="tc-fallback-caption">
          View the original published article
        </span>

        <ArrowUpRight size={18} />
      </a>
    );
  }

  return (
    <a
      href={event.link}
      target="_blank"
      rel="noopener noreferrer"
      className="tc-event-image"
    >
      <img
        src={event.image}
        alt={`${event.title} published event photograph`}
        loading="lazy"
        onError={() => setImageError(true)}
      />

      <span className="tc-image-source">
        Published event photograph
      </span>
    </a>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    subject: "Business partnership",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const whatsappMessage = [
      "Hello TConsult team,",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Organisation: ${form.organisation || "Not provided"}`,
      `Enquiry: ${form.subject}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    const whatsappLink = createWhatsAppLink(whatsappMessage);

    window.open(
      whatsappLink,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main className="tc-contact">
      <div className="tc-page-shell">

        {/* PAGE INTRODUCTION */}

        <section className="tc-page-intro">
          <div className="tc-eyebrow">
            <span className="tc-eyebrow-dot" />
            PEOPLE · IDEAS · OPPORTUNITIES · BEYOND BORDERS
          </div>

          <h1>
            Let's connect and
            <span> create opportunities.</span>
          </h1>

          <p>
            Connect with TConsult to explore business partnerships,
            global expansion, innovation programmes and international
            opportunities.
          </p>

          <div className="tc-intro-links">
            <a
              href="#contact-form"
              className="tc-primary-button"
            >
              Send an enquiry
              <ArrowRight size={17} />
            </a>

            <a
              href={createWhatsAppLink(
                "Hello TConsult, I would like to connect."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="tc-secondary-button"
            >
              <MessageCircle size={17} />
              Chat on WhatsApp
            </a>
          </div>
        </section>

        {/* CONTACT INFORMATION */}

        <section
          className="tc-contact-info-grid"
          aria-label="Contact information"
        >
          <a
            className="tc-info-card"
            href={createWhatsAppLink(
              "Hello TConsult, I would like to make an enquiry."
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="tc-info-icon">
              <MessageCircle size={22} />
            </span>

            <span className="tc-info-label">
              WhatsApp
            </span>

            <strong>{PHONE_NUMBER}</strong>

            <span className="tc-info-action">
              Start a conversation
              <ArrowUpRight size={15} />
            </span>
          </a>

          <a
            className="tc-info-card"
            href="https://www.google.com/maps/search/?api=1&query=T-Hub+Raidurg+Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="tc-info-icon">
              <MapPin size={22} />
            </span>

            <span className="tc-info-label">
              Location
            </span>

            <strong>Hyderabad, Telangana</strong>

            <span className="tc-info-action">
              View location
              <ArrowUpRight size={15} />
            </span>
          </a>

          <div className="tc-info-card">
            <span className="tc-info-icon">
              <Globe2 size={22} />
            </span>

            <span className="tc-info-label">
              Our focus
            </span>

            <strong>Global collaboration</strong>

            <span className="tc-info-action">
              People · Ideas · Opportunities
            </span>
          </div>
        </section>

        {/* LEADERSHIP */}

        <section className="tc-section">
          <div className="tc-section-heading">
            <span className="tc-section-kicker">
              OUR LEADERSHIP
            </span>

            <h2>Leadership &amp; governance</h2>

            <p>
              Meet the publicly identified leadership associated
              with TConsult. Official portraits can be added when
              verified photographs are available.
            </p>
          </div>

          <div className="tc-leadership-grid">
            {leadership.map((person) => (
              <article
                className="tc-leader-card"
                key={person.name}
              >
                <div className="tc-leader-photo">
                  <div className="tc-photo-placeholder">
                    <UserRound size={48} />

                    <span>
                      Official portrait needed
                    </span>
                  </div>
                </div>

                <div className="tc-leader-content">
                  <span className="tc-role-pill">
                    {person.role}
                  </span>

                  <h3>{person.name}</h3>

                  <p>{person.description}</p>

                  <a
                    href={person.profile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tc-text-link"
                  >
                    View public source
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="tc-image-disclaimer">
            Individual photographs are intentionally not guessed or
            replaced with photographs of unrelated people.
          </p>
        </section>

        {/* REAL PUBLISHED EVENT COVERAGE */}

        <section className="tc-section tc-events-section">
          <div className="tc-section-heading">
            <span className="tc-section-kicker">
              TCONSULT IN ACTION
            </span>

            <h2>Events, partnerships &amp; milestones</h2>

            <p>
              Published reports about TConsult activities, with
              photographs where the original image is available.
            </p>
          </div>

          <div className="tc-event-grid">
            {events.map((event) => (
              <article
                className="tc-event-card"
                key={event.title}
              >
                <EventImage event={event} />

                <div className="tc-event-content">
                  <span className="tc-event-date">
                    {event.date}
                  </span>

                  <h3>{event.title}</h3>

                  <p>{event.description}</p>

                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tc-text-link"
                  >
                    Read on {event.publisher}
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PEOPLE MENTIONED IN PUBLIC REPORTS */}

        <section className="tc-section">
          <div className="tc-section-heading">
            <span className="tc-section-kicker">
              PUBLIC EVENT REFERENCES
            </span>

            <h2>People mentioned in published coverage</h2>

            <p>
              These names appear in published reporting. This is
              not a confirmed list of current TConsult employees.
            </p>
          </div>

          <div className="tc-people-grid">
            {publicParticipants.map((person) => (
              <article
                className="tc-person-row"
                key={person.name}
              >
                <div className="tc-person-avatar">
                  <UserRound size={24} />
                </div>

                <div>
                  <h3>{person.name}</h3>
                  <p>{person.description}</p>
                </div>
              </article>
            ))}
          </div>

          <a
            className="tc-source-note"
            href="https://www.republicworld.com/initiatives/spryple-and-tconsult-forge-strategic-alliance-to-transform-hr-solutions-globally"
            target="_blank"
            rel="noopener noreferrer"
          >
            View partnership article
            <ArrowUpRight size={15} />
          </a>
        </section>

        {/* CONTACT FORM */}

        <section
          className="tc-section tc-form-section"
          id="contact-form"
        >
          <div className="tc-form-intro">
            <span className="tc-section-kicker">
              LET'S TALK
            </span>

            <h2>Tell us what you have in mind.</h2>

            <p>
              Share your details and enquiry. The form prepares a
              WhatsApp message that you can review and send.
            </p>

            <div className="tc-form-points">
              <div>
                <CheckCircle2 size={19} />
                Partnership enquiries
              </div>

              <div>
                <CheckCircle2 size={19} />
                Global expansion
              </div>

              <div>
                <CheckCircle2 size={19} />
                Innovation programmes
              </div>
            </div>

            <div className="tc-form-contact">
              <Phone size={18} />

              <div>
                <span>Call or WhatsApp</span>

                <a href="tel:+918019577575">
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>

          <form
            className="tc-contact-form"
            onSubmit={handleSubmit}
          >
            <div className="tc-form-title">
              <span className="tc-form-icon">
                <Send size={20} />
              </span>

              <div>
                <h3>Send an enquiry</h3>
                <p>Fields marked * are required.</p>
              </div>
            </div>

            <div className="tc-form-row">
              <label>
                Full name *

                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                />
              </label>

              <label>
                Email address *

                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                />
              </label>
            </div>

            <div className="tc-form-row">
              <label>
                Phone number

                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91"
                  autoComplete="tel"
                />
              </label>

              <label>
                Company / organisation

                <input
                  name="organisation"
                  type="text"
                  value={form.organisation}
                  onChange={handleChange}
                  placeholder="Organisation name"
                  autoComplete="organization"
                />
              </label>
            </div>

            <label>
              Enquiry type *

              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
              >
                <option>Business partnership</option>
                <option>Global expansion</option>
                <option>Investor and startup connections</option>
                <option>Events and programmes</option>
                <option>Media enquiry</option>
                <option>Other enquiry</option>
              </select>
            </label>

            <label>
              Your message *

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your enquiry..."
                rows={5}
                required
              />
            </label>

            <button
              type="submit"
              className="tc-submit-button"
            >
              Continue to WhatsApp
              <MessageCircle size={18} />
            </button>

            <p className="tc-privacy-note">
              This form does not save your details to a database.
              It prepares a WhatsApp message for you to review and
              send.
            </p>
          </form>
        </section>

        {/* BOTTOM CALL TO ACTION */}

        <section className="tc-bottom-strip">
          <div className="tc-bottom-icon">
            <Building2 size={24} />
          </div>

          <div className="tc-bottom-copy">
            <h2>Have an opportunity to discuss?</h2>
            <p>Start a conversation with TConsult.</p>
          </div>

          <a
            href={createWhatsAppLink(
              "Hello TConsult, I would like to discuss an opportunity."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="tc-bottom-button"
          >
            Chat with us
            <ArrowRight size={17} />
          </a>
        </section>

        {/* FOOTER */}

        <footer className="tc-contact-footer">
          <span>TCONSULT</span>

          <span>
            People · Ideas · Opportunities · Beyond Borders
          </span>
        </footer>
      </div>

      {/* FLOATING WHATSAPP BUTTON */}

      <a
        className="tc-whatsapp-float"
        href={createWhatsAppLink(
          "Hello TConsult, I would like to connect."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with TConsult on WhatsApp"
      >
        <MessageCircle size={26} />
        <span>Chat with us</span>
      </a>
    </main>
  );
}