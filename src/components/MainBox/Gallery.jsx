import React from 'react';
import Flip from 'react-reveal/Flip';
import { makeStyles } from '@material-ui/core/styles';
import './Gallery.css'


const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
    // background: 'linear-gradient(to right, #c9d6ff, #e2e2e2)',
  },
});

const About = () => {
  return (
    <div>
      <div className="revies">
          <div className="about1">
            <Flip right>
              <div className="img_about" style={{ margin: '30px', maxWidth: '500px'}} >
                <img style={{
                  maxWidth: '500px',
                  height: '500px',
                  borderRadius: '20px',
                  boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                }}
                  src="https://www.harrywinston.com/sites/default/files/styles/product_slide/public/jewelry-img/BRDPCLRFSPC_428153-trans-1h.png?itok=TxRozUHs" alt=""></img>
              </div>
            </Flip>
            <div className="title_offers" style={{ fontSize: '20px', fontFamily: 'Butler, san-serif'}}>
              <h2>Why Diamond?</h2>

              <div style={{ 
                maxWidth: '600px', 
                textAlign: 'left' }}>
                <p>Diamond is a solid form of pure carbon with its atoms arranged in a crystal. 
                  Solid carbon comes in different forms known as allotropes depending on the type of chemical bond. 
                  The two most common allotropes of pure carbon are diamond and graphite. 
                  In graphite the bonds are sp2 orbital hybrids and the atoms form in planes with each bound to three nearest neighbors 120 degrees apart. 
                  In diamond they are sp3 and the atoms form tetrahedra with each bound to four nearest neighbors.[3][4] 
                  Tetrahedra are rigid, the bonds are strong, and of all known substances diamond has the greatest number of atoms per unit volume, 
                  which is why it is both the hardest and the least compressible.[5][6] 
                  It also has a high density, ranging from 3150 to 3530 kilograms per cubic metre (over three times the density of water) in natural diamonds and 3520 kg/m3 in pure diamond.
                  [1] In graphite, the bonds between nearest neighbors are even stronger but the bonds between planes are weak, so the planes can easily slip past each other. Thus, graphite is much softer than diamond. 
                  However, the stronger bonds make graphite less flammable.[7]
            </p>

               
              </div>
            </div>
          </div>

      </div>
    </div>
  );
};

export default About;