import React from "react";
import Users from "./Users";
import NewUser from "./NewUser";
import Search from "./Search";
import UsersStor from "../stor/UsersStor";

const Home = () => {
   return (
      <UsersStor>
         <div className="home">
            <h1>Context App</h1>
            <br />
            <hr />
            <hr />
            <div className="component">
               <NewUser />
               <Search />
            </div>
            <hr />
            <br />
            <Users />
         </div>
      </UsersStor>
   );
};

export default Home;
