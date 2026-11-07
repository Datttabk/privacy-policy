"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowUp, Check, ChevronDown, Compass, FileText, LockKeyhole, Printer, ShieldCheck } from "lucide-react";

const sections = [
  { id: "information", title: "Information We Collect", content: <><p>Depending on how you use the application, we may collect:</p><ul><li>Account information such as email address and name when you sign in.</li><li>Authentication information through Email and Password or Google Sign-In.</li><li>Device information necessary for application functionality.</li><li>Location information, only if location permissions are requested and granted.</li></ul><p>Guest users may access available features without creating an account.</p></> },
  { id: "use", title: "How We Use Information", content: <><p>Information may be used to:</p><ul><li>Provide and maintain application functionality.</li><li>Enable user authentication.</li><li>Improve user experience.</li><li>Provide tourism-related information and services.</li><li>Maintain application security and prevent misuse.</li></ul></> },
  { id: "services", title: "Third-Party Services", content: <><p>The application may use third-party services for authentication, hosting, analytics, maps, or other functionality.</p><p>These services may process information according to their respective privacy policies.</p></> },
  { id: "sharing", title: "Data Sharing", content: <p>We do not sell personal information. Information may be shared with service providers when necessary to operate and maintain the application or when required by law.</p> },
  { id: "security", title: "Data Security", content: <p>We take reasonable measures to protect information against unauthorized access, alteration, disclosure, or destruction.</p> },
  { id: "retention", title: "Data Retention and Deletion", content: <><p>Personal information is retained only as long as necessary to provide the application's services or meet legal requirements.</p><p>Users may request account deletion and associated data deletion by <a href="#contact">contacting us <ArrowUpRight size={14} /></a>.</p></> },
  { id: "children", title: "Children’s Privacy", content: <p>Discover Vijayapura is not designed to knowingly collect personal information from children without appropriate consent where required by applicable law.</p> },
  { id: "changes", title: "Changes to This Privacy Policy", content: <p>We may update this Privacy Policy from time to time. Any changes will be published on this page.</p> },
  { id: "contact", title: "Contact Us", content: <><p>For questions or privacy-related requests, contact:</p><dl className="contact-details"><div><dt>App Name</dt><dd>Discover Vijayapura</dd></div><div><dt>Developer / Organization</dt><dd>Discover Vijayapura</dd></div><div><dt>Email</dt><dd><a href="mailto:discovervijayapura@gmail.com">discovervijayapura@gmail.com</a></dd></div></dl></> },
];

function Brand() { return <a className="brand" href="#top" aria-label="Discover Vijayapura, back to top"><span className="brand-icon"><Compass size={25} strokeWidth={1.4} /></span><span>Discover <strong>Vijayapura</strong></span></a>; }

export default function Home() {
  const [active, setActive] = useState("information");
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-12% 0px -65% 0px", threshold: 0 });
    document.querySelectorAll("article section").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <div id="top">
    <a className="skip-link" href="#policy">Skip to policy</a>
    <header className="site-header"><div className="header-inner"><Brand /><a className="header-link" href="#contact">Get in touch <ArrowUpRight size={16} /></a></div></header>
    <main>
      <div className="hero-wrap"><div className="hero">
        <div className="eyebrow"><span /> YOUR PRIVACY MATTERS</div>
        <div className="hero-title"><div><h1>Privacy Policy<span>.</span></h1><p className="hero-description">Explore with confidence.<br />Your information is in good hands.</p></div><div className="hero-seal" aria-hidden="true"><ShieldCheck size={57} strokeWidth={1.15} /></div></div>
        <div className="hero-bottom"><span className="updated"><span className="status-dot" /> Last updated <strong>7 November 2026</strong></span><button className="print-button" onClick={() => window.print()}><Printer size={15} /> Print policy</button></div>
      </div></div>
      <div className="policy-layout">
        <aside className="sidebar" aria-label="Policy navigation"><div className="sidebar-sticky"><div className="toc-label"><FileText size={15} /> ON THIS PAGE</div><nav>{sections.map((section, index) => <a key={section.id} href={`#${section.id}`} className={active === section.id ? "active" : ""} aria-current={active === section.id ? "location" : undefined}><span>{String(index + 1).padStart(2, "0")}</span>{section.title}</a>)}</nav><div className="sidebar-note"><LockKeyhole size={18} strokeWidth={1.5} /><p>Your trust is part of<br />every journey.</p></div></div></aside>
        <div className="policy-main">
          <div className="introduction"><span className="small-label">OUR COMMITMENT TO YOU</span><p>Discover Vijayapura ("we", "our", or "the app") respects your privacy and is committed to protecting your personal information.</p><p>This Privacy Policy explains how Discover Vijayapura collects, uses, and protects information when you use our application.</p></div>
          <details className="mobile-toc"><summary>On this page <ChevronDown size={16} /></summary><nav>{sections.map((s, i) => <a href={`#${s.id}`} key={s.id}>{i + 1}. {s.title}</a>)}</nav></details>
          <div className="privacy-note"><span className="note-icon"><Check size={17} /></span><p><strong>Your information stays yours.</strong> We do not sell personal information.</p></div>
          <article id="policy" aria-label="Privacy policy">{sections.map((section, index) => <section id={section.id} key={section.id}><div className="section-heading"><span className="section-number">{String(index + 1).padStart(2, "0")}</span><h2>{section.title}</h2></div><div className="section-content">{section.content}</div></section>)}</article>
          <div className="document-end"><ShieldCheck size={17} /><span>Discover Vijayapura · Privacy Policy</span><a href="#top">Back to top <ArrowUp size={14} /></a></div>
        </div>
      </div>
    </main>
    <footer><div className="footer-inner"><Brand /><p>© 2026 Discover Vijayapura</p><a href="#top">Privacy Policy <ArrowUpRight size={13} /></a></div></footer>
  </div>;
}
