import { useState } from "react";
import { usersData } from "../../../users";
import { UserCard } from "./userCard";
import './user.css'
import Header from "../header/header.component";

// users => name of variable represent list of users
// setUsers => method use to update list of users
// useState => init data for users import from external file
const UserList = () => {
  const [users, setUsers] = useState(usersData);
  const [search, setSearch] = useState("");

  
  const handleDelete = (id) => {
    // console.log(id);
    const filterItem = users.filter((user) => user.id !== id);
    setUsers(filterItem);
  };

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <Header title={'List of Users'}/>

    
      <div className="container mt-3">
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Search by email..."
          value={search}
          // e.target.value ==> mean the value that in input and this method call every change 
          // after write any char or word , the value of search send in setSearch('a') then update list of users
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {filteredUsers.map((user) => (
            <div className="col" key={user.id}>
              <UserCard user={user} onDelete={handleDelete} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserList;
