import React from "react";

const imagePaths = {
  logo: "/images/sen-logo.jpeg",
  hero: "/images/runway-night.jpeg",
  about: "/images/airport-terminal.jpeg",
  gallery: [
    "/images/runway-lights.jpeg",
    "/images/terminal-aircraft.jpeg",
    "/images/control-room.jpeg",
    "/images/data-center.jpeg",
    "/images/air-traffic-control.jpeg",
    "/images/electrical-panels.jpeg",
  ],
};

const services = [
  ["Airport Systems Integration", "End-to-end integration of airport systems to ensure seamless operations."],
  ["Airfield Ground Lighting (AGL)", "Design, supply, installation, testing, and commissioning of ICAO-compliant systems."],
  ["Power & Electrical Engineering", "Power distribution, switchgear, control panels, and industrial installations."],
  ["Baggage Handling Systems", "Efficient systems to optimize passenger and airport operations."],
  ["Communication Systems", "Advanced voice and data communication infrastructure."],
  ["Security & Access Control", "CCTV, access control, and integrated monitoring systems."],
  ["Aviation Training & Simulators", "Training solutions and simulator systems for aviation operations."],
];

const reasons = [
  "Proven experience with 10+ years in aviation and engineering",
  "20+ successfully delivered projects",
  "Strong regional presence with local expertise",
  "End-to-end system integration capability",
  "Commitment to international standards",
  "Reliable project delivery with measurable results",
];

function CheckIcon() {
  return <span className="check">✓</span>;
}
const projects = [
  {
    image: "/images/runway-lights.jpeg",
    title: "Airfield Ground Lighting",
    description:
      "Design and installation of ICAO-compliant runway lighting systems.",
  },
  {
    image: "/images/terminal-aircraft.jpeg",
    title: "Airport Terminal Systems",
    description:
      "Integrated airport infrastructure and operational technologies.",
  },
  {
    image: "/images/control-room.jpeg",
    title: "Control Room Integration",
    description:
      "Monitoring, communication, and operational control solutions.",
  },
  {
    image: "/images/data-center.jpeg",
    title: "Electrical Engineering",
    description:
      "Reliable power distribution and industrial electrical systems.",
  },
  {
    image: "/images/air-traffic-control.jpeg",
    title: "Security & Surveillance",
    description:
      "Advanced CCTV and access control implementation.",
  },
  {
    image: "/images/electrical-panels.jpeg",
    title: "Aviation Technology",
    description:
      "Modern airport systems designed for safety and efficiency.",
  },
];

export default function App() {
  return (
    <main>
      <style>{css}</style>

      <nav className="nav">
        <div className="nav-inner">
          <div className="brand">
            <img src={imagePaths.logo} alt="SEN Group logo" />
            <span>SEN GROUP</span>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#work">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <img src={imagePaths.hero} alt="Illuminated airport runway" className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <img src={imagePaths.logo} alt="SEN Group logo" className="hero-logo" />
          <p className="eyebrow light">Airport Systems Integrator</p>
          <h1>Engineering the Skies.</h1>
          <h2>Integrating Airport Systems.</h2>
          <p className="hero-text">Delivering end-to-end airport and aviation systems across Africa and the Middle East.</p>
          <div className="hero-buttons">
            <a href="#services" className="button primary">Explore Services</a>
            <a href="#about" className="button secondary">Learn More</a>
          </div>
        </div>
      </section>

      <section id="about" className="section two-column">
        <div>
          <p className="eyebrow">About SEN Group</p>
          <h2>High-performance aviation and infrastructure engineering.</h2>
          <p>SEN Group is an engineering and technology company with over 10 years of experience in delivering high-performance solutions for the aviation and infrastructure sectors.</p>
          <p>Based in Ethiopia and active across the region, SEN Group has successfully delivered more than 20 projects, supporting airports, institutions, and industrial clients with reliable and innovative systems.</p>
        </div>
        <img src={imagePaths.about} alt="Airport terminal and aircraft" className="rounded-image" />
      </section>

      <section className="stats-wrap">
        <div className="stats">
          <div><strong>10+</strong><span>Years of Experience</span></div>
          <div><strong>20+</strong><span>Projects Delivered</span></div>
          <div><strong>2</strong><span>Regions: Africa & Middle East</span></div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="centered-heading">
          <p className="eyebrow">Core Services</p>
          <h2>Complete airport systems integration.</h2>
          <p>From airfield ground lighting to communication systems, security infrastructure, and power systems, SEN Group brings multiple technologies into one efficient ecosystem.</p>
        </div>

        <div className="cards">
          {services.map(([title, description]) => (
            <article className="card" key={title}>
              <div className="card-title"><CheckIcon /><h3>{title}</h3></div>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="section inner-dark">
          <p className="eyebrow light">Our Work</p>
          <h2>Built for performance. Designed for reliability.</h2>
          <p>SEN Group delivers reliable airport and electrical engineering systems that meet international standards.</p>
          <div className="gallery">
  {projects.map((project) => (
    <div className="project-card" key={project.title}>
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />

      <div className="project-overlay">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      <section className="section two-column">
        <img src="/images/air-traffic-control-wide.jpeg" alt="Airport control room" className="rounded-image" />
        <div>
          <p className="eyebrow">Why Choose SEN Group</p>
          <h2>Reliable delivery with measurable results.</h2>
          <div className="reason-list">
            {reasons.map((reason) => (
              <div className="reason" key={reason}><CheckIcon /><span>{reason}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>First in Africa. Expanding to the Middle East.</h2>
        <p>SEN Group operates primarily in Ethiopia and across the African region, with expanding activities in the Middle East.</p>
        <a href="mailto:info@sengrouplc.com" className="button contact-button">Contact SEN Group</a>
      </section>

      <footer>© {new Date().getFullYear()} SEN Group. Built for Performance. Designed for Reliability.</footer>
    </main>
  );
}

export function validatePageData() {
  return {
    hasLogo: Boolean(imagePaths.logo),
    hasHero: Boolean(imagePaths.hero),
    serviceCount: services.length,
    reasonCount: reasons.length,
    galleryCount: imagePaths.gallery.length,
  };
}

if (typeof console !== "undefined") {
  const pageData = validatePageData();
  console.assert(pageData.hasLogo, "SEN website should include a logo image.");
  console.assert(pageData.hasHero, "SEN website should include a hero image.");
  console.assert(pageData.serviceCount >= 6, "SEN website should include at least six core services.");
  console.assert(pageData.reasonCount >= 4, "SEN website should include at least four reasons to choose SEN Group.");
  console.assert(pageData.galleryCount >= 6, "SEN website should include at least six project/gallery images.");
}

const css = `
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; font-family: Inter, Arial, sans-serif; color: #0f172a; background: #ffffff; }
a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
.nav { position: fixed; top: 0; left: 0; width: 100%; z-index: 50; background: rgba(2, 6, 23, 0.86); color: white; border-bottom: 1px solid rgba(255,255,255,0.12); backdrop-filter: blur(12px); }
.nav-inner { max-width: 1180px; margin: 0 auto; padding: 14px 24px; display: flex; align-items: center; justify-content: space-between; }
.brand { display: flex; align-items: center; gap: 12px; font-size: 13px; font-weight: 800; letter-spacing: 0.18em; }
.brand img { height: 42px; width: auto; background: white; border-radius: 8px; padding: 4px; }
.nav-links { display: flex; gap: 28px; font-size: 14px; }
.nav-links a:hover { color: #bfdbfe; }
.hero { min-height: 100vh; position: relative; overflow: hidden; color: white; }
.hero-image { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(2,6,23,.9), rgba(15,23,42,.65), rgba(30,64,175,.35)); }
.hero-content { position: relative; z-index: 2; max-width: 1180px; margin: 0 auto; min-height: 100vh; padding: 120px 24px 80px; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; }
.hero-logo { width: 185px; background: white; border-radius: 18px; padding: 14px; margin-bottom: 34px; box-shadow: 0 25px 55px rgba(0,0,0,.35); }
.hero h1 { margin: 0; max-width: 820px; font-size: clamp(48px, 8vw, 86px); line-height: .95; letter-spacing: -0.06em; }
.hero h2 { margin: 16px 0 0; font-size: clamp(28px, 4vw, 48px); color: #dbeafe; }
.hero-text { max-width: 700px; margin: 28px 0 0; font-size: 20px; line-height: 1.7; color: #f8fafc; }
.hero-buttons { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 34px; }
.button { display: inline-flex; align-items: center; justify-content: center; border-radius: 999px; padding: 14px 28px; font-weight: 800; transition: .2s ease; }
.primary { background: #1d4ed8; color: white; box-shadow: 0 15px 35px rgba(29,78,216,.35); }
.primary:hover { background: #1e40af; transform: translateY(-2px); }
.secondary { border: 1px solid rgba(255,255,255,.6); color: white; }
.secondary:hover { background: white; color: #020617; }
.section { max-width: 1180px; margin: 0 auto; padding: 96px 24px; }
.two-column { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 56px; align-items: center; }
.eyebrow { margin: 0 0 14px; color: #1d4ed8; font-size: 13px; font-weight: 900; letter-spacing: .32em; text-transform: uppercase; }
.eyebrow.light { color: #bfdbfe; }
h2 { margin: 0 0 24px; font-size: clamp(34px, 4vw, 50px); line-height: 1.08; letter-spacing: -0.04em; }
p { font-size: 18px; line-height: 1.75; color: #475569; }
.rounded-image { width: 100%; height: 520px; object-fit: cover; border-radius: 32px; box-shadow: 0 30px 70px rgba(15,23,42,.2); }
.stats-wrap { background: #f8fafc; padding: 60px 24px; }
.stats { max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
.stats div { background: white; border-radius: 30px; padding: 34px; box-shadow: 0 10px 30px rgba(15,23,42,.06); }
.stats strong { display: block; color: #1d4ed8; font-size: 58px; line-height: 1; }
.stats span { display: block; margin-top: 12px; font-weight: 800; color: #0f172a; }
.centered-heading { text-align: center; max-width: 800px; margin: 0 auto 56px; }
.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.card { border: 1px solid #e2e8f0; border-radius: 26px; padding: 28px; background: white; box-shadow: 0 8px 22px rgba(15,23,42,.05); transition: .2s ease; }
.card:hover { transform: translateY(-5px); box-shadow: 0 22px 55px rgba(15,23,42,.12); }
.card-title { display: flex; gap: 14px; align-items: flex-start; margin-bottom: 12px; }
.card h3 { margin: 0; font-size: 21px; }
.check { display: inline-flex; flex-shrink: 0; width: 22px; height: 22px; align-items: center; justify-content: center; border-radius: 999px; background: #1d4ed8; color: white; font-size: 13px; font-weight: 900; margin-top: 2px; }
.work-section { background: #020617; color: white; }
.inner-dark { max-width: 1180px; }
.work-section p { color: #cbd5e1; }
.gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 44px; }
.gallery img { width: 100%; height: 290px; object-fit: cover; border-radius: 22px; box-shadow: 0 20px 45px rgba(0,0,0,.28); }
.project-card {
  position: relative;
  overflow: hidden;
  border-radius: 22px;
  cursor: pointer;
}

.project-image {
  width: 100%;
  height: 290px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .project-image {
  transform: scale(1.08);
}

.project-overlay {
  position: absolute;
  inset: 0;

  background: rgba(2, 6, 23, 0.85);

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 24px;

  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-overlay h3 {
  margin: 0 0 8px;
  color: white;
  font-size: 22px;
  font-weight: 700;
}

.project-overlay p {
  margin: 0;
  color: #e2e8f0;
  font-size: 15px;
  line-height: 1.6;
}
.reason-list { display: grid; gap: 14px; }
.reason { display: flex; gap: 14px; align-items: flex-start; background: #f8fafc; border-radius: 18px; padding: 18px; color: #334155; font-weight: 700; }
.contact { position: relative; overflow: hidden; background: #1d4ed8; color: white; text-align: center; padding: 105px 24px; }
.contact:before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at top right, rgba(255,255,255,.28), transparent 38%); }
.contact h2, .contact p, .contact a { position: relative; z-index: 1; }
.contact h2 { max-width: 900px; margin-left: auto; margin-right: auto; }
.contact p { max-width: 720px; margin: 0 auto 34px; color: #eff6ff; }
.contact-button { background: white; color: #1d4ed8; box-shadow: 0 18px 40px rgba(0,0,0,.18); }
.contact-button:hover { background: #eff6ff; transform: translateY(-2px); }
footer { background: #020617; color: #94a3b8; text-align: center; padding: 34px 24px; font-size: 14px; }
@media (max-width: 900px) {
  .nav-links { display: none; }
  .two-column, .stats, .cards, .gallery { grid-template-columns: 1fr; }
  .hero-content { padding-top: 110px; }
  .rounded-image, .gallery img { height: 360px; }
}
`;
