
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const initialState = [
  {
    id: 0,
    name: "Leanne Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    text: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    website: "bret_lenna.org",
    street: "Kulas Light",
    city: "Gwenborough",
    zipcode: "309-487",
    country: "Sweden",
    active: true
  },
  {
    id: 1,
    name: "Ervin Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    text: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    website: "ervin.com.pl",
    street: "Gren Park",
    city: "Wisokyburgh",
    zipcode: "dr7 xsc8",
    country: "England",
    active: true
  },
  {
    id: 2,
    name: "Clementine Samantha",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    text: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    website: "ysenia.com",
    street: "Stanford st.",
    city: "Minesota",
    zipcode: "487-78-558",
    country: "USA",
    active: true
  },
  {
    id: 3,
    name: "Patricia Karianne",
    email: "lakiraskh@karienna.info",
    phone: "1-770-736-8031 x56442",
    text: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    website: "aprticja.org",
    street: "Zdalna",
    city: "Wrocław",
    zipcode: "45-879",
    country: "Poland",
    active: true
  },
  {
    id: 4,
    name: "Chelsey Kamren",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    text: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    website: "hildegard.org",
    street: "Markt strasse",
    city: "Hamburg",
    zipcode: "78485",
    country: "Germany",
    active: true
  },
  {
    id: 5,
    name: "Mrs. Dennis Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    phone: "1-477-935-8478 x6430",
    text: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    website: "dannis.org",
    street: "Alikatia",
    city: "Atheny",
    zipcode: "48r s87",
    country: "Greece",
    active: true
  },
]

const UsersProvider = ( {children} ) => {

  const [ users, setusers ] = useState(initialState);

  const [ showUsers, setShowUsers ] = useState([]);

  const addUser = ( name, email, phone, website, text, street, city, zipcode, country ) => {
    const idLenght = users.length;

    setusers([
      ...users,
      {
        id: idLenght,
        name,
        email,
        phone,
        website,
        text,
        street,
        city,
        zipcode,
        country,
        active: true
      }
    ]);
  };

  const editUser = ( user, name, email, phone, website, text, street, city, zipcode, country ) => {

    let tasksCopy = [ ...users ];  //kopia tablicy
    tasksCopy[user].name = name;
    tasksCopy[user].email = email;
    tasksCopy[user].phone = phone;
    tasksCopy[user].website = website;
    tasksCopy[user].text = text;
    tasksCopy[user].street = street;
    tasksCopy[user].city = city;
    tasksCopy[user].zipcode = zipcode;
    tasksCopy[user].country = country;
    setusers(tasksCopy);
  };

  const deleteUser = ( id ) => {
    let tasksCopy = [ ...users ];  //kopia tablicy
    tasksCopy[id].active = false;
    setusers(tasksCopy);
  };

  const restoreUser = ( id ) => {
    let tasksCopy = [ ...users ];  //kopia tablicy
    tasksCopy[id].active = true;
    setusers(tasksCopy);
  };

  const searchItems = (searchInput) => {
    let updateUsers = [...users ];  
    if ( searchInput !== '' ) {
      updateUsers = updateUsers.filter((data) => {
        return data.name.toLowerCase().includes(searchInput.toLowerCase());
      });
      setShowUsers(updateUsers);
    } else {
      setShowUsers([])
    }
  };

  const contextValue = {
    users,
    showUsers,
    addUser,
    deleteUser,
    restoreUser,
    editUser,
    searchItems,
  };

  return ( 
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
   );
};

export const useUserContext = () => useContext(UserContext);
 
export default UsersProvider;