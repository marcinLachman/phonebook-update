import { Link } from 'react-router-dom';

import '../style/footer.css';

import logoFacebook from '../images/logo-facebook.svg';
import logoIstagram from '../images/logo-istagram.svg';
import logoTwitter from '../images/logo-twitter.svg';
import logoTrash from '../images/logo-trash.svg';

const Footer = () => {

  return ( 
    <div className="footer">

      <div className="footer-left">
        <input type="text" placeholder="Email Address"/>
        <button>Submit</button>
        <p>
          <img src={logoFacebook} alt="icons facebook" width="50" height="50" />
          <img src={logoIstagram} alt="icons istagram" width="50" height="50" />
          <img src={logoTwitter} alt="icons twitter" width="60" height="60" />
        </p>
      </div>
      <div className="footer-center">
        <h1>Copyright 2022 All Rights Reserved By Marcin Lachman</h1> 
      </div>
      <Link to={`/delete`}>
        <div className="footer-right">
          <img src={logoTrash} alt="icons facebook" width="100" height="100" />
          <p>DELETED</p>
        </div>
      </Link>

    </div>
   );
}
 
export default Footer;