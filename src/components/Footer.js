import React from 'react';

function Footer(){

  const footerStyles = {
    backgroundColor: '#1A285A',
    width: '100%',
    color: '#f5f5f5',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '2%',
    position: 'fixed',
    bottom: '0',
    left: '0'
  }

  return(
    <React.Fragment>
    <div style={footerStyles}>
      <h3>Earth<span class="merchFooter">Merch</span></h3>
      <h4>&copy; Michelle Morin, Jamison Cozart</h4>
    </div>
    </React.Fragment>
  );
}

export default Footer;