import { ArrowUpRight, Users, UserRound, Handshake, Wrench, Headset } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const roles = [
  { icon: Handshake, title: 'Leadership & Management', text: 'Guiding the company’s direction, relationships and customer commitments.' },
  { icon: Headset, title: 'Sales & Customer Support', text: 'Understanding customer requirements and coordinating product enquiries.' },
  { icon: Wrench, title: 'Technical Coordination', text: 'Helping clarify product types, drawings, dimensions and application details.' },
  { icon: Users, title: 'Distribution & Operations', text: 'Coordinating product movement, communication and day-to-day operations.' },
]

export default function Team() {
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow eyebrow-orange">THE PEOPLE BEHIND KEYSTONE</span><h1>Built on relationships.<br/><em>Driven by people.</em></h1><p>Meet the people working to make spring sourcing clear, responsive and dependable. Our team profiles will be added here as approved photographs and details are provided.</p></div></section>
    <section className="section-pad"><div className="container">
      <div className="team-intro"><div><span className="eyebrow">OUR TEAM</span><h2>Expertise, coordination and customer focus.</h2><p>Keystone Corporation operates as a spring distribution partner backed by Sai Springs. This page is dedicated to the Keystone team and the people who support customer enquiries, product coordination and distribution.</p></div><div className="team-placeholder-art"><div className="team-placeholder-icon"><Users size={42}/></div><span>KEYSTONE CORPORATION</span><strong>People make<br/>the difference.</strong><small>TEAM PHOTOGRAPHS COMING SOON</small></div></div>
      <div className="team-role-grid">{roles.map((item,i)=>{const Icon=item.icon;return <Reveal key={item.title} delay={i*.07}><article className="team-role-card"><span className="team-role-number">0{i+1}</span><div className="team-role-icon"><Icon size={23}/></div><h3>{item.title}</h3><p>{item.text}</p></article></Reveal>})}</div>
    </div></section>
    <section className="team-note-band"><div className="container team-note-inner"><div><span className="eyebrow eyebrow-orange">A PERSONAL CONNECTION</span><h2>Good partnerships start with a conversation.</h2><p>Have a spring requirement or want to connect with our team? Share your details and we’ll be ready to discuss the next step.</p></div><Link className="button button-light" to="/contact">Contact Keystone <ArrowUpRight size={16}/></Link></div></section>
  </>
}
