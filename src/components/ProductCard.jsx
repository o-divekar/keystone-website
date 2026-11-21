import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
export default function ProductCard({ product }) {
  return <motion.article className="product-card" whileHover={{ y: -7 }} transition={{ duration: .22 }}>
    <Link to={`/products/${product.slug}`} className="product-image"><img src={product.image} alt={product.name} loading="lazy"/><span className="image-arrow"><ArrowUpRight size={19}/></span></Link>
    <div className="product-card-body"><span className="eyebrow">{product.group}</span><h3>{product.name}</h3><p>{product.summary}</p><Link to={`/products/${product.slug}`} className="text-link">Explore product <ArrowUpRight size={15}/></Link></div>
  </motion.article>
}