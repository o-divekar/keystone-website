import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin, Mail, Phone } from 'lucide-react'
export default function Footer() {
  return <footer className="footer">
    <div className="container footer-main">
      <div className="footer-brand"><Link to="/" className="brand brand-light"><img className="brand-logo" src="/logo/keystone-logo-white.png" alt="Keystone Corporation"/></Link><p>Spring distribution solutions backed by Sai Springs manufacturing.</p></div>
      <div><h4>Explore</h4><Link to="/about">About us</Link><Link to="/products">Products</Link><Link to="/industries">Industries</Link><Link to="/quality">Quality</Link><Link to="/team">Our team</Link><Link to="/catalogue">Download catalogue</Link></div>
      <div><h4>Product range</h4><Link to="/products">Compression springs</Link><Link to="/products">Extension springs</Link><Link to="/products">Torsion springs</Link><Link to="/products">Specialty springs</Link></div>
      <div><h4>Get in touch</h4><span><MapPin size={15}/> Add company address</span><span><Phone size={15}/> Add phone number</span><span><Mail size={15}/> Add business email</span><Link className="footer-quote" to="/contact">Send an enquiry <ArrowUpRight size={15}/></Link></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Keystone Corporation. All rights reserved.</span><span>Website content subject to verification before publication.</span></div>
  </footer>
}