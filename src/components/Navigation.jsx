import { useState } from 'react';
import { useUserContext } from '../providers/UsersProvider';

import { Link } from 'react-router-dom';

import '../style/navigation.css';

import logoPhone from '../images/phone-logo.png';


const Navigation = () => {

  const { searchItems } = useUserContext();
  const [ searchInput, setSearchInput ] = useState('');

  const searchHandler = ( event ) => {
    event.preventDefault();
    setSearchInput(event.target.value);

    searchItems(searchInput);
    
  };

  return ( 
    <div className="navigation">


      <div className="navigation-links">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><img src={logoPhone} alt="icons phone menu" width="30" height="30" /></li>
          <li><Link to='/adduser'>Add user</Link></li>
        </ul>
      </div>

      <div className="navigation-search">
        <input type="text" placeholder='Search' value={searchInput} onChange={ searchHandler } />
      </div>

    </div>
   );
}
 
export default Navigation;