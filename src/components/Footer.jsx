import React from 'react'
import Newsletter from './Newsletter'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', marginBottom: '32px' }}>
        <Newsletter />
      </div>
      <div className="footer-grid">
        <div className="footer-col">
          <div style={{display:'flex',alignItems:'center',gap:8}}>
            <div style={{width:40,height:40,borderRadius:8,background:'rgba(255,255,255,0.2)',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontWeight:700,fontSize:'12px'}}>KH</div>
            <div>
              <div style={{fontWeight:600,fontSize:'13px'}}>Kenyan Highschool</div>
              <div style={{fontSize:'11px',opacity:0.8}}>Excellence • Growth</div>
            </div>
          </div>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul style={{listStyle:'none',padding:0,margin:'4px 0 0',fontSize:'12px',opacity:0.9}}>
            <li>Admissions</li>
            <li>Academics</li>
            <li>News</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <div style={{fontSize:'12px',opacity:0.9}}>info@kenyanhighschool.ac.ke</div>
          <div style={{fontSize:'12px',opacity:0.9,marginTop:4}}>+254 700 000000</div>
        </div>
      </div>
      <div style={{marginTop:12,opacity:0.8,fontSize:'11px',borderTop:'1px solid rgba(255,255,255,0.1)',paddingTop:12}}>© {new Date().getFullYear()} Kenyan Highschool. All rights reserved.</div>
    </footer>
  )
}
