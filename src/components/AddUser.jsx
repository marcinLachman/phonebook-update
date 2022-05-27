import { useState } from 'react';
import { useUserContext } from '../providers/UsersProvider';
import { useNavigate } from 'react-router-dom';

import '../style/adduser.css';

const AddUser = () => {

  const { addUser } = useUserContext();
  const navigation = useNavigate();

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ website, setWebsite ] = useState('');
  const [ text, setText ] = useState('');

  const [ street, setStreet ] = useState('');
  const [ city, setCity ] = useState('');
  const [ zipcode, setZipcode ] = useState('');
  const [ country, setCountry ] = useState('');

  const handleSubmit = ( event ) => {
    event.preventDefault();
    addUser(name, email, phone, website, text, street, city, zipcode, country);
    navigation('/')
  };

  return ( 
    <div className="adduser">
      <div className="container">
        <div className="adduser-main">

          <form onSubmit={handleSubmit}>

          <p>Information : </p>
            <div className="adduser-main-basic">
              <label>Name: </label>
              <input type='text' value={name} onChange={ (event) => setName(event.target.value) } />

              <label>Email: </label>
              <input type='text' value={email} onChange={ (event) => setEmail(event.target.value) } />

              <label>Phone: </label>
              <input type='text' value={phone} onChange={ (event) => setPhone(event.target.value) } />

              <label>Website: </label>
              <input type='text' value={website} onChange={ (event) => setWebsite(event.target.value) } />

              <label>About: </label>
              <textarea  rows="4" cols="50" value={text} onChange={ (event) => setText(event.target.value) } />
            </div>

            <p>Adress : </p>
            <div className="adduser-main-more">
              <label>Street: </label>
              <input type='text' value={street} onChange={ (event) => setStreet(event.target.value) } />

              <label>City: </label>
              <input type='text' value={city} onChange={ (event) => setCity(event.target.value) } />

              <label>Zip-code: </label>
              <input type='text' value={zipcode} onChange={ (event) => setZipcode(event.target.value) } />

              <label>Country: </label>
              <input type='text' value={country} onChange={ (event) => setCountry(event.target.value) } />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
   );
}
 
export default AddUser;