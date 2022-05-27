import { useParams } from 'react-router-dom';
import { useUserContext } from '../providers/UsersProvider';

import '../style/user-edit.css';

const User = () => {

  const { users } = useUserContext();
  const { user } = useParams();

  const userFilter = users.filter( filter => filter.id == user );

  const displayUser = userFilter.map( user => {
    return (
        <ul key={user.id}>
          <li>
            Name:  <span style={{ color: "#a44444", marginLeft: "5px" }}> {user.name} {user.username}</span>
          </li>
          <li>
            Email:<span style={{ color: "#a44444", marginLeft: "5px" }}> {user.email}</span>
          </li>
          <li>
            Phone:<span style={{ color: "#a44444", marginLeft: "5px" }}> {user.phone}</span>
          </li>
          <li>
          Website:<span style={{ color: "#a44444", marginLeft: "5px" }}> {user.website}</span>
          </li>
          <li>
          About:<span style={{ color: "#a44444", marginLeft: "5px" }}> {user.text}</span>
          </li>

          <p>Adress :</p>

          <li>
          Street:<span style={{ color: "#a44444", marginLeft: "5px" }}> {user.street}</span>
          </li>
          <li>
          City:<span style={{ color: "#a44444", marginLeft: "5px" }}> {user.city}</span>
          </li>
          <li>
          Zip-code:<span style={{ color: "#a44444", marginLeft: "5px" }}> {user.zipcode}</span>
          </li>
          <li>
          Country:<span style={{ color: "#a44444", marginLeft: "5px" }}> {user.country}</span>
          </li>
        </ul>
    );
  });

  return ( 
    <div className='user'>
      <div className='container'>
        <div className='user-main'>
          {displayUser}
        </div>
      </div>
    </div>
   );
}
 
export default User;