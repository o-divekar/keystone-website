import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Gauge,
  PackageCheck,
  ShieldCheck,
  MoveUpRight,
  Users,
  ArrowDown
} from 'lucide-react'

import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const industries = [
  ['Automotive', 'Precision components for mobility and vehicle systems', 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=85'],
  ['Industrial machinery', 'Spring solutions for equipment and machinery', 'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=85'],
  ['Electrical & electronics', 'Components for assemblies and mechanisms', 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85'],
  ['Agriculture', 'Solutions for agricultural equipment applications', 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85']
]

/* Hero text animation: each child fades up one after another */
const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
}

const heroItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

export default function Home() {
  return (
    <>
      {/* HERO VIDEO SECTION */}
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/industry_video.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="hero-copy"
          >
            <motion.h1 variants={heroItem}>
              Industrial Solutions.
              <br />
              Engineering.
              <br />
              <em>Technology.</em>
            </motion.h1>

            <motion.p variants={heroItem} className="hero-description">
              Building connections between industrial requirements,
              manufacturing capabilities and emerging technologies.
            </motion.p>

            <motion.p variants={heroItem} className="hero-secondary">
              Keystone Corporation is an emerging industrial enterprise focused
              on developing business opportunities across industrial supply,
              engineering partnerships, manufacturing and technology-led
              solutions.
            </motion.p>

            <motion.div variants={heroItem} className="hero-actions">
              <Link to="/products" className="button">
                Explore Our Businesses
                <ArrowRight size={18} />
              </Link>

              <Link to="/contact" className="button button-outline">
                Connect With Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="intro-section section-pad" id="intro">
        <div className="container intro-grid intro-center">
          <Reveal>
            <span className="eyebrow">WHO WE ARE</span>
            <h2>
              Connecting precision engineering with the right spring solution.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="intro-lead">
              Keystone Corporation is a spring distribution business backed by
              Sai Springs. We help customers explore spring products and
              identify solutions suited to their technical and application
              requirements.
            </p>

            <Link to="/about" className="text-link">
              Discover Keystone <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section section-pad">
        <div className="container">
          <div className="section-top">
            <SectionHeading
              eyebrow="OUR PRODUCT RANGE"
              title="Spring solutions for demanding applications."
              text="Explore a broad range of spring types and formed components. Share your drawing or specification for requirement-based assistance."
            />

            <Link className="button button-dark" to="/products">
              View all products <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="product-grid">
            {products.slice(0, 6).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SAI SPRINGS PARTNERSHIP */}
      <section className="partner-section">
        <div
          className="partner-image"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1400&q=90)`
          }}
        >
          <span className="image-stamp">
            ENGINEERING
            <br />
            PARTNERSHIP
          </span>
        </div>

        <div className="partner-copy">
          <Reveal>
            <span className="eyebrow eyebrow-orange">
              BACKED BY SAI SPRINGS
            </span>

            <h2>Distribution with manufacturing strength behind it.</h2>

            <p>
              Keystone connects customers with spring solutions supported by
              Sai Springs. This partnership brings a manufacturing perspective
              to product discussions, material choices and application
              requirements.
            </p>

            <ul>
              <li><CheckCircle2 /> Manufacturing-backed product conversations</li>
              <li><CheckCircle2 /> Multiple spring categories and material options</li>
              <li><CheckCircle2 /> Enquiry-led support for specific requirements</li>
            </ul>

            <Link to="/about" className="button button-light">
              Learn about our approach <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries-section section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="APPLICATION LANDSCAPE"
            title="Supporting a range of industries."
            text="Spring requirements vary by application. We work with customers to understand the operating environment and product specification."
          />

          <div className="industry-grid">
            {industries.map((item, i) => (
              <Reveal key={item[0]} delay={i * 0.08}>
                <article className="industry-card">
                  <img src={item[2]} alt={item[0]} loading="lazy" />

                  <div>
                    <span>0{i + 1}</span>
                    <h3>{item[0]}</h3>
                    <p>{item[1]}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="quality-band">
        <div className="container quality-band-inner">
          <div>
            <span className="eyebrow eyebrow-orange">
              MATERIALS &amp; SPECIFICATIONS
            </span>

            <h2>
              Details matter.
              <br />
              <em>So does the material.</em>
            </h2>

            <p>
              From stainless steel and music wire to other catalogue-listed
              materials, product selection starts with the right specification.
            </p>

            <Link to="/quality" className="button button-light">
              Explore material information <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="quality-points">
            <div>
              <ShieldCheck />
              <strong>Material clarity</strong>
              <span>Review available material grades and specifications.</span>
            </div>

            <div>
              <Gauge />
              <strong>Application-led</strong>
              <span>Discuss load, dimensions and operating conditions.</span>
            </div>

            <div>
              <PackageCheck />
              <strong>Requirement focused</strong>
              <span>Share drawings, samples or product details.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOGUE */}
      <section className="home-catalogue-section section-pad">
        <div className="container home-catalogue-grid">
          <Reveal>
            <div className="home-catalogue-cover">
              <img
                src="/images/catalogue-cover-preview.jpg"
                alt="Keystone product catalogue cover"
              />
              <span>OFFICIAL PRODUCT CATALOGUE</span>
            </div>
          </Reveal>

          <div>
            <span className="eyebrow">EXPLORE OUR CATALOGUE</span>

            <h2>
              One catalogue.
              <br />
              <em>Multiple spring solutions.</em>
            </h2>

            <p>
              Browse the Keystone product range, including engineered springs
              and metal components. View the catalogue online or download the
              PDF for reference.
            </p>

            <div className="hero-actions">
              <Link to="/catalogue" className="button">
                Explore catalogue <ArrowUpRight size={16} />
              </Link>

              <a
                href="/documents/keystone-product-catalogue.pdf"
                download
                className="button button-dark"
              >
                Download PDF <ArrowDown size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="home-team-section section-pad">
        <div className="container home-team-grid">
          <div>
            <span className="eyebrow">THE PEOPLE BEHIND KEYSTONE</span>

            <h2>
              Personal service.
              <br />
              <em>Professional connections.</em>
            </h2>

            <p>
              Our team brings together customer coordination, product
              understanding and distribution support. Individual profiles and
              photographs will be introduced soon.
            </p>

            <Link to="/team" className="text-link">
              Meet the Keystone team <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="home-team-visual">
            <div className="home-team-icon">
              <Users size={44} />
            </div>

            <span>KEYSTONE CORPORATION</span>
            <strong>
              People make
              <br />
              the difference.
            </strong>
            <small>TEAM PROFILES COMING SOON</small>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="cta-section section-pad">
        <div className="container cta-box">
          <div>
            <span className="eyebrow">START A CONVERSATION</span>
            <h2>Have a spring requirement?</h2>
            <p>
              Tell us what you are building. Let's discuss the right product
              direction.
            </p>
          </div>

          <Link to="/contact" className="button">
            Request a quote <MoveUpRight size={17} />
          </Link>

          <div className="cta-orbit"></div>
        </div>
      </section>
    </>
  )
}