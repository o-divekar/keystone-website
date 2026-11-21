import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
export default function Products() {
  const [filter,setFilter] = useState('All')
  const [query,setQuery] = useState('')
  const groups = ['All', ...new Set(products.map(p=>p.group))]
  const shown = useMemo(()=>products.filter(p=>(filter==='All'||p.group===filter)&&(p.name.toLowerCase().includes(query.toLowerCase())||p.summary.toLowerCase().includes(query.toLowerCase()))),[filter,query])
  return <><section className="page-hero"><div className="container"><span className="eyebrow eyebrow-orange">PRODUCT DIRECTORY</span><h1>Spring solutions.<br/><em>Built around your needs.</em></h1><p>Explore our product categories and send us your drawing, sample or specification for a requirement-based discussion.</p></div></section><section className="section-pad"><div className="container"><SectionHeading eyebrow="EXPLORE THE RANGE" title="Find the spring category you need."/><div className="catalogue-tools"><div className="filter-pills">{groups.map(g=><button className={filter===g?'active':''} key={g} onClick={()=>setFilter(g)}>{g}</button>)}</div><label className="search-box"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search products"/></label></div><div className="product-grid">{shown.map((p,i)=><Reveal key={p.slug} delay={(i%4)*.04}><ProductCard product={p}/></Reveal>)}</div>{shown.length===0&&<p className="empty-state">No products match your search. Try another keyword.</p>}</div></section></>
}