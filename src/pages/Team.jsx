import { ArrowUpRight, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const teamData = [
  {
    department: 'Sales & Business Development',
    members: [
      { name: 'Shravan Gopal', designation: 'Sales Head', info: 'Add a brief bio or details here.' },
      { name: 'Atharva Mad', designation: 'Sales Executive', info: 'Add a brief bio or details here.' },
      { name: 'Bhavesh', designation: 'Sales Executive', info: 'Add a brief bio or details here.' },
      { name: 'Soham Satam', designation: 'Business Development', info: 'Add a brief bio or details here.' },
    ]
  },
  {
    department: 'Operations & Supply Chain',
    members: [
      { name: 'Omkar Divekar', designation: 'Division Operations Head', info: 'Add a brief bio or details here.' },
      { name: 'Nikhil Satam', designation: 'Procurement & Supply Chain', info: 'Add a brief bio or details here.' },
    ]
  },
  {
    department: 'Client Servicing & Coordination',
    members: [
      { name: 'Siddi Dhuri', designation: 'Client Servicing & Coordination', info: 'Add a brief bio or details here.' },
    ]
  },
  {
    department: 'Finance & Accounts',
    members: [
      { name: 'Shitij Pande', designation: 'Finance & Accounts', info: 'Add a brief bio or details here.' },
    ]
  },
  {
    department: 'Technology & Creative',
    members: [
      { name: 'Harsh Matal', designation: 'Technical Expert', info: 'Add a brief bio or details here.' },
      { name: 'Vignesh Solkar', designation: 'Graphic Designer', info: 'Add a brief bio or details here.' },
    ]
  }
]

export default function Team() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow eyebrow-orange">THE PEOPLE BEHIND KEYSTONE</span>
          <h1>Built on relationships.<br /><em>Driven by people.</em></h1>
          <p>Meet the people working to make spring sourcing clear, responsive and dependable.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="team-intro">
            <div>
              <span className="eyebrow">OUR TEAM</span>
              <h2>Expertise, coordination and customer focus.</h2>
              <p>Keystone Corporation operates as a spring distribution partner backed by Sai Springs. This page is dedicated to the Keystone team and the people who support customer enquiries, product coordination and distribution.</p>
            </div>
            <div className="team-placeholder-art">
              <div className="team-placeholder-icon"><Users size={42} /></div>
              <span>KEYSTONE CORPORATION</span>
              <strong>People make<br />the difference.</strong>
              <small>TEAM PHOTOGRAPHS COMING SOON</small>
            </div>
          </div>

          {/* NEW TEAM DIRECTORY SECTION */}
          <div className="team-directory">
            {teamData.map((dept, deptIndex) => (
              <div key={dept.department} className="team-department-section">
                <Reveal delay={0.1}>
                  <h3 className="team-department-title">{dept.department}</h3>
                </Reveal>
                <div className="team-member-grid">
                  {dept.members.map((member, i) => (
                    <Reveal key={member.name} delay={i * 0.05}>
                      <article className="team-member-card">
                        {/* Image placeholder - replace the div below with an <img> tag later */}
                        <div className="team-member-image-placeholder">
                          <Users size={32} className="placeholder-icon" />
                        </div>
                        <div className="team-member-details">
                          <h4>{member.name}</h4>
                          <span className="team-member-role">{member.designation}</span>
                          <p>{member.info}</p>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="team-note-band">
        <div className="container team-note-inner">
          <div>
            <span className="eyebrow eyebrow-orange">A PERSONAL CONNECTION</span>
            <h2>Good partnerships start with a conversation.</h2>
            <p>Have a spring requirement or want to connect with our team? Share your details and we’ll be ready to discuss the next step.</p>
          </div>
          <Link className="button button-light" to="/contact">Contact Keystone <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </>
  )
}