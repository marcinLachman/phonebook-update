import { useUserContext } from '../providers/UsersProvider';

import '../style/delete.css';

const Delete = () => {

  const { users, restoreUser } = useUserContext();

  const filterUsers = users.filter( user => user.active === false)

  const displayFilter = filterUsers.map( display => {
    return (
      <div key={display.id}>
        <p>Name: <span style={{ color: "#a44444", marginLeft: "5px" }}>{display.name}</span> Surname: <span style={{ color: "#a44444", marginLeft: "5px" }}>{display.username}</span> <button onClick={ () => restoreUser(display.id) }>Restore</button></p>
      </div>
    )
  } )


  return ( 
    <div className="delete">
    <div className="container">
      <div className="delete-main">
          {displayFilter}
      </div>
    </div>
  </div>
   );
};
 
export default Delete;