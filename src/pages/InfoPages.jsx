import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  CheckCircle2,
  Factory,
  ShieldCheck,
  Users,
  FileCheck2,
  Download
} from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

function PageHero({eyebrow,title,lead}) { return <section className="page-hero"><div className="container"><span className="eyebrow eyebrow-orange">{eyebrow}</span><h1>{title}</h1><p>{lead}</p></div></section> }
export function About(){return <><PageHero eyebrow="ABOUT KEYSTONE" title={<>A focused partner for<br/><em>spring requirements.</em></>} lead="Keystone Corporation is a spring distribution business backed by Sai Springs. We connect customer requirements with spring product options and manufacturing-backed support."/><section className="section-pad"><div className="container split-info"><div className="photo-panel" style={{backgroundImage:"url(https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1300&q=85)"}}/><div><SectionHeading eyebrow="OUR APPROACH" title="Understand the need. Connect the solution."/><p>Our role is to help customers navigate spring product categories, material options and technical requirements. The right conversation begins with the application, dimensions, operating conditions and available drawings or samples.</p><div className="feature-list"><span><Factory/> Manufacturing backing through Sai Springs</span><span><Users/> Customer-focused product discussions</span><span><FileCheck2/> Specification-led enquiries</span></div></div></div></section><section className="quality-band"><div className="container quality-band-inner"><div><span className="eyebrow eyebrow-orange">OUR POSITIONING</span><h2>Distribution expertise.<br/><em>Manufacturing connection.</em></h2><p>We aim to make spring sourcing clearer through a focused product range and an enquiry process built around customer requirements.</p></div></div></section></>}
export function Industries(){const items=['Automotive and mobility','Industrial machinery','Electrical and electronics','Agriculture and equipment','General engineering','Other application-specific requirements'];return <><PageHero eyebrow="INDUSTRIES" title={<>Spring solutions across<br/><em>industrial applications.</em></>} lead="Every application has its own operating conditions, space constraints and performance requirements. Start with the details that matter."/><section className="section-pad"><div className="container"><SectionHeading eyebrow="APPLICATION AREAS" title="Where spring components play a role."/><div className="simple-grid">{items.map((x,i)=><Reveal key={x}><div className="simple-card"><span>0{i+1}</span><h3>{x}</h3><p>Discuss your application, product dimensions and operating environment with our team.</p></div></Reveal>)}</div></div></section></>}
export function Quality(){const mats=[['Stainless steel wire','302, 304 and 316 grades are listed in the supplied catalogue.'],['Music wire','Catalogue reference: ASTM A228.'],['Oil-tempered wire','Catalogue reference: ASTM A229, Class I & II.'],['Phosphor bronze','Catalogue reference: ASTM B159 (H08 Temper).'],['Inconel 718 bar','Catalogue reference: AMS 5662.'],['Spring steel strip','301, 302, 304 and 316 stainless strip is listed with ASTM A666.']];return <><PageHero eyebrow="QUALITY & MATERIALS" title={<>Specification-led.<br/><em>Material conscious.</em></>} lead="Explore selected material references listed in the Keystone product catalogue. Final suitability and compliance must be confirmed for each product and order."/><section className="section-pad"><div className="container"><SectionHeading eyebrow="CATALOGUE MATERIAL REFERENCES" title="Material options and standards." text="The following are examples transcribed from the supplied catalogue; confirm grade, form and specification for the selected product."/><div className="materials-grid">{mats.map(([a,b])=><div className="material-card" key={a}><ShieldCheck/><h3>{a}</h3><p>{b}</p></div>)}</div><p className="fine-print">This section is informational and does not represent a claim that Keystone Corporation holds any certification. Product-specific material availability and standards are subject to confirmation.</p></div></section></>}
export function Gallery(){return <><PageHero eyebrow="GALLERY" title={<>A closer look at<br/><em>precision engineering.</em></>} lead="A visual space for approved product, manufacturing and application photography. The current images are design placeholders and should be replaced before launch."/><section className="section-pad"><div className="container gallery-grid">{['https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85','https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1000&q=85','https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=85','https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1000&q=85','https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1000&q=85','https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85'].map((src,i)=><Reveal key={src}><img src={src} alt={`Industrial gallery placeholder ${i+1}`}/></Reveal>)}</div></section></>}

export function Contact() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT KEYSTONE"
        title={
          <>
            Let's discuss your
            <br />
            <em>spring requirement.</em>
          </>
        }
        lead="Looking for the right spring solution? Share your requirements with Keystone Corporation. We help connect your application needs with suitable spring product options and manufacturing-backed support."
      />

      {/* Contact information and enquiry form */}
      <section className="section-pad contact-main">
        <div className="container contact-grid">

          <Reveal>
            <div className="contact-information">

              <span className="eyebrow">ENQUIRY DESK</span>

              <h2>Let's build the right solution together.</h2>

              <p>
                Keystone Corporation is a spring distribution business
                backed by Sai Springs. We help customers explore product
                categories, technical requirements and suitable options
                for their applications.
              </p>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <Factory size={22} />
                </div>
                <div>
                  <h3>Distribution expertise</h3>
                  <p>
                    A focused range of spring products for industrial
                    and engineering applications.
                  </p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h3>Manufacturing-backed support</h3>
                  <p>
                    Backed by Sai Springs for product and
                    specification discussions.
                  </p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <FileCheck2 size={22} />
                </div>
                <div>
                  <h3>Requirement-based enquiries</h3>
                  <p>
                    Share drawings, samples, dimensions and
                    application details for discussion.
                  </p>
                </div>
              </div>

              <a
                href="/documents/keystone-product-catalogue.pdf"
                download="Keystone-Product-Catalogue.pdf"
                className="contact-catalogue-link"
              >
                <Download size={18} />
                Download Product Catalogue
                <ArrowUpRight size={16} />
              </a>

            </div>
          </Reveal>

          <Reveal>
            <ContactForm />
          </Reveal>

        </div>
      </section>

      {/* Information customers should provide */}
      <section className="section-pad contact-requirements">
        <div className="container">

          <Reveal>
            <SectionHeading
              eyebrow="BEFORE YOU ENQUIRE"
              title="Help us understand your requirement."
              text="A few technical details can make your product discussion more useful and accurate."
            />
          </Reveal>

          <div className="contact-requirements-grid">

            {[
              ['01', 'Product type', 'Compression, extension, torsion, disc or other spring requirements.'],
              ['02', 'Dimensions', 'Wire diameter, outer diameter, free length and other available measurements.'],
              ['03', 'Material', 'Required material grade, coating or operating environment.'],
              ['04', 'Quantity', 'Estimated quantity and expected order requirements.'],
              ['05', 'Application', 'Machine, equipment or intended application of the component.'],
              ['06', 'Reference files', 'Technical drawings, photographs or physical sample references.']
            ].map(([number, title, description]) => (
              <Reveal key={number}>
                <div className="requirement-card">
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </Reveal>
            ))}

          </div>
        </div>
      </section>
    </>
  )
}

function ContactForm() {
  const [sent, setSent] = React.useState(false)

  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  })

  const [error, setError] = React.useState('')

  function update(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function submit(e) {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please complete your name, email and requirement details.')
      return
    }

    setError('')
    setSent(true)
  }

  return (
    <div className="contact-form-wrapper">

      <div className="contact-form-heading">
        <span className="eyebrow">SEND AN ENQUIRY</span>
        <h2>Tell us what you need.</h2>
        <p>
          Fill in the details below to prepare your product enquiry.
        </p>
      </div>

      <form className="enquiry-form" onSubmit={submit}>

        {sent ? (
          <div className="success-message">
            <CheckCircle2 size={36} />
            <h3>Enquiry form completed</h3>
            <p>
              Your information has been validated in this demo.
              It has not been sent or stored. A backend connection
              is required to receive actual enquiries.
            </p>

            <button
              type="button"
              className="button button-dark"
              onClick={() => setSent(false)}
            >
              Submit another enquiry
            </button>
          </div>
        ) : (
          <>
            <div className="form-row">
              <label>
                Your name *
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Enter your full name"
                  required
                />
              </label>

              <label>
                Email address *
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  placeholder="name@company.com"
                  required
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Phone number
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={update}
                  placeholder="+91"
                />
              </label>

              <label>
                Product of interest
                <select
                  name="product"
                  value={form.product}
                  onChange={update}
                >
                  <option value="">Select a category</option>
                  <option>Compression springs</option>
                  <option>Extension springs</option>
                  <option>Torsion springs</option>
                  <option>Disc springs</option>
                  <option>Helical springs</option>
                  <option>Wire forms and stampings</option>
                  <option>Other / Not sure</option>
                </select>
              </label>
            </div>

            <label>
              Tell us about your requirement *
              <textarea
                name="message"
                value={form.message}
                onChange={update}
                rows="5"
                placeholder="Describe your product, dimensions, material, quantity and application..."
                required
              />
            </label>

            {error && (
              <p className="form-error">{error}</p>
            )}

            <button className="button" type="submit">
              Submit enquiry
              <ArrowUpRight size={16} />
            </button>

            <small className="form-disclaimer">
              Fields marked with * are required.
            </small>
          </>
        )}

      </form>
    </div>
  )
}
