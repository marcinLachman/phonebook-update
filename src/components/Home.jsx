import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../providers/UsersProvider';

import '../style/home.css';

const Home = () => {

  const { users, showUsers, deleteUser } = useUserContext();
  const navigate = useNavigate();
  console.log(showUsers)

  const filterUsers = users.filter( user => user.active === true);

  const displayActiveUsers = filterUsers.map( user => {

    return (
        
        <ul key={user.id}>
          <li>
            Name:  <span style={{ color: "#a44444", marginLeft: "5px" }}> {user.name}</span>
          </li>
          <li>
            Email:<span style={{ color: "#a44444", marginLeft: "5px" }}> {user.email}</span>
          </li>
          <li>
            Phone:<span style={{ color: "#a44444", marginLeft: "5px" }}> {user.phone}</span>
          </li>
          
          <li>
            <button onClick={ () => navigate( {pathname: `./adduser/${user.id}`}) }>More...</button>
            <button onClick={ () => navigate( {pathname: `./more/${user.id}`}) } >Edit</button>
            <button onClick={ () => deleteUser(user.id) }>Delete</button>
          </li>
        </ul>
        
    );
  });

  const filterUsersFiltered = showUsers.filter( user => user.active === true);

  const displayActiveUsersFiltered = filterUsersFiltered.map( user => {

    return (
        
        <ul key={user.id}>
          <li>
            Name:  <span style={{ color: "#a44444", marginLeft: "5px" }}> {user.name}</span>
          </li>
          <li>
            Email:<span style={{ color: "#a44444", marginLeft: "5px" }}> {user.email}</span>
          </li>
          <li>
            Phone:<span style={{ color: "#a44444", marginLeft: "5px" }}> {user.phone}</span>
          </li>
          
          <li>
            <button onClick={ () => navigate( {pathname: `./adduser/${user.id}`}) }>More...</button>
            <button onClick={ () => navigate( {pathname: `./more/${user.id}`}) } >Edit</button>
            <button onClick={ () => deleteUser(user.id) }>Delete</button>
          </li>
        </ul>
        
    );
  });

  return ( 
    <div className="home">
      <div className="container">
        <div className="home-main">
            { ( showUsers.length === 0 ) ? displayActiveUsers : displayActiveUsersFiltered }
        </div>
      </div>
    </div>
   );
}
 
export default Home;