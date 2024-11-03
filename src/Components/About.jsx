import '../Styles/About.css'

import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiCoreldraw } from "react-icons/si";
import { TbBrandBlender } from "react-icons/tb";

function About() {
  return (
    <section id="about">
        <div className='wrapper'>
            <h3>About</h3>
            <p>Saya adalah mahasiswa S1 Desain Komunikasi Visual di Universitas Indraprasta PGRI, berusia 23 tahun.</p>
            <p>Sejak awal, saya memiliki minat mendalam dalam dunia desain grafis dan animasi 3D, yang memotivasi saya untuk 
                terus menggali dan mengembangkan keterampilan saya di bidang ini. Di waktu luang, saya senang menonton film dan 
                anime, yang tidak hanya menjadi hiburan, tetapi juga sumber inspirasi.</p>
                <h4>SOFTWARE DESAIN & ANIMASI</h4>
                <div className="skills">
                <SiAdobephotoshop /><SiAdobeillustrator /><SiCoreldraw /><SiAdobeaftereffects /><TbBrandBlender />
                </div>
        </div>
    </section>
  )
}

export default About